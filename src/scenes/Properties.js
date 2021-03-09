import React, { useState, useEffect } from 'react'
import PropertyCard from '../components/PropertyCard'
import CardColumns from 'react-bootstrap/CardColumns'

const cardColumnStyle = {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    justifyContent: 'center'
}

function Properties() {
    const [propertyList, setPropertyList] = useState([])
    useEffect(() => {
        fetch('https://rentbunny-api.web.app/properties')
        .then(response => response.json())
        .then(data => setPropertyList(data))
        .catch(err => console.log(err))
    }, [])
    return (
    <section style={{ padding: '2rem' }}>
    <h1>Properties List</h1>
    {!propertyList
    ? <p>Loading...</p>
    : <CardColumns style={cardColumnStyle}>{propertyList.map(property => {
        return (
        <PropertyCard
        key={property.id} 
        property={property}/>)
    })}
    </CardColumns>
}
    </section>
    )
}

export default Properties