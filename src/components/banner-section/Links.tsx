import styled from 'styled-components'
import { GrDocumentPdf, GrGithub, GrLinkedinOption } from 'react-icons/gr'
import { RiMailSendLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

function Links() {
	return (
		<Container>
			<AboveTheFold>
				<p className="h3">Michael Wagner</p>
				<p className="h4 title">Web Developer</p>
			</AboveTheFold>
			<ExternalLinks>
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
			</ExternalLinks>
			<ExternalLinks>
				<a href="mailto:michaelwagner780@gmail.com?subject = Portfolio Contact: ">
					<RiMailSendLine className="icon" />
				</a>
			</ExternalLinks>
			<Link to="/portfolio" className="internal">
				<span className="en">Selected Works</span>
				<br />
				<span className="fr">Mes réalisations</span>
			</Link>
			<Link to="/about" className="internal">
				<span className="en">About me</span>
				<br />
				<span className="fr">À propos de moi</span>
			</Link>
		</Container>
	)
}

const Container = styled.div`
	width: 230px;
	height: 300px;
	z-index: 9;

	a {
		border: 2px solid var(--primary-fg-light);
		border-radius: 50%;
		padding: 20px 10px;
		margin: 5px;
		color: var(--primary-fg-light);

		&:hover {
			cursor: pointer;
			border: 2px solid var(--secondary-fg);
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
		border-radius: 5px;
		display: block;
		padding: 5px;
		margin-bottom: 15px;
		text-align: center;
		text-decoration: none;
		font-size: var(--p);
	}

	.icon {
		pointer-events: none;
		font-size: 2.5rem;
		position: relative;
		top: 14px;
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

const ExternalLinks = styled.div`
	width: fit-content;
	margin: -15px auto 40px;
`

const AboveTheFold = styled.div`
	position: relative;
	bottom: 26px;
	text-align: center;

	.title {
		color: var(--secondary-fg-light);
	}
`

export default Links
