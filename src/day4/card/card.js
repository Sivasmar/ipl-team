import React from 'react';
import '../image/image.css';

import CustomProgressBar from '../bootstrap/progressbar';

const teams = [ 
  {
    team: "MUMBAI INDIANS",
    cups: 5,
    source: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2uHlpxBQqBsckpOwzV8XV6qvsm4Ep4Fmzhst7lUtKQruJJAQ_xfrEAZ9peiHKbJfnti0&usqp=CAU",
    button: "See more"
  }, 
  {
    team: "ROYAL CHALLENGERS BANGALORE",
    cups: 1,
    source: "https://i.pinimg.com/236x/a6/40/a6/a640a6cd05dc2dfb58ce3ff3467df677.jpg",
    button: "See more"
  },
  {
    team: "CHENNAI SUPER KINGS",
    cups: 5,
    source: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE4c_Ksfgz7Y3VtxgR9vltd1MSvk0Xkp0dJA&s",
    button: "See more"
  },
  {
    team: "RAJASTHAN ROYALS",
    cups: 1,
    source: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYb1zMpzFMI5K-yKFjDORQpliGHhxMooW94Q&s",
    button: "See more"
  },
  {
    team: "SUNRISES HYDERABAD",
    cups: 2,
    source: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFNUOHxX-5sofC3Iioht3A6_naxWEImhNUKs6eU6xqjxYJjOa1OLc_hxKRkckg_F6bnG2XzSrAsKQpgYpeXPzFkwNLHQwS5xVrYaL7aKn155nR2J0dPCunLn4LrR8d-bLjqfaLhpAG2tGRZF4RuWgblEy_1DhbmszchchOWOs3ZwAZ_Lj-1bT535Ye/s7200/Original%20Sunrisers%20Hyderabad%20PNG-SVG%20File%20Download%20Free%20Download.png",
    button: "See more"
  },
  {
    team: "Gujarat Titans",
    cups: 1,
    source: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAviPjlBbeRYz6ny9-HOVtr9VmyQJ3FXOw60rSy8ye_U_nMy9gPWtgEPpPMAO7va36UX6nyw9BNvWVrC5kwShXJT3V7FtA5HmDO9aAwsBS4iGQWFRQWOX_ltiBkSajurq-ulo_Mu82VYsIMDkIme9jCuqMxKTt0P1fO9bv_tdXBzYj51QgTcD7pz-2/s1024/Original%20Gujarat%20Titans%20Logo%20PNG-SVG%20File%20Download%20Free%20Download.png",
    button: "See more"
  },
  {
    team: "Kolkata Knight Riders",
    cups: 3,
    source: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhw4FPuHDf0g4n2Gaf_prBrTXdS7GO6zGVcS-Lx4ioHzH-HUUGm5gY7Sj2vmy_6HwxtSZ2fojvZrXqCUIljlZy_aenyml7DLwx3mRXTS-qWBHsBFpt85nq8Y7__HB6uK3JystxJDwx0KoLubgsAIWIH6xXoh2nxjLDM2bNV08uHlBj3zy6SQmfSIUuZ/s1024/Original%20Kolkata%20Knight%20Riders%20PNG-SVG%20File%20Download%20Free%20Download.png",
    button: "See more"
  },
  {
    team: "DELHI CAPITALS ",
    cups: 0,
    source: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixNFCNIFm0aH1xUBTkbrLQdE__aSNP32JP1zsee3iJW5va96W_r3qyl486fHQilJQjaVBJt0Fl0xAawdBD4duYEg6Sj-MgCNvVfWuA3UpO4oXBr4qt8WeaaS2Fhtbac8mfzE_euPhJ9hQUVxAgWQDLG1WgrJaSv1I2L4XgNGvFoxrdWQq_LUi82XIw/s944/Original%20Delhi%20Capitals%20Logo%20PNG-SVG%20File%20Download%20Free%20Download.png",
    button: "See more"
  }
];
teams.sort((a,b)=>b.cups-a.cups)

function Card() {
  const Percentage=(input)=>{
    const Base=17
     let percentage = (input/Base)*100
    return percentage
  }
  
  return (
    <div className="App">
      <h1 className='ipl'>IPL TEAMS</h1>
      <div className="cards-container">
        {teams.map((team, index) => (
          <div className="card" key={index}>
            <img  src={team.source} alt={team.team} />
            <div className="info">
              <h2>{team.team}</h2>
              <p>Cups: {team.cups}</p>
              <CustomProgressBar scale={Percentage(team.cups)}/>
              <br/>
              <button>{team.button}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Card;
 