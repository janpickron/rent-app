import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'

function Properties() {
    const [propertyList, setPropertyList] = useState([])
    useEffect(() => {
        fetch('https://rentbunny-api.web.app/properties')
        .then(response => response.json())
        .then(data => setPropertyList(data))
        .catch(err => console.log(err))
    }, [])
    return (
    <>
    <h1>Properties List</h1>
    {!propertyList
    ? <p>Loading...</p>
    : <ListGroup>{propertyList.map(prop => {
        return (
        <ListGroup.Item key={prop.id}>
            <Link to={`/properties/${prop.id}`}>
            {prop.address}
            </Link>
            </ListGroup.Item>
        )
    })}
    </ListGroup>
}
    </>
    )
}

export default Properties