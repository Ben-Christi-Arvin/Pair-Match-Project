import React from 'react'
import ReactDOM from 'react-dom'
import User from '../User'
import { mount } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

const users = [
    {
        id: 1,
        name: 'Patsy',
        profile_pic: "http://westlandchildrensacademy.com/wp-content/uploads/generic-female-profile-picture-8.jpg",
        focus: "Python Driven Web Scraper"
    },
    {
        id: 2,
        name: 'Paul',
        profile_pic: "https://publicdomainvectors.org/photos/generic-avatar.png",
        focus: "Python Scripting for Stock Automation"
    },
    {
        id: 3,
        name: 'Peter',
        profile_pic: "https://publicdomainvectors.org/photos/generic-avatar.png",
        focus: "Ruby on Rails"
    },
    {
        id: 4,
        name: 'Pen',
        profile_pic: "http://westlandchildrensacademy.com/wp-content/uploads/generic-female-profile-picture-8.jpg",
        focus: "React and Javascript"
    }
]


it('User renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<User currentUser={users[0]} />, div)
})


// describe('<User />', () => {
//     it('Renders the User', ()=>{
//       const component = mount(<User currentUser={users[0]}/>)
//
//       expect(component.props().currentUser).to.equal(users[0])
//     })
// })
