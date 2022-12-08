import styled from 'styled-components'
import Video from './Video'

function Banner() {
	return (
		<>
			<Video />
			<Container>
				<Avatar src="/popnobg.png" />
				<img className="mtl" src="/mtlnobg.png" />
				<div className="main">
					<h1>Hi, I'm Michael Wagner</h1>
					<p className="h4">a Montréal-based</p>
					<p className="h1">Web Developer</p>
				</div>
			</Container>
		</>
	)
}

const Container = styled.section`
	position: absolute;
	top: 0;
	left: 0;
	padding: 300px 100px;
	width: 100vw;
	height: 100vh;
	display: grid;
	place-content: center;
	color: white;

	grid-template-columns: 1fr 1fr;
	position: fixed;
	.mtl {
		width: 200px;
		position: relative;
		bottom: 150px;
		left: 500px;
	}
`

const Avatar = styled.img`
	height: 200px;
	width: 200px;
	object-fit: cover;
	border-radius: 50%;
	border: 4px dotted var(--primary-fg);
`

export default Banner
