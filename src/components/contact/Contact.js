import React from 'react'
import './contact.css'
import Back from '../common/back/Back'

const Contact = () => {
    const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7296.159685378053!2d90.38847240000003!3d23.8867873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1661376733709!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  return (
    <div>
        <Back title='Contact Us'/>
        <div className='contact padding'>
            <div className='container shadow flexSB'>
                <div className='left row'>
                    <iframe src={map}></iframe>
                </div>
                <div className='right row'>
                    <h1>Contact Us</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                    <div className='items grid2'>
                        <div className='box'>
                            <h4>Address:</h4>
                            <p>123 west street, suite 751 New York, NY 10016</p>
                        </div>
                        <div className='box'>
                            <h4>Email:</h4>
                            <p>a@abc.com</p>
                        </div>
                        <div className='box'>
                            <h4>Phone:</h4>
                            <p>1234567890</p>
                        </div>
                    </div>

                    <form action=''>
                        <div className='flexSB'>
                            <input type="text" placeholder='Name' />
                            <input type="email" placeholder='Email' />
                        </div>
                        <input type="text" placeholder='Subject' />
                        <textarea cols="30" rows="10">
                            Create a message here...
                        </textarea>
                        <button className='primary-btn'>Send Message</button>
                    </form>

                    <h3>Follow us here</h3>
                    <span>FACEBOOK TWITTER LINKEDIN INSTAGRAM</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
