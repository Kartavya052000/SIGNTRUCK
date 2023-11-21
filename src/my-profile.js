import {React,useState,useEffect} from "react";

import { Form, Schema, DateRangePicker, Button, TagPicker, Radio, Input, RadioGroup, SelectPicker } from 'rsuite';
import Axios from 'axios';
import { useCookies } from 'react-cookie';


const MyProfile = () =>{
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const token = cookies['token'];
    const [userdata,SetUserData]=useState([])
    const [username,setusername]=useState("");
    const [email,setemail]=useState("");
    useEffect( () => {
        // const apiUrl = 'http://localhost:4000/my-profile';
// const apiUrl = 'https://busy-pink-dalmatian-ring.cyclic.app/my-profile';
const apiUrl = 'https://signtruckapi.signtruck.ca/my-profile';

        Axios.get(apiUrl, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': ` ${token}`, // Correct the token format
            }
        })
            .then((response) => {
                // Handle the successful response and update the state with the data
                console.log(response.data.bookings, "DATA");
                // SetUserData(response.data.users);
                setusername(response.data.users[0].username)
                setemail(response.data.users[0].email)
            })
            .catch((error) => {
                // Handle errors, e.g., show an error message
                console.error('Error fetching data:', error);
            });
    }, []);
    const handleSubmit = async () => {
        try {
        //   const apiUrl = 'https://busy-pink-dalmatian-ring.cyclic.app/update-profile';
          // const apiUrl = 'http://localhost:4000/update-profile';
const apiUrl = 'https://signtruckapi.signtruck.ca/update-profile';

          
          const updatedData = {
            email: email,
            username: username,
            // Add other fields you want to update
          };
      
          const response = await Axios.post(apiUrl, updatedData, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': ` ${token}`,
            },
          });
      
          if (response.data.success) {
            console.log('Profile updated successfully');
            // Optionally, you can show a success message or perform other actions upon successful update
          } else {
            console.error('Failed to update profile:', response.data.message);
            // Handle the case where the update fails, show an error message, etc.
          }
        } catch (error) {
          console.error('Error updating profile:', error);
          // Handle unexpected errors
        }
      };
      
    return(
        <>
            <section className="innerSecBgHeader">
                <div className="custom-container">
                    <h2>My-Profile</h2>
                </div>
            </section>
            <section className='book_form_sec'>
                <div className='custom-container'>
                    <Form onSubmit={handleSubmit}>
  {/* Existing form fields */}
  <Form.Group controlId="name">
    <Form.ControlLabel>Name</Form.ControlLabel>
    <input
      name="name"
      label="Username"
      placeholder="Username"
      value={username}
      onChange={event => setusername(event.target.value)}

      // disabled
    />
  </Form.Group>
  <Form.Group controlId="email">
    <Form.ControlLabel>Email</Form.ControlLabel>
    <input
      name="email"
      label="Email"
      placeholder="Email"
      value={email}
      onChange={event => setemail(event.target.value)}

      // value={email}
      // disabled
    />
  </Form.Group>
  <Button className='butn butn_success butn_sm' type="submit">Save</Button>
</Form>

                        </div>
                        </section>
                        </>
    )
}
export default MyProfile;
