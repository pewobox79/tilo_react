import { useState } from "react"

const ListItem = ({ title, id, href } : { title: string, id: string, href: string }) => {

    const[change, setChange] = useState(false);


    //function wird nicht gerendert beim init-rendering
    //wird function inline geschrieben onClick(()=>setChange(!change)) 
    // //dann wird funktion unter der Haube einmal getriggert

    function handleChange(){

        setChange(!change)
    
    }

    return <>
        <a href={href}>
            <li id={id} style={{backgroundColor: change ? "red" : "white"}}>{title}</li>
        </a>
        
        <p onClick={handleChange}>Change {title}</p>
        </>
}

export default ListItem
