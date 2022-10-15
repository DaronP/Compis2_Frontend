import React, { useEffect, useState } from 'react'
import API from 'apisauce'
import './styles.css'
import { JsonToTable } from "react-json-to-table";
import { Errors } from './Errors';
import { ApiResponse } from 'apisauce'

const baseURL = `https://private-e30dc5-compistest.apiary-mock.com`

const APICall = API.create({baseURL: baseURL})

export const Quadruples = () => {
  const [data, setData] = useState([]);

  ////////////////////////////////////////
  

  useEffect(() => {
    APICall.get('/questions').then((response) => setData(response.data));
  }, []);

  function gettingPrint(){
    console.log(data)
  }


  return (
    <div className='Table'>
        <JsonToTable json={data} />
        <button onClick={gettingPrint}>GET</button>
        <Errors/>
    </div>
  )
}