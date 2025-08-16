import React, { useState, useEffect } from 'react'
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
                        <h2> Intro </h2>
                    </Zoom>


                    <p style={{ textAlign: 'justify' }}>
                        Hi, It's me <b> Dhiraj Kafle </b> from Kathmandu, Nepal & i love to develop web applications. I am interested in server side development.
                        <br /><br />I am passionate pragmatice developer who loves to explore new logics and science behind it and i do have keen eye for new paradigms, architecture, patterns and principles.
                        <br /><br />I love to explore new languages, indulging my time with my pet projects.
                        <br /><br />I am always striving to broaden my knowledge and sharpen my skills.
                        I love working in environment with lots of challenges and brilliant people to share those challenges with.

                    </p>

                </div>


                <div style={{ borderRight: '3px solid #ff007f' }}>

                    <Zoom in={show} style={{ transitionDelay: show ? '350ms' : '0ms' }} >
                        <h2> Background </h2>
                    </Zoom>


                    <p style={{ textAlign: 'justify' }}>
                        As a self learner, I started programming from mid of 2018, started from C++, & then, <b>Python</b>.
                        <br /><br />Then i  started to learn <b>Django Framework</b> for developing backend of the web apps. Later on, i also learned python libraries like <b>numpy</b>, <b>pandas</b> & <b>scikit-learn</b>.
                        <br /><br />I also created <b>Movie site</b> with Django & and later learned DRF for the Rest API.
                        <br />I have also learned <b>Fast API</b> and also deployed some ML models.
                    </p>

                </div>


                <div>

                    <Zoom in={show} style={{ transitionDelay: show ? '500ms' : '0ms' }} >
                        <h2> Work Experience </h2>
                    </Zoom>

                    <p style={{ textAlign: 'justify' }}>

                        <b><span style={{ fontSize: '3em' }}>. </span>  Aug 2021 to Oct 2021</b>
                        <br />Worked as a Python Intern in <b> Dock Tech Nepal</b>.
                        <br />
                        <br />

                        <b><span style={{ fontSize: '3em' }}>. </span>  Aug 2022 to Sept 2023</b>
                        <br />Worked as entry Python Developer in <b> Codesheep</b>.
                        <br />
                        <br />

                        <b><span style={{ fontSize: '3em' }}>. </span>  May 2024 to Present</b>
                        <br />Worked as Computer Science Secondary Teacher in <b> Gyan Niketan S.S, Shankhamool.</b>.
                        <br />
                        <br />

                    </p>

                </div>

            </div>

        </Layout>

    )
}

