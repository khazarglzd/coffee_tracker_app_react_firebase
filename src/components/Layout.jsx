
export default function Layout(props) {
    const { children } = props


    const header = (
        <header>
            <div>
                <h1 className="text-gradient">COFFEELAND</h1>
                <p>For Coffee Insatiates</p>
            </div>

            <button >
                <p>Sign up free</p>
                <i className="fa-solid fa-mug-hot"></i>
            </button>
        </header>
    )

    const footer = (
        <footer>
            <p><span className="text-gradient">CoffeLand</span> was made by <a target="_blank" >Khazar Guluzade </a> <br />Check out the project on <a target="_black" href="https://github.com/khazarglzd?tab=overview&from=2024-11-01&to=2024-11-02">GitHub</a>!</p>
        </footer>
    )


    return (
        <>

            {header}
            <main>
                {children}
            </main>
            {footer}
        </>
    )
}