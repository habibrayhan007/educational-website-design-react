import React from 'react'
import Title from '../../common/title/Title'
import "./hero.css"

const Hero = () => {
  return (
    <>
        <section className='hero'>
            <div className="container">
                <div className="row">
                    <Title subtitle='WELCOME TO ACADEMIA' title='BEST ONLINE EDUCATION'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius libero modi voluptas odit assumenda animi quam velit, culpa natus dolore rerum nemo id magni, exercitationem quaerat atque! Laboriosam, ducimus cupiditate.</p>
                    <div className="button">
                        <button className="primary-btn">
                            GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                        <button>
                            VIEW COURSES <i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <div className="marigin">

        </div>
    </>
  )
}

export default Hero
