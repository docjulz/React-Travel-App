import React from "react"
import Header from "./Components/Header"
import Card from "./Components/Card"
import data from "./data"
// console.log(data)

export default function App () {
    const travelCard = data.map(location => {
        return (            
            <Card 
                key={location.id} 
                location={location}
            /> 
        )
    })
    return (
        <div>
            <Header />
            {travelCard}
        </div>
        
    )
}