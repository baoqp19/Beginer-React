import React from 'react'
import Users from './components/Users'

const App = () => {
  return (
    <div>
       <h1>Xin chao nhe</h1>
       <hr />
        <Users name="pham quoc bao" email="an@gmail.com" />
        <hr />
        <Users name="Le hoang anh" email="anh@gmail.com" />
        <hr />
        <Image src="https://cebcu.com/wp-content/uploads/2024/01/anh-gai-xinh-cute-de-thuong-het-ca-nuoc-cham-27.webp" width="200" height="200" />
    </div>
  )
}

export default App

//  props là
//   -- truyền dữ liệu từ component cha -> component con, Props không thay đổi chính nó
//   -- Props sẽ nhận ở than số của hàm, class, chỉ truyền từ cha -> con

