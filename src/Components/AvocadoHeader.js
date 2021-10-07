import {Link} from 'react-router-dom';
import logo from '../media/avocado_icon.png';

const AvocadoHeader =({logged, setLogged})=>{

    return (
        <header>
            <Link to="/" ><img alt="logo" src={logo}/></Link>
            <h1>Avocation|</h1>
            <p>your bright side hobbies</p>
            <div className='user'>
                {!logged? 
                <Link to="/log-in" >Log In</Link>:
                <>
                    <p>user avatar</p>
                    <Link to="/" onClick={()=> setLogged(false)}>Log Out</Link>
                </>
                }
            </div>
        </header>
    );
}

export default AvocadoHeader;