import { Card, Col, Row } from 'antd'
import Link from 'next/link'
import dayjs from 'dayjs'

export default function BlogMainPost({slug, thumbnail, title, subtitle, author, createdAt}){
    return(
        <Row align='middle' style={{height: "auto"}}>
            <Col span={24}>
                <Link href={`/post/${slug}`}>
                    <a>
                        <Card cover={<img alt={thumbnail.alt} src={thumbnail.imageUrl} />}  style={{ border: "none" }}>
                            <h2>{title}</h2>
                            <p>{subtitle}</p>
                            <span>{author.name} · {dayjs(createdAt).format("MMMM D")}</span>
                        </Card>
                    </a>
                </Link>
            </Col>
        </Row>
    )
}