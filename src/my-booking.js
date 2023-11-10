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
            {/* {bookingdata.map((x) => (
  <div key={x.id}>{x.email}</div>
))} */}

            <section className='mybookings_sec'>
                <div className='custom-container'>
                    <div className='booCrdContainer'>
                        <div class="boocard">
                            <div class="boocard_date">
                                <ul className='left'>
                                    <li><i class="fa fa-calendar-week"></i> Monday</li>
                                    <li><i class="fa fa-truck-moving"></i> Full Truck</li>
                                </ul>
                            </div>
                            <div class="boocardCont">
                                <small>My Booking</small>
                                <h3>Kartavya</h3>
                                <ul>
                                    <li><i class="fa fa-phone"></i> 9876543210 / <i class="fa fa-envelope"></i> info@signtruck.ca</li>
                                    <li><i class="fa fa-globe"></i> www.signtruck.ca</li>
                                    <li><i class="fa fa-calendar"></i> 2023-09-20 to 2023-10-09</li>
                                    <li><i class="fa fa-map-marker"></i> Vancouver</li>
                                    <li><i class="fa fa-map-marker"></i> Surrey</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default MyBooking;
