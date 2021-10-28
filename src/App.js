import Header from "./Header"
import NavBar from "./NavBar"
import Footer from "./Footer"
import ItemListContainer from "./ItemListContainer"


function App() {
    const user = "Rocio"
    return (
        <>
            <Header />
            <NavBar />
            <ItemListContainer saludo={`Bienvenidas a Free Beauty by ${user}`} />
            <Footer />
        </>
    )
}

export default App





