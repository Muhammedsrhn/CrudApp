import React from "react";
import "../css/style.css";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from "react-router-dom";


function UpdateContact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const id = useParams();
    console.log(id);
    const handleUpdate = async () => {
        let request = await axios.put("http://localhost:5000/api/update/"+id.id, {
            "name": name,
            "email": email,
            "contact": contact,
        });
        let result = await request.data;
        console.warn(result);
        toast.success('Update Contact Successfully!', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
        });

        setTimeout(() => {
            setName("");
            setEmail("");
            setContact("");
        }, 1000);
    }

    return (
        <div className="contact-header">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <h1 style={{ fontSize: "40px", marginLeft: "12px" }}>Update Contact</h1>
            <div className="form-contact">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ margin: "12px", padding: "8px" }} className="input-form form-control" placeholder="Enter Name" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ margin: "12px", padding: "8px" }} className="input-form form-control" placeholder="Enter Email" />
                <input type="number" value={contact} onChange={(e) => setContact(e.target.value)} style={{ margin: "12px", padding: "8px" }} className="form-control input-form" placeholder="Enter Contact" />
                <button style={{ marginLeft: "12px" }} onClick={handleUpdate} className="btn btn-danger">Update Contact</button>
            </div>
        </div>
    );
}

export default UpdateContact;