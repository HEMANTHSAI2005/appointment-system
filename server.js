// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import authRoutes from './routes/authRoutes.js';

// dotenv.config();

// const app = express();

// app.use(express.json()); // for parsing application/json

// app.use('/api/auth', authRoutes); // this is the key line

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authURLS from './routeURLS/authURLS.js';
import studentURLS from './routeURLS/studentURLS.js';
import professorURLS from './routeURLS/professorURLS.js';
import sheduleURLS from './routeURLS/sheduleURLS.js';


dotenv.config();

const app = express();

app.use(express.json()); 

app.use('/api/auth', authURLS);
app.use('/api/student', studentURLS);
app.use('/api/professor', professorURLS);
app.use('/api/availability', sheduleURLS);


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});





// res.status(200).json({
//   message: "User registered successfully",
//   user: {
//     id: newUser._id,
//     email: newUser.email,
//     name: newUser.name,
//     role: newUser.role
//   }
// });
