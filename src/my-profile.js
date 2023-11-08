import {React,useState,useEffect} from "react";

import { Form, Schema, DateRangePicker, Button, TagPicker, Radio, Input, RadioGroup, SelectPicker } from 'rsuite';
import Axios from 'axios';
import { useCookies } from 'react-cookie';


const MyProfile = () =>{
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const token = cookies['token'];
    const [userdata,SetUserData]=useState([])
    useEffect( () => {
        Axios.get("http://localhost:4000/my-profile", {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': ` ${token}`, // Correct the token format
            }
        })
            .then((response) => {
                // Handle the successful response and update the state with the data
                console.log(response.data.bookings, "DATA");
                SetUserData(response.data.users);
            })
            .catch((error) => {
                // Handle errors, e.g., show an error message
                console.error('Error fetching data:', error);
            });
    }, []);
    return(
        <>
            <section className="innerSecBgHeader">
                <div className="custom-container">
                    <h2>My-Profile</h2>
                </div>
            </section>
            <section className='book_form_sec'>
                <div className='custom-container'>
                    <Form>

                        <Form.Group controlId="name">
                            <Form.ControlLabel>Name</Form.ControlLabel>
                            <input
                                name="name"
                                label="Username"
                                placeholder="Username"
                                value={userdata[0]?.username}
                                disabled
                                
                            />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.ControlLabel>Email</Form.ControlLabel>
                            <input
                                name="email"
                                label="Email"
                                placeholder="Email"
                                value={userdata[0]?.email}

                                // value={email}
                                disabled

                            />
                        </Form.Group>
                        </Form>
                        </div>
                        </section>
                        </>
    )
}
export default MyProfile;
