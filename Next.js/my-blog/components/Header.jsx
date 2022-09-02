import Link from 'next/link'
import { Col, Row } from 'antd'
import { CodeOutlined } from '@ant-design/icons'

export default function Header(){
    return(
        <Row align='middle' style={{height: 64}}>
            <Col span={24}>
                <Link href="/">
                    <a>
                        <div style={{fontSize: 20, fontWeight: "bold," }}>
                            <CodeOutlined></CodeOutlined> Dev Blog
                        </div>
                    </a>
                </Link>
            </Col>
      </Row>
    )
}