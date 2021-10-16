import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import TagInp from './SubComponents/TagInput';

const SignUpPage =()=>{
    const [passVisibile, setPassVisible] = useState(false);
    const [savedHobbies, setSavedHobbies] = useState(["LETTERATURE", "SINGING", "DRAWING"]);
    const [addedTags, setAddedTags] = useState([]);
    const history = useHistory();

    const saveNewHobby =(hobby)=> {
        if (savedHobbies.indexOf(hobby) === -1) setSavedHobbies([...savedHobbies, hobby]);
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
                        <td> <input id='name' name="name"/></td>
                        <td>will apear next to your avatar</td>
                    </tr>

                    <tr>
                        <td> <label htmlFor="userName">User Name:</label> </td>
                        <td> <input id='userName' name="userName"/></td>
                        <td> needed to log in</td>
                    </tr>

                    <tr className="pass-feild">
                        <td> 
                            <label htmlFor="password">Password:</label> 
                        </td>
                        <td>
                            <input type="password" id='password' name="password"/>
                        </td>
                        <td>
                            <button type="button"> {passVisibile? "Hide":"Show"}</button>
                        </td>
                    </tr>

                    <tr className="pass-feild">
                        <td> 
                            <label htmlFor="passwordAgain">Confirm Password:</label> 
                        </td>
                        <td>
                            <input type="password" id='passwordAgain' />
                        </td>
                        <td></td>
                    </tr>

                    <tr>
                        <td> <label htmlFor="Email">Email:</label> </td>
                        <td><input type="email" id='Email' name="email"/></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td> <label htmlFor="birthDate">Date of Birth:</label> </td>
                        <td><input type="date" name='birthDate' max="2014-12-31"/></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td> <label>Gender:</label> </td>
                        <td className="gender-feild">
                            <label><input type="radio" name="gender" value="male" /> Male </label>
                            <label><input type="radio" name="gender" value="female"/> Female </label>
                        </td>
                        <td></td>
                    </tr>
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