import styled from 'styled-components'
import img140 from '/imageSequence/ezgif-frame-140.jpg'

function MobileBG() {
	return (
		<Container>
			<img src={img140} />
			<Filter></Filter>
		</Container>
	)
}

const Container = styled.div`
	width: 100vw;
	overflow: hidden;
	position: absolute;
	top: 0;
	left: 0;

	img {
		height: 100vh;
		position: fixed;
		top: 0;
		left: 13px;
		filter: brightness(85%);
		@media only screen and (max-width: 920px) {
			left: -270px;
		}
	}
`

const Filter = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	filter: contrast(300%) brightness(60%);
	background: rgb(0, 3, 197)
		url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
	background-blend-mode: difference;
	opacity: 0.37;
	pointer-events: none;
`

export default MobileBG
