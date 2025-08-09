import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import './App.css'
import SelectMenu from "./components/SelectMenu"

const App = () => {
    return (
        <>
    <Header/>
    <main>
    <div className="search-filter-container">
    <SearchBar/>
    <SelectMenu/>
    </div>
    </main>
        </>
    )
}

export default App