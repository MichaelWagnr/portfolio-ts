import styled from 'styled-components'
import Header from '../Header'

function About() {
	return (
		<Container>
			<Header />
			<AboutMe>
				<div className="left">
					Sink or swim <br /> 2020
				</div>
				<div className="center">
					After relocating to Montreal, I shifted my focus towards Web
					Development. I studied from textbooks and online courses 2-3 hours per
					day while working full-time. I would often fit an extra hour of
					listening to Web Development-related podcasts during lunch breaks and
					long walks. Winter 2022, I obtained a Full Stack Web Development
					diploma through Concordia University. I had the fortune of committing
					to this program full-time, 50-60 hours per week, finishing
					extra-credit assignments as well as pursuing additional online course
					material on subjects not covered by the program.
				</div>
				<div className="right"></div>
				<div className="left">
					Hacking Databases <br /> 2017
				</div>
				<div className="center">
					While working as a production manager for a food distributer, two
					Python developers were brought on to work on a replacement
					administrative panel. During this time, managers were given read-only
					database access and a handful of helpful queries to copy/paste. I
					spent a weekend watching SQL tutorials - inspired by our CEO who
					taught himself SQL - in order to better parse the raw data. I began
					writing client, order and inventory queries for other middle managers,
					later continuing my self-study with Python - the language our software
					was being rebuilt in.
				</div>
				<div className="left">
					Music: My secret weapon
					<br />
					2015
				</div>
				<div className="center">
					I owe a lot to my musical background. As a guitarist of many years,
					I'm comfortable iterating over challenging material for hours at a
					time. I collect synthesizers and samplers. Each new piece of equipment
					comes with an extensive user's manual and I delight in researching
					each new aquisition, learning how it works and testing hypothesises as
					to how they can be combined together. I find myself in a similar
					creative mindset whenever I'm pages into library/framework
					documentation and contemplating how different tech can be woven
					together.
				</div>
				<div className="right"></div>
				<div className="left">
					Winning the internet <br /> 1996
				</div>
				<div className="center">
					I was a computer enthusiast from a very young age. Our first family
					computer ran an older operating system that would boot up to a black
					screen with green text and a shell prompt, where I would 'cd' through
					directories to find and play MSDOS Freeware games like Commander Keen.
					When I was a child, my father brought me to a Science and Technology
					exhibit at the University of Saskatchewan, where we entered a raffle
					to win an internet modem. We won the internet that summer and became
					the first family on our block to be online, during the days of
					Netscape and very slow connections. I watched the internet evolve to
					present day, on occasion making fan-pages with Geocities and AngelFire
					and catching glimpses of HTML.
				</div>
				<div className="right"></div>
			</AboutMe>
		</Container>
	)
}

const Container = styled.div`
	width: 100vw;
	display: grid;
	justify-content: center;
`

const AboutMe = styled.div`
	width: 80%;
	height: fit-content;
	padding: 20px;
	margin: 100px auto 40px;
	border: 1px solid var(--secondary-fg);
	border-radius: 10px;

	display: grid;
	gap: 20px;
	grid-template-columns: 1fr 4fr 1fr;

	.left {
		font-weight: lighter;
		/* justify-self: end; */
		text-align: right;
		grid-column: 1;
	}

	.center {
		grid-column: 2;
	}

	.right {
		font-weight: lighter;
		grid-column: 3;
	}
`

export default About
