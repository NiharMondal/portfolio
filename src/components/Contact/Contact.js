import  Fade  from 'react-reveal/Fade';
import  Zoom  from 'react-reveal/Zoom';
import  Shake  from 'react-reveal/Shake';
import React from 'react';
import emailjs from 'emailjs-com'
import './Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Grid } from '@material-ui/core';
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
      <Grid container
         className="contact_wrapper">
         <Grid item md={3}></Grid>
         <Grid item md={6} sm={12} xs={12} className="p-1">
            <div className="contact_header">
               <Zoom left cascade>
                  <h3>Get </h3>
               </Zoom>
               <Zoom left cascade>
                  <h3>in </h3>
               </Zoom>
               <Zoom left cascade>
                  <h3>Touch </h3>
               </Zoom>
            </div>
            <form onSubmit={handleMessage}
               className="p-3 shadow-lg">
               <ToastContainer/>
               <Fade top>
                  <div className="form-group">
                     <label htmlFor="name">
                     Your Name</label>
                     <input type="text"
                        name="name"
                        className="form-control"
                        required
                     />
                  </div>
               </Fade>
               <Fade right>
                  <div className="form-group">
                     <label htmlFor="email">
                     Email Address</label>
                     <input type="email"
                        name="email"
                        className="form-control"
                        required
                     />
                  </div>
               </Fade>
               <Fade left>
                  <div className="form-group">
                     <label htmlFor="subject">
                     Subject</label>
                     <input type="text"
                        name="subject"
                        className="form-control"
                        required
                     />
                     
                  </div>
               </Fade>
               <Fade right>
                  <div className="form-group">
                     <label htmlFor="message">
                     Message</label>
                     <textarea
                        name="message"
                        className="form-control" rows="3"
                        placeholder="Write message...."
                        required
                     >
                     </textarea>
                  </div>
               </Fade>
               <Shake>
                  <button type="submit"
                     className="btn btn-info px-5">
                     <Zoom top cascade>
                        SEND
                     </Zoom>
                  </button>
               </Shake>
            </form>
         </Grid>
         <Grid item md={3}></Grid>

      </Grid>
   );
};

export default Contact;