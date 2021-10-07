import {Link} from 'react-router-dom';

const ContactFooter =()=>{
    return (
        <footer>
            <Link to="/about">Who We Are</Link>
            <Link to="/contact">Contact Us</Link>
        </footer>
    );
}

export default ContactFooter;