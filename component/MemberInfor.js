import React from "react";
import Avatar from "./Avatar";

export default function MemberInfor(props) {
  return (
    <div>
        <hr/>
      <Avatar link={props.infor.path}/>
      <h2>Tên: {props.infor.name}</h2>
      <h2>Tuổi: {props.infor.age}</h2>
    </div>
  )
}
