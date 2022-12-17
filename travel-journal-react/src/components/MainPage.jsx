import React from 'react'
import '/src/MainPage.css'
import data from '/src/data.js'
import Card from './TravelCard'
import Nav from './JournalNav'

function MainPage(){
    const dataSet = data.map(info =>{
        return <Card 
                    key={info.title}
                    title={info.title}
                    location={info.location}
                    googleMapsUrl={info.googleMapsUrl}
                    startDate={info.startDate}
                    endDate={info.endDate}
                    description={info.description}
                    imageUrl={info.imageUrl}
                />
    })
    return (
        <>
            <Nav />
            <div className='main-content'>
                {dataSet}
            </div>
            
        </>
    )
}

export default MainPage;