import React, { useEffect, useState } from 'react'
import API from 'apisauce'
import { ApiResponse } from 'apisauce'

const baseURL = `https://private-e30dc5-compistest.apiary-mock.com`

const APICall = API.create({baseURL: baseURL})

export const Errors = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        APICall.get('/questions').then((response) => setData(response.data));
    }, []);

    function gettingPrint(){
        //console.log(data)
    }

    return (
        <div>
            <ul>
                {
                    data.map((item, key) => {
                        //console.log(item)
                        return <li key={item}>{item.question} {item.published_at} {item.line} {item.col}</li>
                    })
                }
            </ul>
            <button onClick={gettingPrint}>GET ERROR</button>
        </div>
    )
}
