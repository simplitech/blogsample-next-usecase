import Layout from '../components/Layout'
import AllPosts from "../components/AllPosts";
import {Link} from "@chakra-ui/react";
import {useAuthState} from "../state/AuthState";
import {useRouter} from "next/router";
import {useEffect} from "react";

const IndexPage = () => {
  const authState = useAuthState()
  const router = useRouter()

  useEffect(() => {
    if (!authState.token) {
      router.push('/')
    }
  }, [authState, router])

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Link onClick={authState.removeSigninInfo}>Logout</Link>
      <AllPosts />
    </Layout>
  )
}

export default IndexPage
