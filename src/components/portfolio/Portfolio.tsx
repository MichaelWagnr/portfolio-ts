import styled from 'styled-components'
import Card from './Card'
import { projectData } from './Data'

function Portfolio() {
	return (
		<Container>
			{projectData.map((obj) => {
				return (
					<Card
						title={obj.title}
						tech={obj.tech}
						desc={obj.desc}
						lesson={obj.lesson}
						videoUrl={obj.videoUrl}
						githubUrl={obj.githubUrl}
						projectUrl={obj.projectUrl}
						imgSrc={obj.imgSrc}
					/>
				)
			})}
		</Container>
	)
}

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	padding: 100px;
	display: flex;
	gap: 15px;
	place-content: center;
`

export default Portfolio
