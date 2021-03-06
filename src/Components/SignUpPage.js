import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from 'react-router-dom';
import TagInp from './SubComponents/TagInput';
import favatar from './media/avatar-f.png';
import mavatar from './media/avatar-m.png';

const SignUpPage =({users, setUsers})=>{
    
    const [password, setPassword] = useState('');
    const [passVisibile, setPassVisible] = useState(false);
    const [gender, setGender] = useState('');
    const [savedHobbies, setSavedHobbies] = useState(["LETTERATURE", "SINGING", "DRAWING"]);
    const [addedTags, setAddedTags] = useState([]);

    const [passwordMatches, setPasswordMatches] = useState(true);
    const [unameTaken, setUnameTaken] = useState(false);
    const [emailExists, setEmailExists] = useState(false);
    const history = useHistory();
   

    const saveNewHobby =(hobby)=> {
        if (savedHobbies.indexOf(hobby) === -1) setSavedHobbies([...savedHobbies, hobby]);
    }

    const checkMatching =(ev)=>{
        const isMatching = ev.target.value === password;
        setPasswordMatches(isMatching);
        if (!isMatching) ev.target.value = '';
    }

    const checkExistance =(ev)=>{
        const type = ev.target.name;
        const value = ev.target.value;
        if (type === 'userName'){
            if (users.some(user=> user.userName === value)) return setUnameTaken(true);
            setUnameTaken(false);
        } else {
            if (users.some(user=> user.email === value)) return setEmailExists(true);
            setEmailExists(false);
        }
    }

    const handleNewUser =(ev)=>{
        ev.preventDefault();
        
        if (emailExists || unameTaken){
            return alert('plaease correct your data to remove warnings');
        }
        const form = new FormData(ev.target);
        form.append('hobbies', addedTags.join(' '));

        fetch('https://avocation.herokuapp.com/user', {method: "post",body: form,})
        .then((response)=> response.json())
        .then((serverMessage)=> {
            if (serverMessage.message === 'done'){
                setUsers([...users, serverMessage.result]);
                history.push('/log-in');
            } else {
                console.log(serverMessage.message);
            }
        })
        .catch(console.Error)
    }

    return (
        <main className="signing">
            <form onSubmit={handleNewUser} >
                <table>
                    <tbody>

                    <tr>
                        <td> <label htmlFor="name">Name: </label> </td>
                        <td> <input id='name' name="name" required/></td>
                        <td>will apear next to your avatar</td>
                    </tr>

                    <tr>
                        <td> <label htmlFor="userName">User Name:</label> </td>
                        <td>
                            <input 
                                    id='userName' name="userName" placeholder="letters and numbers (no space)" 
                                    pattern="^(?=.*[a-z])(?=.*[0-9])\w*$" required onBlur={checkExistance}
                            />
                        </td>
                        <td> {unameTaken? <span className="warning">already taken, try another</span> :'used to log in'}</td>
                    </tr>

                    <tr className="pass-feild">
                        <td> 
                            <label htmlFor="password">Password:</label> 
                        </td>
                        <td>
                            <input 
                                type={passVisibile? 'text':'password'} name="password" placeholder="at least 5 characters" 
                                pattern="\w{5,}" id='password' required value={password} onChange={(ev)=> setPassword(ev.target.value)}
                            />
                        </td>
                        <td>
                            <button type="button" onClick={()=> setPassVisible(!passVisibile)}> 
                                {passVisibile? "Hide":"Show"}
                            </button>
                        </td>
                    </tr>

                    <tr className="pass-feild">
                        <td> 
                            <label htmlFor="passwordAgain">Confirm Password:</label> 
                        </td>
                        <td>
                            <input
                                type='password' placeholder="at least 5 characters" pattern="^\w{5,}" 
                                id='passwordAgain' onBlur={checkMatching} required
                            />
                        </td>
                        <td>
                            {passwordMatches || <span className="warning">match the password</span>}
                        </td>
                    </tr>

                    <tr>
                        <td> <label htmlFor="Email">Email:</label> </td>
                        <td><input 
                                type="email" name="email" required onBlur={checkExistance}
                                pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" id='Email'        
                            />
                        </td>
                        <td> {emailExists? <span className="warning">already exists, try <Link to="/log-in">logging in</Link></span> :'used to log in'}</td>
                    </tr>

                    <tr>
                        <td> <label htmlFor="birthDate">Date of Birth:</label> </td>
                        <td><input type="date" name='birthDate' max="2014-12-31" required/></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td> <label>Gender:</label> </td>
                        <td className="gender-feild">
                            <label>
                                <input 
                                    type="radio" 
                                    name="gender" 
                                    value="male"
                                    checked={gender === 'male'}
                                    onChange={(ev)=> setGender(ev.target.value)}
                                    required/> 
                                Male 
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    name="gender" 
                                    value="female"
                                    checked={gender === 'female'}
                                    onChange={(ev)=> setGender(ev.target.value)} 
                                    required/>
                                Female 
                            </label>
                        </td>
                        <td></td>
                    </tr>

                    <tr><td></td><td>{gender && <img src={gender === 'male'? mavatar:favatar} alt="avatar"/>}</td><td></td></tr>

                    <tr>
                        <td> <label htmlFor="hobby">Hobbies:</label> </td>
                        <td className="hobbies-feild">
                            <TagInp 
                                savedTags={savedHobbies} 
                                saveTag={saveNewHobby}
                                addedTags={addedTags}
                                setAddedTags={setAddedTags}
                                />
                        </td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
                <button>Sign Up</button>
            </form>
        </main>
    );
}

export default SignUpPage