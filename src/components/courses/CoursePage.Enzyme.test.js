import  React  from "react";
import CoursePage from "./CoursesPage";
import { shallow } from "enzyme";
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure ({adapter:new Adapter()})

function rendereCoursePage(){
    const defaultProps ={}
    const props={...defaultProps}
    
    return shallow(<CoursePage {...props}/>)
}

it ('renders course page',()=>{
    const wrapper = rendereCoursePage()
    expect(wrapper.find('h2').text()).toEqual("Courses")
})