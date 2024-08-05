import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

export class Login extends Component {

    constructor (){
        super();
        this.state = {
            form: {
                name: "",
                email: "",
            },

        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {name, email} = this.state.form;
        console.log(name, email);
    }

    handleChangeValue = (e) => {
        this.setState({form: {...this.state.form,  [e.target.name]: e.target.value},
        })
    }
  render() {
    return (
      <div className="container py-3">
        <div className="row justity-content-center">
            <div className="col-6">
                <form action="" onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="">Ten</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control" 
                            placeholder="tên..." 
                            onChange={this.handleChangeValue}
                            />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Email</label>
                        <input 
                            type="text" 
                            name="email" 
                            className="form-control" 
                            placeholder="Email..." 
                            onChange={this.handleChangeValue}
                        />
                    </div>
                    <div className="d-grid">
                        <button className='btn btn-primary'>Đăng nhập</button>
                    </div>
                </form>
            </div>
        </div>
     </div>
    )
  }
}

export default Login