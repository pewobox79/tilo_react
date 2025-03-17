import DefaultButton from "../components/globals/DefaultButton"
import { useState } from "react"
const Homepage = () => {

const [users, setUsers]=useState([]);


    async function getUsers(){

        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')

            if(!response.ok) {
                throw new Error("error fetching")
            }

            const data = await response.json()
            setUsers(data)

        }catch(err){
            console.log("error catch", err)
        }
        
    }

    const ListOfUsers = users.map((user:{ id: string, name: string})=>{

        return <div key={user.id}>{user.name}</div>
    })

    return <>
        <h1>Homepage</h1>


        <DefaultButton
            title="Open"
            type="negative"
            action={getUsers} 
            style={{color: "purple", backgroundColor: "red", border: "3px solid yellow"}}/>


<div>
    {ListOfUsers}
</div>
    </>

}

export default Homepage