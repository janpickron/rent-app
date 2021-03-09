import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

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
    return (
    <Jumbotron fluid>
        <Container>
            <h1> {propertyData.title}</h1>
            <h2>{propertyData.category}: {' '}
            {propertyData.address}, {' '}
            {propertyData.city} {' '}
            {propertyData.state} {' '}
            {propertyData.zipCode}</h2>
            <p>{propertyData.description}</p>
        </Container>
        {propertyData.photo &&
         <Image src={propertyData.photo}
            alt={propertyData.title} fluid />
         }
    </Jumbotron>
    
    )

}
export default PropertyDetails