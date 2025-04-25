# 🏠 BasaFinder – Smart Rental & Housing Solution

BasaFinder is a comprehensive rental housing solution that connects tenants, landlords, and admins through a smart platform. It offers streamlined property listing, rental requests, approval workflows, and integrated payment systems.

## 🌐 Live URL
🔗 
  - Frontend:  https://basa-finder-client-swart.vercel.app/
  - Backend: https://basa-finder-server.vercel.app/

## 📂 GitHub Repository
🔗 
- Frontend: https://github.com/mizan-rh/basa-finder-client.git
- Backend:  https://github.com/mizan-rh/basa-finder-server.git 

## 🎥 Video Explanation
🔗 https://drive.google.com/file/d/1jiBl2UpD-TrCa1krCAycYrNtGPCqLQMH/view?usp=sharing  

## Admin credential 
- email: admin@gmail.com
- Password: Mizan@123
## LandLord credential
- Email: landlord@gmail.com
- Password: Mizan@123
## Tenant credential
- email: tenant@gmail.com
- Password: Mizan@123


---

## 🚀 Features

### 🧑‍💼 Role-Based Dashboard
- **Admin**: Manage all users, handle rental requests, view payments.
- **Landlord**: List properties, approve/reject tenant requests, manage listings.
- **Tenant**: Browse properties, send rental requests, track application status.

### 💳 Secure Payment Integration
- Stripe & ShurjoPay integrated for seamless online payments.

### 📄 Rental Workflow
- Rental Request ➡️ Approval/Rejection ➡️ Payment ➡️ Confirmation.

### 🧾 Invoice & Email Notification
- Automatically generates invoices and sends confirmation emails.

### 🔐 Authentication
- Secure login system using **NextAuth** with JWT.
- Role-based route protection.

### 📱 Responsive UI
- Fully responsive design for desktop, tablet, and mobile.

---

## 🛠️ Technologies Used

### Frontend
- **Next.js** (App Router)
- **Redux Toolkit** for global state management
- **NextAuth** for authentication
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Lucide Icons** and **Next.js Image** for optimization

### Backend
- **Node.js**, **Express.js** for API development
- **Mongoose** for MongoDB interactions
- **TypeScript** for server-side type safety

### Package Management
- **NPM** for managing dependencies
- Common packages: `axios`, `jsonwebtoken`, `bcrypt`, `cors`, `dotenv`, `zod`, etc.

---

## ⚙️ Getting Started

### Prerequisites
- Node.js >= 18.x
- MongoDB Atlas URI
- Environment Variables (see `.env.example`)

### Installation

```bash
# Clone the repository
git clone (https://github.com/mizan-rh/basa-finder-client.git)

# Navigate into the directory
cd basafinder

# Install dependencies
npm install

# Run development server
npm run dev

```
# Environment Variables
- Create a .env.local file and add the following:

- NEXTAUTH_SECRET=your_secret
- NEXTAUTH_URL=http://localhost:3000
- MONGODB_URI=your_mongo_uri
- SHURJOPAY_KEY=your_shurjopay_key

## 🧪 Folder Structure
├── app/
│   ├── api/
│   ├── dashboard/
│   ├── components/
│   ├── hooks/
│   └── utils/
├── pages/
├── public/
├── prisma/
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   └── schemas/

# 🧪 Scripts

npm run dev # Run with nodemon
npm run build # Build TypeScript
npm run start # Run built app
npm run lint # Run ESLint
npm run format # Format with Prettier

# 🙋‍♂️ Author

- Name: mst. Rebeka Sultana
- Email: rebakpi@gmail.com

- Name: md. Mizanur Rahman
- Email: mizan@gmail.com

- Name: md. Ahsanur Rahman Tonmoy
- Email: ahosant82@gmail.com

```

```

