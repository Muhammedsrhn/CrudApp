import axios from 'axios';
import React from 'react'
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";


function ViewDetails() {
    const [user, setUser] = useState({});

    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:5000/api/get/" + id)
            .then(resp => setUser({ ...resp.data[0] }));
    }, []);
    return (
        <div style={{ marginTop: "100px" }}>
            <div className="card" style={{border:"none"}}>
                <div className="card-header" style={{background:"black",width:"100%"}}>
                    <p>User Contact Deatil</p>
                </div>
                <div className="container" style={{background:"#666",color:"#fff"}}>
                    <strong>ID: </strong>
                    <span>{id}</span>
                    <br />
                    <br />
                    <strong>Name: </strong>
                    <span>{user.name}</span>
                    <br />
                    <br />
                    <strong>Email: </strong>
                    <span>{user.email}</span>
                    <br />
                    <br />
                    <strong>Contact: </strong>
                    <span>{user.contact}</span>
                    <br />
                    <br />
                    <Link to={"/"}><button style={{marginLeft:"-10"}} className='btn btn-dark'>Go Back</button></Link>
                </div>
            </div>
        </div>
    )
}

export default ViewDetails;