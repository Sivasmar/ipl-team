// import logo from './logo.svg';
import './App.css';
// import Siva from './component/button/button';
// import Image from './component/image/image';
// import { jacketData } from './component1/image/image';
// import List from './component2/list/list';
// import Order from './component2/list/unorder';
// import Customimage from './component1/image/image';
import iplData from './component3/ipl/data ipl';
import { Heading3 } from './component3/heading/heading';
import { Heading4 } from './component3/heading/heading';
import Customimage from './component3/image/image';
const App = () =>(
  iplData.map(eachdata=>{
    return (
      <div>
        <center>  
        <Heading3 title={eachdata.team}></Heading3>
        <Customimage 
        source = {eachdata.source }  alt="iplteam"
        width={100}
        height={100}
        />
         <Heading4 trophy={eachdata.cups}></Heading4>
        </center>
      </div>
    )
  })



  // <div>
  //   <Customimage></Customimage>
  //   <Customimage></Customimage>
  // </div>
);
  
    
    
      

  
  
export default App;