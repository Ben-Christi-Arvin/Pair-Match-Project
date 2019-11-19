import React from 'react'
import {
  Form,
  Jumbotron,
  Button,
  ListGroup,
} from 'react-bootstrap'

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

    displayFormResults = () => {
            const { name, profile_pic, focus} = this.state.form

            console.log(this.state.form)

    }

    render() {
        return(
            <div>
                <Form>
                    <Form.Group controlId="formName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="name" placeholder="Enter a Name" />
                        <Form.Control
                          type="text"
                          name="name"
                          onChange={this.handleChange}
                          value={this.state.form.name}
                        />
                    </Form.Group>

                    <Form.Group controlId="formProfilePic">
                        <Form.Label>Profile Picture:</Form.Label>
                        <Form.Control type="profile_pic" placeholder="Enter a Picture (url)" />
                        <Form.Control
                          type="text"
                          name="profile_pic"
                          onChange={this.handleChange}
                          value={this.state.form.name}
                        />
                    </Form.Group>

                    <Form.Group controlId="formName">
                        <Form.Label>Focus:</Form.Label>
                        <Form.Control type="name" placeholder="Enter a field of focus or project that you are working on" />
                        <Form.Control
                          type="text"
                          name="focus"
                          onChange={this.handleChange}
                          value={this.state.form.name}
                        />
                    </Form.Group>


                    <Button variant="primary" type="submit" onClick={this.displayFormResults}>
                    Submit
                    </Button>
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
