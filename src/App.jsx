import './App.css'
import Layout from './components/Layout'
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import History from "./components/History"
import CofeeForm from "./components/CofeeForm"
import "./index.css"

function App() {

  const isAuthenticated = false

  const authenticatedContent = (
    <>
      <Stats />
      <History />
    </>
  )

  return (
    <Layout>
      <Hero />
      <CofeeForm isAuthenticated={isAuthenticated} />
      {
        isAuthenticated && (authenticatedContent)
      }
    </Layout>
  )
}

export default App
