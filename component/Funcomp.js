import React from 'react'

export default function FunComp(props) {
  return (
    <div>
      <h2>Dùng Functiton Companent</h2>
      <p>Xin chào ReactJS</p>
      <p>Name: {props.name}</p>
      <p>Company: {props.company}</p>
    </div>
  )
}
