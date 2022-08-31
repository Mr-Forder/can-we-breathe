import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { MainInfo } from "../styles";
import { motion } from "framer-motion";
import { pageAnimation } from "../components/transitions";
import { AnimatePresence } from "framer-motion";
//ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";

//CIRCULAR
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

//CHILDREN
import SmallBar from "./SmallBar";
import Overview from "../pages/Overview";
import FurtherInfo from "../pages/FurtherInfo";

import Lottie from "lottie-react";
import earth from "../img/earth.json";
//Router
import { Switch, Route, useLocation } from "react-router-dom";

//TEXT SNIPPETS
const pm25Snippet = `PM2.5 stands for particulate matter (also called particle pollution). It's a mixture of solid particles and liquid droplets found in the air- fine inhalable particles, with diameters that are generally 2.5 micrometers and smaller. `;
const pm10Snippet = `PM2.5 stands for particulate matter (also called particle pollution). It's a mixture of solid particles and liquid droplets found in the air- fine inhalable particles, with diameters that are generally 10 micrometers and smaller. `;
const ozoneSnippet = `Ozone is a gas composed of three atoms of oxygen. Ozone at ground level is a harmful air pollutant, because of its effects on people and the environment, and it is the main ingredient in “smog."`;
const n02Snippet = `Nitrogen Dioxide (NO2) is one of a group of highly reactive gases known as oxides of nitrogen or nitrogen oxides (NOx). NO2 primarily gets in the air from the burning of fuel. NO2 forms from emissions from cars, trucks and buses, power plants, and off-road equipment`;
const s03Snippet = `Sulphur dioxide is the chemical compound with the formula SO ₂. It is a toxic gas responsible for the smell of burnt matches. It is released naturally by volcanic activity and is produced as a by-product of the burning of fossil fuels contaminated with sulfur compounds.`;
const coSnippet = `Carbon Monoxide is a colourless, odorless gas that can be harmful when inhaled in large amounts. CO is released when something is burned. The greatest sources of CO to outdoor air are cars, trucks and other vehicles or machinery that burn fossil fuels.`;
const AllData = () => {
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState("Where are you?");

  useEffect(() => {
    const location = axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_AIRQUAL_API}&q=London&aqi=yes`
      )
      .then((response) => {
        setWeather(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //Event
  const weatherInput = (e) => {
    setInput(e.target.value);
  };

  const location = useLocation();

  //search button

  const SearchButton = () => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_AIRQUAL_API}&q=${input}&aqi=yes`
      )
      .then((response) => {
        setWeather(response.data);
      })
      .catch((err) => console.log(err));
  };

  //ANIMS
  const titleAnim = {
    initial: { opacity: 0, y: -50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45 },
      ease: "easeOut",
      staggerChildren: 0.25,
    },
  };

  const mainAnim = {
    initial: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.25 },
    },
  };

  return (
    <div>
      {weather && (
        <div>
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
              <Route path="/" exact>
                <motion.div
                  variants={pageAnimation}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  <Search>
                    <InputWrapper>
                      <InputBox
                        value={input}
                        onChange={weatherInput}
                        onClick={() => setInput(``)}
                        type="text"
                      />
                      <motion.button
                        className="icon-home"
                        onClick={SearchButton}
                        whileHover={{ scale: 1.2 }}
                      >
                        <FontAwesomeIcon
                          icon={faGlobeEurope}
                          style={{ color: "#95979f" }}
                        />
                      </motion.button>
                    </InputWrapper>
                  </Search>

                  <ContentContainer>
                    <motion.div
                      variants={mainAnim}
                      initial="initial"
                      animate="show"
                      whileHover={{ scale: 0.9 }}
                    >
                      <MainSection>
                        <motion.div className="mainBar" variants={mainAnim}>
                          <CircularProgressbarWithChildren
                            className="btn"
                            value={weather.current.uv}
                            maxValue={11}
                            strokeWidth={2}
                            background={false}
                            styles={buildStyles({
                              strokeLinecap: "round",
                              textSize: ".3rem",
                              pathTransitionDuration: 0.5,
                              // Colors
                              pathColor: `#ff3069`,
                              textColor: "white",
                              trailColor: "#d6d6d6",
                              backgroundColor: "#3e98c7",
                            })}
                          >
                            <motion.div
                              variants={mainAnim}
                              style={{ width: "84%" }}
                            >
                              <CircularProgressbarWithChildren
                                className="btn"
                                value={
                                  weather.current.air_quality["gb-defra-index"]
                                }
                                maxValue={10}
                                strokeWidth={5}
                                styles={buildStyles({
                                  strokeLinecap: "round",
                                  textSize: ".5rem",
                                  pathTransitionDuration: 0.5,
                                  // Colors
                                  pathColor: `rgba(62, 152, 199)`,
                                  textColor: "white",
                                  trailColor: "#d6d6d6",
                                  backgroundColor: "#3e98c7",
                                })}
                              >
                                <MainInfo>
                                  <div className="lottie-con">
                                    <Link to="/Overview">
                                      <div className="location">
                                        <h3> {weather.location.name}</h3>
                                      </div>
                                      <Lottie
                                        animationData={earth}
                                        className="lottie"
                                      />
                                    </Link>
                                  </div>
                                </MainInfo>
                              </CircularProgressbarWithChildren>
                            </motion.div>
                          </CircularProgressbarWithChildren>
                        </motion.div>

                        <MainBarData>
                          <motion.div className="data" variants={mainAnim}>
                            <div className="colourbox uv"></div>
                            <h4>UV: {weather.current.uv}</h4>
                          </motion.div>
                          <motion.div className="data" variants={mainAnim}>
                            <div className="colourbox daqi"></div>
                            <h4>
                              DAQI:{" "}
                              {weather.current.air_quality["gb-defra-index"]}
                            </h4>
                          </motion.div>
                        </MainBarData>
                      </MainSection>
                    </motion.div>

                    <SmallCircles>
                      <SmallBar
                        data={Math.round(weather.current.air_quality.o3)}
                        maxValue={214}
                        chemName={`Ozone`}
                        dir={"/Ozone"}
                      />
                      <SmallBar
                        data={Math.round(weather.current.air_quality.so2)}
                        maxValue={40}
                        chemName={`Sulphur Dioxide`}
                        dir={"/So3"}
                      />
                      <SmallBar
                        data={Math.round(weather.current.air_quality.no2)}
                        maxValue={40}
                        chemName={`Nitrogen Dioxide`}
                        dir={"/No2"}
                      />
                      <SmallBar
                        data={Math.round(weather.current.air_quality.pm2_5)}
                        maxValue={70}
                        chemName={`PM2.5`}
                        dir={"/PM25"}
                      />
                      <SmallBar
                        data={Math.round(weather.current.air_quality.co)}
                        maxValue={1000}
                        chemName={`Carbon Monoxide`}
                        dir={"/CO"}
                      />
                    </SmallCircles>
                  </ContentContainer>
                </motion.div>
              </Route>
              <Route path="/PM25" exact>
                <FurtherInfo
                  chemName={`PM2.5`}
                  chemSub={`Particulate Matter`}
                  data={Math.round(weather.current.air_quality.pm2_5)}
                  maxValue={70}
                  snippet={pm25Snippet}
                  titleAnim={titleAnim}
                  mainAnim={mainAnim}
                  location={weather.location.name}
                />
              </Route>
              <Route path="/PM10" exact>
                <FurtherInfo
                  chemName={`PM10`}
                  chemSub={`Particulate Matter`}
                  data={Math.round(weather.current.air_quality.pm10)}
                  maxValue={91}
                  snippet={pm10Snippet}
                  titleAnim={titleAnim}
                  mainAnim={mainAnim}
                  location={weather.location.name}
                />
              </Route>
              <Route path="/Ozone" exact>
                <FurtherInfo
                  chemName={`Ozone`}
                  chemSub={`Ozone`}
                  data={Math.round(weather.current.air_quality.o3)}
                  maxValue={214}
                  snippet={ozoneSnippet}
                  titleAnim={titleAnim}
                  mainAnim={mainAnim}
                  location={weather.location.name}
                />
              </Route>
              <Route path="/No2" exact>
                <FurtherInfo
                  chemName={`No2`}
                  chemSub={`Nitrogen Dioxide`}
                  data={Math.round(weather.current.air_quality.no2)}
                  maxValue={40}
                  snippet={n02Snippet}
                  titleAnim={titleAnim}
                  mainAnim={mainAnim}
                  location={weather.location.name}
                />
              </Route>
              <Route path="/So3" exact>
                <FurtherInfo
                  chemName={`S03`}
                  chemSub={`Sodium Dioxide`}
                  data={Math.round(weather.current.air_quality.so2)}
                  maxValue={40}
                  snippet={s03Snippet}
                  titleAnim={titleAnim}
                  mainAnim={mainAnim}
                  location={weather.location.name}
                />
              </Route>
              <Route path="/CO" exact>
                <FurtherInfo
                  chemName={`CO`}
                  chemSub={`Carbon Monoxide`}
                  data={Math.round(weather.current.air_quality.co)}
                  maxValue={1000}
                  snippet={coSnippet}
                  titleAnim={titleAnim}
                  mainAnim={mainAnim}
                />
              </Route>
              <Route path="/Overview" exact>
                <Overview
                  location={weather.location.name}
                  region={weather.location.region}
                  condition={weather.current.condition.text}
                  temp={weather.current.temp_c}
                  feels={weather.current.feelslike_c}
                  windspeed={weather.current.wind_mph}
                  icon={weather.current.condition.icon}
                  data={weather.current.air_quality["gb-defra-index"]}
                  uv={weather.current.uv}
                  uvMax={10}
                  chemName={`S03`}
                  chemSub={`Sodium Dioxide`}
                  maxValue={40}
                  snippet={s03Snippet}
                  titleAnim={titleAnim}
                  mainAnim={mainAnim}
                />
              </Route>
            </Switch>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

const MainBarData = styled.div`
  margin: 8rem 0rem 0rem 0rem;
  display: flex;
  flex-direction: column;
  h4 {
    font-family: "nunito-sans", sans-serif;
    font-weight: 200;
  }
  .colourbox {
    width: 0.5rem;
    height: 0.5rem;
    background: red;
    margin: 0.5rem;
    border: solid white 1px;
  }
  .data {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
  }
  .uv {
    background: #ff3069;
  }
  .daqi {
    background: #3e98c7;
  }
`;

const SmallCircles = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  margin: 0.5rem;
  bottom: 1rem;
  a {
    color: inherit;
    text-decoration: none;
  }

  @media only screen and (min-width: 1024px) {
    width: 85%;
    margin: 0% 7.5% 3% 7.5%;
  }

  @media only screen and (min-width: 1366px) {
    position: relative;
    align-items: center;
  }
`;

const ContentContainer = styled.div`
  display: flex;

  flex-direction: column;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
  }
  @media only screen and (min-width: 1366px) {
    padding-top: 3rem;
    flex-direction: row;
  }
`;

const MainSection = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0% 5% 5% 5%;
  .mainBar {
    width: 70%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  h3 {
    font-size: 2rem;
  }

  @media only screen and (min-width: 768px) {
    padding: 0% 10% 0% 10%;
    .mainBar {
      width: 60%;
    }
  }

  @media only screen and (min-width: 1024px) {
    justify-content: center;
    padding: 1rem;
    .mainBar {
      width: 80%;
    }
  }

  @media only screen and (min-width: 1366px) {
    justify-content: center;
    padding: 4rem 0rem 0rem 0rem;
    margin: 0% 10% 0% 10%;
    width: 55rem;
    .mainBar {
      width: 70%;
    }
  }
`;

const Search = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  margin-bottom: 1rem;

  @media only screen and (min-width: 360px) {
    padding-bottom: 1rem;
  }

  @media only screen and (min-width: 1024px) {
    width: 70%;
    margin: 0% 15% 0% 15%;
  }
`;

const InputBox = styled.input`
  width: 100%;
  outline: none;
  font-family: "Nunito Sans", sans-serif;
  color: #95979f;

  background: transparent;
  border: none;
  margin-left: 1rem;
  font-size: 1.5rem;
  padding: 0.5rem;
`;

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-radius: 25px;
  font-family: "Nunito Sans", sans-serif;

  background: #ecf0f3;
  color: #3b4364;
  border-radius: 50px;
  box-shadow: inset 6px 6px 6px #cbced1, inset -3px -3px 3px white;
`;

export default AllData;
