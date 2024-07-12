import "./image.css"

const CustomImage=(prop)=>{
     const {properties}=prop;

return(

<>
<h2 class="teams"> <center>IPL TEAMS</center></h2>

<div className="Main">
{
properties.map(eachTeam=>{

const{team, source, cups, button} =eachTeam;

return(

<>
<div className="img" style={{display: "flex"}}> 
    
<div className="child"><h1>{team}</h1></div>

<div className="child"><center><img src={source} width={250} height={200}/></center></div>

 <div className="child"><h3>{cups}</h3></div>

<div className="child"><button>{button}</button></div>

</div>

</>
)
})

}
</div></>);
};
export default CustomImage;