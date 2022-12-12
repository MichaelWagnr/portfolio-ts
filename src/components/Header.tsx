import { GrDocumentPdf, GrGithub, GrLinkedinOption } from 'react-icons/gr'
import { RiMailSendLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Header() {
	return (
		<Container>
			<Link to="/" className="avatar">
				<Avatar src="/popnobg.png" />
			</Link>
			<Link to="/portfolio" className="internal">
				<span className="en">Selected Works</span>
				{/* <br /> */}
				{/* <span className="fr">Mes réalisations</span> */}
			</Link>
			<Link to="/about" className="internal">
				<span className="en">About me</span>
				{/* <br /> */}
				{/* <span className="fr">À propos de moi</span> */}
			</Link>
			<div className="spacer"></div>
			<a href="https://www.linkedin.com/in/michael-wagner-9339881a0/">
				<GrLinkedinOption className="icon" />
			</a>
			<a href="https://github.com/MichaelWagnr">
				<GrGithub className="icon" />
			</a>
			<a
				href="./MichaelWagner_CV_EN.pdf"
				target="_blank"
				type="application/pdf"
				rel="alternate"
				media="print">
				<GrDocumentPdf className="icon" />
			</a>
			<a href="mailto:michaelwagner780@gmail.com?subject = Portfolio Contact: ">
				<RiMailSendLine className="icon" />
			</a>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	height: 70px;
	display: flex;
	z-index: 1;
	position: fixed;
	background-color: var(--primary-bg-light);
	align-items: center;
	justify-content: end;
	padding: 0px 15px;
	gap: 10px;
	top: 0;
	left: 0;
	border-bottom: 1px solid var(--primary-bg-dark);

	.spacer {
		flex: 1;
	}

	a {
		&:not(.avatar) {
			color: var(--primary-fg-light);
			border-radius: 50%;
			border: 2px dotted var(--primary-fg);
			padding: 5px 8.5px;
		}

		&:hover {
			cursor: pointer;
			border-color: var(--secondary-fg-light);
			color: var(--secondary-fg);
			* {
				color: var(--secondary-fg);
				path {
					stroke: var(--secondary-fg);
				}
			}
		}
	}

	a.internal {
		border: 1px solid var(--primary-fg);
		padding: 2px 10px;
		border-radius: 5px;
		display: block;
		text-decoration: none;
		font-size: var(--p);

		&:hover {
			border: 1px solid var(--secondary-fg-light);
		}
	}

	.icon {
		font-size: 1.6rem;
		position: relative;
		top: 3px;
		color: var(--primary-fg-light);
		path {
			stroke: var(--primary-fg-light);
			pointer-events: none;
		}
	}

	.fr {
		color: var(--secondary-fg-light);
	}
`

const Avatar = styled.img`
	height: 50px;
	width: 50px;
	object-fit: cover;
	border-radius: 50%;
	border: 2px dotted var(--primary-fg);
	position: relative;
	top: 4px;
	transition: transform 0.5s;

	&:hover {
		border-color: var(--secondary-fg-light);
		transform: scale(1.04);
	}
`

export default Header
