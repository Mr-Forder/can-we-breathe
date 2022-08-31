import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { CircleCont } from "../styles";
import { motion } from "framer-motion";

import Lottie from "lottie-react";
import loader from "../img/loader.json";
import ozoneAnim from "../img/ozone.json";
import sdAnim from "../img/sd.json";
import ndAnim from "../img/nd.json";
import pm25Anim from "../img/pm25.json";
import coAnim from "../img/co.json";
//CIRCULAR
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressProvider from "./ProgressProvider";
//CHILDREN
import { Link } from "react-router-dom";
const SmallBar = ({ data, maxValue, chemName, dir }) => {
  const titleFadeAnim = {
    initial: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.25 } },
  };

  //CONDITIONAL BG
  const [bgRender, setBgRender] = useState(loader);

  useEffect(() => {
    if (chemName === `Ozone`) {
      setBgRender(ozoneAnim);
    } else if (chemName === `Sulphur Dioxide`) {
      setBgRender(sdAnim);
    } else if (chemName === `Nitrogen Dioxide`) {
      setBgRender(ndAnim);
    } else if (chemName === `PM2.5`) {
      setBgRender(pm25Anim);
    } else {
      setBgRender(coAnim);
    }
  }, []);

  return (
    <CircleCont>
      <motion.div
        variants={titleFadeAnim}
        initial="initial"
        animate="show"
        whileHover={{ scale: 0.9 }}
      >
        <Link to={dir}>
          <CircleTitle>{chemName}</CircleTitle>
          <ProgressProvider valueStart={0} valueEnd={data}>
            {(value) => (
              <CircularProgressbarWithChildren
                className="btn"
                value={value}
                text={`${data}`}
                maxValue={maxValue}
                strokeWidth={5}
                background={true}
                styles={buildStyles({
                  strokeLinecap: "round",
                  textSize: "2rem",
                  pathTransitionDuration: 0.5,
                  // Colors
                  pathColor: `rgba(62, 152, 199)`,
                  textColor: "black",
                  trailColor: "#ffffff",
                  backgroundColor: "white",
                })}
              >
                <div className="small-lottie">
                  <Lottie animationData={bgRender} className="S-lottie" />
                </div>
              </CircularProgressbarWithChildren>
            )}
          </ProgressProvider>
          <ChemInfo>
            <h3>
              <strong>{data}</strong> μg/m3
            </h3>
          </ChemInfo>
        </Link>
      </motion.div>
    </CircleCont>
  );
};

export default SmallBar;

const ChemInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: Center;
  justify-content: center;
  text-align: center;

  h3 {
    font-family: "Nunito Sans", sans-serif;
    color: #95979f;
  }

  @media only screen and (min-width: 300px) {
    font-size: 0.8rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 0.7rem;
  }
`;

const CircleTitle = styled.div`
  width: 100%;
  color: #3c3c3c;
  font-family: "Nunito Sans", sans-serif;

  display: flex;
  align-items: Center;
  justify-content: center;
  text-align: center;
  height: 3rem;
  padding-bottom: 1rem;
  @media only screen and (min-width: 300px) {
    font-size: 1rem;
    padding-bottom: 0.5rem;
  }
`;
