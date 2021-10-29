import { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';

const LogInPage =({users, setUser})=>{
    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('');
    const [passVisibile, setPassVisible] = useState(false);
    const [userFound, setUserFound] = useState(true);
    const history = useHistory();

    const handleLogging =(ev)=>{
        ev.preventDefault();
        const userMatched = users.find(user=> user.userName === identifier || user.email === identifier);

        if (!userMatched || userMatched.password !== password) return setUserFound(false);
        
        
        fetch('/user', {
            method: 'PUT',
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify(userMatched),
        })
        .catch(console.log);

        userMatched.logged = true;
        setUser(userMatched);
        history.push('/');
    }
    return (
        <main className="signing">
            <form onSubmit={handleLogging}>
                {userFound || <span className="warning">User name/email or password is not correct or doesn't exist</span>}
                <table>
                    <tbody>
                    <tr>
                        <td> <label htmlFor="identifier">User Name:</label> </td>
                        <td> <input id='identifier' name="identifier"  placeholder="username or email"
                                    required value={identifier} onChange={(ev)=> setIdentifier(ev.target.value)}
                            />
                        </td>
                        <td> </td>
                    </tr>

                    <tr className="pass-feild">
                        <td> 
                            <label htmlFor="password">Password:</label> 
                        </td>
                        <td>
                            <input type={passVisibile? 'text':'password'} name="password" pattern=".{5,}" 
                                   id='password' required value={password} onChange={(ev)=> setPassword(ev.target.value)}
                            />
                        </td>
                        <td>
                            <button type="button" onClick={()=> setPassVisible(!passVisibile)}> 
                                {passVisibile? "Hide":"Show"}
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <button>Log In</button>
            </form>

            <p>
                don't have an account yet? 
                <Link to="/sign-up"> sign up </Link>
            </p>
        </main>
    );
}

export default LogInPage

