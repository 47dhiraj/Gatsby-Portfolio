import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout';
import * as styles from '../styles/skills.module.css'
import Zoom from "@material-ui/core/Zoom"


const skills = [
    "python",
    "django",
    "numpy",
    "pandas",
    "scikit-learn",
    "jupyter",
    "fastapi",
    "rabbitmq",
    "php",
    "javascript",
    "react",
    "redux",
    "gatsby",
    "jquery",
    "html",
    "css",
    "docker",
    "postgresql",
    "mysql",
    "git",
    "linux",
    "ubuntu",
    "pycharm",
    "vsc",
  ];


export default function Skills() {          // component ko name sadhai capital letter rakhne, navaye error throw garna sakcha

    const [show, setShow] = useState(false)
    useEffect(() => setShow(true), [])

    return (

        <Layout>

            <Zoom in={show} style={{ transitionDelay: show ? '250ms' : '0ms' }} >
                <h4 style={{ fontSize: '2.2em', textAlign: 'center' }}>Skills I have Developed</h4>
            </Zoom>

            <div className={styles.container}>

                {
                    skills.map((skill, index) => (

                            <div key={index} style={{ textAlign: 'center' }} >

                                <a href={`https://github.com/47dhiraj?tab=repositories&q=${skill}&type=&language=`}  target="_blank" without rel="noreferrer" >
                            
                                    <img title={skill} src={`/svg/${skill}.svg`} alt={skill} className={styles.item} />

                                </a>

                            </div>
                     
                    ))
                }

            </div>

        </Layout>
    )

}

