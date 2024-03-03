import { useLoaderData } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Layout from './Layout'
import HomePage from '../components/HomePage'

function Home() {
    const product=useLoaderData()

  return (
    <Layout children={<HomePage/>} />
  )
}

export default Home