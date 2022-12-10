import styled from 'styled-components'
import Video from './Video'
import Links from './Links'
import TechStack from './TechStack'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

function Banner() {
	const containerRef = useRef()
	const fadeOutRef = useRef()

	const avatarRef = useRef()
	const scrollBarRef = useRef()
	const linksRef = useRef()
	const techRef = useRef()

	const enRef = useRef()
	const nameEnRef = useRef()
	const titleEnRef = useRef()
	const expoLogoRef = useRef()
	const listAEnRef = useRef()
	const listBEnRef = useRef()
	const listCEnRef = useRef()
	const listDEnRef = useRef()
	const listEEnRef = useRef()

	const frRef = useRef()
	const nameFrRef = useRef()
	const titleFrRef = useRef()
	const mtlLogoRef = useRef()
	const listAFrRef = useRef()
	const listBFrRef = useRef()
	const listCFrRef = useRef()
	const listDFrRef = useRef()
	const listEFrRef = useRef()

	useEffect(() => {
		const tl = gsap.timeline({
			defaults: { ease: 'none' },
			scrollTrigger: {
				trigger: containerRef.current,
				start: 'top',
				end: '+=7000',
				// markers: true,
				id: 'fg',
				scrub: true,
			},
		})

		tl.to(avatarRef.current, { top: 0 }, 'start')
			.to(
				linksRef.current,
				{ opacity: 0, visibility: 'hidden', duration: 1 },
				'<'
			)
			.to(scrollBarRef.current, { opacity: 0 }, '<')
			.fromTo(nameEnRef.current, { opacity: 0 }, { opacity: 1 }, 'name')
			.fromTo(nameFrRef.current, { opacity: 0 }, { opacity: 1 }, '<')
			.fromTo(titleEnRef.current, { opacity: 0 }, { opacity: 1 }, 'title')
			.fromTo(titleFrRef.current, { opacity: 0 }, { opacity: 1 }, '<')
			.fromTo(
				expoLogoRef.current,
				{ opacity: 0, rotation: -90 },
				{ opacity: 1, rotation: 0, duration: 1, delay: 0.1 },
				'logo'
			)
			.fromTo(
				mtlLogoRef.current,
				{ opacity: 0, rotation: -90 },
				{ opacity: 1, rotation: 0, duration: 1, delay: 0.1 },
				'<'
			)
			.fromTo(
				listAEnRef.current,
				{ opacity: 0 },
				{ opacity: 1, delay: 8 },
				'listA'
			)
			.fromTo(listAFrRef.current, { opacity: 0 }, { opacity: 1 }, '<')
			.fromTo(listBEnRef.current, { opacity: 0 }, { opacity: 1 }, 'listB')
			.fromTo(listBFrRef.current, { opacity: 0 }, { opacity: 1 }, '<')
			.fromTo(listCEnRef.current, { opacity: 0 }, { opacity: 1 }, 'listC')
			.fromTo(listCFrRef.current, { opacity: 0 }, { opacity: 1 }, '<')
			.fromTo(listDEnRef.current, { opacity: 0 }, { opacity: 1 }, 'listD')
			.fromTo(listDFrRef.current, { opacity: 0 }, { opacity: 1 }, '<')
			.fromTo(listEEnRef.current, { opacity: 0 }, { opacity: 1 }, 'listE')
			.fromTo(listEFrRef.current, { opacity: 0 }, { opacity: 1 }, '<')
			.to(
				frRef.current,
				{ opacity: 0, top: 100, duration: 2, delay: 4 },
				'transition'
			)
			.to(
				enRef.current,
				{ opacity: 0, top: 100, duration: 2, delay: 4 },
				'transition'
			)
			.fromTo(
				avatarRef.current,
				{ top: 0, right: 0 },
				{ top: 150, right: 250, duration: 2, delay: 4 },
				'transition'
			)
			.fromTo(
				techRef.current,
				{ opacity: 0, top: 200 },
				{ opacity: 1, top: 140, duration: 2, delay: 4 },
				'transition'
			)
			.to(techRef.current, { opacity: 0, delay: 8 })
			.to(
				avatarRef.current,
				{
					top: 0,
					right: 0,
					border: '2px solid white',
					duration: 2,
				},
				'end'
			)
			.to(fadeOutRef.current, { opacity: 1, duration: 2 }, 'end')
			.to(linksRef.current, { opacity: 1, visibility: 'visible' })
	}, [])

	return (
		<TimeLine>
			<Video />
			<Container ref={containerRef}>
				<Avatar ref={avatarRef} src="/popnobg.png" className="" />
				<LinkContainer ref={linksRef}>
					<Links />
				</LinkContainer>
				<TechContainer ref={techRef}>
					<TechStack />
				</TechContainer>
				<English ref={enRef}>
					<Name ref={nameEnRef} className="en">
						Michael Wagner
					</Name>
					<Title ref={titleEnRef} className="h1 en">
						Full Stack Developer
					</Title>
					<p ref={listAEnRef} className="h2 list">
						⋅Musician
					</p>
					<p ref={listBEnRef} className="h2 list">
						⋅Curious Learner
					</p>
					<p ref={listCEnRef} className="h2 list">
						⋅Fitness Enthusiast
					</p>
					<p ref={listDEnRef} className="h2 list">
						⋅Non-Fiction Fan
					</p>
					<p ref={listEEnRef} className="h2 list">
						⋅Introvert
					</p>
					<ExpoLogo ref={expoLogoRef} className="mtl" src="/exponobg5.png" />
				</English>
				<French ref={frRef}>
					<Name ref={nameFrRef} className="fr">
						Michael Wagner
					</Name>
					<Title ref={titleFrRef} className="h1 fr">
						Développeur
					</Title>
					<p ref={listAFrRef} className="h2 list">
						⋅Musicien
					</p>
					<p ref={listBFrRef} className="h2 list">
						⋅Apprenant Curieux
					</p>
					<p ref={listCFrRef} className="h2 list">
						⋅Fan de Fitness
					</p>
					<p ref={listDFrRef} className="h2 list">
						⋅Lecteur de Non-Fiction
					</p>
					<p ref={listEFrRef} className="h2 list">
						⋅Introverti
					</p>
					<MtlLogo ref={mtlLogoRef} className="mtl" src="/mtlnobg.png" />
				</French>
			</Container>
			<FadeOut ref={fadeOutRef}></FadeOut>
			<ScrollInfo ref={scrollBarRef}>
				<img src="metronobg.png" />
				<span>Scroll Gently</span>
				<div></div>
				<span>Scrollez Doucement</span>
				<img src="metronobg.png" />
			</ScrollInfo>
		</TimeLine>
	)
}

const TimeLine = styled.div`
	height: 8000px;

	/* @media only screen and (max-width: 920px) {
		--h1: 1.802rem;
		--h2: 1.602rem;
		--h4: 1.266rem;
	} */
`

const Container = styled.section`
	position: fixed;
	top: 0;
	left: 0;
	padding: 50px auto;
	width: 100vw;
	height: 100vh;
	display: grid;
	place-content: center;
	color: white;
	z-index: 2;

	/* gap: 20px; */
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;

	& * {
		justify-self: center;
		position: relative;
	}

	.list {
		margin-top: -20px;
	}

	@media only screen and (max-width: 920px) {
		grid-template-rows: 1fr 1fr 1fr;
		.list {
			display: none;
		}
	}
`

const Avatar = styled.img`
	height: 200px;
	width: 200px;
	z-index: 10;
	object-fit: cover;
	border-radius: 50%;
	border: 4px dotted var(--primary-fg);
	justify-self: center;
	align-self: center;
	grid-row: 1;
	grid-column: 1 / span 2;

	position: relative;
	/* top: 150px; */
`

const LinkContainer = styled.div`
	grid-column: 1 / span 2;
	grid-row: 2;
	margin-top: -80px;
	display: grid;
	justify-content: center;
`

const TechContainer = styled.div`
	width: 400px;
	height: 400px;
	grid-row: 1;
	grid-column: 2;
	opacity: 0;
`

const English = styled.div`
	position: relative;
	top: -40px;
	grid-row: 2;
	grid-column: 1;

	@media only screen and (max-width: 920px) {
		grid-row: 2;
		grid-column: 1 / span 2;
		justify-self: center;
	}
`

const French = styled.div`
	position: relative;
	top: -40px;
	grid-row: 2;
	grid-column: 2;

	@media only screen and (max-width: 920px) {
		grid-row: 3;
		grid-column: 1 / span 2;
		justify-self: center;
		right: 45px;
		margin-top: -40px;
	}
`

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
		width: 27px;
		height: 27px;
		opacity: 0.8;
		margin: 10px;
	}

	span {
		font-size: var(--p);
	}
`

const FadeOut = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	opacity: 0;
	z-index: 0;
	background-color: black;
	pointer-events: none;
`

export default Banner
