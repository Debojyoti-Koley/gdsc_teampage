import React from "react";

function Services (){
    return(
        <>
        <div className="navbar">
            <a href="./index.html" className="logo"><img src="logo.png" alt="logo" id="logo_img"/></a>
    
            <a className="toggle-button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
    
            <ul className="navbar-dropdown">
                <li>
                    <a href="./boards.html" className="navbar-links">BOARDS</a>
                </li>
                <li>
                    <a href="./societies.html" className="">SOCIETIES</a>
                </li>
                <li>
                    <a href="./team.html" className="navbar-links">TEAM</a>
                    
                </li>
                <li>
                    <a href="./gallery.html" className="navbar-links">GALLERY</a>
                </li>
                <li>
                    <a href="./contact_us.html" className="navbar-links">CONTACT</a>
                </li>
            </ul>
        </div>


        <div className="sectA">
            <div className="partA">
                <h1 className="the_team">The Team</h1>
                <p className="team_para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quis odit similique sed soluta in. 
                </p>
            </div>
            <div className="partB">
                 <img src={require("../vector_assets/work-team.gif")} alt="" />   
            </div>
        </div>
        

        <h1 className="mentor">GDSC MENTOR</h1>
        <hr />

        <div className="mentor_box">
            <div className="menA"></div>
            <div className="menB">
                <h1>Dr. M P PUSPHALATHA</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore est mollitia cumque odio dicta soluta voluptate facilis? Ipsa incidunt voluptatem est autem a maiores porro voluptates sequi ratione adipisci numquam, nostrum veritatis iusto debitis perspiciatis doloribus recusandae minus doloremque modi temporibus quis perferendis tenetur aspernatur! Ea sapiente officiis labore, enim vitae cum nulla quaerat corporis.</p>
            </div>
        </div>

        <div className="community_box">
            <div className="comA"></div>
            <div className="comb">
                <h1></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore est mollitia cumque odio dicta soluta voluptate facilis? Ipsa incidunt voluptatem est autem a maiores porro voluptates sequi ratione adipisci numquam, nostrum veritatis iusto debitis perspiciatis doloribus recusandae minus doloremque modi temporibus quis perferendis tenetur aspernatur! Ea sapiente officiis labore, enim vitae cum nulla quaerat corporis.</p>
            </div>
        </div>

        <h1 className="exe_h1">EXECOM</h1>
        <hr />

        <div className="execom">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-xm-12">col</div>
                    <div class="col-sm-6 col-xm-12">col</div>  
                </div>
            </div>
        </div>


        <h1 className="tech_h1">TECHNICAL TEAM</h1>

        <h2 className="sub_heading">TECH ADVISOR</h2>
        <div className="execom">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-xm-12">col</div>
                    <div class="col-sm-6 col-xm-12">col</div>  
                </div>
            </div>
        </div>

        <h2 className="sub_heading">MACHINE LEARNING</h2>

        <div className="execom">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-xm-12">col</div>
                    <div class="col-sm-6 col-xm-12">col</div>  
                </div>
            </div>
        </div>

        
        

        </>
    )
}

export default Services;