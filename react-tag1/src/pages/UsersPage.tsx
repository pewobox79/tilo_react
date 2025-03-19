import styled from "styled-components";
import { useFetch } from "../hooks/useFetch"
import { Link } from "react-router";

const UsersPage = () => {

    const DivElement = styled.div`
            padding: 5px;
            margin: 3px;
    `

    const { data = [], isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/users');


    const UserList = data?.map((item: { name: string, id: string }) => {

        return <Link to={`/users/${item.name.toLocaleLowerCase().replace(" ", "_")}?id=${item.id}`} key={item.id}>
            <DivElement>{item.name}</DivElement>
        </Link>

    })
    return (
        <div>
            <h1>users page </h1>
            {isLoading ? <p>Data is loading...</p> : UserList}
            {error && <p>Users Fetch failed</p>}
        </div>
    )
}

export default UsersPage
