import mongoose from 'mongoose';

const availabilitySchema = new mongoose.Schema({
  professor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  slots: [{ type: String, required: true }] 
});                                                     
          
export default mongoose.model('Availability', availabilitySchema);      
