import React, { useState, useEffect } from 'react'
import "../css/style.css";
import axios from "axios";
import { Link } from 'react-router-dom';
import alertify from "alertifyjs";
import Nav from "./Nav";


function Home() {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const request = await axios.get("http://localhost:5000/api/get");
        const response = await request.data;
        setData(response)
        console.log(response);
    };

    useEffect(() => {
        loadData();
    }, []);

    const deleteContact = (id) => {
        alertify.confirm("Are You Sure?", function () {
            axios.delete("http://localhost:5000/api/remove/" + id);
        }
        ).set({ title: "Delete Contact" })
    };



    return (
        <>
            <Nav />
            <div className='home-container'>
                <div className="table-header">

                    <table>
                        <thead>
                            <tr className='trMy'>
                                <th >No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Contact</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <th scope='row'>{index + 1}</th>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.contact}</td>
                                        <td>
                                            <Link to={"/update/" + item.id}>
                                                <button className='btn btn-success' style={{ padding: "8px", marginRight: "5px" }}>Edit</button>
                                            </Link>
                                            <button className='btn btn-danger' style={{ padding: "8px", marginRight: "5px" }} onClick={() => deleteContact(item.id)} >Delete</button>
                                            <Link to={"/view/" + item.id}>
                                                <button className='btn btn-primary' style={{ padding: "8px", marginRight: "5px" }}>View</button>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Home;
