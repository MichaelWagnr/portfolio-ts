import styled from 'styled-components'

function Video() {
	return (
		<Container>
			<video
				autoPlay
				muted
				loop
				poster="true"
				id="video"
				onPlay={(e) => {
					const target = e.target as HTMLVideoElement
					// target.playbackRate = 0.4
				}}>
				<source src="mtl.mp4" type="video/mp4" />
			</video>
			<Filter></Filter>
		</Container>
	)
}

const Container = styled.div`
	width: 100vw;
	overflow: hidden;
	position: relative;

	#video {
		overflow-x: hidden;
		width: 1440px;
		height: calc(100vh + 20px);
		z-index: -2;
		position: absolute;
		left: 0px;
		top: 0px;
		filter: brightness(70%);
	}
`

const Filter = styled.div`
	width: 100vw;
	height: 100vh;
	position: relative;
	z-index: 10;
	filter: contrast(300%) brightness(60%);
	background: rgb(0, 3, 197)
		url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
	background-blend-mode: difference;
	opacity: 0.37;
`

export default Video
