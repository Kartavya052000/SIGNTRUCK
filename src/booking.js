import React from 'react';
import { Form, Schema, SelectPicker, DateRangePicker, Button, TagPicker, MaskedInput, Uploader, Radio } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

    const Booking = () => {

        const data = ['Eugenia', 'Bryan', 'Linda', 'Nancy', 'Lloyd', 'Alice', 'Julia', 'Albert'].map(
            item => ({ label: item, value: item })
        );

        const model = Schema.Model({
            name: Schema.Types.StringType().isRequired('Please enter name.'),
            email: Schema.Types.StringType().isEmail('Please enter a valid email address.'),
            phone: Schema.Types.NumberType().isRequired('Please enter a valid phone number.'),
            website: Schema.Types.StringType().isRequired('Please enter a valid website.')
        });

        const TextField = ({ name, label, accepter, ...rest }) => (
            <Form.Group controlId={name}>
              <Form.ControlLabel>{label} </Form.ControlLabel>
              <Form.Control name={name} accepter={accepter} {...rest} />
            </Form.Group>
        );

        const [value, setValue] = React.useState('');

        return (
            <>
                <section className="innerSecBgHeader">
                    <div className="custom-container">
                        <h2>Booking</h2>
                    </div>
                </section>
                <section className='book_form_sec'>
                    <div className='custom-container'>
                    <Form model={model}>
                        <TextField name="name" label="Name" />
                        <TextField name="email" label="Email" />
                        <TextField name="phone" label="Phone" />
                        <MaskedInput
                            value={value}
                            mask={['1', /[3456789]/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
                            // guide={guide}
                            // showMask={showMask}
                            // keepCharPositions={keepCharPositions}
                            placeholder='(555) 495-3947'
                            placeholderChar='_'
                            style={{ width: 300 }}
                            onChange={setValue}
                        />
                        <TextField name="website" label="Website" />
                        <SelectPicker data={data} />
                        <TagPicker data={data} />
                        <DateRangePicker />
                        <Radio>Yes</Radio>
                        <Radio checked>No</Radio>
                        <Uploader action="" draggable>
                            <div style={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span>Click or Drag files to this area to upload</span>
                            </div>
                        </Uploader>
                        <TagPicker data={data} placeholder="Preferred Location" />
                        <TextField name="location" label="Your Location" />
                        <Button appearance="ghost" type="submit">Submit</Button>
                    </Form>
                    </div>
                </section>
            </>
    )
}

    export default Booking;