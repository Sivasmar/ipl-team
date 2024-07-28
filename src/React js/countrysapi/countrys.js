import axios from "axios";
import { Component } from "react";


class Country extends Component{
    state={
        country:[],
        loader:true,
        error:false
    }
    cHandler=async()=>{
        try{
            const res=await axios.get("https://restcountries.com/v3.1/all")
            if(res.status===200)
            {
                this.setState({
                    loader:false,
                    country:res.data
                })
            }
        }
        catch(err){
            this.setState({
                error:true,
                loader:false
            })
        }

    }

    componentDidMount(){
        this.cHandler()
    }
    render(){
        return(
            <>
            <h2>COUNTRY NAMES</h2>
            {
                this.state.loader?
                <h2>please wait</h2>:
                
               <center>
                {
                     this.state.country.map((each=><h1>{each.name.common}</h1>))
                }
               </center>
                
            }
            </>
        )
    }
}
export default Country