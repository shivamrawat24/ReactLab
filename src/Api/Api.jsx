import React, { useEffect, useState } from 'react'

function Api() {
    const [usersData, setUsersData] = useState([])
    useEffect(()=>{
        getUserData();
    },[])

    const getUserData = async () => {
        const url = "https://jsonplaceholder.typicode.com/users"
        const response = await fetch(url)
        const data = await response.json()
        // console.log(data.users)
        setUsersData(data.users)
    }
    console.log(usersData);
    
  return (
    <div>
      <h1>Fetch data from API</h1>
      {
        usersData && usersData.map((user)=>{
            <h1>{user.id}</h1>
        })      
      }
    </div>
  )
}

export default Api
