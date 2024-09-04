import { Children } from "react";


const ReusableForm = ({formTitle, handleSubmit, submitBtnText = 'Submit'}) => {

    const handleLocalSubmit = e =>{
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        handleSubmit(data);
    }
    return (
        <div>
            <h2>{formTitle}</h2>
            {/* {Children} */}
            <form onSubmit={handleLocalSubmit}>
                  <input type='text' name='name'></input>
                  <br />
                  <input type='email' name='email'></input>
                  <br />
                  <input type='password' name='password' required></input>
                  <br />
                  <button type='submit' value={submitBtnText}>Submit</button>

            </form>
            
        </div>
    );
};

export default ReusableForm;