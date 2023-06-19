import React from "react";
import PR from './pictures/Patient Registration Information Form-1.pdf';
import PS from './pictures/Patient Services Agreement.pdf';
import RI from './Release of Information.pdf';


const Forms = () => {
return (
	<div>
		<div style = {{backgroundColor: '#e8ded1', marginTop: -25, height: 'calc(14vw)'}}>
			<div style = {{height: 'calc(4vw)'}} />
			<h1 style = {{textAlign: 'center', fontSize: 'calc(3vw)'}}>
				Forms
			</h1>
		</div>
		<div style = {{textAlign: 'center', marginRight: 100,borderRadius: 20, marginLeft: 100, marginTop: 50, marginBottom: 50, fontSize: 20, backgroundColor: '#d3d3d3'}}>
			In preparation for your first appointment, please print and complete a copy of the Patient Services Agreement as well as the Patient Information page. Copies are also available upon arrival. Please allow 15 minutes to complete this needed paperwork prior to your session time. 
		</div>
	<div style = {{flexOrientation: 'horizontal', display: 'flex', height: 50}}>


		<a href={PR} download="PatinetRegistration.pdf" target='_blank'>
			<button style = {{backgroundColor: '#cc9767', fontSize: 25, flex: 1,cursor:'pointer', marginLeft: 180, borderRadius:30, height: 50}}>
				Patient Registration Form
	    	</button>
		</a>
		
		<a href={PS} download="PatientServicesAgreement.pdf" target='_blank'>
		<button style = {{backgroundColor: '#cc9767', fontSize: 25, flex: 1, cursor:'pointer', marginLeft: 50, marginRight: 50, borderRadius:30, height: 50}}>
			Patient Services Agreement
    	</button>
		</a>
		<a href={RI}>
		<button style = {{backgroundColor: '#cc9767', fontSize: 25, flex: 1, cursor:'pointer', borderRadius:30, height: 50}} >
			Release of Information
    	</button>
		</a>
		
	</div>

	<a href="https://www.drkrogelemdr.com/static/media/Release%20of%20Information.0e36603fdeba3baf8d79.pdf" download>
				</a>

	
	</div>
);
};

export default Forms;
