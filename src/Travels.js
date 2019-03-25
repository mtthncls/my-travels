import React from 'react';
import Travel from './Travel'
const travels = [
    {
        image: "https://i.imgur.com/PyAbG4g.jpg",
        destination: "REYKJAVIK",
        country: "ICELAND",
        distance: "2 260 km"
    },
    {
        image: "https://i.imgur.com/JY1Mug8.jpg",
        destination: "TOKYO",
        country: "JAPAN",
        distance: "9 610 km"
    },
    {
        image: "https://gopened.com/wp-content/uploads/2018/02/street-view-new-york-gopened.jpg",
        destination: "NEW-YORK",
        country: "UNITED STATES OF AMERICA",
        distance: "5 883 km"
    },
    {
        image: "https://lecourrieraustralien.cdnartwhere.eu/wp-content/uploads/2017/10/Sydney-Harbour-1300x700.jpg",
        destination: "SYDNEY",
        country: "AUSTRALIA",
        distance: "16 835 km"
    },
    {
        image: "https://www.ef.fr/sitecore/__~/media/efcom/2018/ils/destinations/china/shanghai/stage_desktop.jpg",
        destination: "SHANGHAI",
        country: "CHINA",
        distance: "9 144 km"
    }

]

const Travels = () => (
    <div>
        {travels.map(travels => (
            <Travel image={travels.image} destination={travels.destination} country={travels.country} distance={travels.distance} />
        )
        )
        }
    </div>
)

export default Travels;