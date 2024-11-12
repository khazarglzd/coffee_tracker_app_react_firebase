import './App.css'
import Layout from './components/Layout'
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import History from "./components/History"
import CofeeForm from "./components/CofeeForm"
import "./index.css"

function App() {

  const isAuthenticated = true

  const authenticatedContent = (
    <>
      <Stats />
      <History />
    </>
  )

  return (
    <Layout>
      <Hero />
      <CofeeForm />
      {
        isAuthenticated && (authenticatedContent)
      }
    </Layout>
  )
}

export default App
