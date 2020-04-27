import React from 'react'
import CoursePage from './CoursesPage'
import renderer from 'react-test-renderer';

it ('check CoursePage', ()=>{
    const value = renderer.create(<CoursePage/>)

    expect (value).toMatchSnapshot()
})