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
                            <div className='boocard_inner'>
                                <div class="boocard_dets boocard_left">
                                    {/* <h3 class="boocard_ttl">Booking Detail</h3> */}
                                    <ul>
                                        <li className='name'><b>Kartavya</b></li>
                                        <li>kartavyabhayana1@gmail.com</li>
                                        <li>8556951762</li>
                                        <li><b>Location</b> Vancouver</li>
                                        <li><b>Pref. Location</b> Surrey</li>
                                    </ul>
                                </div>
                                <div class="boocard_dets boocard_right">
                                    <ul>
                                        <li><b>Day</b> Monday</li>
                                        <li><b>Truck Data</b> Full Truck</li>
                                        <li><b>Website</b> orphicstech.com</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="boocard_divider"></div>
                            <div class="boocard_date">
                                <span class="date">2023-11-14</span>
                                <span class="dash">-</span>
                                <span class="date">2023-12-19</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default MyBooking;
