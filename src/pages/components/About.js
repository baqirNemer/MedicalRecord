import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import crossImage from './images/cross.png'; 
import ContainedButtons from './Button';

function About() {
    return (
        <div id="welcome" className="container py-5" > 
            <div className="row">
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center" style={{ marginTop: '80px' }}>
                    <h1 className="text-center">ABOUT US</h1>
                    <h3 className="text-center">We have been working in this field for more than 20 years, succeeding in delivering our mission to employees</h3>
                    <p className="text-center">
                        Lorem ipsum dolor sitjhfghjgfhgf amet, consectetur adipisicing elit... (Your text here)Lorem ipsum dolor sit amet, consectetur adipisicing elit... (Your text here)Lorem ipsum dolor sit amet, consectetur adipisicing elit... (Your text here)Lorem ipsum dolor sit amet, consectetur adipisicing elit... (Your text here)Lorem ipsum dolor sit amet, consectetur adipisicing elit... (Your text here)Lorem ipsum dolor sit amet, consectetur adipisicing elit... (Your text here)Lorem ipsum dolor sit amet, consectetur adipisicing elit... (Your text here)Lorem ipsum dolor sit amet, consectetur adipisicing elit... (Your text here)Lorem ipsum dolor sit amet, consectetur adipisicing elit... (Your text here)s
                    </p>
                    <ContainedButtons/>
                </div>
                <div className="col-md-6">
                    <img id="about" src={crossImage} className="img-fluid" alt="Cross Image1" />
                </div>
            </div>
        </div>
    );
}

export default About;
