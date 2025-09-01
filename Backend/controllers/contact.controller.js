import Contact from "../models/contact.model.js";

export const createContact = async(req, res) => {
    try {
        const {name, email, phone, message} = req.body;
        
        // Validate required fields
        if(!name || !email || !phone || !message){
            return res.status(400).json({ 
                success: false, 
                message: "Please provide all required fields: name, email, phone, and message" 
            });
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) {
            return res.status(400).json({ 
                success: false, 
                message: "Please provide a valid email address" 
            });
        }

        // Create and save contact
        const newContact = new Contact({
            name: name.trim(),
            email: email.trim().toLowerCase(),
            phone: phone.trim(),
            message: message.trim()
        });

        await newContact.save();
        
        res.status(201).json({
            success: true, 
            message: "Thank you for your message! We'll get back to you soon.", 
            data: {
                id: newContact._id,
                name: newContact.name,
                email: newContact.email,
                createdAt: newContact.createdAt
            }
        });
        
    } catch(error) {
        console.error("Error in create contact: ", error.message);
        res.status(500).json({
            success: false, 
            message: "Server error. Please try again later."
        });
    }
}
