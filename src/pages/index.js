import React, { useState, useEffect } from "react";
import { graphql, Link } from 'gatsby';
import Layout from "../components/Layout";
import * as styles from '../styles/home.module.css';
import { GitHub, LinkedIn, Facebook } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { StaticImage } from "gatsby-plugin-image";

const socialItems = [
  { icon: GitHub, url: "https://github.com/47dhiraj" },
  { icon: LinkedIn, url: "https://www.linkedin.com/in/dhiraj-kafle-4a19781a3/" },
  { icon: Facebook, url: "https://www.facebook.com/dhirajkafle553/" }
];

export default function Home() {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = ["Software Engineer", "Data Engineer"];
  const typingSpeed = 100;
  const holdDuration = 1000;

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
          <h2>Code, The Logic !</h2>
          <h3>IT Engineer and Passionate Pragmatic Developer</h3>

          <h4 className={styles.typingFixed}>{displayed}</h4>

          <a className={styles.btn} 
             rel="noopener noreferrer" 
             href={`./pdf/resume.pdf`} 
             target="_blank">
            View Resume
          </a>
        </div>

        {/* Right Column: Profile + Vertical Social Icons */}
        <div className={styles.rightColumn}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            
            <StaticImage 
              src="../images/profile.jpg"
              alt="Profile Pic"
              placeholder="blurred"
              layout="constrained"
              width={320}
              height={450}
              style={{ borderRadius: '25px' }}
            />

            <div className={styles.socialVertical}>
              {socialItems.map((item) => (
                <Link href={item.url} target="_blank" key={item.icon}>
                  <IconButton>
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
