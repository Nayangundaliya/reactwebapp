import React from 'react'
import web from '../Img/contact1.svg'
import { useFormik } from 'formik'
import { signUpSchema } from '../schemas'
// import { Action } from '@remix-run/router'

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
}
const Contact = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,

    onSubmit: (values, action) => {
      console.log(values)
      action.resetForm()
    }
  })
  return (
    <div>
      <div className="content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <h3 className="heading ">Let's talk about everything!</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas debitis, fugit natus?</p>
                  <p><img src={web} alt="Image" className="img-fluid" /></p>
                </div>
                <div className="col-md-6 ">
                  <form onSubmit={handleSubmit} className="mb-5 "  id="contactForm" name="contactForm">
                    <div className="row m-5">
                      <div className="col-md-12 form-group">
                        <input type="text"
                          className="form-control"
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          id="name"
                          placeholder="Your name" />
                      </div>
                      {errors.name && touched.name ? (<p className='form-error'>{errors.name}</p>) : null}
                    </div>
                    <div className="row m-5">
                      <div className="col-md-12 form-group">
                        <input type="text"
                          className="form-control"
                          name="email" id="email"
                          placeholder="Email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}/>
                      </div>
                      {errors.email && touched.email ? (<p className='form-error'>{errors.email}</p>) : null}
                    </div>
                    <div className="row m-5" >
                      <div className="col-md-12 form-group">
                        <input type="text"
                          className="form-control"
                          name="subject" id="subject"
                          placeholder="Subject"
                          value={values.subject}
                          onChange={handleChange}
                          onBlur={handleBlur}/>
                      </div>
                      {errors.subject && touched.subject ? (<p className='form-error'>{errors.subject}</p>) : null}
                    </div>
                    <div className="row m-5">
                      <div className="col-md-12 form-group">
                        <textarea
                          className="form-control"
                          name="message" id="message"
                          cols="30" rows="7"
                          placeholder="Write your message"
                          value={values.message}
                          onChange={handleChange}
                          onBlur={handleBlur}></textarea>
                      </div>
                      {errors.message && touched.message ? (<p className='form-error'>{errors.message}</p>) : null}
                    </div>
                    <div className="row m-5">
                      <div className="col-12">
                        <input type="submit" value="Send Message" className="button btn-primary rounded-0 py-2 px-4" />
                        <span className="submitting"></span>
                      </div>
                    </div>
                  </form>
                  {/* <div id="form-message-warning mt-4"></div>
                  <div id="form-message-success">
                    Your message was sent, thank you!
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
