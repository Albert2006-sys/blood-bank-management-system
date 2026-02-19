# Blood Bank Management System

A robust, full-stack web application designed to streamline blood bank operations. Built with the **MEAN Stack** (MongoDB, Express, Angular, Node.js), this system handles everything from donor registration and blood inventory management to patient requests and inter-hospital transfers.

It was developed to replace manual record-keeping with a modern, digital solution that ensures real-time tracking, safety, and efficiency in the blood supply chain.

---

## 🚀 Key Features

### Core Modules
*   **Donor Management**: Complete profile management for donors, including donation history and eligibility tracking.
*   **Patient & Requests**: Hospital staff can register patients and raise blood requests, which are automatically validated against current inventory.
*   **Inventory Control**: Real-time tracking of blood units, categorized by **Blood Group** (A+, B-, etc.) and **Component** (Whole Blood, Platelets, Plasma).
*   **Smart Allocation**: Uses a **FIFO (First-In-First-Out)** algorithm to allocate the oldest valid blood unit first, minimizing wastage.

### Advanced Capabilities
*   **Real-Time Dashboard**: Live updates on blood stock, total donations, and pending requests using **Socket.io**.
*   **Expiry Management**: Automated flagging of expired blood units based on component shelf life (e.g., Platelets = 5 days).
*   **Donor Portal**: A dedicated interface for donors to view their donation history, book appointments, and download digital certificates.
*   **Reporting**: Generate downloadable **PDF** and **Excel** reports for audits and administrative review.
*   **Role-Based Access**: Secure login with distinct roles for **Admins**, **Staff**, and **Donors**.

---

## �️ Technology Stack

*   **Frontend**: Angular 19, TypeScript, RxJS, Bootstrap 5
*   **Backend**: Node.js, Express.js
*   **Database**: MongoDB (Atlas/Local) with Mongoose
*   **Real-Time**: Socket.io
*   **Authentication**: JWT (JSON Web Tokens) & BCrypt
*   **Tools**: PDFKit (Certificates), ExcelJS (Reports)

---

## ⚙️ Installation & Setup

Follow these steps to get the project running on your local machine.

### Prerequisites
*   Node.js (v18+)
*   MongoDB (running locally or a cloud URI)
*   Angular CLI (`npm install -g @angular/cli`)

### 1. Clone the Repository
```bash
git clone https://github.com/Albert2006-sys/blood-bank-management-system.git
cd blood-bank-management-system
```

### 2. Backend Setup
```bash
cd backend
npm install
```
*   Create a `.env` file in the `backend` folder:
    ```env
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/bloodbank
    JWT_SECRET=your_secret_key
    ```
*   Start the server:
    ```bash
    npm run dev
    ```

### 3. Frontend Setup
Open a new terminal via project root:
```bash
cd frontend
npm install
ng serve
```
*   The application will be available at `http://localhost:4200`.

### 4. Seed Database (Optional)
To populate the database with sample donors, patients, and inventory:
```bash
cd backend
npm run seed
```

---

## � API Documentation

The backend exposes a RESTful API. Here are a few key endpoints:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/auth/login` | User authentication |
| `GET` | `/api/bloodbank/inventory` | Fetch current stock levels |
| `POST` | `/api/donors` | Register a new donor |
| `POST` | `/api/patients/:id/request` | Process a blood request |

---

## �️ License

This project is open-source and available under the [MIT License](LICENSE).

---

> **Note**: This project was developed for educational purposes to demonstrate full-stack development concepts including real-time data handling, complex business logic, and secure authentication flows.
