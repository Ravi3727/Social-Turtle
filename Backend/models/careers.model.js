import mongoose from 'mongoose';

const careerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        maxlength: [100, 'Name cannot exceed 100 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true,
    },
    position: {
        type: String,
        required: [true, 'Position is required'],
        trim: true,
    },
    message: {
        type: String,
        required: false,
        trim: true,
        maxlength: [500, 'Message cannot exceed 500 characters']
    },
    cv: {
        type: String,
        required: [true, 'CV file is required'],
    }
}, {
    timestamps: true
});

// Add index for faster queries
careerSchema.index({ email: 1, position: 1 });

const Career = mongoose.model('Career', careerSchema);
export default Career;
