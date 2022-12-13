import styled from 'styled-components'
import Header from '../Header'
import Card from './Card'
import { projectData } from './Data'
import ProjectDetails from './ProjectDetails'

function Portfolio() {
	return (
		<Container>
			<Header />
			<ProjectDetails />
			<h2 className="h3" style={{ textAlign: 'center' }}>
				Additional projects
			</h2>
			<AdditionalProjects>
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
			</AdditionalProjects>
		</Container>
	)
}

const Container = styled.div`
	width: 100vw;
	display: grid;
	justify-content: center;
	padding-bottom: 20px;
`

const AdditionalProjects = styled.div`
	/* min-height: 100vh; */
	width: 100vw;
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	gap: 15px;
	place-content: center;
`

export default Portfolio
