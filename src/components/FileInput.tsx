import React from 'react'
import './styles.css'
import styled, { css } from "styled-components";
import API from 'apisauce'

const baseURL = `http://192.168.56.1:3000`

const APICall = API.create({baseURL: baseURL})

export const FileInput = () => {

  let val:string;

    const readFile = ( e: React.ChangeEvent ) =>{
        const file = (e.target as HTMLInputElement)
        if(file != null){
          //console.log(file.files[0].name)
          val = file.files[0].name
        };

    }

    async function posting(val: string){
      const response = await APICall.post(
        '/code',
        {
            "code": val
        }
      );
      return response
    }
    
    const onClickHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
      if(event){
        console.log(val)
        var response = posting(val)
        console.log(response)
      }
    }
  return (
    <div className='File'>
        <label><input className='fileInput' type="file" multiple={false} onChange={readFile} /></label>
        <button onClick={onClickHandle}>Compile from file</button>
    </div>
  )
}
