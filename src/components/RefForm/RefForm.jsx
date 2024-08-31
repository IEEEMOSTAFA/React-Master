import { useEffect, useRef } from "react";


const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    useEffect( () =>{
        nameRef.current.focus();
    }, [])

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                  <input
                  ref={nameRef}
                  type='text' name='name'></input>
                  <br />
                  <input
                  ref={emailRef}
                  defaultValue={'rafiqul@gmail.com'}
                  type='email' name='email'></input>
                  <br />
                  <input
                  ref={passwordRef}
                  type='password' name='phone'></input>
                  <br />
                  <button type='submit' value="Submit">Submit</button>

            </form>
        </div>
    );
};

export default RefForm;