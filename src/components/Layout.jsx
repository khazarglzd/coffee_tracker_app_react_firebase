import Authentication from "./Authentication"
import Modal from "./Modal"
import { useState } from 'react'

export default function Layout(props) {
    const { children } = props

    const [showModal, setShowModal] = useState(false)


    const header = (
        <header>
            <div>
                <h1 className="text-gradient">COFFEEMANIA</h1>
                <p>For Coffee Insatiates</p>
            </div>

            <button onClick={() => { setShowModal(true) }} >
                <p>Sign up free</p>
                <i className="fa-solid fa-mug-hot"></i>
            </button>
        </header>
    )

    const footer = (
        <footer>
            <p><span className="text-gradient">CoffeMania</span> was made by <a target="_blank" >Khazar Guluzade </a> <br />Check out the project on <a target="_black" href="https://github.com/khazarglzd?tab=overview&from=2024-11-01&to=2024-11-02">GitHub</a>!</p>
        </footer>
    )


    return (
        <>
            {showModal && (
                <Modal handleCloseModal={() => { setShowModal(false) }}>
                    <Authentication />
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