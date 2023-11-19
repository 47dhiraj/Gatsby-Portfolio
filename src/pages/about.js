import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/about.module.css'
import Zoom from "@material-ui/core/Zoom"


export default function About() {
    
    const [show, setShow] = useState(false)
    useEffect(() => setShow(true), [])

    return (

        <Layout>

            <div className={styles.about}>

                <div style={{ borderRight: '3px solid #ff007f' }}>

                    <Zoom in={show} style={{ transitionDelay: show ? '200ms' : '0ms' }} >
                        <h2> Self-Introduction</h2>
                    </Zoom>
                    

                    <p style={{ textAlign: 'justify' }}> 
                        Hi, It's me <b> Dhiraj Kafle </b> from Kathmandu, Nepal & i love to develop Web Apps & Machine Learning Models. I am interested in server side development.
                        <br /><br />I am passionate pragmatice developer who loves to explore new logics and science behind it and i do have keen eye for new paradigms, architecture, patterns and principles.
                        <br /><br />I love to explore new languages, indulging my time with my pet projects.
                        <br /><br />I am always striving to broaden my knowledge and sharpen my skills.
                        I love working in environment with lots of challenges and brilliant people to share those challenges with.
                      
                    </p>

                </div>
                    

                <div style={{ borderRight: '3px solid #ff007f' }}>

                    <Zoom in={show} style={{ transitionDelay: show ? '350ms' : '0ms' }} >
                        <h2> Background</h2>
                    </Zoom>
                    

                    <p style={{ textAlign: 'justify' }}>
                        As a self learner, I started programming from mid of 2017, started from HTML, CSS, <b>Javascript</b> & then php, <b>Python</b>.
                        <br /><br />Then i  started to learn <b>Django Framework</b> for developing backend of the web apps. Later on, i also learned python libraries like <b>numpy</b>, <b>pandas</b> & <b>scikit-learn</b>.
                        <br /><br />I also created <b>Movie Recommendation System</b> with Django & <b>Machine Learning</b> and learned DRF for the Rest API.
                        <br /><br />I also learned <b>ReactJs</b> to make SPA.
                        <br />I have also learned <b>Fast API</b> and till now i have developed various ML models.
                        
                    </p>

                </div>


                <div>

                    <Zoom in={show} style={{ transitionDelay: show ? '500ms' : '0ms' }} >
                        <h2> Experience</h2>
                    </Zoom>

                    <p style={{ textAlign: 'justify' }}>
                        <b><span style={{ fontSize: '3em' }}>. </span>  May 2021 to June 2022</b>
                        <br />Worked as a Python developer in <b> Tech Dock Nepal Pvt. Ltd</b>.  
                        <br />
                        
                        
                    </p>

                </div>

            </div>

        </Layout>

    )
}

