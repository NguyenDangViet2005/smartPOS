# SmartPOS - Real-time Point of Sale System

SmartPOS is a modern, real-time Point of Sale (POS) system designed for multi-branch retail management. It features seamless payment integrations, instant notifications, automated inventory tracking, and robust data isolation between branches.

---

## 🚀 Key Features

* **Multi-Branch Data Isolation (RBAC):** Strict security filters separating staff, manager, and administrator permissions, preventing unauthorized cross-branch data access.
* **Real-time Order Notifications:** Instant payment notifications driven by **Socket.IO** with audio alerts and Text-to-Speech (TTS) reading of transaction amounts.
* **Concurrent Stock Protection:** Mongoose atomic operations to guarantee inventory consistency and prevent overselling during high-concurrency purchase requests.
* **Automated Rollback Systems:** Self-healing workflows that restore stock levels when payment links expire, fail, or are cancelled.
* **PayOS Integration:** Secure payment link generation and QR previews with cryptographic checksum validation for webhooks.
* **Sales Analytics & Reports:** Intuitive dashboards and statistics representing revenue, daily sales, top products, and payment methods.

---

## 🛠️ Technology Stack

### Backend
* **Runtime:** Node.js (Express)
* **Database:** MongoDB (Mongoose)
* **Real-time Communication:** Socket.IO (WebSockets)
* **Payment Gateway:** PayOS SDK
* **Security & Auth:** JSON Web Tokens (JWT), Cookie-parser, bcrypt

### Frontend
* **Framework:** Next.js (TypeScript, App Router)
* **Styling:** TailwindCSS
* **State Management & UI:** Sonner (Toasts), custom hooks, Lucide icons
* **Audio Feedback:** Web Speech API (TTS) & audio context handlers

---

## 📂 Repository Directory Structure

```text
├── BE/                    # Backend API application (Node.js & Express)
│   ├── src/
│   │   ├── config/        # Database and system configurations
│   │   ├── middlewares/   # Authentication, error handling & branch validation
│   │   ├── models/        # Database schemas (Receipt, Product, Branch, User...)
│   │   ├── routes/        # Modular API routing
│   │   └── services/      # Business logic (Socket, PayOS, Receipts...)
│   └── package.json
│
├── fe/                    # Frontend client application (Next.js & TailwindCSS)
│   ├── app/               # Next.js App Router pages
│   ├── components/        # Shared components and global socket listeners
│   ├── hooks/             # Custom React hooks (useAuth, useSocket...)
│   └── service/           # API services & Socket.IO client wrap
│
├── nginx/                 # Nginx configuration (Optional: for production/VPS hosting)
└── docker-compose.yml     # Local dockerized environment setup (MongoDB development)
```

---

## 💻 Getting Started

### Prerequisites
* **Node.js** (v18.x or higher)
* **MongoDB** (Local instance or MongoDB Atlas Cloud)
* **npm** or **yarn**

### 1. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd BE
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example` and fill in the configuration details:
   ```env
   APP_PORT=8081
   APP_HOST=localhost
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLIENT_URL=http://localhost:3000
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### 2. Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../fe
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file and add the required environment variables:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:8081/v1
   NEXT_PUBLIC_SOCKET_URL=http://localhost:8081
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

---

## 🔒 Security & Concurrency Mechanism

### 1. Concurrency Management
When multiple requests deduct stock simultaneously, standard read-then-write updates cause discrepancies. SmartPOS uses MongoDB atomic operations to validate and deduct inventory in a single database step:
```javascript
// Example approach used in the codebase:
await BranchProduct.findOneAndUpdate(
  { branchId, productId, stock: { $gte: quantity } }, // Atomic stock validation
  { $inc: { stock: -quantity } }                      // Atomic deduction
);
```

### 2. Branch Isolation (RBAC Middleware)
Every request passing through backend controllers is parsed for the client's token. Custom helpers filter query parameters to restrict resource querying:
* **Staff:** Enforces queries to match only `user.branchId`.
* **Manager:** Grants access to the specific assigned branch.
* **Admin:** Bypasses filters to allow monitoring across all branches.
