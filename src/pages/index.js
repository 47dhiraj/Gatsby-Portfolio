import React, { useState, useEffect } from "react";
import { graphql, Link } from 'gatsby';
import Layout from "../components/Layout";
import * as styles from '../styles/home.module.css';
import { GitHub, LinkedIn, Facebook } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { StaticImage } from "gatsby-plugin-image";



const socialItems = [
  { icon: GitHub, url: "https://github.com/47dhiraj", color: "#24292F" },
  { icon: LinkedIn, url: "https://www.linkedin.com/in/dhiraj-kafle-4a19781a3/", color: "#0A66C2" },
  { icon: Facebook, url: "https://www.facebook.com/dhirajkafle553/", color: "#1877F2" }
];





export default function Home() {

  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = ["Software Engineer", "Data Engineer"];
  const typingSpeed = 130;
  const holdDuration = 300;

  useEffect(() => {
    let charIndex = 0;
    let typingInterval;

    const typeRole = () => {
      if (charIndex < roles[roleIndex].length) {
        setDisplayed(prev => prev + roles[roleIndex][charIndex]);
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setDisplayed("");
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, holdDuration);
      }
    };

    typingInterval = setInterval(typeRole, typingSpeed);
    return () => clearInterval(typingInterval);
  }, [roleIndex]);

  


  return (

    <Layout>

      <section className={styles.header}>
        

        {/* Left Column */}
        <div className={styles.leftColumn}>

          <h2> Code, The Logic ! </h2>
          <h3> 'Transform Data into AI Insights' </h3>

          <div>
            <h4 className={styles.typingFixed}>A {displayed}</h4>
          </div>

          <a className={styles.btn} 
             rel="noopener noreferrer" 
             href={`./pdf/resume.pdf`} 
             target="_blank">
             View CV 
          </a>

        </div>


        {/* Right Column: Profile + Vertical Social Icons */}
        <div className={styles.rightColumn}>

          <div style={{ position: 'relative', display: 'inline-block' }}>
            
            <StaticImage 
              className={styles.profileImage}
              src="../images/profile.jpg"
              alt="Profile Pic"
              placeholder="blurred"
              layout="constrained"
              width={377}
              height={530}
            />


            <div className={styles.socialVertical}>

              <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" alt="Waving Hand" className={styles.wavingHand} />

              {/* {socialItems.map((item) => (
                <Link href={item.url} target="_blank" key={item.icon}>
                  <IconButton>
                    <item.icon style={{ color: item.color }} />
                  </IconButton>

                </Link>
              ))} */}


              {socialItems.map((item) => (

                <Link href={item.url} target="_blank" key={item.icon}>

                  <IconButton
                    className={styles.iconButton}
                    style={{ color: item.color, "--icon-color": item.color }}
                  >
                    
                    <item.icon />

                  </IconButton>

                </Link>

              ))}


            </div>

          </div>

        </div>


      </section>

    </Layout>
  );
}
