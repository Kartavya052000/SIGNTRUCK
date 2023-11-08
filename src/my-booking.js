import React, { useEffect,useState } from 'react';
import Axios from 'axios';
import { useCookies } from 'react-cookie';

const MyBooking = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const token = cookies['token'];
    const [bookingdata,SetBookingData]=useState([])
    useEffect( () => {
        Axios.get("http://localhost:4000/get-user-booking", {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': ` ${token}`, // Correct the token format
            }
        })
            .then((response) => {
                // Handle the successful response and update the state with the data
                console.log(response.data.bookings, "DATA");
                SetBookingData(response.data.bookings);
            })
            .catch((error) => {
                // Handle errors, e.g., show an error message
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <section className="innerSecBgHeader">
                <div className="custom-container">
                    <h2>My-Booking</h2>
                </div>
            </section>
            {bookingdata.map((x) => (
  <div key={x.id}>{x.email}</div>
))}
        </>
    )
}

export default MyBooking;
