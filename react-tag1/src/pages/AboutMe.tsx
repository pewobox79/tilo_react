import { useEffect, useState } from "react"

const AboutMe = () => {

    const [posts, setPosts] = useState([]);
    const [postState, setPostState] = useState<{ status: "loading" | "error" | "success", msg: string }>({ status: "loading", msg: "Daten werden geladen" })
    
    async function getPosts() {

        try {
            const response = await fetch('https://jsonholder.typicode.com/posts')

            if (!response.ok) {
                setPostState({...postState, status: "error", msg: "Source not valid"})
                throw new Error("error fetching")
            }

            const data = await response.json()
            setPosts(data)
            setPostState({...postState, status: "success"})

        } catch (err) {
            setPostState({status: "error", msg: "failed to fetch"})
            console.log("post fetch error", err)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            getPosts()
        }, 3000)
    }, [])


    const Posts = posts.map((post: { title: string, body: string, id: string }) => {

        return <div key={post.id}><h3>{post.title}</h3><p>{post.body}</p></div>
    })

    return (
        <div>
            <h1>about me</h1>

            <>{postState.status === "error" && <p>{postState.msg}</p>}</>
            <div>{postState.status === "loading" &&Posts}</div>
            {postState.status === "loading" && <p>Daten werden geladen....</p>}
        

        </div>
    )
}

export default AboutMe
