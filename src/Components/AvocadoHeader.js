import {Link} from 'react-router-dom';
import logo from './media/avocado_icon.png';
import favatar from './media/avatar-f.png';
import mavatar from './media/avatar-m.png';
import { useState } from 'react';

const AvocadoHeader =({user, setUser})=>{
    const [showOptions, setShowOptions] = useState(false);
    
    const logOut =()=>{
        fetch('/user', {
            method: "PUT",
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify(user),
        })
        .then(()=>{
            localStorage.removeItem('user');
            localStorage.removeItem('expiryDate'); 

            setShowOptions(false);
            setUser(false);
        })
        .catch(console.log);      
    }


    const deleteAccount =(ev)=>{
        setShowOptions(false);

        let passwordCheck = prompt('Sorry to see you leave T-T \n Enter your password to confirm', '');

        if (passwordCheck !== user.password) return  alert('password is not correct');
            
        fetch('/user', {
            method: "DELETE",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(user),
        })
        .then(resp=> resp.json())
        .then(message=> {
            if (message.deleted){
                localStorage.removeItem('user');
                localStorage.removeItem('expiryDate'); 
                setUser(false);
                alert('your account and avocatas were deleted succesfully');
            }else {
                alert("couldn't delete your account, erro:", message.error)
            }
        })
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
                            <p onClick={deleteAccount} style={{color: 'red', marginTop: '10px', cursor:"pointer"}}>
                                Delete Account
                            </p>
                        </div>
                    </div>
                }
            </div>
            
        </header>
    );
}

export default AvocadoHeader;