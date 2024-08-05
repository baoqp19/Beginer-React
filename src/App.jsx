import React from 'react'
// import Counter from './components/Counter'

import Counter from "./components/Counter";

// const App = () => {
//   return (
//     <Counter />
//   )
// }

// export default App

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      show: true
    }
  }

  render(){
    return (
      <div>
        {this.state.show && <Counter />}
        <hr />
        <button onClick={() => {
          this.setState({show: !this.state.show})
        }}>Toggle</button>
      </div>
    )
  }
}

export default App;