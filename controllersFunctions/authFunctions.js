import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../modelSchemas/UserSchema.js';

export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const alreadyExist = await User.findOne({ email });
    if (alreadyExist) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashedPassword, role });

    res.status(200).json({
  message: "User registered successfully",
  user: {
    id: user._id,
    email: user.email,
    name: user.name,
    role: user.role
  }
});


    // res.status(201).json({ message: 'User has registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed once re-check', error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid email or password' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '30d' });

    res.status(200).json({ token, user: { id: user._id, name: user.name, role: user.role } });
  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
};







