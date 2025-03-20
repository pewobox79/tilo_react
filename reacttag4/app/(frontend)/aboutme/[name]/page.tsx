import React from 'react'

const SingleUser = async ({ params, searchParams }) => {

    const myparams = await params;
    const search = await searchParams;

    console.log("singel user", myparams, search)
    return (
        <div><h1>single user</h1>

        </div>
    )
}

export default SingleUser
