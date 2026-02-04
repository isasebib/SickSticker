'use client'

import Link from "next/link"
import { useEffect } from "react"

export default function error(props) {
    const { error , reset } = props

    UseEffect(() => {
        console.log(error)
    }, [error])

    return(
        <div>
            <h3>Something went wrong!</h3>
            <div>
                <button>Reset</button>
                <Link href={"/"}>
                    <button>Home</button>
                </Link>
            </div>
        </div>
    )
}