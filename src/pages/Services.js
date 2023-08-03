import React from 'react';
import Room from './pictures/Waiting room.jpg';
const Services = () => {
return (
	<div>
		<div style = {{backgroundColor: '#e8ded1', marginTop: -25, height: 'calc(14vw)'}}>
			<div style = {{height: 'calc(4vw)'}} />
			<h1 style = {{textAlign: 'center', fontSize: 'calc(3vw)'}}>
				Services
			</h1>
		</div>

	<div style = {{display: 'flex', flexOrientation:'horizontal', marginTop: 100}}>
		<div style = {{flex:1}} />
		<img style = {{width: '25%', flex:4, borderRadius: 20, objectFit: "contain"}} src = {Room} alt="Waiting Room" />
		<div style = {{flex: 1}} />
		<ul style = {{flex: 4, textAlign:'left', lineHeight: 2, fontSize: "calc(1.3vw)"}}>
    		<li>EMDR Therapy (Eye Movement Desensitization and Reprocessing Therapy)</li>
			<li>Individual Psychotherapy</li>
			<li>Couples Counseling</li>
			<li>Adults and Adolescents (11+)</li>
			<li>Traditional weekly/bi-weekly counseling</li>
			<li>Intensives <a href = 'intensives'>(learn more)</a></li>
			<li>Traumas (PTSD, Sexual abuse, Traumatic accidents, medical trauma, betrayal trauma, childhood trauma, military trauma, attachment/adoption trauma,  disturbing life events, etc.)</li>
			<li>Depression, bipolar disorders, and poor self-concept</li>
			<li>Anxiety, Social Phobias, OCD</li>
			<li>Compulsive behaviors including Eating Disorders, Self-harm/Cutting, and Sexual Addictions</li>
		</ul>
		<div style = {{flex: 1}} />
	</div>
	</div>
);
};

export default Services;
