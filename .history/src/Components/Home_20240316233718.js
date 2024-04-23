// import Navbar from './Navbar.js';
// import Homecss from './Home.css';
import Profile from './cards.js';



function body(){
    return(
      <div>
      {main1()}
      {main2()}
      {main3()}
      </div>
    )
}

function main1(){

    return(
        <div className='main1'>
        <div className='image'>
        <img src='https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt="imgg"></img>
        </div>
        <div className='heading'>
         <h1>Let us find your Food.</h1>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
         <div className='button-container'>
         <button className='first' >Search Now</button>
         <button className='second-button'>Know more</button>
         </div>
        </div>
        </div>
    )
}

function main2(){
return(

<div className='main2'>
<div className="main2-container">

    <div className='main2-1'>
    <img src ="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="img">
    </img>
    <div className="text">
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
    <button className="button">
    Get in Touch
    </button>
    </div></div>
    </div>
    </div>
    )
}
function main3(){

    return(
        <div>
        <Profile /></div>
    )
}
function Home(){
    return(
        <div>
            
            {body()}
        </div>
    )
}
export default Home;