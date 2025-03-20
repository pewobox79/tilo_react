'use client'

import Button from '@/components/Button'
import Link from 'next/link'
import React from 'react'

const AboutMePage = ({data}:{data:[]}) => {

    console.log("about me page component")
    return (
        <div>
            <h2>about me page componente</h2>

            <Button/>

            {data?.map((user:{id: string, name: string})=>{
                return <Link key={user.id} href={`aboutme/${user.name}`}><div >{user.name}</div></Link>
            })}
        </div>
    )
}

export default AboutMePage
