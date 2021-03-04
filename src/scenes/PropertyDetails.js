import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function PropertyDetails() {
    const { propertyId } = useParams()
    const [propertyData, setPropertyData] = useState(null)

    useEffect(() => {
        fetch('https://rentbunny-api.web.app/properties/' + propertyId)
        .then(response => response.json())
        .then(data => setPropertyData(data))
        .catch(err => console.log(err))
    }, [propertyId])
    if (!propertyData){
        return <h2>Loading...</h2>
    }
    return <h2>{propertyData.title}</h2>


}
export default PropertyDetails