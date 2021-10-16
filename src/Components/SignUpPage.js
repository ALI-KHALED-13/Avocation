import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import TagInp from './SubComponents/TagInput';
import favatar from '../media/avatar-f.png';
import mavatar from '../media/avatar-m.png';

const SignUpPage =()=>{
    const [password, setPassword] = useState('');
    const [passVisibile, setPassVisible] = useState(false);
    const [passwordMatches, setPasswordMatches] = useState(true);
    const [savedHobbies, setSavedHobbies] = useState(["LETTERATURE", "SINGING", "DRAWING"]);
    const [addedTags, setAddedTags] = useState([]);
    const history = useHistory();
    const [gender, setGender] = useState('');

    const saveNewHobby =(hobby)=> {
        if (savedHobbies.indexOf(hobby) === -1) setSavedHobbies([...savedHobbies, hobby]);
    }

    const checkMatching =(ev)=>{
        const isMatching = ev.target.value === password;
        setPasswordMatches(isMatching);
        if (!isMatching) ev.target.value = '';
    }

    const handleNewUser =(ev)=>{
        ev.preventDefault();
        const form = new FormData(ev.target);
        form.append('hobbies', addedTags.join(' '));

        fetch('/add-user', {method: "post",body: form,})
        .then((response)=> response.json())
        .then((serverMessage)=> {
            if (serverMessage.message === 'done'){
                history.push('/log-in');
            } else {console.log('did you sign up before?')}
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
                        <td> <input id='userName' name="userName" placeholder="letters and numbers" pattern="^(?=.*[a-z])(?=.*[0-9]).*$" required/></td>
                        <td> needed to log in</td>
                    </tr>

                    <tr className="pass-feild">
                        <td> 
                            <label htmlFor="password">Password:</label> 
                        </td>
                        <td>
                            <input type={passVisibile? 'text':'password'} name="password" placeholder="at least 5 characters" 
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
                            <input type='password' placeholder="at least 5 characters" pattern="^\w{5,}" 
                                  id='passwordAgain' onBlur={checkMatching} required
                            />
                        </td>
                        <td>
                            {passwordMatches || <span className="warning">match the password</span>}
                        </td>
                    </tr>

                    <tr>
                        <td> <label htmlFor="Email">Email:</label> </td>
                        <td><input type="email" id='Email' name="email" pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" required/></td>
                        <td></td>
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

                    <tr><td></td> <td>{gender && <img src={gender === 'male'? mavatar:favatar} alt="avatar"/>}</td> <td></td></tr>

                    <tr >
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