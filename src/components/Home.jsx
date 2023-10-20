import Header from "./Header"
import Model from "./Model"
import GlassesList from "./GlassesList"
import '../App.css'
import data from "../dataGlasses.json"
import { useState } from "react"

const Home = () => {
    const [glasses, setGlasses] = useState({})

    const handleSetGlasses = (glass) => {
        setGlasses(glass)
    }

    return (
        <div>
            <Header />
            <Model glassesModel={glasses}/>
            <GlassesList glassList={data} updateGlassesModel={handleSetGlasses}/>
        </div>
    )
}

export default Home
