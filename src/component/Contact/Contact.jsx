import './Contact.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const Contact = () => {
    
    const form = useRef()

const sendEmail = (e) => {
    e.preventDefault()

    emailjs
        .sendForm(
            'gmail', 'template_hqow4ii', form.current, 'G0Qhha2jWXJH73zU8')
        .then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again')
            }
        )
}

    return (
        <>
        <section className=" contact" id="contact">
        <div className="heading text-center">
                <h4>Contact</h4>
                
                <h1>Get in touch with me.</h1>
                <div className="bounce">
                <img src="https://img.icons8.com/ios-filled/50/null/down3.png"/>
                </div>
            </div>
        <div className='content grid'> 
        
        <div className='box btn_shadow'>
            
            <div className='contact-form'>
                <form ref={form} onSubmit={sendEmail}> 
                    <ul>
                        <li className='half'>
                            <input type="text" name="name" placeholder='Name' required />
                        </li>
                        <li className='half'>
                            <input type="email" name="email" placeholder='Email' required />
                        </li>
                        <li>
                            <input placeholder="Subject" type="text" name="subject" required />
                        </li>
                        <li>
                            <textarea placeholder="Message" name="message" required ></textarea>
                        </li>
                        <p> Don't hesitate to contact me using this form.
                        </p>
                        
                        <li >
                            <input  type="submit" className="flat-button" value="SEND" />
                            
                        </li>
                        
                    </ul>
                    
                </form>
                
            </div>
           
        </div>
        
        <div className='box btn_shadow'>
        <div className="box btn_shadow info-map">
            Christian Wally Atendido,
            <br/>
            San Buena Cmpnd, Sto Domingo
            Cainta, Rizal <br/>
            <span>christianwallyatendido@gmail.com</span>
        </div>
        
        <div className="map-wrap">
            <MapContainer center={[14.5873307, 121.1155378]} zoom={16}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[14.5873307, 121.1155378]}>
              <Popup>Wally lives here, come over for a cup of coffee :)</Popup>
              </Marker>
            </MapContainer>
        </div>
        </div>
        </div>
        </section>
        </>
    )
}

export default Contact