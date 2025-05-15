# 🎓 College Appointment Booking System API

This is the backend API for a **College Appointment Booking System**, where students can book appointments with professors based on their availability. It is built with **Node.js**, **Express**, and **MongoDB**, and includes secure **JWT authentication** for both students and professors.

## 🚀 Features

- 🔐 User registration and login for students and professors
- 📅 Professors can create and update availability slots
- 🧾 Students can view, book, and cancel appointments
- ✅ JWT-based authentication for secure routes
- 🔄 RESTful API architecture

---

## 🧠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Authentication:** JWT (JSON Web Token)
- **Testing:** Postman collections (manual testing)

---

## 📁 Project Structure

college-appointment-api/
├── controllers/
│ ├── authFunctions.js
│ ├── availabilityFunctions.js
│ ├── studentFunctions.js
│ └── professorFunctions.js
├── middlewareFunction/
│ └── authMiddleware.js
├── modelSchemas/
│ ├── AppointmentSchema.js
│ └── AvailabilitySchema.js
│ └── UserSchema.js
├── routesURLS/
│ ├── authURLS.js
│ ├── availabilityURLS.js
│ ├── studentURLS.js
│ └── professorURLS.js
│ └── sheduleURLS.js
├── .env
├── .gitignore
├── server.js
└── package.json

---

## 🔧 Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/college-appointment-api.git
cd college-appointment-api
Install dependencies

bash
Copy
Edit
npm install
Setup environment variables

Create a .env file in the root directory:

ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Start the server

bash
Copy
Edit
npm start
The server will run on http://localhost:5000.

📬 API Endpoints
🔐 Auth Routes
POST /api/auth/register – Register (student/professor)

POST /api/auth/login – Login and receive token

👨‍🏫 Professor Routes
POST /api/availability – Add availability

PUT /api/availability/:id – Update availability

GET /api/availability/:professorId – View availability slots

👨‍🎓 Student Routes
POST /api/book/ – Book a slot
GET  /api/student/appointments
GET  /api/student/appointments/cancelled
GET  /api/student/appointments/booked

🧪 Testing
You can use the included Postman Collection to test all routes manually.

Make sure to set Authorization header with Bearer <token> after login.

Sequence: Register → Login → Add Availability → Book Slot

🔐 Security Notes
Passwords are hashed using bcryptjs

Authentication middleware restricts access to protected routes

Role-based access (student or teacher) implemented

🙋‍♂️ Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.











