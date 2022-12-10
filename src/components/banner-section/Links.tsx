import styled from 'styled-components'
import { GrDocumentPdf, GrGithub, GrLinkedinOption } from 'react-icons/gr'
import { Link } from 'react-router-dom'

function Links() {
	return (
		<Container>
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
			<Link to="/work" className="internal">
				Selected Works
			</Link>
			<Link to="/work" className="internal">
				Contact Me
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
			border: 2px solid var(--secondary-fg-light);
			color: var(--secondary-fg-light);
			* {
				color: var(--secondary-fg-light);
				path {
					stroke: var(--secondary-fg-light);
				}
			}
		}
	}

	a.internal {
		border-radius: 5px;
		display: block;
		padding: 10px;
		margin-bottom: 15px;
		text-align: center;
		text-decoration: none;
		font-size: var(--h5);
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
`

const ExternalLinks = styled.div`
	width: fit-content;
	margin: 0px auto 40px;
`

export default Links
