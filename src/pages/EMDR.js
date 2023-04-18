import React from "react";
import eyes from "./pictures/EMDR eyes pic.jpg";
const EMDR = () => {
	var link1 = <a href="https://www.psychiatry.org/psychiatrists/practice/clinical-practice-guidelines" target="_blank">American Psychiatric Association</a>
	var link2 = <a href="https://www.apa.org/ptsd-guideline/treatments/eye-movement-reprocessing" target="_blank">American Psychological Association</a>
	var link3 = <a href="https://istss.org/clinical-resources/treating-trauma/new-istss-prevention-and-treatment-guidelines" target="_blank">International Society for Traumatic Stress Studies</a>
	var link4 = <a href="https://www.nami.org/About-Mental-Illness/Treatments/Psychotherapy" target="_blank">National Alliance on Mental Illness</a>
	var link5 = <a href="https://store.samhsa.gov/product/TIP-57-Trauma-Informed-Care-in-Behavioral-Health-Services/SMA14-4816" target="_blank">Substance Abuse and Mental Health Services Administration</a>
	var link6 = <a href="https://www.nice.org.uk/guidance/ng116" target="_blank">National Institute for Health and Care Excellence</a>
	var link7 = <a href="https://www.healthquality.va.gov/guidelines/MH/ptsd/" target="_blank">U.S. Dept. of Veterans Affairs/Dept. of Defense</a>
	var link8 = <a href="https://www.cochrane.org/CD003388/DEPRESSN_psychological-therapies-chronic-post-traumatic-stress-disorder-ptsd-adults" target="_blank">The Cochrane Database of	Systematic Reviews</a>
	var link9 = <a href="https://www.emdria.org/wp-content/uploads/2021/06/WHO.2013.Guidelines.for_.Management.of_.Conditions.of_.Stress.pdf" target="_blank">World Health Organization</a>
return (
	<div>
        <div style = {{backgroundColor: '#e8ded1', marginTop: -25, height: 'calc(14vw)'}}>
			<div style = {{height: 'calc(4vw)'}} />
			<h1 style = {{textAlign: 'center', fontSize: 'calc(3vw)'}}>
				EMDR
			</h1>
		</div>

		<div style = {{flexDirection: "horizontal", display: 'flex', marginTop: 50}}>
			<div style = {{flex: 1}} />
			<img style = {{maxWidth: '40%', borderRadius: 30, flex:4}} src = {eyes} alt="Eyes" />
			<div style = {{flex: 1}} />
			<div style = {{flex: 4}}>
				<b style = {{textAlign: 'center'}}>About EMDR</b>
				<p> 
					EMDR (Eye Movement Desensitization and Reprocessing) is a type of psychotherapy that activates
					the neural networks of the brain that are associated with the disturbing life experiences that typically
					underlie our emotional distress, negative self-concepts, and trauma reactions. When a brain is blocked
					by a disturbing event, it will cause emotional distress and disregulation often leading to disfunctional
					and unwanted behaviors. When the block is removed, the wound can heal and he unwanted emotions
					and behaviors subside. Using a combination of targeted thoughts, body awareness, and bilateral
					stimulation of the brain (typically through eye movements) EMDR helps the brain is systematically
					helped to work through the disturbing experience that is blocking it and allows it to return to healthy
					and calm neural functioning.
					</p>
			</div>
			
			<div style = {{flex: 1}} />
		</div>
		<div style = {{marginLeft: 'calc(5vw)', marginRight: 'calc(5vw)'}}>
			<b style = {{textAlign: 'center'}}>Who can benefit from EMDR?</b>
			<p>
			EMDR can be use to treat a wide range of challenges. The process of EMDR is designed to change
			emotions, thoughts, and behaviors by resolving the unprocessed traumatic memories in the brain and
			helping the brain to return to a natural healthy state of functioning. EMDR can be used for the
			following types of challenges:

			</p>
			<ul>
				<li>Depression and bipolar disorders</li>
				<li>Anxiety, panic attacks, and phobias</li>
				<li>Post-Traumatic Stress Disorder (PTSD) and other trauma and stress-related issues</li>
				<li>Sexual assault</li>
				<li>Violence, abuse, childhood trauma</li>
				<li>Attachment and Betrayal Trauma and Adoption Issues</li>
				<li>Medical Trauma and Chronic Illness</li>
				<li>Chronic Pain</li>
				<li>Dissociative disorders</li>
				<li>Eating disorders</li>
				<li>Grief and loss</li>
				<li>Performance anxiety</li>
				<li>Personality disorders</li>
				<li>Sleep disturbance</li>
				<li>Substance abuse and addiction</li>
			</ul>
			<b>Faster and More Focused</b>
			<p>
			EMDR is a powerful and focused psychotherapy. During the first few sessions a treatment plan will be
			created that identities and helps to focus the work that needs to be done to help the brain return to
			healthy functioning. For many individuals, EMDR can be used to resolve issues more completely and
			in less time than other psychotherapies.
			It is an option to use EMDR to resolve major psychological distress in as as little as a week or two.
			This can be done through intensive treatment sessions where multiple and often extended sessions of
			EMDR therapy are scheduled for the same week or few weeks. This format allows people to feel great
			relief from their issues and return to normal healthy functioning far sooner and resume life without the
			interference of triggers and overwhelming emotions to weigh them down. In most traditional
			psychotherapies, individuals will attend 50 minute sessions every week or two and make progress over
			a span of weeks and months.
			</p>
			<b>Research Support for EMDR</b>
			<p>
			There is an abundance of empirical research support for EMDR. It was first developed as a therapy by
			Francis Shapiro in 1987 to treat PTSD. Now it is practiced broadly world wide. Shapiro and Forrest
			(2016) share that more than 7 million people have been treated successfully by 110,000 therapists in
			130 countries since 2016.
			</p>
			
			<p>
			Many national and international organizations recognize EMDR therapy as an effective treatment.
			These include {link1} , the {link2} , the
			{link3} , the {link4} , the
			{link5} , the {link6} , the {link7} , The {link8} , and the {link9} as well as many others.
			</p>
			<p>References</p>
			<p>
				Shapiro, F., &amp; Forrest, M. S. (2016). EMDR: The breakthrough therapy for overcoming anxiety, stress,
				and trauma. Hachette UK
			</p>
		</div>

	</div>
);
};

export default EMDR;