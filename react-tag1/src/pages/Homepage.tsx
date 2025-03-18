import DefaultButton from "../components/globals/DefaultButton"
import { useState } from "react"
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
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

    return <AuthLayout user={false}>
        <MainLayout>
        <h1>Homepage</h1>


        <DefaultButton
            title="Open"
            action={getUsers} 
            style={{color: "purple", backgroundColor: "red", border: "3px solid yellow"}}/>


<div>
    {ListOfUsers}
</div>
    </MainLayout></AuthLayout>

}

export default Homepage