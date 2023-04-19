import React from 'react'

export default function ArrowFunction() {
    const Member=(props)=>{
       return (
        <div>
        <>
            <hr/>
            <h2>Dùng ArrowFunction</h2>
            <h3>Welcome to {props.infor}</h3>
        </>
        </div>
    ) 
    }
    return(
        <div>
            <Member infor="bla bla"/>
        </div>
    )
    
}
