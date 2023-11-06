import React, { useState, useRef } from 'react';
import { Form, Schema, DateRangePicker, Button, TagPicker, Uploader, Radio, Input, RadioGroup, SelectPicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import axios from 'axios';
import { useCookies } from 'react-cookie';


const Booking = () => {
    const data = ['Eugenia', 'Bryan', 'Linda', 'Nancy', 'Lloyd', 'Alice', 'Julia', 'Albert'].map(
        item => ({ label: item, value: item })
    );
    const truckData = ['Full Truck', 'Driver Side', 'Passenger Side', 'Back Side'].map(
        item => ({ label: item, value: item })
    );
    const DayData = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(
        item => ({ label: item, value: item })
    );
    const preferredLocation = ['North Vancouver', "Vancouver", "Surrey", "Richmond"].map(
        item => ({ label: item, value: item })
    );
    const model = Schema.Model({
        name: Schema.Types.StringType().isRequired('Please enter name.'),
        email: Schema.Types.StringType().isEmail('Please enter a valid email address.'),
        phone: Schema.Types.NumberType().isRequired('Please enter a valid phone number.'),
        website: Schema.Types.StringType().isRequired('Please enter a valid website.'),
        day: Schema.Types.ArrayType()
            .addRule((values, data) => {
                if (values.length === 0) {
                    return 'Please select at least one day.';
                }
            }),
        truckData: Schema.Types.StringType().isRequired('Please enter a month period.'),

        dateRange: Schema.Types.DateType()
            .isRequired('Please select a valid date range.')
            .addRule((value, data) => {
                if (value && value.length !== 2) {
                    return 'Please select a valid date range.';
                }
            }),
        radioList: Schema.Types.StringType()
            .addRule((value, data) => {
                if (value !== 'A' && value !== 'B') {
                    return 'Please select a valid option (A or B).';
                }
            })
            .isRequired('Please select an option (A or B).'),
        preferredLocation: Schema.Types.ArrayType(),
        location: Schema.Types.StringType().isRequired('Please enter location.'),


    });

    const [value, setValue] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
        day: [],
        dateRange: [],
        truckData: '',
        radioList: 'B',
        preferredLocation: [],
        location: ''

    });
    const [name, SetName] = useState('')
    const [email, SetEmail] = useState('')
    const [phone, SetPhone] = useState('')
    const [website, SetWebsite] = useState('')
    const [location, SetLocation] = useState('')

    const [radioValue, setRadioValue] = useState('B'); // Initialize radio button value to 'No' by default
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const token = cookies['token'];
    // const TextField = ({ name, label, accepter, ...rest }) => (
    //     <Form.Group controlId={name}>
    //         <Form.ControlLabel>{label} </Form.ControlLabel>
    //         <Form.Control name={name} accepter={accepter} {...rest} />
    //     </Form.Group>
    // );

    const formRef = useRef();
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleSubmit = async () => {
        try {
            const form = formRef.current;
            // if (!form.check()) {
            //     // The form has validation errors, do not submit
            //     console.error('Form has validation errors');
            //     return;
            // }
            const formData = new FormData();
            formData.append('token', token);
            formData.append('name', name);
            formData.append('email', email);
            formData.append('phone', phone);
            formData.append('website', website);
            formData.append('day', JSON.stringify(value.day)); // Convert to string since it's an array
            formData.append('dateRange', JSON.stringify(value.dateRange)); // Convert to string since it's an array
            formData.append('truckData', value.truckData);
            formData.append('radioList', value.radioList);
            formData.append('preferredLocation', JSON.stringify(value.preferredLocation)); // Convert to string since it's an array
            formData.append('location', location);

          

            // Upload the image file if it's selected
            if (radioValue === 'A') {
            //add file here
            }

            // Make an API request to the backend
            // const response = await axios.post('https://busy-pink-dalmatian-ring.cyclic.app/create-booking', formData,{

            const response = await axios.post('http://localhost:4000/create-booking', formData,{
                // headers: {
                //     'Content-Type': 'multipart/form-data', // Set the content type for file upload
                //   },
            });

            if (response.status === 201) {
                // Handle a successful response, e.g., show a success message or redirect to a confirmation page
                console.log('Booking created successfully', response.data);
            } else {
                // Handle other response statuses or errors
                console.error('Booking creation failed', response);
            }
        } catch (error) {
            console.error('API request failed', error);
        }
    };

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles(files);
  };
  const handleUpload = () => {
    // You can process the selected files here, e.g., send them to the server.
    console.log(selectedFiles);
  };
    
    return (
        <>
            <section className="innerSecBgHeader">
                <div className="custom-container">
                    <h2>Booking</h2>
                </div>
            </section>
            <section className='book_form_sec'>
                <div className='custom-container'>
                    <Form model={model} onSubmit={handleSubmit} >

                        <input
                            name="name"
                            label="Name"
                            placeholder="Name"
                            value={name}
                            onChange={event => SetName(event.target.value)}
                        />
                        <input
                            name="email"
                            label="Email"
                            placeholder="Email"
                            accepter={Input}
                            value={email}
                            onChange={event => SetEmail(event.target.value)}
                        />
                        <input
                            name="phone"
                            label="Phone"
                            placeholder="Phone"
                            accepter={Input}
                            value={phone}
                            onChange={event => SetPhone(event.target.value)}
                        />
                        {/* <MaskedInput
                                value={value.phone}
                                mask={['1', /[3456789]/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
                                placeholder='(555) 495-3947'
                                placeholderChar='_'
                                onChange={newValue => setValue({ ...value, phone: newValue })}
                            /> */}
                        <input
                            name="website"
                            label="Website"
                            placeholder="Website"
                            accepter={Input}
                            value={website}
                            onChange={event => SetWebsite(event.target.value)}
                        />
                        <SelectPicker
                            data={truckData}
                            onChange={newValue => setValue({ ...value, truckData: newValue })}
                        />
                        <Form.Group controlId="day">
                            <Form.ControlLabel>How long it'll be on sign truck?</Form.ControlLabel>
                            <TagPicker
                                data={DayData}
                                name="day"
                                placeholder="5 Days in a week"
                                accepter={Input}
                                value={value.day}
                                onChange={newValue => setValue({ ...value, day: newValue })}
                            />
                        </Form.Group>

                        <Form.Group controlId="dateRange">
                            <Form.ControlLabel>Start Month and End Month</Form.ControlLabel>
                            <DateRangePicker
                                name="dateRange"
                                placeholder="Minimum 1 month"
                                accepter={Input}
                                value={value.dateRange}
                                onChange={newValue => setValue({ ...value, dateRange: newValue })}
                            />
                        </Form.Group>

                        <Form.Group controlId="radioList">
                            <Form.ControlLabel>Do you have design for your ad?</Form.ControlLabel>
                            <RadioGroup name="radioList" value={radioValue} onChange={value => setRadioValue(value)}>
                                <Radio value="A">Yes</Radio>
                                <Radio value="B">No</Radio>
                            </RadioGroup>
                        </Form.Group>
                        {radioValue === 'A' && (
                            // <Uploader
                             
                            //  draggable 
                            //  onChange={handleUpload}                            >
                            //     <div style={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            //         <span>Click or Drag files to this area to upload</span>
                            //     </div>
                            // </Uploader>
                            <div>
                            <input
                              type="file"
                            //   multiple
                              onChange={handleFileChange}
                            />
                            <button onClick={handleUpload}>Upload Files</button>
                          </div>                        )}

                        <Form.Group controlId="preferredLocation">
                            <Form.ControlLabel>Preferred Location</Form.ControlLabel>
                            <TagPicker
                                data={data}
                                name="preferredLocation"
                                placeholder="Preferred Location"
                                accepter={Input}
                                value={value.preferredLocation}
                                onChange={newValue => setValue({ ...value, preferredLocation: newValue })}
                            />
                        </Form.Group>

                        <input
                            name="location"
                            label="Your Location"
                            placeholder="Your Location"
                            accepter={Input}
                            value={location}
                            onChange={event => SetLocation(event.target.value)}
                        />

                        <Button appearance="ghost" type="submit">Book Now</Button>
                    </Form>
                </div>
            </section>
        </>
    );
};

export default Booking;
