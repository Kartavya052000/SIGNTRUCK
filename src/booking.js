import React, { useState, useRef } from 'react';
import { Form, Schema, DateRangePicker, Button, TagPicker, Uploader, Radio, Input, RadioGroup } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import axios from 'axios';

const Booking = () => {
    const data = ['Eugenia', 'Bryan', 'Linda', 'Nancy', 'Lloyd', 'Alice', 'Julia', 'Albert'].map(
        item => ({ label: item, value: item })
    );
    // const monthData = ['1 month', '2 month', '3 month', '4 month', '5 month', '6 month', '1 year'].map(
    //     item => ({ label: item, value: item })
    // );
    const DayData = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(
        item => ({ label: item, value: item })
    );
    const preferredLocation = ['North Vancouver',"Vancouver","Surrey","Richmond"].map(
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
        // monthData: Schema.Types.StringType().isRequired('Please enter a month period.'),
    

    const [value, setValue] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
        day:[],
        dateRange: [],
        radioList: 'B',
        preferredLocation:[],
        location:''

    });

    const [radioValue, setRadioValue] = useState('B'); // Initialize radio button value to 'No' by default

    const TextField = ({ name, label, accepter, ...rest }) => (
        <Form.Group controlId={name}>
            <Form.ControlLabel>{label} </Form.ControlLabel>
            <Form.Control name={name} accepter={accepter} {...rest} />
        </Form.Group>
    );

    const formRef = useRef();

    const handleSubmit = async () => {
        try {
            const form = formRef.current;
            const formData = {
                name: value.name,
                email: value.email,
                phone: value.phone,
                website: value.website,
                day:value.day,
                dateRange: value.dateRange,
                radioList: value.radioList,
                preferredLocation:value.preferredLocation,
                location:value.location

            };
            console.log(formData);
        } catch (error) {
            console.error('API request failed', error);
        }
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
                    <Form model={model} onSubmit={handleSubmit} ref={formRef}>
                        <TextField
                            name="name"
                            label="Name"
                            placeholder="Name"
                            accepter={Input}
                            value={value.name}
                            onChange={newValue => setValue({ ...value, name: newValue })}
                        />
                        <TextField
                            name="email"
                            label="Email"
                            placeholder="Email"
                            accepter={Input}
                            value={value.email}
                            onChange={newValue => setValue({ ...value, email: newValue })}
                        />
                        <TextField
                            name="phone"
                            label="Phone"
                            placeholder="Phone"
                            accepter={Input}
                            value={value.phone}
                            onChange={newValue => setValue({ ...value, phone: newValue })}
                        />
                        {/* <MaskedInput
                            value={value.phone}
                            mask={['1', /[3456789]/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
                            placeholder='(555) 495-3947'
                            placeholderChar='_'
                            onChange={newValue => setValue({ ...value, phone: newValue })}
                        /> */}
                        <TextField
                            name="website"
                            label="Website"
                            placeholder="Website"
                            accepter={Input}
                            value={value.website}
                            onChange={newValue => setValue({ ...value, website: newValue })}
                        />
                        {/* <SelectPicker 
                        data={monthData} 
                        onChange={newValue => setValue({ ...value, monthData: newValue })}
                        /> */}
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
                            <Uploader action="" draggable>
                                <div style={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span>Click or Drag files to this area to upload</span>
                                </div>
                            </Uploader>
                        )}

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

                        <TextField 
                            name="location" 
                            label="Your Location"
                            placeholder="Your Location"
                            accepter={Input}
                            value={value.location}
                            onChange={newValue => setValue({ ...value, location: newValue })}
                        />

                        <Button appearance="ghost" type="submit">Book Now</Button>
                    </Form>
                </div>
            </section>
        </>
    );
};

export default Booking;
