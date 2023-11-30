import { React, useState } from "react";
import { Form, Button } from 'rsuite';
import { useParams } from 'react-router-dom'; // Import useParams to access URL parameters
import axios from 'axios'; // Import Axios for making API requests
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function ResetPassword() {
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const { token } = useParams(); // Get the token from the route parameters
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
      // Make a POST request to your reset-password endpoint with the new password and token
      const response = await axios.post(`https://signtruckapi.signtruck.ca/reset-password/${token}`, { newPassword: password });
      console.log(response.data); // Log the response or handle success message
      handleSuccess(response.data.message)
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      handleError(error.message);

      console.error('Error:', error); // Handle error responses
    }
  };
  return (
    <>
     <section className="innerSecBgHeader">
      <div className="custom-container">
        <h2>Reset-Password</h2>
      </div>
    </section>
    <section className='book_form_sec'>
                <div className='custom-container'>
                    <Form onSubmit={handleSubmit}>
  {/* Existing form fields */}
  
  <Form.Group controlId="password">
    <Form.ControlLabel>New Password</Form.ControlLabel>
    <input
      name="password"
      label="New Password"
      placeholder="New Password"
      value={password}
      onChange={event => setpassword(event.target.value)}
    />
  </Form.Group>
  <Button className='butn butn_success butn_sm' type="submit">Submit</Button>
</Form>

                        </div>
                        </section>
    </>
  );
}

export default ResetPassword;
