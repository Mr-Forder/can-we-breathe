import AllData from "../components/AllData";
import React from "react";
import styled from "styled-components";

const MainPage = () => {
  return (
    <Main>
      <AllData />
    </Main>
  );
};

const Main = styled.div`
  overflow: hidden;
`;

export default MainPage;
