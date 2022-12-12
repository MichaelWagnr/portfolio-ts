import styled from 'styled-components'
import {
	SiTypescript,
	SiJavascript,
	SiCss3,
	SiHtml5,
	SiStyledcomponents,
	SiMongodb,
	SiExpress,
	SiGit,
	SiFigma,
	SiYarn,
	SiVisualstudiocode,
	SiIterm2,
	SiReact,
	SiNodedotjs,
	SiGreensock,
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
					<p className="heading">Story:</p>
					<p>...</p>
					<p className="heading">Challenges:</p>
					<p>...</p>
					<p className="heading">Future plans:</p>
					<p>...</p>
				</div>
				<div className="extra-details">
					<p className="heading">Links:</p>
					<p>...</p>
				</div>
			</Details>
		</Container>
	)
}

const Container = styled.div`
	width: 80%;
	margin: 100px auto -40px;
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
