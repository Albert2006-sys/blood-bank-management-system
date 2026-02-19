const mongoose = require('mongoose');

/**
 * BloodBank Schema
 * Manages blood inventory for different blood groups and components
 */
const bloodBankSchema = new mongoose.Schema({
    bankId: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: [true, 'Please provide blood bank name'],
        trim: true,
    },
    location: {
        type: String,
        required: [true, 'Please provide location'],
    },
    inventory: [
        {
            bloodGroup: {
                type: String,
                required: true,
                enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
            },
            component: {
                type: String,
                required: true,
                enum: ['Whole Blood', 'Packed RBCs', 'Fresh Frozen Plasma', 'Platelets', 'Cryoprecipitate'],
                default: 'Whole Blood',
            },
            quantity: {
                type: Number,
                required: true,
                default: 0,
                min: 0,
            },
        },
    ],
}, {
    timestamps: true,
});

// Auto-generate bankId before saving
bloodBankSchema.pre('save', async function (next) {
    if (!this.bankId) {
        const count = await mongoose.model('BloodBank').countDocuments();
        this.bankId = `BNK${String(count + 1).padStart(4, '0')}`;
    }
    next();
});

module.exports = mongoose.model('BloodBank', bloodBankSchema);
