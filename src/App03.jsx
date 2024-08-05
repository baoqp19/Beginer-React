// state, lifecycle -> học bằng class component (có sẵn state, lifecycle)

import React, { Component } from 'react'

export class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        };
    }

    handleIncrement = () => {
       this.setState({count: this.state.count + 1})
    }

    handleDecrement = () => {
        this.setState({count: this.state.count - 1})
    }

  render() {
    const {count} = this.state
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={this.handleDecrement}>-</button>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    )
  }
}

export default App

// state lưu trạng thái của nội bộ component -> thể hiện là dữ liệu
// trong 1 ccomponent -> state là 1 object -> muốn lưu nhiều thông tin, tạo ra các thuộc tính trong object state
// bất kì trong thuộc tính nào trong object stae thay đổi -> componeent sẽ bị re-den(cập nhận lại giao diện)
// không được thay đổi trực tiếp object state, mà phải thông qua hàm