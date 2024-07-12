// import logo from './logo.svg';
import './App.css';
import Header from './day4/header/header';
import CustomImage from './day4/image/image';
import Footer from './day4/footer/footer';
import iplData from './day4/image/imageList.js';

const App = () =>{
 return (
  <div>
    <Header/>
    <CustomImage properties={iplData}></CustomImage>
    <Footer/>

  </div>
 )
};
  
export default App;