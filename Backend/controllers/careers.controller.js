import Career from "../models/careers.model.js";

export const applyForJob = async (req, res) => {
  try {
    const { name, email, phone, position, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !position) {
      return res.status(400).json({ 
        success: false, 
        message: "Name, email, phone, and position are required" 
      });
    }

    // Validate uploaded CV
    if (!req.file) {
      return res.status(400).json({ 
        success: false, 
        message: "CV file is required" 
      });
    }

    // Save application in MongoDB
    const newApplication = new Career({
      name,
      email,
      phone,
      position,
      message: message || "", // Handle optional message
      cv: req.file.path,
    });

    await newApplication.save();

    res.status(201).json({
      success: true,
      message: "Application submitted successfully!",
      data: {
        id: newApplication._id,
        name: newApplication.name,
        email: newApplication.email,
        position: newApplication.position,
        submittedAt: newApplication.createdAt
      }
    });
  } catch (error) {
    console.error("Error applying for job:", error);
    
    // Handle duplicate email error
    if (error.code === 11000) {
      return res.status(400).json({ 
        success: false, 
        message: "Application with this email already exists" 
      });
    }
    
    res.status(500).json({ 
      success: false, 
      message: "Server error, try again later." 
    });
  }
};
