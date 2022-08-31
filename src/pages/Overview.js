import React from "react";
import { Link } from "react-router-dom";

import "react-circular-progressbar/dist/styles.css";

import styled from "styled-components";

import { motion } from "framer-motion";
import { pageAnimation } from "../components/transitions";
import Lottie from "lottie-react";
import earth from "../img/earth.json";

const FurtherInfo = ({ data, maxValue, location, uv, uvMax }) => {
  let danger = ``;

  if (data < maxValue / 3) {
    danger = `SAFE`;
  } else if (data > maxValue / 3 && data < (maxValue / 3) * 2) {
    danger = `MODERATE`;
  } else {
    danger = `UNSAFE`;
  }

  let uvDanger = ``;

  if (uv < uvMax / 3) {
    uvDanger = `LOW`;
  } else if (uv > uvMax / 3 && uv < (uvMax / 3) * 2) {
    uvDanger = `MEDIUM`;
  } else {
    uvDanger = `HIGH, so wear sunscreen`;
  }

  return (
    <Link to="/">
      <DetailWrapper
        danger={danger}
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <Overview>
          <motion.h4
            animate={{ opacity: 1, transition: { duration: 1 } }}
            initial={{ opacity: 0 }}
          >
            The current Daily air quality index (DAQI) status of {location} is:
          </motion.h4>
          <motion.div
            animate={{ opacity: 1, transition: { duration: 1 } }}
            initial={{ opacity: 0 }}
            className="weather-icon"
          >
            <div className="lottie-overview-con">
              <Lottie animationData={earth} className="lottie-overview" />
            </div>
          </motion.div>
          <h2>{danger}</h2>

          <motion.div
            animate={{ opacity: 1, transition: { duration: 1 } }}
            initial={{ opacity: 0 }}
            className="uv"
          >
            <h4>(and the UV levels are {uvDanger}).</h4>
          </motion.div>
        </Overview>
      </DetailWrapper>
    </Link>
  );
};

const Overview = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  justify-content: center;
  margin: 13rem 2rem 0rem 2rem;

  h4 {
    font-size: 1rem;
    font-family: "Nunito Sans", sans-serif;
    font-weight: 200;
  }
  h2 {
    font-size: 8rem;
    font-family: "Nunito Sans", sans-serif;
    font-weight: 200;

    color: white;
  }
  .uv {
    padding: 1rem;
    margin: 1rem;
  }
  .weather-icon {
    padding-top: 1rem;
  }
`;

const dangerBg = `
  radial-gradient(circle, rgba(228,4,4,1) 0%, rgba(201,0,85,1) 100%);`;

const moderateBg = `radial-gradient(circle, rgba(255,72,0,1) 0%, rgba(255,149,0,1) 100%);`;

const safeBg = `
    radial-gradient(
      circle,
      rgba(0, 152, 167, 1) 0%,
      rgba(0, 160, 201, 1) 100%,
      rgba(179, 236, 235, 1) 100%
    );
  `;

const DetailWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  p {
    padding: 0.5rem;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  background: ${({ danger }) => {
    if (danger === `SAFE`) {
      return safeBg;
    } else if (danger === `MODERATE`) {
      return moderateBg;
    } else {
      return dangerBg;
    }
  }};

  color: black;
  overflow: hidden;
  height: 100vh;

  .detailContentWrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .mainBar {
    color: #3e98c7;
    margin: 5%;
  }
  .detail-text {
    font-size: 0.9rem;

    text-align: center;
  }
  .caution-level {
    font-size: 2rem;
    margin: 0.5rem;
  }
  .interact {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
  }
  h3 {
    font-size: 3rem;
    font-family: "Nunito Sans", sans-serif;
    font-weight: 200;
  }
  h5 {
    font-size: 1rem;
    text-decoration: none;
  }

  @media only screen and (max-width: 360px) {
    .detail-text {
      font-size: 0.8rem;
      padding: 0% 15% 0% 15%;
    }
    .caution-level {
      font-size: 1rem;
    }
    .mainBar {
      width: 70%;
      margin: 0% 15% 0% 15%;
    }
  }

  @media only screen and (max-width: 360px) {
    .detail-text {
      font-size: 1rem;
      padding: 0% 5% 0% 5%;
    }
    .caution-level {
      font-size: 1rem;
    }
    .mainBar {
      width: 70%;
      margin: 0% 15% 0% 15%;
    }
    h2 {
      font-size: 3rem;
    }
    text-align: center;
  }

  @media only screen and (min-width: 768px) {
    padding: 5% 10% 0% 10%;

    .mainBar {
      width: 70%;
    }
    .detail-text {
      font-size: 1rem;
      padding: 0% 5% 0% 5%;
    }
    .caution-level {
      font-size: 2.5rem;
      padding: 1rem;
    }
  }

  @media only screen and (min-width: 870px) {
    .mainBar {
      width: 50%;
      margin: 5% 25% 5% 25%;
    }
  }

  @media only screen and (min-width: 1160px) {
    .mainBar {
      width: 40%;
      margin: 5% 30% 5% 30%;
    }
  }

  @media only screen and (min-width: 1366px) {
    .mainBar {
      width: 20%;
      margin: 5% 40% 5% 40%;
    }
  }
`;

export default FurtherInfo;
