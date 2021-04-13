import  Fade  from 'react-reveal/Fade';
import  Zoom  from 'react-reveal/Zoom';
import  Shake  from 'react-reveal/Shake';
import React from 'react';
import emailjs from 'emailjs-com'
import './Contact.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
   const notify = () => {
      toast.success('🦄 Message has been sent successfully', {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         });
   }
   const handleMessage = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_9q0fufn', 'protfolio_template', e.target,'user_tkQUuztf2oy2UkdmUc2zj')
         .then(result => {
            notify();
         })
      e.target.reset();
   }
   return (
      <div className=" contact_wrapper">
         <div className="container">
         <div className="contact_heading ">
            <div>
               <Zoom left cascade>
                  <h4>Feel </h4>
               </Zoom>
            </div>
            <div>
               <Zoom top cascade>
                  <h4>free </h4>
               </Zoom>
            </div>
            <div>
               <Zoom top cascade>
                  <h4>to </h4>
               </Zoom>
            </div>
            <div>
               <Zoom top cascade>
                  <h4>contact </h4>
               </Zoom>
            </div>
            <div>
               <Zoom right cascade>
                  <h4>with me</h4>
               </Zoom>
            </div>
            </div>
            <div className="form_wrapper shadow-lg rounded">

               <form onSubmit={handleMessage}>
               <ToastContainer />
                  <Fade left>
                  <div
                     className="form-group">
                     <label htmlFor="from_name">Your Name</label>
                        <input
                           name='from_name'
                           className="form-control" type="text" required />
                        
                  </div>
                  </Fade>
                 
               
                  <Fade right>
                  <div
                     className="form-group">
                     <label htmlFor="name">Email address</label>
                        <input
                           name="email"
                           className="form-control" type="email" required />
                        
                  </div>
                  </Fade>
                  <Fade left>
                  <div
                     className="form-group">
                     <label htmlFor="name">Subject</label>
                        <input
                           name="subject"
                           className="form-control" type="text" required />
                        
                  </div>
                  </Fade>
                  
                  <Fade right>
                  <div
                     className="form-group">
                     <label htmlFor="name">Message</label>
                        <textarea className="form-control"
                           name="message"
                           rows="3" placeholder="Write message...." required></textarea>
                        

                  </div>
                  </Fade>

                  <Shake >
                     <button
                        
                        type="submit" className="btn btn-primary px-5"><Zoom top cascade>
                           SEND</Zoom></button>
                           
                  </Shake>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Contact;