import React, { useState } from 'react'
import "./Contact.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Contact = () => {

  const [inputvalue, setInputvalue] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    message: "",
  })

  const getvalue = (e) => {
    const { name, value } = e.target;
    setInputvalue(() => {
      return {
        ...inputvalue,
        [name]: value
      }
    })
  }


  const sendUserData = async (e) => {
    e.preventDefault();
    var audio = new Audio("/audio/chat-msg.mp3");

    const { fname, lname, email, mobile, message } = inputvalue;
    if (fname === "") {
      audio.play();
      toast.error("fname is required")
    } else if (lname === "") {
      audio.play();
      toast.error("lname is required")
    } else if (email === "") {
      audio.play();
      toast.error("email is required")
    } else if (!email.includes("@")) {
      audio.play();
      toast.error("Invalid email")
    } else if (mobile === "") {
      audio.play();
      toast.error("mobile is required")
    } else {
      const res = await fetch("http://localhost:6002/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fname, lname, email, mobile, message
        })
      })
      const data = await res.json();
      console.log(data);
      if (data.status === 201) {
        let audio=new Audio("/audio/thank-you.wav");
        audio.play();
        toast.success("Your Response has been Submitted.")
        setInputvalue({
          ...inputvalue,
          fname: "",
          lname: "",
          email: "",
          mobile: "",
          message: "",
        })
      }
    }
  }

  return (
    <>
      <div className="container mb-3 contact">
        <h2 className='text-center'>Contact Us</h2>
        <div className="container mt-2">
          <Form className='row mt-2'>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Fname</Form.Label>
              <Form.Control type="text" name="fname" value={inputvalue.fname} onChange={getvalue} />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Lname</Form.Label>
              <Form.Control type="text" name="lname" value={inputvalue.lname} onChange={getvalue} />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={inputvalue.email} onChange={getvalue} />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="text" name="mobile" value={inputvalue.mobile} onChange={getvalue} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} name="message" value={inputvalue.message} onChange={getvalue} />
            </Form.Group>
            <div className='d-flex justify-content-center' >
              <Button variant="primary" className='col-lg-6' type="submit" onClick={sendUserData}>
                Submit
              </Button>
            </div>
          </Form>
          <ToastContainer />
        </div>
      </div>
    </>
  )
}


export default Contact

