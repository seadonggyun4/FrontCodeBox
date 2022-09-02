import styles from '../../styles/Home.module.css'
import SanityService from "../../services/SanityService"

import Header from '../../components/Header'
import BlogMainPost from '../../components/BlogMainPost'
import Footer from '../../components/Footer'
import BlogPostDetail from '../../components/BlogPostDetail'


export default function PostAll({slug, post}){
    console.log(post)    

    return(
        <div className={styles.container}>
            <Header />
            <BlogMainPost {...post}/>
            <BlogPostDetail blocks={post.content}/>
            <Footer />
        </div>
    )
}


export async function getStaticPaths(){
   // SanityService 로부터 데이터를 가져온다.
   const posts = await new SanityService().getPosts()

  const paths = posts.map(post => ({
    params: {
        slug: post.slug
    }
  }))


    return{
        paths,
        fallback: false
    }
}


export async function getStaticProps({params}){
    // SanityService 로부터 데이터를 가져온다.
    const posts = await new SanityService().getPosts()

    const {slug} = params
    const post = posts.find(p => p.slug === slug)
    
    return {
        props: {
            slug,
            post
        }
    }
}