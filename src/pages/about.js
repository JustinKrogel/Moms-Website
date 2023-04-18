import React from "react";
import face from './pictures/JA Headshot.jpg';
const About = () => {
return (
	<div>
		<div style = {{backgroundColor: '#e8ded1', marginTop: -25, height: 'calc(14vw)'}}>
			<div style = {{height: 'calc(4vw)'}} />
			<h1 style = {{textAlign: 'center', fontSize: 'calc(3vw)'}}>
				About Me
			</h1>
		</div>
			<div style = {{flexDirection: 'horizontal', display: 'flex', marginTop: 'calc(7vw)'}}>
		
			<div style = {{flex:1}}/>
			<img style = {{flex: 4,width: '25%', borderRadius: 30}} src = {face} alt="Juliann Krogel" />
			<div style = {{flex:1}} />
			<div style={{flex: 6, textAlign: 'center'}}>
		
				<div style = {{width: '75%', textAlign: 'left', fontSize: 'calc(1.2vw)'}}>
					<h1 style ={{}}>
						Dr. Krogel
					</h1>
					<p>
						JulieAnn Krogel, Ph.D. is a Licensed Clinical Psychologist 
						with over 15 years experience as a psychotherapist. Dr. Krogel 
						specializes in the use of Eye Movement Desensitization and 
						Reprocessing Therapy (EMDR) to treat a range of mental heath
						 disorders including, but not limited to trauma, PTSD, issues 
						 relating to childhood, poor self-concept, grief, anxiety disorders,
						  and depression. Her areas of clinical interest and expertise include
						   birth trauma, adoption issues, eating disorders, sexual concerns/addictions,
		   				 issues around faith/religion, and couples' counseling. She works 
						with individuals, couples, adolescents, and parents.
					</p>
					<p>
					Dr. Krogel received her doctoral degree in Clinical Psychology from
			 		Brigham Young University in 2008 and completed an internship at Purdue University.
					 She is a committed to both family and community and serves weekly through her 
					 church and the Oak Ridge City Schools. She and her husband have four children, 
					 and together they love to hike, camp, and travel. Among her favorite past times
					  are distance running, traveling, ballroom dance, playing piano, and talking with friends.
					</p>
				</div>
			</div>
		</div>
	</div>
);
};

export default About;
