import React from 'react'

const Users = (props) => {
  return (
    <div>
        <h2>Thong tin user</h2>
        <h3>Tên: {props.name} </h3>
        <h3>Email: {props.email} </h3>
    </div>
  )
}

export default Users