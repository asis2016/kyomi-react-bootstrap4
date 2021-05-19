import React, { Fragment, useEffect } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import api from '../../api/contacts'
import { SectionHeader } from '../../components/molecules'
import { AboutBase } from './About.style'

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
				description='lorem ipsum'
				subTitle='Welcome to the Kyomi team.'
			/>

			<Container>
				<Row>
					<Col lg={4} className={'text-center'}>
						<Image
							roundedCircle={true}
							src='https://via.placeholder.com/150x150'
						/>
						<h2 className={'pt-2'}>Heading</h2>
						<p>
							Donec sed odio dui. Etiam porta sem malesuada magna mollis
							euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
							Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
							Praesent commodo cursus magna.
						</p>
					</Col>
				</Row>
			</Container>
		</AboutBase>
	)
}

export default About
