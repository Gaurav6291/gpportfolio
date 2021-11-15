import React from 'react';
import Typed from 'react-typed';
import portfolio_myImg from '../portfolio_myImg.png'
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';


const Header = () => {
    return (
        <>
           
        <div className="header-wraper">
            <div className="main-info">
            <div className="main-info-left">
                <h1 style={{fontSize:"3rem"}}>Hi There 👋, I am <span>Gaurav Parmar</span></h1>
                <Typed 

                    className="typed-text"
                    strings={["Web Development", "Front-end", "Back-end", "Full-stack"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <h2 style={{fontSize:"2.5rem"}}>I'm from Dungarpur, Rajasthan</h2>
                <h3 className="bio">I am a hard-working B.Tech. graduate specialized in Information Technology from CTAE, Udaipur. <br /><br />I enjoy developing websites and web applications. Love to have conversations about anything and everything. <br /><br /> I'm a curious and enthusiastic full-stack web developer with a good foundation in HTML, CSS, Javascript, React, Node etc.</h3>
                <button className="btn-main-offer" onClick={() => window.open("/UpdatedResume.pdf", "_blank")}><GetAppRoundedIcon /> Resume</button>
                </div>
                <img src={portfolio_myImg} alt="sds" />
            </div>
        </div>
         
           
            </>
    )
}

export default Header
