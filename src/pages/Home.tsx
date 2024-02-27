import { useLoaderData } from 'react-router-dom'
import NavBar from '../components/NavBar'

function Home() {
    const product=useLoaderData()

  return (
    <div>
        <NavBar />
    </div>
  )
}

export default Home