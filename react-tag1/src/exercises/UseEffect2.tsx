import { useState, useEffect } from 'react'
const UseEffect2 = () => {


    const [user, setUser] = useState({name:""});
    const [userNumber, setUserNumber] = useState(0);
    const [state, setState] = useState("loading")



    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal
        fetch(`https://jsonplaceholder.typicode.com/users/${userNumber}`, { signal: signal })
            .then(response => response.json())
            .then(data => {
                setUser(data)
                setState("success")
            })

        return () => {

            setState("loading")
            controller.abort()
        }
    }, [userNumber])


    return (
        <div>
            <div onClick={() => setUserNumber(1)}>User 1</div>
            <div onClick={() => setUserNumber(2)}>User 2</div>
            <div onClick={() => setUserNumber(3)}>User 3</div>
            <div onClick={() => setUserNumber(4)}>User 4</div>
            <div onClick={() => setUserNumber(5)}>User 5</div>


            <div>
                {state === "success" && <h1>{user?.name}</h1>}
                {state === "loading" && <h3>Loading user....</h3>}
            </div>
        </div>
    )
}

export default UseEffect2
