import React, { useState } from 'react'

const formStyle = {
    padding: '2em',
    backgroundColor: '#2262ff',
    color: 'white'
}

function NewProperty(){
    const[firstName, setFirstName] = useState('')
    const[lastName, setLastName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Hello, ${firstName} ${lastName}!`)
    }
        return(
        <form style={formStyle} onSubmit={handleSubmit}>
            <label for="firstName">
                First Name:<br/>
                <input type="text" name="firstName" value={firstName}
                onChange={(e) => setFirstName(e.target.value)} />
            </label>
            <label for="lastName">
                Last Name:<br/>
                <input type="text" name="lastName" value={lastName}
                onChange={(e) => setLastName(e.target.value)} />
            </label>
            
            <input type="submit" value="Submit" />

        </form>            
        )
}

export default NewProperty