import React, { useRef } from 'react';
import outside from './pictures/exterior.JPG';
import {FaPhoneAlt} from "react-icons/fa"
const Contact = () => {

	var icon = <FaPhoneAlt size = {25}/>
return (
	<div>
		<div style = {{backgroundColor: '#e8ded1', marginTop: -25, height: 'calc(14vw)'}}>
			<div style = {{height: 'calc(4vw)'}} />
			<h1 style = {{textAlign: 'center', fontSize: 'calc(3vw)'}}>
				Contact Information
			</h1>
		</div>
	
	<div style = {{flexOrientation: "horizontal", display: 'flex', marginTop: 100}}>
		<div style = {{flex:1}}>
			<img style = {{marginLeft: 100, width: 'calc(40vw)', borderRadius: 20}} src = {outside} alt="My Office" />
		</div>
		<div style = {{flex: 1, textAlign: 'center',marginTop: 'calc(3vw)', fontSize: 25}}>
		<p>JulieAnn Krogel, Ph.D. </p>
		<p> {icon} :  (865) 227-9364</p>
		<p>Fax: (865) 220-0782</p>
		<p>drkrogel@gmail.com</p>




		<a href = 'mailto:drkrogel@gmail.com?subject=Appointment&body=Please%20provide%20the%20following%20information%20and%20Dr.%20Krogel%20will%20respond%20to%20you.%0d%0aName%0d%0aPhone%20Number%0d%0aEmail%20Address%0d%0aBest%20Time%20to%20Contact%20You%0d%0aWho%20is%20referring%20you%20or%20How%20did%20you%20hear%20about%20Dr.%20Krogel%0d%0aWhat%20services%20are%20you%20requesting%3F%0d%0aOther%20Questions%3F'>
		<button style = {{backgroundColor: '#cc9767', fontSize: 25, flex: 1,cursor:'pointer', borderRadius:20}}>
			Make An Appointment
	    </button>
		</a>

		</div>

		

		</div>
		<div style = {{flexOrientation: "horizontal", display: 'flex', marginTop: 100}}>
			<div style = {{flex: 1, textAlign: 'center', fontSize: 25}}>
				<p> 
				Oak Ridge Psychotherapy
				</p>
				<p>
				679 Emory Valley Rd. Ste. B
				</p>
				<p>
				Oak Ridge, TN 37830
				</p>
			</div>

			<div style = {{flex:1}}>
				<div className="google-map-code" style = {{width: '50%'}}>
          			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3226.9491829200488!2d-84.2265956852438!3d36.02153431884156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885c339c242c7469%3A0xa746eda1065a3cee!2sOak%20Ridge%20Psychotherapy%20Practice!5e0!3m2!1sen!2sus!4v1677116504584!5m2!1sen!2sus"  style = {{width: 'calc(40vw)',height:'calc(30vw)', borderWidth: 0}}></iframe>
    			</div>
			</div>

		</div>
	
	
	</div>
);
};

export default Contact;
