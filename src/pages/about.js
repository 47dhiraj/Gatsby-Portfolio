import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/about.module.css'
import Zoom from "@material-ui/core/Zoom"


export default function About() {

    const [show, setShow] = useState(false)
    useEffect(() => setShow(true), [])


    // List of all work experiences
    const workExperiences = [
        {
            duration: 'Aug 2021 to Oct 2021',
            role: 'Python Intern',
            company: 'Dock Tech Nepal Pvt. Ltd.'
        },
        {
            duration: 'Aug 2022 to Sept 2023',
            role: 'Entry Python Developer',
            company: 'Codesheep Pvt. Ltd.'
        },
        {
            duration: 'May 2024 to Present',
            role: 'Secondary Computer Science Teacher',
            company: 'a School'
        }
    ]




    // Base delay after Work Experience header
    const workexp_baseDelay = 560
    const increment = 220



    return (

        <Layout>

            <div className={styles.about}>



                

                <div style={{ borderRight: '4.5px solid #422d2dff' }}>

                    <Zoom in={show} style={{ transitionDelay: show ? '240ms' : '0ms' }} >
                        <h2> Intro </h2>
                    </Zoom>


                    <p style={{ textAlign: 'justify' }}>
                        Hi, It's me <b> DHIRAJ KAFLE </b> from <b>NEPAL</b> and I love to develop web applications. I am interested in server side development.
                        <br /><br />I am passionate pragmatice developer who loves to explore new logics and science behind it and i do have keen eye for new paradigms, architecture, patterns and principles.
                        <br /><br />I love to explore new languages, indulging my time with my pet projects.
                        <br /><br />I am always striving to broaden my knowledge and sharpen my skills.
                        I love working in environment with lots of challenges and brilliant people to share those challenges with.

                    </p>

                </div>


                <div style={{ borderRight: '4.5px solid #422d2dff' }}>

                    <Zoom in={show} style={{ transitionDelay: show ? '400ms' : '0ms' }} >
                        <h2> Background </h2>
                    </Zoom>


                    <p style={{ textAlign: 'justify' }}>
                        As a self learner, I started programming from mid of 2018, started from C, C++, Java, JavaScript & then, <b>Python</b>.
                        <br /><br />Then i  started to learn <b>Django Framework</b> for developing backend of the web apps. Later on, i also learned python libraries like <b>numpy</b>, <b>pandas</b> & <b>scikit-learn</b>.
                        <br /><br />I also created <b>Movie site</b> with Django & and later learned Django Rest Framework for the Rest API.
                        <br />I have also learned <b>Fast API</b> and also deployed some ML models.
                    </p>

                </div>


                <div>

                    <Zoom in={show} style={{ transitionDelay: show ? '560ms' : '0ms' }} >
                        <h2> Work Experience </h2>
                    </Zoom>


                    <div style={{ textAlign: 'justify' }}>

                        {workExperiences.map((exp, idx) => {

                            // logic for calculating delay to show work experiences
                            const delay = workexp_baseDelay + (idx + 1) * increment

                            return (

                                <Zoom 
                                    in={show} 
                                    key={idx} 
                                    style={{ transitionDelay: show ? `${delay}ms` : '0ms', display: 'block', marginBottom: '1em' }}
                                >

                                    <div>
                                        <b> <span style={{ fontSize: '4em' }}> 👉 </span> {exp.duration} </b>
                                        <br /> - Worked as {exp.role} In <b>{exp.company}</b>. <br /><br />
                                    </div>
                                </Zoom>

                            )

                        })}

                    </div>

                </div>





            </div>

        </Layout>

    )
}

