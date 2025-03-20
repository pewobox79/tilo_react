import { useState, useCallback } from 'react'
import { shuffle } from '../../utils/shuffle'
import Search from './Search'

const MemoCallback = () => {

    const initUser = ["john", "tilo", "peter", "klaus"]

    const [users, setUsers] = useState(initUser)

    const handleSearch= useCallback((text: string)=>{
        const filteredUsers = initUser.filter(user=>user.includes(text))
        setUsers(filteredUsers)
    }, [] )


    console.log("memo render")
    return (
        <div>
            
            <button onClick={()=> setUsers(shuffle(initUser))}>shuffle</button>
            
            <Search action={handleSearch} />
            {users.map((user) => {
                return <div key={user}>{user}</div>
            })}
        </div>
    )
}

export default MemoCallback
