import { useState } from 'react';
import {Link} from 'react-router-dom';

const LogInPage =()=>{
    const [userName, setUserName] = useState('');
    const [passVisibile, setPassVisible] = useState(false);
    return (
        <main className="signing">
            <form>
                <table>
                    <tbody>

                    <tr>
                        <td> <label htmlFor="userName">user name:</label> </td>
                        <td><input id='userName' name="userName"/></td>
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