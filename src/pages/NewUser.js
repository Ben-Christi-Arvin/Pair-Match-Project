import React from 'react'
import {
  Form,
  Button,
} from 'react-bootstrap'

import { Redirect } from 'react-router-dom'

class NewUser extends React.Component {
    constructor(props){
    super(props)
        this.state = {
            form: {
                name: '',
                profile_pic: '',
                focus: ''
            }
        }
    }

    handleChange = (event) => {
        let {form} = this.state
        form[event.target.name] = event.target.value
        this.setState({form: form})
    }

    handleClick = () => {
        // console.log(this.state.form)
        this.props.createUser(this.state.form)
    }

    render() {
        return(
            <div>
                <br></br>
                <Form>
                    <Form.Group controlId="formName">
                        <Form.Label id="name">Name:</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          onChange={this.handleChange}
                          value={this.state.form.name}
                        />
                    </Form.Group>

                    <Form.Group controlId="formProfilePic">
                        <Form.Label>Profile Picture:</Form.Label>
                        <Form.Control
                          type="text"
                          name="profile_pic"
                          onChange={this.handleChange}
                          value={this.state.form.profile_pic}
                        />
                    </Form.Group>

                    <Form.Group controlId="formName">
                        <Form.Label>Focus:</Form.Label>
                        <Form.Control
                          type="text"
                          name="focus"
                          onChange={this.handleChange}
                          value={this.state.form.focus}
                        />
                    </Form.Group>


                    <Button variant="primary" onClick={this.handleClick}>
                    Create New User
                    </Button>
                    {this.props.success &&
                        <Redirect to="/users" />
                    }
                </Form>

            </div>
        )
    }
}

export default NewUser

// <Form.Control
//   type="text"
//   name="name"
//   onChange={this.handleChange}
//   value={this.state.form.name}
// />
// <Form.Control
//   type="text"
//   name="focus"
//   onChange={this.handleChange}
//   value={this.state.form.name}
// />
// <Form.Control
//   type="text"
//   name="focus"
//   onChange={this.handleChange}
//   value={this.state.form.name}
// />
