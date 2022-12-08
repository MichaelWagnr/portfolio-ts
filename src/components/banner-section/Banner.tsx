import styled from 'styled-components'
import Video from './Video'
import TechStack from './TechStack'

function Banner() {
	return (
		<>
			<Video />
			<Container>
				<Avatar src="/popnobg.png" className="left" />
				<TechStack />
				<English>
					<Name className="en">Michael Wagner</Name>
					<Title className="h1 en">Full Stack Developer</Title>
					<p className="h2 list">⋅Musician</p>
					<p className="h2 list">⋅Curious Learner</p>
					<p className="h2 list">⋅Fitness Enthusiast</p>
					<p className="h2 list">⋅Non-Fiction Fan</p>
					<p className="h2 list">⋅Introvert</p>
					<ExpoLogo className="mtl" src="/exponobg5.png" />
				</English>
				<French>
					<Name className="fr">Michael Wagner</Name>
					<Title className="h1 fr">Développeur</Title>
					<p className="h2 list">⋅Musicien</p>
					<p className="h2 list">⋅Apprenant Curieux</p>
					<p className="h2 list">⋅Fan de Fitness</p>
					<p className="h2 list">⋅Lecteur de Non-Fiction</p>
					<p className="h2 list">⋅Introverti</p>
					<MtlLogo className="mtl" src="/mtlnobg.png" />
				</French>
			</Container>
			<ScrollInfo>
				<img src="metronobg.png" />
				<span>Scroll Gently</span>
				<div></div>
				<span>Scrollez Doucement</span>
				<img src="metronobg.png" />
			</ScrollInfo>
		</>
	)
}

const Container = styled.section`
	position: fixed;
	top: 0;
	left: 0;
	padding: 50px 200px;
	width: 100vw;
	height: 100vh;
	display: grid;
	place-content: center;
	color: white;

	gap: 20px;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;

	& * {
		justify-self: center;
		position: relative;
	}

	.list {
		margin-top: -20px;
	}
`

const Avatar = styled.img`
	height: 200px;
	width: 200px;
	object-fit: cover;
	border-radius: 50%;
	border: 4px dotted var(--primary-fg);
	justify-self: center;
	align-self: center;
	grid-row: 1;
	grid-column: 1 / span 2;

	&.left {
		grid-column: 1;
	}
`

const English = styled.div``

const French = styled.div``

const Name = styled.h1`
	position: relative;

	&::before {
		content: 'Hello, my name is';
		font-size: var(--h4);
		color: var(--tertiary-fg-light);
		position: absolute;
		bottom: 50px;
		left: 2px;
	}

	&.fr::before {
		content: 'Salut, mon nom est';
		color: var(--secondary-fg-light);
	}
`

const Title = styled.p`
	position: relative;

	&::before {
		content: 'I am a Montréal-based';
		font-size: var(--h4);
		color: var(--tertiary-fg-light);
		position: absolute;
		bottom: 50px;
	}

	&.fr::before {
		content: 'Je suis un';
		color: var(--secondary-fg-light);
	}
`

const MtlLogo = styled.img`
	width: 180px;
	position: absolute;
	top: -18px;
	left: 247px;
	z-index: -1;
	opacity: 0.7;
`

const ExpoLogo = styled.img`
	width: 200px;
	position: absolute;
	top: -29px;
	left: 247px;
	z-index: -1;
`

const ScrollInfo = styled.div`
	width: 100%;
	height: 50px;
	position: fixed;
	bottom: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;

	div {
		flex-grow: 1;
		display: flex;
		justify-content: center;
	}

	img {
		width: 20px;
		height: 20px;
		opacity: 0.8;
		margin: 10px;
	}
`

export default Banner
