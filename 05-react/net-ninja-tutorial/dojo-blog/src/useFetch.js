import { useState, useEffect } from "react"

const useFetch = (url) => {
const [data, setData] = useState(null)
const [isPending, setIsPending] = useState(true)
const [name, setName] = useState("Mario");
const [isError, setError] = useState(null)
    useEffect(() => {
        fetch(url)
            .then(res => {
                console.log(res)
                if(!res.ok){
                    throw Error("Could not fetch the data for that resource")
                }
                return res.json()
                })
                .then((data)=> {
                    setData(data)
                    setError(null)
                    setIsPending(false)
                })
                .catch(err => {
                    setIsPending(false)
                    setError(err.message)
                })
          }, [url])        

        return {data,isPending,isError}

}

export default useFetch;