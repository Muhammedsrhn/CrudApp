import React from "react";
import "../css/style.css";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import Nav from "./Nav";

function AddContact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const id = (Math.random() * 10000 * 10000 * 10000 * 1000).toFixed();

    const addContact = async () => {
        let request = await axios.post("http://localhost:5000/api/post", {
            "id": id,
            "name": name,
            "email": email,
            "contact": contact,
        });
        let result = await request.data;
        console.warn(result);
        toast.success('Add Contact Successfully!', {
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
        <>
            <Nav />
            <div className="contact-header">
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />

                <h1 style={{ fontSize: "40px", marginLeft: "12px" }}>Add Contact</h1>
                <div className="form-contact">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ margin: "12px", padding: "8px" }} className="input-form form-control" placeholder="Enter Name" />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ margin: "12px", padding: "8px" }} className="input-form form-control" placeholder="Enter Email" />
                    <input type="number" value={contact} onChange={(e) => setContact(e.target.value)} style={{ margin: "12px", padding: "8px" }} className="form-control input-form" placeholder="Enter Contact" />
                    <button style={{ marginLeft: "12px" }} onClick={addContact} className="btn btn-danger">Add Contact</button>
                </div>
            </div>
        </>
    );
}

export default AddContact;