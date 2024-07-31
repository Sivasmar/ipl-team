import NavBar from "../navbar/navbar";
import "./option.css"
const AboutScreen = () => {
    return(
        <>
        <NavBar/>
        
        <h1>Welcome to AboutScreen</h1>

    
       <select>
        <option style={{backgroundColor:"pink"}} className="option">logo</option>
        <option className="option">home</option>
        <option className="option">about</option>
        <option className="option">login</option>
        <option className="option">email</option>
       </select>
        
        </>
    )
}

export default AboutScreen;