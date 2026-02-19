# 🩸 Blood Bank Management System

A complete, production-ready **Blood Bank Management System** built with the **MEAN Stack** (MongoDB, Express.js, Angular, Node.js).

## 📋 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Screenshots](#screenshots)
- [License](#license)

---

## ✨ Features

### 🔹 **Core Functionality**
- **Donor Management**: Add, edit, delete, and filter donors by blood group and gender
- **Patient Management**: Register patients and manage blood requests
- **Blood Inventory**: Real-time tracking of blood units by blood group with visual indicators
- **Blood Request System**: Automated approval/rejection based on inventory availability
- **Reports & Analytics**: Dashboard with charts and statistics
- **Responsive Design**: Professional red & white theme, mobile-friendly interface

### 🔹 **Business Logic**
- ✅ **Donor Registration** → Automatically increments blood inventory
- ✅ **Blood Request Approval** → Checks inventory; approves if available, rejects if not
- ✅ **Inventory Updates** → Real-time updates on donations and requests
- ✅ **Visual Indicators** → Color-coded stock levels (Red: Critical, Yellow: Low, Green: Adequate)

---

## 🛠 Tech Stack

### **Backend**
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **dotenv** - Environment variable management
- **CORS** - Cross-origin resource sharing

### **Frontend**
- **Angular 20+** - Frontend framework
- **Bootstrap 5** - CSS framework
- **Chart.js** - Data visualization
- **TypeScript** - Type-safe JavaScript
- **RxJS** - Reactive programming

---

## 📁 Project Structure

```
Blood_Bank/
│
├── backend/                # Backend API (Node.js + Express)
│   ├── config/
│   │   └── db.js          # MongoDB connection
│   ├── controllers/       # Business logic
│   │   ├── donorController.js
│   │   ├── patientController.js
│   │   ├── bloodBankController.js
│   │   └── reportController.js
│   ├── models/            # Mongoose schemas
│   │   ├── Donor.js
│   │   ├── Patient.js
│   │   ├── BloodBank.js
│   │   ├── Blood.js
│   │   └── ...
│   ├── routes/            # API routes
│   │   ├── donorRoutes.js
│   │   ├── patientRoutes.js
│   │   ├── bloodBankRoutes.js
│   │   └── reportRoutes.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── .env               # Environment variables
│   ├── server.js          # Express server
│   ├── seed.js            # Database seeder
│   └── package.json
│
└── frontend/              # Frontend (Angular)
    ├── src/
    │   ├── app/
    │   │   ├── components/
    │   │   │   ├── navbar/
    │   │   │   ├── dashboard/
    │   │   │   ├── donors/
    │   │   │   ├── patients/
    │   │   │   ├── inventory/
    │   │   │   ├── reports/
    │   │   │   ├── loading-spinner/
    │   │   │   └── toast/
    │   │   ├── services/
    │   │   │   ├── donor.service.ts
    │   │   │   ├── patient.service.ts
    │   │   │   ├── blood-bank.service.ts
    │   │   │   ├── report.service.ts
    │   │   │   └── toast.service.ts
    │   │   ├── models/
    │   │   │   └── models.ts
    │   │   ├── app.routes.ts
    │   │   └── app.ts
    │   ├── environments/
    │   │   └── environment.ts
    │   └── styles.css
    ├── angular.json
    └── package.json
```

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.x or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v6.x or higher) - [Download](https://www.mongodb.com/try/download/community)
- **Angular CLI** (v20.x) - Install via: `npm install -g @angular/cli`
- **Git** (optional) - [Download](https://git-scm.com/)

---

## 🚀 Installation & Setup

### **1. Clone the Repository** (or download ZIP)

```bash
git clone https://github.com/yourusername/blood-bank-system.git
cd blood-bank-system
```

### **2. Backend Setup**

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install
```

**Configure Environment Variables:**
The `.env` file is already created with:
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/bloodbankdb
```

**Ensure MongoDB is Running:**
```bash
# Start MongoDB service
# On Windows (if installed as service):
net start MongoDB

# On macOS/Linux:
sudo systemctl start mongod
# or
brew services start mongodb-community
```

### **3. Frontend Setup**

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install
```

---

## ▶️ Running the Application

### **Step 1: Seed the Database**

```bash
# From the backend directory
cd backend
npm run seed
```

**Expected Output:**
```
✅ MongoDB Connected: localhost
🗑️  Existing data cleared
🏦 Blood Bank created
👥 5 Donors created
🏥 3 Patients created

✨ Database seeded successfully!
```

### **Step 2: Start the Backend Server**

```bash
# From the backend directory
npm run dev
```

**Expected Output:**
```
🚀 Server running on port 3000
✅ MongoDB Connected: localhost
```

**Backend is now running at:** `http://localhost:3000`

### **Step 3: Start the Frontend (Angular)**

Open a **new terminal window**:

```bash
# From the frontend directory
cd frontend
ng serve
```

**Expected Output:**
```
✔ Browser application bundle generation complete.

Initial Chunk Files | Names         |  Raw Size
main.js             | main          |   1.2 MB |

Application bundle generation complete. [1.234 seconds]

Watch mode enabled. Watching for file changes...
➜ Local:   http://localhost:4200/
```

**Frontend is now running at:** `http://localhost:4200`

### **Step 4: Open the Application**

Open your browser and navigate to:
```
http://localhost:4200
```

---

## 📡 API Documentation

### **Base URL:** `http://localhost:3000/api`

### **Donor Endpoints**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/donors` | Get all donors (supports query params: `bloodGroup`, `gender`, `search`) |
| GET | `/donors/:id` | Get a single donor by ID |
| POST | `/donors` | Create a new donor (auto-increments inventory) |
| PUT | `/donors/:id` | Update a donor |
| DELETE | `/donors/:id` | Delete a donor |

### **Patient Endpoints**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/patients` | Get all patients (supports query params: `bloodGroup`, `search`) |
| GET | `/patients/:id` | Get a single patient by ID |
| POST | `/patients` | Create a new patient |
| PUT | `/patients/:id` | Update a patient |
| DELETE | `/patients/:id` | Delete a patient |
| POST | `/patients/:id/request-blood` | Request blood (approves/rejects based on inventory) |

### **BloodBank Endpoints**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/bloodbank/inventory` | Get current blood inventory |
| PUT | `/bloodbank/inventory` | Update blood inventory |

### **Report Endpoints**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/reports/inventory` | Get inventory report |
| GET | `/reports/donations` | Get donations report (grouped by blood group) |
| GET | `/reports/dashboard` | Get dashboard statistics |

### **Example API Response Format:**
```json
{
  "success": true,
  "data": { ... },
  "message": "Operation successful"
}
```

---


### **Reports**
- Inventory summary
- Donations by blood group (Pie chart + Table)

---

## 🧪 Testing the Application

1. **Add a Donor**: Navigate to Donors → Add Donor → Fill form → Save
   - ✅ Verify inventory increases for that blood group
2. **Request Blood**: Navigate to Patients → Request Blood for a patient
   - ✅ If inventory > 0 → Status = "Approved", inventory decreases
   - ✅ If inventory = 0 → Status = "Rejected"
3. **Check Dashboard**: Verify stats update in real-time
4. **View Reports**: Check donations distribution chart

---

## 🔧 Configuration



### **Frontend (environment.ts)**
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};
```

---

## 📝 Default Seeded Data

- **Blood Bank**: City Blood Bank (Chennai)
- **Inventory**: 10 units per blood group (A+, A-, B+, B-, AB+, AB-, O+, O-)
- **Donors**: 5 sample donors
- **Patients**: 3 sample patients (all with "Pending" status)

---

## 🐛 Troubleshooting

### **MongoDB Connection Error**
- Ensure MongoDB is running: `net start MongoDB` (Windows) or `brew services start mongodb-community` (Mac)
- Check connection string in `.env`

### **Port Already in Use**
- Backend: Change `PORT` in `.env`
- Frontend: Run `ng serve --port 4201`

### **CORS Error**
- Ensure backend `server.js` has CORS enabled for `http://localhost:4200`

### **Angular Build Errors**
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

---

## 🎯 Future Enhancements
- User authentication & authorization
- Blood donation appointment scheduling
- Email/SMS notifications
- Blood expiry tracking
- Advanced search filters

---

## 👨‍💻 Author

**Your Name**  
📧 your.email@example.com  
🌐 [GitHub](https://github.com/yourusername)

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- **Angular Team** for the amazing framework
- **MongoDB** for the powerful database
- **Chart.js** for beautiful visualizations
- **Bootstrap** for responsive design

---

**⭐ If you found this project helpful, please give it a star!**

```
Made with ❤️ for college project demo
```
