import styled from 'styled-components'
import Video from './Video'
import Links from './Links'
import TechStack from './TechStack'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import MobileBG from './MobileBG'

gsap.registerPlugin(ScrollTrigger)

function Banner() {
	const isDesktop = window.matchMedia('(min-width: 759px)').matches

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
				id: 'fg',
				scrub: true,
			},
		})
		//*  ======================================================================
		//   Animation starts =====================================================
		tl.to(avatarRef.current, { top: 0 }, 'start')
			// Nav disappears =======================================================
			.to(linksRef.current, { opacity: 0, visibility: 'hidden' }, '<')
			.to(scrollBarRef.current, { opacity: 0 }, '<')
			// Name appears =========================================================
			.to(nameEnRef.current, { opacity: 1 }, 'name')
			.to(nameFrRef.current, { opacity: 1 }, '<')
			// Main Title appears ===================================================
			.to(titleEnRef.current, { opacity: 1 }, 'title')
			.to(titleFrRef.current, { opacity: 1 }, '<')
			// Montreal and Expo67 logo appear and rotate ===========================
			.fromTo(
				expoLogoRef.current,
				{ opacity: 0, rotation: -90 },
				{ opacity: isDesktop ? 1 : 0.6, rotation: 0, duration: 1, delay: 0.1 },
				'logo'
			)
			.fromTo(
				mtlLogoRef.current,
				{ opacity: 0, rotation: -90 },
				{ opacity: isDesktop ? 1 : 0.6, rotation: 0, duration: 1, delay: 0.1 },
				'<'
			)
			// List of addition titles stagger in ===================================
			.to(listAEnRef.current, { opacity: 1, delay: 8 }, 'listA')
			.to(listAFrRef.current, { opacity: 1 }, '<')
			.to(listBEnRef.current, { opacity: 1 }, 'listB')
			.to(listBFrRef.current, { opacity: 1 }, '<')
			.to(listCEnRef.current, { opacity: 1 }, 'listC')
			.to(listCFrRef.current, { opacity: 1 }, '<')
			.to(listDEnRef.current, { opacity: 1 }, 'listD')
			.to(listDFrRef.current, { opacity: 1 }, '<')
			.to(listEEnRef.current, { opacity: 1 }, 'listE')
			.to(listEFrRef.current, { opacity: 1 }, '<')
			// Name, Title and Logos descend and disappear ==========================
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
			// Avatar moves down and left ===========================================
			.fromTo(
				avatarRef.current,
				{ top: 0, right: 0 },
				{
					top: isDesktop ? 150 : 0,
					right: isDesktop ? 250 : 0,
					duration: 2,
					delay: 4,
				},
				'transition'
			)
			// Tech icons appears and moves up into place ===========================
			.fromTo(
				techRef.current,
				{
					opacity: 0,
					top: isDesktop ? 200 : 500,
					gridColumn: isDesktop ? '' : '1 / span 2',
					alignSelf: isDesktop ? '' : 'center',
				},
				{
					opacity: 1,
					top: isDesktop ? 140 : 280,
					gridColumn: isDesktop ? '' : '1 / span 2',
					alignSelf: isDesktop ? '' : 'center',
					duration: 2,
					delay: 4,
				},
				'transition'
			)
			// Tech icons disappear =================================================
			.to(techRef.current, { opacity: 0, delay: 8 })
			// Avatar moves to center & Background fades to black ===================
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
			// Nav reappears ========================================================
			.to(linksRef.current, { opacity: 1, visibility: 'visible' })
		//   Animation ends =======================================================
		//*  ======================================================================
	}, [])

	return (
		<TimeLine>
			{isDesktop ? <Video /> : <MobileBG />}
			<Container ref={containerRef}>
				<Avatar ref={avatarRef} src="/popnobg.png" className="" />
				<LinkContainer ref={linksRef}>
					<Links />
				</LinkContainer>
				<TechContainer ref={techRef}>
					<TechStack />
				</TechContainer>
				<English ref={enRef} className={isDesktop ? null : 'mobile-view'}>
					<Name
						ref={nameEnRef}
						className={isDesktop ? 'h1 en' : 'h2 en mobile'}>
						Michael Wagner
					</Name>
					<Title
						ref={titleEnRef}
						className={isDesktop ? 'h1 en' : 'h2 en mobile'}>
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
					<ExpoLogo
						ref={expoLogoRef}
						className={isDesktop ? 'mtl' : 'mtl mobile-expo'}
						src="/exponobg5.png"
					/>
				</English>
				<French ref={frRef} className={isDesktop ? null : 'mobile-view'}>
					<Name
						ref={nameFrRef}
						className={isDesktop ? 'h1 fr' : 'h2 fr mobile'}>
						Michael Wagner
					</Name>
					<Title
						ref={titleFrRef}
						className={isDesktop ? 'h1 fr' : 'h2 fr mobile'}>
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
					<MtlLogo
						ref={mtlLogoRef}
						className={isDesktop ? 'mtl' : 'mtl mobile-mtl'}
						src="/mtlnobg.png"
					/>
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

	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;

	& * {
		justify-self: center;
		position: relative;
	}

	.list {
		opacity: 0;
		margin-top: -20px;
	}

	@media only screen and (max-width: 920px) {
		grid-template-rows: 1fr 1fr 1fr;
		.list {
			display: none;
		}
	}

	@media only screen and (max-width: 499px) {
		margin-top: -60px;
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
`

const LinkContainer = styled.div`
	grid-column: 1 / span 2;
	grid-row: 2;
	margin-top: -60px;
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

	&.mobile-view {
		grid-row: 2;
		grid-column: 1 / span 2;
		justify-self: center;

		p {
			display: none;
		}
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

	&.mobile-view {
		grid-row: 3;
		grid-column: 1 / span 2;
		justify-self: center;
		margin-top: -80px;
		margin-left: 10px;

		p {
			display: none;
		}
	}
`

const Name = styled.h1`
	position: relative;
	opacity: 0;

	&::before {
		content: 'Hello, my name is';
		font-size: var(--h4);
		color: var(--tertiary-fg-light);
		position: absolute;
		bottom: 50px;
		left: 2px;
	}

	&.mobile::before {
		bottom: 40px;
	}

	&.fr::before {
		content: 'Salut, mon nom est';
		color: var(--secondary-fg-light);
	}
`

const Title = styled.h2`
	position: relative;
	opacity: 0;

	&::before {
		content: 'I am a Montréal-based';
		font-size: var(--h4);
		color: var(--tertiary-fg-light);
		position: absolute;
		bottom: 50px;
	}

	&.mobile::before {
		bottom: 40px;
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

	&.mobile-mtl {
		width: 250px;
		left: 0;
		top: -85px;
	}
`

const ExpoLogo = styled.img`
	width: 200px;
	position: absolute;
	top: -29px;
	left: 247px;
	z-index: -1;

	&.mobile-expo {
		width: 250px;
		left: 160px;
		top: -85px;
	}
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
