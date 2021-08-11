import Link from 'next/link'
import Layout from '../components/Layout'
import AllPosts from "../components/AllPosts";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <AllPosts />
  </Layout>
)

export default IndexPage
