import styled from 'styled-components'
import Header from '../Header'
import Card from './Card'
import { projectData } from './Data'
import ProjectDetails from './ProjectDetails'

function Portfolio() {
	return (
		<>
			<Header />
			<ProjectDetails />
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
		</>
	)
}

const Container = styled.div`
	min-height: 100vh;
	width: 100vw;
	padding: 100px;
	display: flex;
	flex-wrap: wrap;
	gap: 15px;
	place-content: center;
`

export default Portfolio
