import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { CardBlogPost } from '../../../../components/organisms'
import { SectionHeader } from '../../../../components/molecules'
import { BlogStyle } from './Blog.style'
import axios from 'axios'
import { Spinner } from '../../../../components/atoms'
import {blogData} from "./data";

/**
 * A blog component that can be used inside any views.
 *
 * @returns A Blog component.
 */
const Blog = () => {
	const [blog, setBlog] = useState<PostProps[]>([])
	const [isLoading, setIsLoading] = useState(false)

	/* todo: for netlify
	useEffect(() => {
		axios.get('/json-server/kyomi/blog.json').then((response) => {
			// setIsLoading(false)
			// setBlog(response.data)
		})
	}, [])*/

	return (
		<BlogStyle>
			<SectionHeader
				description={`In hac habitasse platea dictumst. Pellentesque placerat rhoncus justo sed sollicitudin. 
                            Donec purus magna, maximus id magna eu, ullamcorper fermentum tortor. `}
				subTitle={'Quisque porttitor metus non'}
				title={'From the Blog'}
			/>
			<Row>
				{isLoading ? (
					<Spinner />
				) : (blogData.map((item, index) => (
						<Col lg={3} md={6} sm={12} xs={12} key={index}>
							<CardBlogPost
								title={item.title}
								image={item.image}
								excerpt={item.excerpt}
								author={item.author}
							/>
						</Col>
					))
				)}
			</Row>
		</BlogStyle>
	)
}

export default Blog
