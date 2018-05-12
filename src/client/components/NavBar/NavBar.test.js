import React from 'react'
import { NavBar } from './NavBar'
import renderer from 'react-test-renderer'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

describe('NavBar renders correctly based on login status', () => {
    it('renders login navlink when user not logged in', () => {
        const wrapper = shallow(<NavBar />)
        expect(wrapper.find('.nav-item').someWhere(n => n.children().text() === ' Login ')).to.equal(true)
        expect(wrapper.find('.nav-item').someWhere(n => n.children().text() === ' LogOut ')).to.equal(false)
    })

    it('renders logout navlink when user is logged in', () => {
        const wrapper = shallow(<NavBar />)
        wrapper.setProps({ isLoggedIn: true })
        expect(wrapper.find('.nav-item').someWhere(n => n.children().text() === ' Login ')).to.equal(false)
        expect(wrapper.find('.nav-item').someWhere(n => n.children().text() === ' LogOut ')).to.equal(true)
    })
})
