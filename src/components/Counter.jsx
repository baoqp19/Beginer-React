// rce
import React, { Component } from 'react'

export class Counter extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        };
        console.log("1. constructor")
    }
    componentDidMount(){       // 
        console.log("3. componentDidMount")
    }

    componentDidUpdate(){ // nếu có thay đổi từ state thì nó sẽ chạy,
        console.log("4. componentDidUpdate")
    }
    // lần dầu chạy 1, 2, 3 và bấm click me thì rander chạy kèm theo hàm componnetDidUpadate chạy

    componentWillUnmount(){ // nếu loại bỏ phần tử DOM thì nó sẽ chạy
        console.log("5. componentWillUnmount")
    }
  render() {
    console.log("2. rander")
    return (
      <div>Count: {this.state.count }
        <h1></h1>
        <button onClick={() =>
            this.setState({count: this.state.count + 1})
        }>Click me</button>
      </div>
    )
  }
}

export default Counter