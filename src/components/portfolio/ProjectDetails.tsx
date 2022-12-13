import styled from 'styled-components'
import {
	SiStyledcomponents,
	SiMongodb,
	SiExpress,
	SiFigma,
	SiReact,
	SiNodedotjs,
} from 'react-icons/si'

function ProjectDetails() {
	return (
		<Container>
			<Banner>
				<p className="h3">Patch Diver</p>
				<p className="h6 tech-used">Technologies used:</p>
				<div className="icons">
					<SiMongodb />
					<SiExpress />
					<SiReact />
					<SiNodedotjs />
					<SiStyledcomponents />
					<SiFigma />
				</div>
			</Banner>
			<Details>
				<img src="/patchdiverbrowser.png" className="browser-view" />
				<div className="info">
					<p className="heading">Description:</p>
					<p>
						Patch Diver is an online patch editor for hardware synthesizers.
						With the ability to load, save, share and browse sounds.
					</p>
					<p className="heading">Background:</p>
					<p>
						In the mid 1980s, with the success of the Yamaha DX7, a number of
						synthesizer manufacturers turned to removing sliders and encoders on
						the panels of their synthesizers in favor of a digital screen and a
						number of button combinations to navigate menus. These synthesizers
						are notoriously tedius to program and are often quite under-valued
						on the used market. Sounds are typically patched with sysex MIDI
						messages, and the conventional method to upload these sounds can
						entail over-writing any personally-saved sounds. If this wasn't
						intimidating enough, sysex messages are often presented as a wall of
						hexidecimal values.
					</p>
					<p>
						Patch Diver is my way of creating what I wish existed for
						synthesizer enthusiasts. The MVP is compatible with the Yamaha DX100
						but because of similarities between other Yamaha synthesizer models
						from the same period, it should hypothetically work with a number of
						models
					</p>
					<p className="heading">Challenges:</p>
					<p>
						One of the principle challenges of this project was working with the
						Web MIDI API and bridging the gap between old and modern tech. At
						one point I needed "the lowest 7 bits of the two's complement sum of
						all data bytes" for each patch, which required research outside the
						typical realm of JavaScript/React. This was also a massive
						springboard into the world of SVGs and I had a lot of fun building
						the graphical user interface and determining ways of targeting parts
						of the SVG with click events in order to emulate a software GUI.
					</p>
					<p className="heading">Future plans:</p>
					<p>
						Patch Diver is the app I wish existed when I was starting to collect
						synthesizers. The next step for me will be to add support for
						additional models, manufacturers and to continue adding features to
						make it a more enjoyable user experience to edit and share sounds.
					</p>
				</div>
				<div className="extra-details">
					<p className="heading">Links:</p>
					<a href="https://github.com/MichaelWagnr/patchdiver">Github</a>
					<br />
					<a href="https://vimeo.com/777719851">Vimeo</a>
				</div>
			</Details>
		</Container>
	)
}

const Container = styled.div`
	width: 80%;
	margin: 100px auto 20px;
	border: 1px solid var(--secondary-fg);
	border-radius: 10px;
	overflow: hidden;
`

const Banner = styled.div`
	height: 100px;
	background-color: var(--primary-bg-dark);
	color: var(--secondary-fg);
	text-align: center;

	.tech-used {
		font-style: italic;
	}

	.icons {
		font-size: 1.4rem;

		& * {
			margin: 0px 4px;
		}
	}
`

const Details = styled.div`
	padding: 20px;
	display: grid;
	gap: 20px;
	grid-template-columns: 4fr 2fr;
	grid-template-rows: max-content 1fr;

	p:not(.heading) {
		text-indent: 2ch;
	}

	a {
		color: var(--secondary-fg-light);
	}

	.heading {
		margin: 3px 0;
		font-weight: lighter;
	}

	.browser-view {
		grid-row: 1;
		grid-column: 1 / span 2;
		width: 100%;
		border-radius: 10px;
		box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 29px 0px;
	}
`

export default ProjectDetails
