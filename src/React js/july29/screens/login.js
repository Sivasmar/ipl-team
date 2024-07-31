import LoginForm from "../login/loginpage";
import NavigationBar from "../nav/NavBar";


const Login=()=>{
    return(
        <div >
        <NavigationBar/>
        <center>
            <h2>Login Screen</h2>
            <LoginForm/>
        </center>
        
        </div>
    )
}
export default Login;