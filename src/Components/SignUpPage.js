import { useState } from "react";
const SignUpPage =()=>{
    const [passVisibile, setPassVisible] = useState(false);

    return (
        <main className="signing">
            <form>
                <table>
                    <tbody>

                    <tr>
                        <td> <label htmlFor="name">Name: </label> </td>
                        <td><input id='name' name="name"/></td>
                        <td>will apear next to your avatar</td>
                    </tr>

                    <tr>
                        <td> <label htmlFor="userName">User Name:</label> </td>
                        <td><input id='userName' name="userName"/></td>
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
                    </tr>

                    <tr>
                        <td> <label htmlFor="Email">Email:</label> </td>
                        <td><input type="email" id='Email' name="email"/></td>
                    </tr>

                    <tr>
                        <td> <label htmlFor="birthDate">Date of Birth:</label> </td>
                        <td><input type="date" id='birthDate' max="2014-12-31"/></td>
                    </tr>
                    <tr>
                        <td> <label>Gender:</label> </td>
                        <td className="gender-feild">
                            <label><input type="radio" name="gender" /> Male </label>
                            <label><input type="radio" name="gender" /> Female </label>
                        </td>
                    </tr>
                    <tr >
                        <td> <label htmlFor="hobby">Hobbies:</label> </td>
                        <td className="hobbies-feild">
                            <label><input type="checkbox"/>Singing</label>
                            <label><input type="checkbox"/>Drawing</label> <br />
                            <label><input type="checkbox"/>playing an instrument</label> <br />
                            <label><input type="checkbox"/>Letterature</label>
                            <label><input type="checkbox"/> other </label>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <button>Sign Up</button>
            </form>
        </main>
    );
}

export default SignUpPage