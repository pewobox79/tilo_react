import { stringify } from "querystring";

export const getUsers = async()=>{


    const config={
        method: "POST",
        header:{
            'content-type': 'application/json'
        },
        body: JSON.stringify({userId: 1})
    }
    try{

        const response = await fetch('http://localhost:3000/api/users', config);
        return await response.json()
    }catch(err){
        console.log("error ", err)
    }

}