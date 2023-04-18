import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function UsersPage() {
    const [usersData, setUsersData] = useState([])
    const navigate = useNavigate()
    const getUsersData = () => {
         axios.get("https://jsonplaceholder.typicode.com/users")
         .then((resp) => setUsersData(resp.data))
         .catch((err)  => console.log(err))
    }
    useEffect(() => {
        getUsersData()
    }, [])

    const goToUserPage = (id) => {
        navigate(`/user/${id}`)

    }

    return (
        <div>
            <h1>User Details:-</h1>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Zip Code</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {usersData.map ((item,index) => <tr key={index} > 
                    <td>{item.id}</td>
                    <td>{item.name}</td> 
                    <td>{item.email}</td>
                    <td>{item.address.city}</td>
                    <td>{item.address.zipcode}</td>
                    <td><button onClick={ () => goToUserPage(item.id) }>Know more</button></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default UsersPage
