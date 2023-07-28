import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { getSortedPostsData } from '../lib/posts'
import Layout from '../component/layout';
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
export default function Home({allPostsData}) {
  return (
    
    <Layout>
   
      <section >
        <h2 >Blog</h2>
        <ul >
          {allPostsData.map(({ id, date, title }) => (
            <li  key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
