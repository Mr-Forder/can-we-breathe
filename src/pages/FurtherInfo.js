import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Lottie from "lottie-react";
import ozoneAnim from "../img/ozone.json";
import sdAnim from "../img/sd.json";
import ndAnim from "../img/nd.json";
import pm25Anim from "../img/pm25.json";
import coAnim from "../img/co.json";

import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";

import { motion } from "framer-motion";
import { pageAnimation } from "../components/transitions";

const mainAnimFade = {
  initial: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut", staggerChildren: 0.25 },
  },
};

const FurtherInfo = ({
  data,
  chemName,
  snippet,
  chemSub,
  location,
  maxValue,
}) => {
  let danger = ``;

  if (data < maxValue / 3) {
    danger = `SAFE`;
  } else if (data > maxValue / 3 && data < (maxValue / 3) * 2) {
    danger = `MODERATE`;
  } else {
    danger = `UNSAFE`;
  }

  const [chemAnim, setChemAnim] = useState(ozoneAnim);
  useEffect(() => {
    if (chemName === "PM2.5") {
      setChemAnim(pm25Anim);
    } else if (chemName === "Ozone") {
      setChemAnim(ozoneAnim);
    } else if (chemName === "No2") {
      setChemAnim(ndAnim);
    } else if (chemName === "S03") {
      setChemAnim(sdAnim);
    } else {
      setChemAnim(coAnim);
    }
  }, []);

  return (
    <Link to="/">
      {" "}
      <DetailWrapper
        danger={danger}
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <motion.div
          className="detailContentWrap"
          animate={{ opacity: 1, transition: { duration: 1 } }}
          initial={{ opacity: 0 }}
        >
          <DetailTitle>
            <h3>{chemName}</h3>
            <h5>{chemSub}</h5>
          </DetailTitle>
          <div>
            <motion.div
              variants={mainAnimFade}
              initial="initial"
              animate="show"
            >
              <div className="lottie-info-con">
                <Lottie animationData={chemAnim} className="lottie-info" />
              </div>
            </motion.div>
          </div>
          <motion.div
            className="detail-text"
            variants={mainAnimFade}
            initial="initial"
            animate="show"
          >
            <p>{snippet}</p>
            <p>
              The current level of <strong>{chemName}</strong> in the air in{" "}
              {location} is{" "}
              <strong>
                {data}
                ug/m3
              </strong>{" "}
              , and it's considered
            </p>
            <motion.div
              className="caution-level"
              animate={{ opacity: 1, transition: { duration: 3 } }}
              initial={{ opacity: 0 }}
            >
              <h1>{danger}</h1>
            </motion.div>
          </motion.div>
        </motion.div>
      </DetailWrapper>
    </Link>
  );
};

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
  background: ${({ danger }) => {
    if (danger === `SAFE`) {
      return safeBg;
    } else if (danger === `MODERATE`) {
      return moderateBg;
    } else {
      return dangerBg;
    }
  }};
  color: white;
  overflow: hidden;
  height: 100vh;
  .detailContentWrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem 2rem 0rem 2rem;
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
    h1 {
      font-size: 8rem;
      font-family: "Nunito Sans", sans-serif;
      font-weight: 200;
    }
  }

  h3 {
    font-family: "Nunito Sans", sans-serif;
    font-weight: 200;
    font-size: 5rem;
  }
  h5 {
    font-size: 1rem;
  }

  @media screen and (max-width: 600px) {
    .detail-text {
      width: 90%;
    }
    .caution-level {
      h1 {
        font-size: 3rem;
      }
    }
  }
`;
const DetailTitle = styled.div`
  text-align: center;
  padding-bottom: 0.5rem;
`;

export default FurtherInfo;
