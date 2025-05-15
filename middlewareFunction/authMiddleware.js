import jwt from 'jsonwebtoken';

export const verify = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: 'Invalid token' });
  }
};

export const isStudent = (req, res, next) => {
  if (req.user.role !== 'student') return res.status(403).json({ message: 'Access denied' });
  next();
};

export const isProfessor = (req, res, next) => {
  if (req.user.role !== 'teacher') return res.status(403).json({ message: 'Access denied' });
  next();
};

