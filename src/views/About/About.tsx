import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import api from './contacts'
import { ImageToggleOnMouseOver } from '../../components/atoms'
import { SectionHeader } from '../../components/molecules'
import { AboutBase } from './About.style'
import {Footer, Highlight} from "../../components/organisms";

const AboutData = [
	{
		primaryImage: 'about-1.png',
		secondaryImage: 'about-1-bw.png',
		name: 'Mr. Uncle Sam',
	},
	{
		primaryImage: 'about-2.png',
		secondaryImage: 'about-2-bw.png',
		name: 'Jane Doe',
	},
	{
		primaryImage: 'about-3.jpg',
		secondaryImage: 'about-3-bw.jpg',
		name: 'Michael Harris',
	},
]

const About = () => {
	// get contacts
	const getContacts = async () => {
		const response = await api.get('/contacts')
		return response.data
	}

	useEffect(() => {
		const getAllContacts = async () => {
			const allContacts = await getContacts()
		}
		getAllContacts()
	}, [])

	return (
		<AboutBase>
			<SectionHeader
				title='About'
				description='Lorem ipsum Nullam id dolor id nibh ultricies vehicula ut id elit.'
				subTitle='Welcome to the Kyomi team.'
			/>

			<Container className="about-content">
				<Row>
					{AboutData.map((employee, index) => (
						<Col lg={4} className={'text-center'} key={index}>
							<ImageToggleOnMouseOver
								primaryImage={`https://raw.githubusercontent.com/asis2016/kyomi-react-bootstrap4/main/src/assets/images/${employee.primaryImage}`}
								secondaryImage={`https://raw.githubusercontent.com/asis2016/kyomi-react-bootstrap4/main/src/assets/images/${employee.secondaryImage}`}
							/>
							<h2 className={'pt-2'}>{employee.name}</h2>
							<p>
								Donec sed odio dui. Etiam porta sem malesuada magna mollis
								euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
								Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
								Praesent commodo cursus magna.
							</p>
						</Col>
					))}
				</Row>
			</Container>

			<Highlight />
			<Footer/>
		</AboutBase>
	)
}

export default About
