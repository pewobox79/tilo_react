import { useParams, useSearchParams } from "react-router"
import { useFetch } from "../hooks/useFetch";
import DefaultModal from "../components/globals/DefaultModal";
import { createPortal } from "react-dom";
import { useState } from "react";

const SingleUserPage = () => {

    const [search] = useSearchParams();
    const id = search.get("id")
    const URL = `https://jsonplaceholder.typicode.com/users/${id}`
    const { data } = useFetch(URL)
const [open, setOpen]=useState(false)
    return (
        <div>
            <h1>{data?.name}</h1>
            <p>{data?.phone}</p>

            <DefaultModal title="user" paragraph={"halllo user"} open={open} />

        </div>
    )
}

export default SingleUserPage
