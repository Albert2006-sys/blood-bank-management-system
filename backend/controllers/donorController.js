const Donor = require('../models/Donor');
const Blood = require('../models/Blood');
const BloodBank = require('../models/BloodBank');

/**
 * Get all donors with optional filtering
 * @route GET /api/donors
 * @query bloodGroup, gender, search (name)
 */
exports.getAllDonors = async (req, res, next) => {
    try {
        const { bloodGroup, gender, search } = req.query;

        let query = {};

        // Filter by blood group
        if (bloodGroup) {
            query.bloodGroup = bloodGroup;
        }

        // Filter by gender
        if (gender) {
            query.gender = gender;
        }

        // Search by name
        if (search) {
            query.name = { $regex: search, $options: 'i' };
        }

        const donors = await Donor.find(query).sort({ dateOfDonation: -1 });

        res.status(200).json({
            success: true,
            data: donors,
            message: 'Donors retrieved successfully',
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Get a single donor by ID
 * @route GET /api/donors/:id
 */
exports.getDonorById = async (req, res, next) => {
    try {
        const donor = await Donor.findById(req.params.id);

        if (!donor) {
            res.status(404);
            throw new Error('Donor not found');
        }

        res.status(200).json({
            success: true,
            data: donor,
            message: 'Donor retrieved successfully',
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Create a new donor
 * When a donor is added, automatically create blood units and increment inventory
 * Supports component splitting: one whole blood donation can be split into multiple components
 * @route POST /api/donors
 */
exports.createDonor = async (req, res, next) => {
    try {
        const { splitComponents, componentType, ...donorData } = req.body;
        const donor = await Donor.create(donorData);

        // Business Logic: Create blood unit(s) and update inventory
        const bloodBank = await BloodBank.findOne();

        if (bloodBank) {
            if (splitComponents) {
                // Split whole blood into components
                const components = [
                    'Packed RBCs',
                    'Fresh Frozen Plasma',
                    'Platelets',
                    'Cryoprecipitate',
                ];

                for (const comp of components) {
                    // Create individual Blood unit
                    await Blood.create({
                        bloodGroup: donor.bloodGroup,
                        componentType: comp,
                        quantity: 1,
                        collectedDate: donor.dateOfDonation || new Date(),
                        donorId: donor._id,
                    });

                    // Update inventory for this component
                    const invItem = bloodBank.inventory.find(
                        item => item.bloodGroup === donor.bloodGroup && item.component === comp
                    );
                    if (invItem) {
                        invItem.quantity += 1;
                    } else {
                        bloodBank.inventory.push({
                            bloodGroup: donor.bloodGroup,
                            component: comp,
                            quantity: 1,
                        });
                    }
                }
            } else {
                // Single component (default: Whole Blood)
                const comp = componentType || 'Whole Blood';

                await Blood.create({
                    bloodGroup: donor.bloodGroup,
                    componentType: comp,
                    quantity: 1,
                    collectedDate: donor.dateOfDonation || new Date(),
                    donorId: donor._id,
                });

                const invItem = bloodBank.inventory.find(
                    item => item.bloodGroup === donor.bloodGroup && item.component === comp
                );
                if (invItem) {
                    invItem.quantity += 1;
                } else {
                    bloodBank.inventory.push({
                        bloodGroup: donor.bloodGroup,
                        component: comp,
                        quantity: 1,
                    });
                }
            }

            await bloodBank.save();
        }

        res.status(201).json({
            success: true,
            data: donor,
            message: 'Donor added successfully and inventory updated',
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Update a donor
 * @route PUT /api/donors/:id
 */
exports.updateDonor = async (req, res, next) => {
    try {
        const donor = await Donor.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!donor) {
            res.status(404);
            throw new Error('Donor not found');
        }

        res.status(200).json({
            success: true,
            data: donor,
            message: 'Donor updated successfully',
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Delete a donor
 * @route DELETE /api/donors/:id
 */
exports.deleteDonor = async (req, res, next) => {
    try {
        const donor = await Donor.findByIdAndDelete(req.params.id);

        if (!donor) {
            res.status(404);
            throw new Error('Donor not found');
        }

        res.status(200).json({
            success: true,
            data: null,
            message: 'Donor deleted successfully',
        });
    } catch (error) {
        next(error);
    }
};
