import Authentication from "./Authentication"
import Modal from "./Modal"
import { useState } from 'react'
import { useAuth } from "../context/AuthContext"

export default function Layout(props) {
    const { children } = props

    const [showModal, setShowModal] = useState(false)

    const { globalUser, logout } = useAuth()


    const header = (
        <header>
            <div>
                <h1 className="text-gradient">CAFFEEMANIA</h1>
                <p>For Coffee Maniacs</p>
            </div>
            {globalUser ? (
                <button onClick={logout}>
                    <p>Logout</p>
                </button>
            ) : (
                <button onClick={() => { setShowModal(true) }}>
                    <p>Sign up free</p>
                    <i className="fa-solid fa-mug-hot"></i>
                </button>
            )}
        </header>
    )

    const footer = (
        <footer>
            <p><span className="text-gradient">CoffeMania</span> was made by <a target="_blank" >Khazar Guluzade </a> <br />Check out the project on <a target="_black" href="https://github.com/khazarglzd?tab=overview&from=2024-11-01&to=2024-11-02">GitHub</a>!</p>
        </footer>
    )

    function handleCloseModal() {
        setShowModal(false)
    }

    return (
        <>
            {showModal && (
                <Modal handleCloseModal={handleCloseModal}>
                    <Authentication handleCloseModal={handleCloseModal} />
                </Modal>
            )
            }
            {header}
            <main>
                {children}
            </main>
            {footer}
        </>
    )
}