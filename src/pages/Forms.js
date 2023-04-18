import React from "react";
import PR from './pictures/Patient Registration Information Form-1.pdf';
import PS from './pictures/Patient Services Agreement.pdf';
import RI from './pictures/Release of Information.pdf';


const Forms = () => {
	var form;
	function stuff(){
		fetch(form).then(response => {
			response.blob().then(blob => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = form;
				alink.click();
			})
		})
	}
	const form1 = () => {
        form = PR
		stuff()
    }
	const form2 = () => {
        form = PS
		stuff()
    }
	const form3 = () => {
        form = RI
		stuff()
    }

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
		<button style = {{backgroundColor: '#cc9767', fontSize: 25, flex: 1,cursor:'pointer', marginLeft: 100, borderRadius:30}} onClick={form1}>
			Patient Registration Form
	    </button>
		<button style = {{backgroundColor: '#cc9767', fontSize: 25, flex: 1, cursor:'pointer', marginLeft: 50, marginRight: 50, borderRadius:30}} onClick={form2}>
			Patient Services Agreement
    	</button>
		
		<button style = {{backgroundColor: '#cc9767', fontSize: 25, flex: 1, cursor:'pointer', marginRight: 100, borderRadius:30}} onClick={form3}>
			Release of Information
    	</button>
	</div>

	
	</div>
);
};

export default Forms;