import { useState } from "react"
import { NavLink } from "react-router";

const ListItem = ({ title, id, href } : { title: string, id: string, href: string }) => {

    const[change, setChange] = useState(false);


    //function wird nicht gerendert beim init-rendering
    //wird function inline geschrieben onClick(()=>setChange(!change)) 
    // //dann wird funktion unter der Haube einmal getriggert

    function handleChange(){

        setChange(!change)
    
    }

    return <>
        <NavLink to={href}>
            <li id={id} style={{backgroundColor: change ? "red" : "white"}}>{title}</li>
        </NavLink>
        
        <p onClick={handleChange}>Change {title}</p>
        </>
}

export default ListItem
