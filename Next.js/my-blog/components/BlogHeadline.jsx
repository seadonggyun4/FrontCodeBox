import { Col, Row } from 'antd'

export default function BlogHeadline(){
    return(
        <Row align='middle' style={{height:400, textAligh:"center"}}>
            <Col span={24}>
                <h1 style={{fontSize:70, fontWeight: "bold"}}>Dev Blog</h1>
            </Col>
        </Row>
    )
}