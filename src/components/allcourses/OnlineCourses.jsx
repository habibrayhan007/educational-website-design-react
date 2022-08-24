import React from 'react'
import { online } from '../../dummydata'
import Title from '../common/title/Title'

const OnlineCourses = () => {
  return (
    <>
      <div className="online">
        <div className="container">
            <Title subtitle='COURSES' title='Browse Our Online Courses'/>

            <div className="content grid3">
                {online.map((val)=>(
                    <div className="box">
                        <div className="img">
                            <img className='imag' src={val.cover} alt="" />
                            <img src={val.hoverCover} alt="" className='show imag' />
                        </div>
                        <h1>{val.courseName}</h1>
                        <span>{val.course}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </>
  )
}

export default OnlineCourses
