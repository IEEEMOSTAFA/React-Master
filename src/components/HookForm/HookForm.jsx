import useInputState from "../../hooks/useInputState";


const HookForm = () => {

    // const [name, handleNameChange] = useInputState('Rojoni hooked')
    const emailState =useInputState('rogoni@gmail.com')
    const handleSubmit = e => {
        console.log('form data', emailState.value);
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                  {/* <input value={name} onChange={handleNameChange} type='text' name='name'></input> */}
                  <br />
                  <input {...emailState} type='email' name='email'></input>
                  <br />
                  <input type='password' name='password'></input>
                  <br />
                  <button type='submit' value="Submit">Submit</button>

            </form>
        </div>
    );
};

export default HookForm;