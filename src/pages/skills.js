import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout';
import * as styles from '../styles/skills.module.css'
import Zoom from "@material-ui/core/Zoom"


const skills = [
    "python",
    "r",
    "pandas",
    "matplotlib",
    "seaborn",
    "plotly",
    "jupyter",
    "scikit-learn",
    "django",
    "fastapi",
    "react",
    "node",
    "powerbi",
    "tableau",
    "airflow",
    "dbt",
    "docker",
    "sql",
    "git",
    "dbeaver",
    "postgresql",
    "mongodb",
    "linux",
    "slack",
    "jira",
    "pycharm",
    "vsc"
  ];


export default function Skills() {          // component ko name sadhai capital letter rakhne, navaye error throw garna sakcha

    const [show, setShow] = useState(false)
    useEffect(() => setShow(true), [])

    return (

        <Layout>

            <Zoom in={show} style={{ transitionDelay: show ? '300ms' : '0ms' }} >
                <h4 style={{ textAlign: 'center' }}> Skills Developed </h4>
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

