import React from 'react'
import { useParams, } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';

function SingleUser() {
    const [userData, setUserData] = useState({})
    const {id} = useParams();
    useEffect( () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then (resp => setUserData(resp.data))
    }, [])
    return (
        <div>
            <h1>Singel User Page</h1>
            <h4>Name:- {userData.name}</h4>
            <h4>email:- {userData.email}</h4>
            <h4>Phone:- {userData.phone}</h4>
        </div>
    )
}

export default SingleUser
