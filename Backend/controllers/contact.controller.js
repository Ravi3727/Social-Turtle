import Contact from "../models/contact.model.js";

export const createContact = async(req, res) => {
    const {name, email, phone, message} = req.body;
    if(!name || !email || !phone || !message){
        res.status(400).json({ success: false, message: "Please provide all fields"});
    }
    const newMessage = {name, email, phone, message};
    const newContact = new Contact(newMessage);

    try{
        await newContact.save();
        res.status(201).json({success: true, message: "message saved", data: newContact});
    }catch(error){
        console.error("Error in create contact: ", error.message);
        res.status(500).json({success: false, message: "Server error"});
    }
}