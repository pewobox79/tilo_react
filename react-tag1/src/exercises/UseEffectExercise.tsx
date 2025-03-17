import { useEffect, useState } from "react"

const UseEffectExercise = () => {

    const [number, setNumber]=useState(0)


    useEffect(()=>{

        const interval = setInterval(()=>{
            setNumber(prev => prev +1)
        }, 1000)


        return ()=>{
            console.log("clean up runs")
            clearInterval(interval)
        }


    }, [number])



    return (
        <div>
            <h4>{number}</h4>
        </div>
    )
}

export default UseEffectExercise
