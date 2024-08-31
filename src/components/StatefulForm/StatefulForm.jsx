import { useState } from "react";


const StatefulForm = () => {
    const [name, setName] = useState('Md');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be 6 character or longer');
        }
        else {
            setError('');
            console.log(name, email, password);
        }


    }
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        // console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        // console.log(e.target.value);
        setPassword(e.target.value);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={name}
                    onChange={handleNameChange}
                    type='text' name='name'></input>
                <br />
                <input
                    onChange={handleEmailChange}
                    type='email' name='email'></input>
                <br />
                <input
                    onChange={handlePasswordChange}
                    type='password' name='password' required ></input>
                <br />
                <button type='submit' value="Submit">Submit</button>
                <br />
                {
                    error && <p>{error}</p>
                }

            </form>
        </div>
    );
};


export default StatefulForm;