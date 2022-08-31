import { createGlobalStyle } from "styled-components";

//Lottie

const GlobalStyle = createGlobalStyle`

*{margin:0;
padding: 0;
box-sizing: border-box}

a{
  text-decoration:none;
}

body{



 font-family: 'Nunito Sans', sans-serif;
    color: #484848;
    font-weight: 200;
    letter-spacing: 1px;
 

  box-sizing: border-box;
  background: #ecf0f3;

}


.main-info{
    font-size: 1rem;
}

.App{
  overflow:hidden;
  height:100vh;
}







.btn {
 

  background: #f1f3f6;
  border-radius: 50%;
  box-shadow: 
    inset 0 0 15px rgba(55, 84, 170, 0), 
    inset 0 0 20px rgba(255, 255, 255, 0), 
    10px 10px 18px  rgba(55, 84, 170, 0.15), 
    -10px -10px 22px #fff, 
    inset 0px 0px 4px rgba(255, 255, 255, 0.2);
  transition: 0.4s cubic-bezier(0,.57,.49,1.51);
  cursor: pointer;
}

.btn:hover{
  box-shadow: 
    inset 7px 7px 15px rgba(55, 84, 170, 0.15), 
    inset -7px -7px 20px #fff, 
    0px 0px 4px rgba(255, 255, 255, 0.2),
    5px 5px 22px #fff;
  transform: scale(0.9);
}
.btn-mod {
 

  background: #f1f3f6;
  border-radius: 50%;
  box-shadow: 
    inset 0 0 15px rgba(55, 84, 170, 0), 
    inset 0 0 20px rgba(255, 255, 255, 0), 
    10px 10px 18px  rgba(55, 84, 170, 0.15), 
 
    inset 0px 0px 4px rgba(255, 255, 255, 0.2);
  transition: 0.4s cubic-bezier(0,.57,.49,1.51);
  cursor: pointer;
}

.btn-mod:hover{
  box-shadow: 
    inset 7px 7px 15px rgba(55, 84, 170, 0.15), 
    
    0px 0px 4px rgba(255, 255, 255, 0.2),
   ;
  transform: scale(0.9);
}






.lottie-con{


width: 30rem;
height: 29rem;
border-radius:50%;
position: absolute;
   display:inline-block;
  overflow:hidden;
  z-index: 50;

}

.lottie{
margin: 20%;
  width: 60%;
  height:60%;


}

.lottie:hover{

  filter: none;

}

.location{
position:absolute;
top: 65%;
left: 26%;
width:45%;
font-size:.5rem;

}

@media screen and (max-width: 600px) 
  .location{
position:absolute;
top: 85%;
left: 26%;
width:45%;
font-size:.5rem;
pointer-events:none;

}



.small-lottie{
  width:80%;
  height: 80%;
  overflow:hidden;
background: white;
   z-index:500;

  border-radius:50%;
}

.small-lottie:hover{
  
  opacity:20%;
  transition:opacity 1s;

}


.lottie-overview{
  width:5rem;
  height: 5rem;
}


.lottie-overview-con{
  width:5rem;
  height: 5rem;
  background: white;
  border-radius: 50%;
}



.lottie-info{
  width:4rem;
  height: 4rem;
    overflow: hidden;
      border-radius: 50%;
}
.lottie-info-con{
  display: flex;
  justify-content: center;
  align-items: center;
  width:6rem;
  height: 6rem;
  background: white;
  border-radius: 50%;
  overflow: hidden;
  margin: 5rem;
 

}


.icon-home{
  font-size: 1.5rem;
  background: transparent;
  cursor: pointer;
  padding-right:1rem;
  border: none;
  
}

button,
select,
a{
 -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
 -webkit-tap-highlight-color: transparent;
 -webkit-user-select: none;
 -khtml-user-select: none;
 -moz-user-select: none;
 -ms-user-select: none;
  user-select: none;
}



`;

export default GlobalStyle;
