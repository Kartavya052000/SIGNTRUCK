import React, { useState, useRef,useEffect } from 'react';
import { Form, Schema, DateRangePicker, Button, TagPicker, Radio, Input, RadioGroup, SelectPicker,Uploader, Popover, Whisper } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { TextField } from '@mui/material';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import faqBanner from './assets/images/faq_banner.png';
import sidePanel from './assets/images/sidePanel.jpg';
import trucks from './assets/images/storyTruck.png';
import RotatingBillboard from './RotatingBillboard';
import truckimg from "./images/billboard.jpeg"
import truckimg1 from "./images/coffee.png"
import truckimg2 from "./images/cocktail.png"
import truckimg3 from "./images/shotglass.png"

  const initialConfig = {
    background: truckimg,
    images: [
      truckimg1,truckimg2,truckimg3
    ],
    divisions: 41,
    lag: 4,
    duration: 8,
    topLeft: [0.24811844589687727, 0.384359897172236],
    botRight: [0.605277566539924, 0.639277566539924],
};
const Booking = () => {
    const [config, setConfig] = useState(initialConfig);

    const navigate = useNavigate();

    const data = ['Eugenia', 'Bryan', 'Linda', 'Nancy', 'Lloyd', 'Alice', 'Julia', 'Albert'].map(
        item => ({ label: item, value: item })
    );
    const nearByLocation = ['Vancouver', 'Surrey', 'Richmond', 'Pitt Meadows', 'Maple Ridge', 'Coquitlam', 'Port Coquitlam', 'Langley'].map(
        item => ({ label: item, value: item })
    );

    const truckData = [
        { value: "fullTruck", label: "Full Truck", image: trucks },
        { value: "sidePanel", label: "Side Panel", image: trucks },
        { value: "driverSide", label: "Driver Side", image: trucks },
        { value: "passengerSide", label: "Passenger Side", image: trucks },
        { value: "backSide", label: "Back Side", image: trucks },
    ];

    const renderMenuItem = (text, item) => {
        return (
            <Whisper followCursor speaker={<Popover><img src={item.image} alt={item.label} style={{ width: '300px' }} /></Popover>}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span>{text}</span>
                    </div>
            </Whisper>
        );
    };
    const DayData = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(
        item => ({ label: item, value: item })
    );
    const preferredLocation = ['North Vancouver', "Vancouver", "Surrey", "Richmond"].map(
        item => ({ label: item, value: item })
    );
    const model = Schema.Model({
        // name: Schema.Types.StringType().isRequired('Please enter name.'),
        // email: Schema.Types.StringType().isEmail('Please enter a valid email address.'),
        // phone: Schema.Types.NumberType().isRequired('Please enter a valid phone number.'),
        // website: Schema.Types.StringType().isRequired('Please enter a valid website.'),
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
        // location: Schema.Types.StringType().isRequired('Please enter location.'),


    });

    const [value, setValue] = useState({

        day: [],
        dateRange: [],
        truckData: '',
        radioList: 'B',
        preferredLocation: [],

    });
    const [name, SetName] = useState('')
    const [email, SetEmail] = useState('')
    const [phone, SetPhone] = useState('')
    const [website, SetWebsite] = useState('')
    const [location, SetLocation] = useState('')

    const [radioValue, setRadioValue] = useState('B'); // Initialize radio button value to 'No' by default
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const token = cookies['token'];
    const hiddenFileInput = useRef(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
const [form,setForm]=useState({})
const [fileLabel, setFileLabel] = useState('Upload or Drop a file here');

    // Programatically click the hidden file input element
    // when the Button component is clicked

    const TextField = ({ name, label, accepter, ...rest }) => (
        <Form.Group controlId={name}>
            <Form.ControlLabel>{label} </Form.ControlLabel>
            <Form.Control name={name} accepter={accepter} {...rest} />
        </Form.Group>
    );

    const formRef = useRef();
    const [selectedFiles, setSelectedFiles] = useState();
    const handleError = (err) =>
        toast.error(err, {
            position: "top-left",
        });
    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: "top-right",
        });
    const handleSubmit = async () => {
        console.log(value.radioList)
        // Check if the radio button value is 'A' (user wants to upload an image)
        if (value.radioList === 'A') {
            if (!selectedFiles) {
                // Display an error message for the image field
                console.log("Image is required");
                return;
            }
        }
        const isValueEmpty = Object.keys(value).some(key => {
            const val = value[key];
            if (Array.isArray(val)) {
                return val.length === 0; // Check if it's an empty array
            }
            return val === ''; // Check if it's an empty string
        });

        setFormSubmitted(true); // Set formSubmitted to true when the button is clicked
        if (name == '' || email == '' || phone == '' || website == '' || location == '' || isValueEmpty) {
            return
        }
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
            formData.append('day', JSON.stringify(value.day));
            formData.append('dateRange', JSON.stringify(value.dateRange));
            formData.append('truckData', value.truckData);
            formData.append('radioList', value.radioList);
            formData.append('availablelocation', JSON.stringify(value.preferredLocation));
            formData.append('location', location);

            if (radioValue === 'A') {
                // Use the correct field name for the file input
                formData.append('image', selectedFiles);
            }
            let apiUrl="";
            if(token){
                 apiUrl = 'https://signtruckapi.signtruck.ca/create-booking';
                //  apiUrl = 'http://localhost:4000/create-booking';
                //  apiUrl = 'https://busy-pink-dalmatian-ring.cyclic.app/create-booking'
            }else{
                //  apiUrl = 'http://localhost:4000/create-guest-booking';
                 formData.append("guestId","guest")
            //  apiUrl = 'https://busy-pink-dalmatian-ring.cyclic.app/create-guest-booking'
             apiUrl = 'https://signtruckapi.signtruck.ca/create-guest-booking'
            }
;
            // Then, send the formData with axios
            const response = await axios.post(apiUrl, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': ` ${token}`, // Correct the token format
                },
            });

            const { success, message } = response.data;
            if (success) {

                handleSuccess(message);
                setTimeout(() => {
                    navigate("/");
                }, 1000);
            } else {
                console.log(response.data, "SSSS");
                // alert(message);
                handleError(message);
            }

        } catch (error) {
            handleError();
            console.error('API request failed', error);
        }
    };
    const [uploadedImage, setUploadedImage] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFiles(file);
        setFileLabel(file ? file.name : 'Upload Files');
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            const uploadedImage = reader.result;
            const updatedConfig = { ...config, images: [uploadedImage] };
            setConfig(updatedConfig);
          };
          reader.readAsDataURL(file);
        }

    };
    const handleUpload = () => {
        // You can process the selected files here, e.g., send them to the server.
        console.log(selectedFiles);
    };
    const handleDeleteFile = () => {
        setSelectedFiles(null);
        setFileLabel('Upload or Drop a file here');
    };
    useEffect(() => {
        // Define the API endpoint URL
        // const apiUrl = 'http://localhost:4000/get-forms';
        // const apiUrl = 'https://busy-pink-dalmatian-ring.cyclic.app/get-forms'
        const apiUrl = 'https://signtruckapi.signtruck.ca/get-forms';

    
        axios.get(apiUrl)
          .then((response) => {
            const {
              name,
              email,
              phone,
              website,
              dateRange,
              day,
              truckData,
              haveDesign,
              availableLocation,
              preferredLocation,
            } = response.data.formData[0];
            setForm({
              name: name || '',
              email: email || '',
              phone: phone || '',
              website: website || '',
              dateRange: dateRange || '',
              day: day || '',
              truckData: truckData || '',
              haveDesign: haveDesign || '',
              availableLocation: availableLocation || '',
              preferredLocation: preferredLocation || '',
            });
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);

      const [selected, setSelected] = useState(0);

      const handleTruckData = (e) => {
        setSelected(e.target.value);
      };
    return (
        <>
            {/* <section className="innerSecBgHeader">
                <div className="custom-container">
                    <h2>Booking</h2>
                </div>
            </section> */}

            <section className='innerSec' style={{backgroundImage: `url(${faqBanner})`}}>
                <div className='custom-container'>
                <h1>Booking</h1>
                </div>
            </section>
            <section className='book_form_sec'>
                <div className='custom-container'>
                    <Form model={model} onSubmit={handleSubmit}>

                        <Form.Group controlId="name">
                            <Form.ControlLabel>{form.name}</Form.ControlLabel>
                            <input
                                name="name"
                                label="Name"
                                placeholder="Name"
                                value={name}
                                onChange={event => SetName(event.target.value)}
                                // required
                                className={`custom-input ${formSubmitted && !name ? 'error-input' : ''}`}
                            />
                        </Form.Group>


                        <Form.Group controlId="email">
                            <Form.ControlLabel>{form.email}</Form.ControlLabel>
                            <input
                                name="email"
                                label="Email"
                                placeholder="Email"
                                accepter={Input}
                                value={email}
                                onChange={event => SetEmail(event.target.value)}
                                className={`custom-input ${formSubmitted && !email ? 'error-input' : ''}`}

                            />
                        </Form.Group>


                        <Form.Group controlId="phone">
                            <Form.ControlLabel>{form.phone}</Form.ControlLabel>
                            <input
                                name="phone"
                                label="Phone"
                                placeholder="Phone"
                                accepter={Input}
                                value={phone}
                                onChange={event => SetPhone(event.target.value)}
                                className={`custom-input ${formSubmitted && !phone ? 'error-input' : ''}`}

                            />
                        </Form.Group>
                        {/* <MaskedInput
                                value={value.phone}
                                mask={['1', /[3456789]/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
                                placeholder='(555) 495-3947'
                                placeholderChar='_'
                                onChange={newValue => setValue({ ...value, phone: newValue })}
                            /> */}
                        <Form.Group controlId="website">
                            <Form.ControlLabel>{form.website}</Form.ControlLabel>
                            <input
                                name="website"
                                label="Website"
                                placeholder="Website"
                                accepter={Input}
                                value={website}
                                onChange={event => SetWebsite(event.target.value)}
                                className={`custom-input ${formSubmitted && !website ? 'error-input' : ''}`}

                            />
                        </Form.Group>
                        <Form.Group controlId="truckDesign">
                            <Form.ControlLabel>{form.truckData} </Form.ControlLabel>
                            <SelectPicker
                                searchable={false}
                                name="truckDesign"
                                data={truckData}
                                renderMenuItem={(text, item) => renderMenuItem(text, item)}
                                onChange={newValue => setValue({ ...value, truckData: newValue })}
                                className={`custom-input ${formSubmitted && !value.truckData ? 'error-input' : ''}`}
                            />
                            
                            {/* <select value={selected} onChange={handleTruckData} className={`custom-input ${formSubmitted && !value.truckData ? 'error-input' : ''}`}>
                                <option selected="selected" disabled="disabled">Choose Truck Side</option>
                                {truckData.map((item, i) => (
                                <option key={item.value} value={i}>
                                    {item.text}
                                </option>
                                ))}
                            </select> */}
                        </Form.Group>

                        {/* <Form.Group controlId="truckDesignPreview">
                            <div className='truckPreview'>
                                <img src={truckData[selected].image} />
                            </div>
                        </Form.Group> */}

                        <Form.Group controlId="day">
                            <Form.ControlLabel>{form.day}</Form.ControlLabel>
                            <TagPicker
                                data={DayData}
                                name="day"
                                placeholder="5 Days in a week"
                                accepter={Input}
                                value={value.day}
                                onChange={newValue => setValue({ ...value, day: newValue })}
                                className={`custom-input ${formSubmitted && value.day.length == 0 ? 'error-input' : ''}`}

                            />
                        </Form.Group>

                        <Form.Group controlId="dateRange">
                            <Form.ControlLabel for="dateRange">{form.dateRange}</Form.ControlLabel>
                            <DateRangePicker
                                name="dateRange"
                                placeholder="Minimum 1 month"
                                accepter={Input}
                                value={value.dateRange}
                                onChange={newValue => setValue({ ...value, dateRange: newValue })}
                                className={`custom-input ${formSubmitted && value.dateRange.length == 0 ? 'error-input' : ''}`}

                            />
                        </Form.Group>

                        <Form.Group controlId="radioList">
                            <Form.ControlLabel>{form.haveDesign}</Form.ControlLabel>
                            <RadioGroup name="radioList" value={radioValue} onChange={value => setRadioValue(value)}>
                                <Radio value="A">Yes</Radio>
                                <Radio value="B">No</Radio>
                            </RadioGroup>
                            {radioValue === 'A' && (
                                <div className='dropzone_container'>
                                    <div className='dropzone'>
                                        <label
                                            className={`custom-input ${formSubmitted && !selectedFiles ? 'error-input' : ''}`}
                                        >{fileLabel}
                                          {selectedFiles && (
                                <button type="button" className="delete" onClick={handleDeleteFile}>
                                    &#x2715; {/* Unicode character for 'multiplication x' */}
                                </button>
                            )}
                                            <input type="file" onChange={handleFileChange}
                                            /></label>
                                    </div>

                                    {/* <button type="button" className='upload' onClick={handleUpload}>Upload Files</button> */}
                                   { selectedFiles &&   <RotatingBillboard config={config} uploadedImage={uploadedImage} />}

                                </div>

                            )}
                        </Form.Group>

                        <Form.Group controlId="preferredLocation">
                            <Form.ControlLabel>{form.availableLocation}</Form.ControlLabel>
                            <TagPicker
                                data={nearByLocation}
                                name="preferredLocation"
                                placeholder="Preferred Location"
                                accepter={Input}
                                value={value.preferredLocation}
                                onChange={newValue => setValue({ ...value, preferredLocation: newValue })}
                                className={`custom-input ${formSubmitted && value.preferredLocation.length == 0 ? 'error-input' : ''}`}

                            />
                        </Form.Group>


                        <Form.Group controlId="location">
                            <Form.ControlLabel>{form.preferredLocation}</Form.ControlLabel>
                            <input
                                name="location"
                                label="Your Location"
                                placeholder="Your Location"
                                accepter={Input}
                                value={location}
                                onChange={event => SetLocation(event.target.value)}
                                className={`custom-input ${formSubmitted && !location ? 'error-input' : ''}`}

                            />
                        </Form.Group>

                        <Button className='butn butn_success butn_sm' type="submit">Book Now</Button>
                    </Form>
                </div>
            </section>
        </>
    );
};

export default Booking;
