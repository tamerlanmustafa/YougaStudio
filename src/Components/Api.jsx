import { useEffect, useState } from "react";







const API = () => {
    const [quote, setQuote] = useState([])
    
    const fetchData = async () => {
        await fetch(
            "https://api.api-ninjas.com/v1/quotes?category=inspirational",
            {
                headers: { "X-Api-Key": "KTvi/yZZxuGA4mcFTyiaYA==PKQAr267FSi8uPWE" }
            }
        )
            .then(res => {
                return res.json()
            })
            .then(data => {
                setQuote(data[0].quote)
            })
            .catch(Error)

    } 
    useEffect(() => {
        fetchData()
    }, [])
    return ( 
        <>
            <h3> "{quote}"</h3>
        </>
     )

    
    
}
 
export default API;