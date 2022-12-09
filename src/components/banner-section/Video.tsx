import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { imageSequence } from './ImageSequence'

gsap.registerPlugin(ScrollTrigger)

function Video() {
	const canvasRef = useRef()
	const videoSequenceTriggerRef = useRef()

	useEffect(() => {
		const canvas = canvasRef.current as HTMLCanvasElement
		console.log(canvas)
		const ctx = canvas.getContext('2d')

		canvas.width = 3840
		canvas.height = 2160
		// canvas.width = document.body.clientWidth
		// canvas.height = document.body.clientHeight

		const frameCount = 140
		const currentFrame = (index) => {
			return imageSequence[index]
		}

		const sequence = {
			frame: 0,
		}

		const images = []

		imageSequence.forEach((element, index) => {
			const img = new Image()
			img.src = currentFrame(index)
			images.push(img)
		})

		// console.log(images)
		// images[0].onload = () => {
		// 	ctx.drawImage(images[0], 0, 0)
		// }

		gsap.to(sequence, {
			frame: frameCount - 1,
			snap: 'frame',
			scrollTrigger: {
				trigger: videoSequenceTriggerRef.current,
				start: 'top center',
				// end: '+=500',
				// end: () =>
				// 	'+=' + videoSequenceTriggerRef.current.offsetHeight.toString(),
				end: '+=8000',
				scrub: 0.5,
				id: 'bg',
				// anticipatePin: true,
				// pin: true,
				markers: true,
			},
			onUpdate: updateImage,
		})

		images[0].onload = updateImage

		function updateImage(index) {
			ctx.clearRect(0, 0, canvas.width, canvas.height)
			ctx.drawImage(images[sequence.frame], 0, 0)
		}
	}, [])

	return (
		<Container ref={videoSequenceTriggerRef}>
			{/* <img src={imageSequence[0]} /> */}
			{/* <video
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
			</video> */}
			<canvas ref={canvasRef} id="video"></canvas>
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

	#video {
		overflow-x: hidden;
		width: 1440px;
		height: calc(100vh + 100px);
		z-index: -2;
		position: fixed;
		left: 0px;
		top: -100px;
		filter: brightness(85%);
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
`

export default Video
