import React, { useState, useEffect } from "react";
import { graphql, Link } from 'gatsby';
import Layout from "../components/Layout";
import * as styles from '../styles/home.module.css';

import { GitHub, LinkedIn, Facebook } from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";
import { IconButton } from "@material-ui/core";

import Zoom from "@material-ui/core/Zoom";
import { StaticImage } from "gatsby-plugin-image";

const socialItems = [
  { icon: GitHub, url: "https://github.com/47dhiraj" },
  { icon: LinkedIn, url: "https://www.linkedin.com/in/dhiraj-kafle-4a19781a3/" },
  { icon: Facebook, url: "https://www.facebook.com/dhirajkafle553/" },
];


export default function Home() {

  const [show, setShow] = useState(false);

  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);


  const roles = ["Software Engineer", "Data Engineer"];
  const typingSpeed = 100; // ms per character
  const holdDuration = 1000; // hold fully typed for 1s

  useEffect(() => {
    setShow(true);
  }, []);


  useEffect(() => {
    let charIndex = 0;
    let typingInterval;

    const typeRole = () => {
      if (charIndex < roles[roleIndex].length) {
        setDisplayed((prev) => prev + roles[roleIndex][charIndex]);
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setDisplayed(""); // erase instantly
          setRoleIndex((prev) => (prev + 1) % roles.length); // next role
        }, holdDuration);
      }
    };

    typingInterval = setInterval(typeRole, typingSpeed);
    return () => clearInterval(typingInterval);
  }, [roleIndex]);



  return (
    <Layout>

      <section className={styles.header}>


        <div className={styles.leftColumn}>

          <Zoom in={show} style={{ transitionDelay: show ? '300ms' : '0ms' }}>
            
            <div>

              <h2>Code, The Logic !</h2>
              <h3>Passionate Pragmatic Developer</h3>

              <h4 className={styles.typingFixed}>{displayed}</h4>
            </div>

          </Zoom>

          <a className={styles.btn} rel="noopener noreferrer" href={`./pdf/resume.pdf`} target="_blank">
            View CV
          </a>

        </div>



        <div style={{ display: 'flex', flexDirection: 'row' }}>

          <Grid container style={{ marginTop: 'auto', marginLeft: 'auto' }}>

            {socialItems.map((item) => (
              <Grid item key={item.icon}>
                <Link href={item.url} target='_blank'>
                  <IconButton>
                    <item.icon />
                  </IconButton>
                </Link>
              </Grid>
            ))}

          </Grid>


          <StaticImage
            src="../images/profile.jpg"
            alt="Profile Pic"
            placeholder="blurred"
            layout="constrained"
            width={420}
            height={600}
            style={{ borderRadius: '25px' }}
          />


        </div>


      </section>

    </Layout>

  );


}
