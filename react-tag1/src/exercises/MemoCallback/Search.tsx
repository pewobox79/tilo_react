import React, {memo} from 'react'

const Search = ({ action }) => {

    console.log("search feature")
    return (
        <div>
            <input
                type='text'
                placeholder="user"
                onChange={(e) => action(e.target.value)} />

        </div>
    )
}

export default memo(Search)
