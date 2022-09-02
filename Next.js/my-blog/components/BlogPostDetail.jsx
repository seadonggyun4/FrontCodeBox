import { Col, Row } from 'antd'
import BlockContent from '@sanity/block-content-to-react'
import SyntaxHighlighter from 'react-syntax-highlighter'

const serializers = {
    types: {
        code: ({node}) => {
            const {code} = node;
            return < SyntaxHighlighter language='javascript'>{code}</ SyntaxHighlighter>
        },
        video: ({node}) => {
            return <p>video</p>
        },
        imageGallery: ({node}) => {
            return <p>imageGallery</p>
        },
        link: ({node}) => {
            return <p>link</p>
        },
    }
}

export default function BlogPostDetail({blocks}){
  return(
    <Row>
        <Col span={24}>
            <BlockContent 
                blocks={blocks} 
                projectId={process.env.SANITY_PROJECT_ID} 
                dataset={"production"}
                serializers={serializers}
            />
        </Col>
    </Row>
  )
}