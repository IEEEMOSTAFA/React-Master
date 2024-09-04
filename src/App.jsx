
import './App.css'
import GrandPa from './components/GrandPa/GrandPa'
// import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {
  
//   const handleSignUpSubmit = data =>{
//     // e.preventDefault();
//     console.log('Sign up data',data);
// }
// const handleUpdateProfile = data =>{
//   // e.preventDefault();
//   console.log('Update Profile', data)
// }
  return (
    <>
      
      <h1>Form Master</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm 
      formTitle={'Sign Up'}
       handleSubmit={handleSignUpSubmit}>
         <div>
          <h2>Sign UP</h2>
          <p>Please Sign Up Right Now</p>
         </div>
       </ReusableForm>
      <ReusableForm 
      formTitle={'Profile Update'} 
      handleSubmit={handleUpdateProfile} 
      submitBtnText='Update'>
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile updated</p>
        </div>
      </ReusableForm> */}
      <GrandPa></GrandPa>
      
    </>
  )
}

export default App
