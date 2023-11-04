import React, { useState, useRef } from 'react';
import { Form, Schema, SelectPicker, DateRangePicker, Button, TagPicker, MaskedInput, Uploader, Radio, Input, RadioGroup } from 'rsuite';
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
                            accepter={Input}
                            value={value.name}
                            onChange={newValue => setValue({ ...value, name: newValue })}
                        />
                        <TextField
                            name="email"
                            label="Email"
                            accepter={Input}
                            value={value.email}
                            onChange={newValue => setValue({ ...value, email: newValue })}
                        />
                        <TextField
                            name="phone"
                            label="Phone"
                            accepter={Input}
                            value={value.phone}
                            onChange={newValue => setValue({ ...value, phone: newValue })}
                        />
                        <MaskedInput
                            value={value.phone}
                            mask={['1', /[3456789]/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
                            placeholder='(555) 495-3947'
                            placeholderChar='_'
                            style={{ width: 300 }}
                            onChange={newValue => setValue({ ...value, phone: newValue })}
                        />
                        <TextField
                            name="website"
                            label="Website"
                            accepter={Input}
                            value={value.website}
                            onChange={newValue => setValue({ ...value, website: newValue })}
                        />
                        {/* <SelectPicker 
                        data={monthData} 
                        onChange={newValue => setValue({ ...value, monthData: newValue })}
                        /> */}
                        <TagPicker 
                        data={DayData}
                        name="day"
                            label="day"
                            accepter={Input}
                            value={value.day}
                        onChange={newValue => setValue({ ...value, day: newValue })}
                         />
                        <DateRangePicker 
                        name="dateRange"
                        label="dateRange"
                        accepter={Input}
                        value={value.dateRange}
                        onChange={newValue => setValue({ ...value, dateRange: newValue })}
                        
                        />
                        <RadioGroup name="radioList" value={radioValue} onChange={value => setRadioValue(value)}>
                            <p>Do you Have Design for your ad ?</p>
                            <Radio value="A">Yes</Radio>
                            <Radio value="B">No</Radio>
                        </RadioGroup>
                        {radioValue === 'A' && (
                            <Uploader action="" draggable>
                                <div style={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span>Click or Drag files to this area to upload</span>
                                </div>
                            </Uploader>
                        )}
                        <TagPicker 
                        data={data}
                        name="preferredLocation"
                        label="preferredLocation"
                        accepter={Input}
                        value={value.preferredLocation}
                         placeholder="Preferred Location"
                        onChange={newValue => setValue({ ...value, preferredLocation: newValue })}
                         
                         />
                        <TextField 
                        name="location" 
                        label="Your Location"
                        accepter={Input}
                            value={value.location}
                            onChange={newValue => setValue({ ...value, location: newValue })}
                        />
                        <Button appearance="ghost" type="submit">Submit</Button>
                    </Form>
                </div>
            </section>
        </>
    );
};

export default Booking;
