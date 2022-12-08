import styled from 'styled-components'

function TechStack() {
	return (
		<Container>
			<StackIcons></StackIcons>
		</Container>
	)
}

const Container = styled.div`
	border: 1px solid red;
	width: 950px;
	height: 400px;
	grid-row: 1;
	grid-column: 1 / span 2;
`

const StackIcons = styled.div`
	margin-left: 350px;
	height: 100%;
	border: 1px solid orange;
`

export default TechStack
