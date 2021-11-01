import { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';

const LogInPage =({users, setUser})=>{
    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('');
    const [passVisibile, setPassVisible] = useState(false);
    const [toBeRememebered, setToBeRememebered] = useState(false);
    const [userFound, setUserFound] = useState(true);
    const history = useHistory();

    const handleLogging =(ev)=>{
        ev.preventDefault();
        const userMatched = users.find(user=> user.userName === identifier || user.email === identifier);

        if (!userMatched || userMatched.password !== password) return setUserFound(false);
        
        
        fetch('https://avocation.herokuapp.com/user', {
            method: 'PUT',
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify(userMatched),
        })
        .then(()=>{
            userMatched.logged = true;
            setUser(userMatched);

            localStorage.setItem('user', JSON.stringify(userMatched));
            if (toBeRememebered){
                localStorage.setItem('expiryDate', new Date(Date.now() + 60000 * 60 * 48 ).toISOString()); //remembered for two days
            }else {
                localStorage.setItem('expiryDate', new Date(Date.now() + 60000 * 120 ).toISOString()); //2 hours after logging in
            }

            
            history.push('/');
        })
        .catch(console.log);

        
    }
    return (
        <main className="signing">
            <form onSubmit={handleLogging}>

                { userFound || <span className="warning">User name/email or password is not correct or doesn't exist</span> }

                <table>
                    <tbody>

                    <tr>
                        <td> <label htmlFor="identifier">User Name:</label> </td>
                        <td> <input 
                                id='identifier' name="identifier"  placeholder="username or email"
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
                            <input 
                                type={passVisibile? 'text':'password'} name="password" pattern=".{5,}" 
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

                <label style={{fontSize: '17px'}}>
                    <input style={{width: 'auto'}} type="checkbox" checked={toBeRememebered} onChange={()=> setToBeRememebered(!toBeRememebered)}/>
                    Remember Me
                </label>
                <br />
                <br />
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

