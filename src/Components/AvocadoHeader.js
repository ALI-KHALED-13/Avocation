import {Link} from 'react-router-dom';
import logo from '../media/avocado_icon.png';
import favatar from '../media/avatar-f.png';
import mavatar from '../media/avatar-m.png';
import { useState } from 'react';

const AvocadoHeader =({user, setUser})=>{
    const [showOptions, setShowOptions] = useState(false);
    const logOut =()=>{
        setUser(false);
        setShowOptions(false);
    }

    return (
        <header>
            <Link to="/" ><img alt="logo" src={logo}/></Link>
            <h1>Avocation|</h1>
            <p>your bright side hobbies</p>
            <div className='user'>
                {
                !user? 
                <Link to="/log-in" >Log In</Link>:
                <div className="userAvatar">
                    <img 
                        alt="avatar" 
                        src={user.gender === 'male'? mavatar:favatar}
                        onClick={()=>setShowOptions(!showOptions)}
                    />
                    
                    <div className={(showOptions? 'show ':'') + 'userOptions'}>
                        <h3>@{user.userName}</h3>
                        <Link to="/" onClick={logOut}>Log Out</Link>
                    </div>
                </div>
                }
            </div>
        </header>
    );
}

export default AvocadoHeader;