import { useState } from "react";
import { Modal } from "@mui/material";
import "./modal.css";

export default function ModalComp() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: "",
        dob: ""
    });
    const [isOpen, setIsOpen] = useState(false);

    function handleChange(e) {
        const {id: name, value} = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        if(!formData.email.includes('@')) {
            alert("Invalid email. Please check your email address.");
        }
        else if(formData.phone.length < 10 && formData.phone.length > 10) {
            alert("Invalid phone number. Please enter a 10-digit phone number.");
        } else if(new Date(formData.dob) >= new Date()) {
            alert("Invalid date of birth. Date of birth cannot be in the future.");
        }   else {
            setFormData({
                username: "",
                email: "",
                phone: "",
                dob: ""
            });
        }

    }

    return (
        <div className="outer">
            <h1>User Details Modal</h1>
            <button onClick={() => setIsOpen(true)}>Open Form</button>

            <Modal 
                open={isOpen} 
                onClose={() => setIsOpen(false)}
                className="modal"
            >
                <div className="modal-content">
                    <form onSubmit={handleSubmit}>
                        <h2>Fill Details</h2>
                        <h4>Username:</h4>
                        <input 
                            type="text"
                            required
                            id="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <h4>Email Address:</h4>
                        <input 
                            type="email"
                            // required
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <h4>Phone Number:</h4>
                        <input 
                            type="number"
                            // required
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <h4>Date of Birth:</h4>
                        <input 
                            type="date"
                            // required
                            id="dob"
                            value={formData.dob}
                            onChange={handleChange}
                        />
                        <br/>
                        <button className="submit-button" type="submit">Submit</button>
                    </form>
                </div>
            </Modal>
           
        </div>
    );
}