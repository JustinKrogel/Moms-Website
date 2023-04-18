import React from 'react';
import office from './pictures/Office5.jpg';
import logo from './pictures/logo.png';
import portrait from './pictures/JA Headshot.jpg';
const Home = () => {
return (
	<div>

		<div style={{ backgroundImage: `url(${office})`, backgroundRepeat: 'no-repeat', width: '100%', backgroundSize: 'cover', height: '10%'}}>
		<img style = {{ width: '50%',display: 'block', marginLeft:'auto',marginRight:'auto'}} src = {logo} alt="Logo" />
    	</div>

		<div style = {{flexDirection: 'horizontal', display: 'flex', textAlign: 'center'}}>
			<div style = {{flex:1, backgroundColor: '#a97a5b', height: 200}} >
				<p>
				
				</p>
			</div>

			<div style = {{flex:1, backgroundColor: '#cc9767', textAlign: 'center', height: 200}}>
				<p>
					
				</p>

				<a href = 'mailto:drkrogel@gmail.com?subject=Appointment&body=Please%20provide%20the%20following%20information%20and%20Dr.%20Krogel%20will%20respond%20to%20you.%0d%0aName%0d%0aPhone%20Number%0d%0aEmail%20Address%0d%0aBest%20Time%20to%20Contact%20You%0d%0aWho%20is%20referring%20you%20or%20How%20did%20you%20hear%20about%20Dr.%20Krogel%0d%0aWhat%20services%20are%20you%20requesting%3F%0d%0aOther%20Questions%3F'>
					<button style = {{backgroundColor: '#fce4c9', fontSize: 25, flex: 1,cursor:'pointer',borderRadius:20}}>
						Make An Appointment
	   				 </button>
				</a>

			</div>

			

			<div style = {{flex:1, backgroundColor: '#fce4c9', height: 200}}>
				<p>
					
				</p>
			</div>
		</div>

		<div style = {{flexDirection: 'horizontal', display: 'flex', textAlign: 'center', marginTop: 100}}>
			<img style = {{flex:1, marginLeft: 50, width: '35%', borderRadius: 30}} src = {portrait} alt="React Image" />
			<div style = {{flex: 3}}>
				<h1>
					Doc Krogel
				</h1>
				<p>
					meow meow
				</p>
			</div>
		</div>
	</div>
	
);
};

export default Home;
