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
} from 'react-icons/si'
import { FaNode } from 'react-icons/fa'
import { VscRegex } from 'react-icons/vsc'
import TypeScript from './TypeScript'

function TechStack() {
	return (
		<Container>
			<StackIcons>
				<p>I'm fond of</p>
				<TypeScript />
				{/* <SiTypescript className="large" /> */}
				<SiReact className="large" />
				<div className="sc">
					<p>styled</p>
					<SiStyledcomponents className="large" />
					<p>components</p>
				</div>
				<p>I often use</p>
				<SiJavascript className="medium" />
				<SiMongodb className="medium" />
				<SiExpress className="medium" />
				<FaNode className="medium" />
				<p>I work comfortably with</p>
				<SiGit className="small" />
				<SiVisualstudiocode className="small" />
				<SiFigma className="small" />
				<SiHtml5 className="small" />
				<SiCss3 className="small" />
				<SiYarn className="small" />
				<SiIterm2 className="small" />
				<VscRegex className="small" />
			</StackIcons>
		</Container>
	)
}

const Container = styled.div`
	/* border: 1px solid red; */
	width: 400px;
	height: 400px;
	grid-row: 1;
	grid-column: 2;
`

const StackIcons = styled.div`
	/* margin-left: 520px; */
	height: 100%;
	/* border: 1px solid orange; */
	text-align: center;
	padding-top: 35px;

	& * {
		margin: 4px;
	}

	p {
		font-size: var(--h5);
	}

	.sc {
		display: inline-block;
		flex-direction: column;
		position: relative;
		bottom: 10px;
		p {
			margin: -28px 0px;
			color: var(--tertiary-fg-light);
			font-size: var(--h6);
		}
	}

	.small,
	.medium,
	.large {
		color: var(--tertiary-fg-light);
	}

	.small {
		font-size: 1.827rem;
	}

	.medium {
		font-size: 3.998rem;
	}

	.large {
		font-size: 5.653rem;
	}
`

export default TechStack
