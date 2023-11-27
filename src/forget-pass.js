import { React, useState } from "react";
import { Form, Button } from 'rsuite';
import axios from 'axios'; // Import Axios for making API requests
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleError = (err) =>
  toast.error(err, {
    position: "top-left",
  });
const handleSuccess = (msg) =>
  toast.success(msg, {
    position: "top-right",
  });
  const handleSubmit = async (e) => {
    // e.preventDefault(); // Prevent default form submission

    try {
      // Make a POST request to your API endpoint

      const response = await axios.post('https://signtruckapi.signtruck.ca/forget-password', { email });
    const { success, message,token } = response.data;
    handleSuccess(message);
    setTimeout(() => {
        navigate("/");
      }, 2000);

      console.log(response.data); // Log the response or handle success message
    } catch (error) {
      handleError(error.message);

      console.error('Error:', error); // Handle error responses
    }
  };

  return (
    <>
      <section className="innerSecBgHeader">
      <div className="custom-container">
        <h2>Forget-Password</h2>
      </div>
    </section>
    <section className='book_form_sec'>
                <div className='custom-container'>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.ControlLabel>Email</Form.ControlLabel>
          <input
            name="email"
            label="Email"
            placeholder="Email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </Form.Group>
        <Button className='butn butn_success butn_sm' type="submit">Submit</Button>
      </Form>
      </div>
      </section>
    </>
  );
}

export default ForgetPassword;
