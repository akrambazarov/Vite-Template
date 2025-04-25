import './App.css'
import './index.css'
function Footer(){
    return(
        <footer className="footer .pad-container container">
        <div className="footer-container">


            <div className="footer-section">
                <h3>Our menu</h3>
                <ul>
                    <li><a href="#breakfast">Breakfast</a></li>
                    <li><a href="#lunch">Lunch</a></li>
                    <li><a href="#dinner">Dinner</a></li>
                </ul>
            </div>

            <div className="footer-section">
                <h3>Information</h3>
                <ul>
                    <li><a href="#about">About us</a></li>
                    <li><a href="#testimonial">Testimonial</a></li>
                    <li><a href="#event">Event</a></li>
                </ul>
            </div>


            <div className="footer-section">
                <h3>Useful Links</h3>
                <ul>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#support">Support</a></li>
                    <li><a href="#conditions">Conditions</a></li>
                </ul>
            </div>

            <div className="footer-section">
                <h3>Social Handles</h3>
                <ul>
                    <li><a href="#facebook">Facebook</a></li>
                    <li><a href="#twitter">Twitter</a></li>
                    <li><a href="#youtube">Youtube</a></li>
                </ul>
            </div>
        </div>
        
    </footer>
    )
}
export default Footer