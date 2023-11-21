import React, { useEffect,useState } from 'react';
import Axios from 'axios';
import { useCookies } from 'react-cookie';

const MyBooking = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const token = cookies['token'];
    const [bookingdata,SetBookingData]=useState([])
    useEffect( () => {
        const apiUrl = 'https://signtruckapi.signtruck.ca/get-user-booking';
        Axios.get(apiUrl, {
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
                <section className='mybookings_sec'>
                <div className='custom-container'>
                    <div className='booCrdContainer'>
                        <div class="boocard">
                            <div class="boocard_date">
                                <ul className='left'>
                                    <li>
                                        <i class="fa fa-calendar-week"></i> 
                                        {JSON.parse(x.day).map((day, index) => (
                                            <span key={day}>
                                                {day}{index < JSON.parse(x.day).length - 1 && ','}{' '}
                                            </span>
                                        ))}
                                    </li>
                                    <li><i class="fa fa-truck-moving"></i> {x.truckData}</li>
                                </ul>
                            </div>
                            <div class="boocardCont">
                                <small>My Booking</small>
                                <h3>{x.name}</h3>
                                <ul>
                                    <li><i class="fa fa-phone"></i> {x.phone} / <i class="fa fa-envelope"></i> {x.email}</li>
                                    <li><i class="fa fa-globe"></i> {x.website}</li>
                                    <li><i class="fa fa-calendar"></i>    {JSON.parse(x.dateRange).map((date, index) => (
        <span key={date}>
            {new Date(date).toLocaleDateString()}
            {index < JSON.parse(x.dateRange).length - 1 && ','}{' '}
        </span>
    ))}
                  
                  </li>
                                    <li><i class="fa fa-map-marker"></i>{JSON.parse(x.availablelocation[0]).join(', ')}</li>
                                    <li><i class="fa fa-map-marker"></i> {x.location}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
))}
{bookingdata.length ==0 ? (<h1>No Bookings Yet</h1>):("")}
            


        </>
    )
}

export default MyBooking;
