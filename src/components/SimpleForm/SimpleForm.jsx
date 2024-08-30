import React from 'react';

const SimpleForm = () => {

    // const handleSubmit = e =>{
    //     console.log('form submitted');
    // }


    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent the default form submission behavior
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log('form submitted');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                  <input type='text' name='name'></input>
                  <br />
                  <input type='email' name='email'></input>
                  <br />
                  <input type='text' name='phone'></input>
                  <br />
                  <button type='submit' value="Submit">Submit</button>

            </form>
        </div>
    );
};

export default SimpleForm;