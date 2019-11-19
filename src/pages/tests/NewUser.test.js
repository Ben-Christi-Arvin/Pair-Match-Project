import React from 'react'
import ReactDOM from 'react-dom'
import NewUser from '../NewUser'
import { mount } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NewUser />, div)
})

it('has a name input', ()=>{
  const component = mount(<NewUser />)
 expect(component.find('label#name').text()).toBe("Name:")
})
// 
// it('has a profile_pic input', ()=>{
//   const component = mount(<NewUser />)
//   expect(component.find('label#profile_pic').text()).toBe("profile_pic")
// })
//
// it('has a focus input', ()=>{
//   const component = mount(<NewUser />)
//   expect(component.find('label#focus').text()).toBe("focus")
// })
//
// it('has a submit button', ()=>{
//   const component = mount(<NewUser />)
//   expect(component.find('Button').text()).toBe("Create New User")
// })

// it('renders without crashing', () => {
//   const div = document.createElement('div')
//   ReactDOM.render(<NewCat />, div)
// })
//
// it('has a name input', ()=>{
//   const component = mount(<NewCat />)
//  expect(component.find('label#name').text()).toBe("Name")
// })
//
// it('has a age input', ()=>{
//   const component = mount(<NewCat />)
//   expect(component.find('label#age').text()).toBe("Age")
// })
//
// it('has a enjoys input', ()=>{
//   const component = mount(<NewCat />)
//   expect(component.find('label#enjoys').text()).toBe("Enjoys")
// })
//
// it('has a submit button', ()=>{
//   const component = mount(<NewCat />)
//   expect(component.find('button#submit').text()).toBe("Create Cat Profile")
// })
