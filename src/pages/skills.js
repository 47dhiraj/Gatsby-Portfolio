import React from 'react'
import Layout from '../components/Layout';
import * as styles from '../styles/skills.module.css'

import { StaticImage } from "gatsby-plugin-image"



const skills = [
    "python",
    "django",
    "numpy",
    "pandas",
    "scikit-learn",
    "php",
    "javascript",
    "react",
    "redux",
    "jquery",
    "html",
    "css",
    "mysql",
    "git",
    "linux",
    "ubuntu",
    "pycharm",
    "vsc",
  ];


export default function Skills() {

    return (

        <Layout>

            <h4 style={{ fontSize: '2.2em', textAlign: 'center' }}>Skills I have Developed</h4>
            
            <div className={styles.container}>

                {
                    skills.map((skill, index) => (

                            <div key={index} style={{ textAlign: 'center' }} >

                                <a href={`https://github.com/47dhiraj?tab=repositories&q=${skill}&type=&language=`}  target="_blank" without rel="noreferrer" >
                            
                                    <img title={skill} src={`/${skill}.svg`} alt={skill} className={styles.item} />

                                </a>

                            </div>
                     

                    ))
                }

            </div>

        </Layout>
    )

}
