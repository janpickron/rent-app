import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

const cardStyle = {width: '18rem',}
const defaultImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/9%2C_Strada_Sp%C4%83tarului%2C_Bucharest_%28Romania%29.jpg/577px-9%2C_Strada_Sp%C4%83tarului%2C_Bucharest_%28Romania%29.jpg'
const imgStyle = {
    height: '300px',
    width:'18rem',
    backgroundColor: '#808080'
}


function PropertyCard({property}){
    
    return(
        
        <Link to={`/properties/${property.id}`}>
            <Card style={cardStyle}>
                <Card.Img variant="top" style={imgStyle} src={property.photo || defaultImg} />
                <Card.Body>
                    <Card.Title>{property.title}</Card.Title>
                    <Card.Text>{property.address}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    

    )


}

export default PropertyCard
