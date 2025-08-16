import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout';
import * as styles from '../styles/skills.module.css'



const skills = [
    "python",
    "pandas",
    "scikit-learn",
    "fastapi",
    "django",
    "docker",
    "sql",
    "jupyter",
    "git",
    "jira",
    "linux",
    "dbeaver",
    "pycharm",
    "vsc"
  ];


export default function Skills() {          // component ko name sadhai capital letter rakhne, navaye error throw garna sakcha

    const [show, setShow] = useState(false)
    useEffect(() => setShow(true), [])

    return (

        <Layout>

            <h4 style={{ textAlign: 'center' }}>Skills Developed</h4>


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

