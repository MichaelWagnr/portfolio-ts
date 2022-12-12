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

type StyledProps = {
	imgSrc: string
}

function Card({
	title,
	tech,
	desc,
	lesson,
	videoUrl,
	githubUrl,
	projectUrl,
	imgSrc,
}) {
	const icons = {
		SiTypescript: <SiTypescript />,
		SiJavascript: <SiJavascript />,
		SiCss3: <SiCss3 />,
		SiHtml5: <SiHtml5 />,
		SiStyledcomponents: <SiStyledcomponents />,
		SiMongodb: <SiMongodb />,
		SiExpress: <SiExpress />,
		SiGit: <SiGit />,
		SiFigma: <SiFigma />,
		SiYarn: <SiYarn />,
		SiVisualstudiocode: <SiVisualstudiocode />,
		SiIterm2: <SiIterm2 />,
		SiReact: <SiReact />,
		SiNodedotjs: <SiNodedotjs />,
		SiGreensock: <SiGreensock />,
	}

	return (
		<Container imgSrc={imgSrc}>
			<Banner>
				<p className="h3">{title}</p>
				<p className="h6 tech-used">Technologies used:</p>
				<div className="icons">
					{tech.map((iconName: string) => icons[iconName])}
				</div>
			</Banner>
			<Description className="desc">
				<p className="heading">Description:</p>
				<p>{desc}</p>
				<p className="heading">What I learned building this:</p>
				<p>{lesson}</p>
			</Description>
			<Links>
				{videoUrl && <a href={videoUrl}>Video</a>}
				{githubUrl && <a href={githubUrl}>GitHub</a>}
				{projectUrl && <a href={projectUrl}>View</a>}
			</Links>
		</Container>
	)
}

const Container = styled.div<StyledProps>`
	position: relative;
	width: 300px;
	height: 500px;
	border: 1px solid var(--secondary-fg);
	border-radius: 10px;
	overflow: hidden;
	transition: all 1s;

	&:hover {
		transform: scale(1.05);

		a {
			border: 1px solid var(--tertiary-fg-light);
			color: var(--tertiary-fg-light);
		}

		.desc {
			background-image: ${({ imgSrc }) => `url('${imgSrc}')`};
			background-size: cover;
			background-repeat: no-repeat;
			background-position-x: center;
			background-position-y: center;

			p {
				visibility: hidden;
			}
		}
	}
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

const Description = styled.div`
	padding: 3px 15px;
	/* margin-top: 5px; */
	height: 400px;

	.heading {
		margin: 3px 0;
		font-weight: lighter;
	}
`

const Links = styled.div`
	position: absolute;
	bottom: 13px;
	width: 100%;
	height: 50px;
	display: flex;
	gap: 10px;
	justify-content: center;
	a {
		width: 50px;
		height: 50px;
		border: 1px solid var(--secondary-fg-dark);
		color: var(--secondary-fg-dark);
		border-radius: 50%;
		display: grid;
		place-content: center;
		font-size: var(--h6);
		transition: transform 1s;
		text-decoration: none;

		&:hover {
			cursor: pointer;
			border: 1px solid var(--tertiary-fg-dark);
			color: var(--tertiary-fg-dark);
			transform: scale(1.05);
		}
	}
`

export default Card
