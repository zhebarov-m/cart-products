
import './App.css'
import {MainLayouts} from "./layouts/MainLayouts.tsx";



export interface iProduct {
    id: number,
    imageUrl: string,
    title: string,
    price: number,
    quantity: number
}

function App() {

    return (
        <div className="app">
            <MainLayouts />
        </div>
    )
}

export default App
