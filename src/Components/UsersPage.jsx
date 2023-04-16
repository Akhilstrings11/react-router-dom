import React, { useEffect, useState } from 'react'
import axios from "axios"

function UsersPage() {
    const [usersData, setUsersData] = useState([])
    const getUsersData = () => {
         axios.get("https://jsonplaceholder.typicode.com/users")
         .then((resp) => setUsersData(resp.data))
         .catch((err)  => console.log(err))
    }
    useEffect(() => {
        getUsersData()
    }, [])

    return (
        <div>
            <h1>User Details:-</h1>
            {usersData.map ((item,index) => <div> {item.name} </div>)}
        </div>
    )
}

export default UsersPage
