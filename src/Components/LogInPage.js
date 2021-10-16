import { useState } from 'react';
import {Link} from 'react-router-dom';

const LogInPage =()=>{
    const [password, setPassword] = useState('');
    const [passVisibile, setPassVisible] = useState(false);
    return (
        <main className="signing">
            <form>
                <table>
                    <tbody>
                    <tr>
                        <td> <label htmlFor="userName">User Name:</label> </td>
                        <td> <input id='userName' name="userName" pattern="^(?=.*[a-z])(?=.*[0-9]).*$" required/></td>
                        <td> </td>
                    </tr>

                    <tr className="pass-feild">
                        <td> 
                            <label htmlFor="password">Password:</label> 
                        </td>
                        <td>
                            <input type={passVisibile? 'text':'password'} name="password" pattern="\w{5,}" 
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

//rm -rf .git