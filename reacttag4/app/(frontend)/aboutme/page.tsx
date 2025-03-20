import Button from "@/components/Button"
import AboutMePage from "@/pages/AboutMePage"
import { getUsers } from "@/utils/placeholderHelper"

const AboutMe =async()=>{

    const userData = await getUsers()
   
    console.log("user data", userData)
    return <>
        <h1>about me</h1>
        <Button/>
        <AboutMePage data={userData}/>
        
        </>
}

export default AboutMe