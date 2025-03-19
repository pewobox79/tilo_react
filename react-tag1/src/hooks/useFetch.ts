import { useState, useEffect } from "react";

export function useFetch(url: string) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)


    async function fetchData() {

        try {
            const request = await fetch(url);
            if (!request.ok) {
                throw new Error("Network response was not ok")
            }
            const json = await request.json();
            setData(json)

        } catch (err) {
            console.log("err", err)
            setError(true)

        } finally {
            setIsLoading(false)
        }

    }


    useEffect(() => {

        fetchData()

    }, [url]);

    return {data, isLoading, error}
}