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
					<button style = {{backgroundColor: '#fce4c9', fontSize: 25, flex: 1,cursor:'pointer',borderRadius:20, marginTop: 60}}>
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
					Dr. JulieAnn Krogel
				</h1>
				<p style = {{textAlign: 'Left', marginLeft: 80, marginRight: 80}}>
				Are you ready to make a personal break through and move forward in your life? Do feel lost or stuck with your problems? Do you feel so overwhelmed and triggered sometimes that it is hard to do the things you know you should? We all get stuck sometimes and can benefit from expert professional help so we can heal from the negative experiences that hold us back and take charge of our lives.
				</p>
				<p style = {{textAlign: 'Left', marginLeft: 80, marginRight: 80}}>
I would like to introduce you to the powerful healing method of Eye Movement Desensitization and Reprocessing Therapy (EMDR). Our lives are shaped by our experiences and negative life experiences can have a very damaging a lasting effect on how we feel, thing, and act. Nearly everyone goes through emotionally scaring life experiences at some point. Some common examples of these are experiences of abandonment, betrayal, humiliation, bullying, failure, abuse, and mortal danger. EMDR Therapy directly targets the neural networks where this learning is stored in the brain and helps it heal from these scaring events. Unlike traditional talk therapy that can take months, EMDR is direct and efficient and can resolve issues much more completely sometimes in just a few extended sessions.
				</p>
				<p style = {{textAlign: 'Left', marginLeft: 80, marginRight: 80}}>
I am a specialist in EMDR Therapy with advanced training and years of clinical experience. I work with a wide range of mental health issues and have over 15 years of clinical experience. I would like to invite you to join me and learn to cope with the feelings that overwhelm you and get past the things that hold you back.
				</p>
			</div>
		</div>
	</div>
	
);
};

export default Home;
