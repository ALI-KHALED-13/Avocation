import {Link} from 'react-router-dom';
import logo from '../media/avocado_icon.png';
import favatar from '../media/avatar-f.png';
import mavatar from '../media/avatar-m.png';

const AvocadoHeader =({user, setUser})=>{

    return (
        <header>
            <Link to="/" ><img alt="logo" src={logo}/></Link>
            <h1>Avocation|</h1>
            <p>your bright side hobbies</p>
            <div className='user'>
                {!user? 
                <Link to="/log-in" >Log In</Link>:
                <div className="userOptions">
                    <img alt="avatar" src={user.gender === 'male'? mavatar:favatar} width="70"/>
                    <Link to="/" onClick={()=> setUser(false)}>Log Out</Link>
                </div>
                }
            </div>
        </header>
    );
}

export default AvocadoHeader;