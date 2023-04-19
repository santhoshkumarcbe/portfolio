import React from "react";
import './main.css';
import sample from "./sound/sample.wav"



function Home() {
 
  let check =0;
 
  function play(){
    if(check===0){
      new Audio(sample).play();
       check++;
  }




  }
  
    return(
      
        <div>
          <button className="btn" onClick={play}>Play Sound</button>
        
        <section className="stage">
        <h1 className="heading"><b>KSK's portfolio room</b></h1>
      <div id="home" className="div">
        <p id="homep" className="p">Home</p>
      </div>
      <div className="div" id="about">
        <p className="p">Projects</p>
      </div>
      <div id="home" className="div">
        <p id="homep" className="p">About</p>
      </div>


      <div className="div" id="gallery">
        <p className="p">Gallery</p>
      </div>
      <div className="div" id="contact">
        <p className="p">Contact</p>
      </div>
    </section>

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

     {/* 3d macbook */}
     {/* <div className="macbook">
      <div className="inner">
        <div className="screen">
          <div className="face-one">
            <div className="camera"></div>
            <div className="display">
              <div className="shade"></div>
            </div>
            <span>MacBook Air</span>
          </div>
          <img src="http://www.clker.com/cliparts/i/s/H/f/4/T/apple-logo-white.svg" className="logo" alt="Apple logo" />
        </div>
        <div className="body">
          <div className="face-one">
            <div className="touchpad"></div>
            <div className="keyboard">
              {[...Array(70)].map((_, index) => (
                <div key={index} className={`key ${index === 62 ? 'space' : ''} ${index >= 63 ? 'f' : ''}`}></div>
              ))}
            </div>
          </div>
          <div className="pad one"></div>
          <div className="pad two"></div>
          <div className="pad three"></div>
          <div className="pad four"></div>
        </div>
      </div>
      <div className="shadow"></div>
    </div> */}
    <div className='links'>
      <a href="https://www.linkedin.com/in/santhoshkumarcbe35" target="_blank">linkedin</a>
      <a href="mailto:santhoshkumarcbe35@gmail.com">contact </a>
    </div>





{/* CSS Gradient Background Animation */}

<div className="d-flex flex-column justify-content-center w-100 h-100">

	<div className="d-flex flex-column justify-content-center align-items-center">
		<h1 className="fw-light text-white m-0"></h1>
		<div className="btn-group my-5">

			{/* <a href="https://codepen.io/P1N2O/full/pyBNzX" class="btn btn-outline-light">FULL SCREEN <i class="fas fa-expand ms-2"></i></a> */}
		</div>
		{/* <a href="https://manuel.pinto.dev" class="text-decoration-none">
			<h5 class="fw-light text-white m-0">— —</h5>
		</a> */}
	</div>



  <div className="container">
  <div className="row">
    <div className="col-md-12 text-center">
      <h3 className="animate-charcter"> Projects </h3>
    </div>
  </div>

{/* sync laundry */}

<h2>SYNC LAUNDRY</h2>
<p>The main motive of this project is to set <b>ANY TIME LAUNDRY (ATL)</b> in various places and to provide door step laundry services to the people </p>

<button className="btn">
<a className="btn" href="https://bit.ly/synclaundry"> View site </a>
</button>

<br></br>
<br></br>


<h2>DEVICE MONITOR</h2>
<p>
This product's main aim is to monitor various machinaries in industry to analyse performance, 
automatic error alert to service manager, automatic error repair and analysation data is displayed in website

 </p>
 <button className="btn">
<a className="btn" href="https://bit.ly/devicemonitor"> View site </a>
</button>
<br></br>
<br></br>

<h2>ORDER TO REACH</h2>
<p>
This is our first web page created with HTML ,css and Javascript which aims in providing food delivery
 </p>
<button className="btn">
<a className="btn" href="https://bit.ly/ordertoreach"> View site </a>
</button>

<br></br>
<br></br>
 <h2>REOTO</h2>
<p>Audio compatible device which lowers the high frequency decibals to low frequency and vice-versa</p>
<br></br>
<br></br>
<h2>SMART AGRO BOT</h2>
<p>AGROBOT a farmer's friend in various forms with crop monitor</p>



<br></br>
<br></br>


      <h3 className="animate-charcter">CONSULTANCY WORKS FOR INDUSTRY </h3>
 
      <h2>AUTO SPRINK</h2>
      <p className="vguard" >Automatic lawn Sprinkler irrigation with mobile app control which can able to detect current soil moisture level, 
      rain , temperature and humidity in the surroundings.
        When the moisture level is decreased our device automatically turn on solenoid valve for irrigation. We implemented this 
        product to <b>Vguard Industries limited.</b>
      </p>

<br></br>
<br></br>

<h2>LMS Webpage</h2>
      <p className="vguard" >We as a team of four members developed Learning Management System (LMS) to V-guard industries limited. Look at our demo page here
      

      
<button className="btn">
<a className="btn" href="https://bit.ly/vguardlearning"> View site </a>
</button></p>

<br></br>
      <img className="vguardimg" src="" alt="vguard"
      width="60%" heigth='100%'
      />
    
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>


<a className="contact" href="mailto:santhoshkumarcbe35@gmail.com">contact </a>
<h1>About</h1>

<h1>
  <span>There &nbsp; </span>
  <span> are &nbsp;</span>
  <span> no &nbsp;</span>
  <span> limits &nbsp;</span>
  <span> to &nbsp;</span>
  <span> what &nbsp;</span>
  <span>you &nbsp;</span>
  <span>can&nbsp; </span>
  <span>accomplish, &nbsp;</span>
  <span>except &nbsp;</span>
  <span>the &nbsp; </span>
  <span>limits &nbsp;</span>
  <span>you &nbsp;</span>
  <span>place &nbsp;</span>
  <span>on &nbsp;</span>
  <span>your &nbsp;</span>
  <span>own &nbsp;</span>
  <span>thinking. &nbsp;</span>
</h1>
</div>
</div>



{/* macbook left  */}

    {/* <div className="macbook1">
      <div className="inner">
        <div className="screen">
          <div className="face-one">
            <div className="camera"></div>
            <div className="display">
              <div className="shade"></div>
            </div>
            <span>MacBook Air</span>
          </div>
          <img src="http://www.clker.com/cliparts/i/s/H/f/4/T/apple-logo-white.svg" className="logo" alt="Apple logo" />
        </div>
        <div className="body">
          <div className="face-one">
            <div className="touchpad"></div>
            <div className="keyboard">
              {[...Array(70)].map((_, index) => (
                <div key={index} className={`key ${index === 62 ? 'space' : ''} ${index >= 63 ? 'f' : ''}`}></div>
              ))}
            </div>
          </div>
          <div className="pad one"></div>
          <div className="pad two"></div>
          <div className="pad three"></div>
          <div className="pad four"></div>
        </div>
      </div>
      <div className="shadow"></div>
    </div> */}
    
    <div className='links'>
      <a href="https://www.linkedin.com/in/santhoshkumarcbe35" target="_blank">linkedin</a>
      <a href="mailto:santhoshkumarcbe35@gmail.com">contact </a>
    </div>



    {/* Magic Card */}

    <div >
    <a className="card" href="https://www.github.com/santhoshkumarcbe" target="_blank">github is here</a>
</div>



{/* <embed src="/html/Kalimba.mp3" loop="true" autostart="true" width="2" height="0" /> */}

<bgsound src = "C:\Users\SANTHOSHKUMAR K\Downloads\Aga Naga.mp3"/>
      <p>Plays sound file in the background.</p>



</div>     
    )
}
export default Home