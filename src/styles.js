import styled from "styled-components";

export const CircleCont = styled.div`
  width: 40%;
  padding: 5px;
  display: flex;
  justify-content: center;
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  .innerCircleFonts {
    h3 {
      font-size: 3rem;
      font-family: "Nunito Sans", sans-serif;
      color: #95979f;
      font-weight: 200;
    }
    h4 {
      font-family: "Nunito Sans", sans-serif;
      color: #95979f;
    }
  }

  @media only screen and (min-width: 360px) {
    h3 {
      font-size: 1rem;
    }
    h4 {
      font-size: 0.8rem;
    }
  }
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  color: white;
  overflow: hidden;
  height: 100vh;
  .mainBar {
    width: 80%;
    color: #3e98c7;
  }
  .detail-title {
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .detail-text {
    display: flex;

    flex-direction: column;
    padding: 1rem 5rem 0rem 5rem;
    align-items: center;
    justify-content: center;
    p {
      padding: 1rem;
    }
  }
  .caution-level {
    font-size: 2rem;
    padding: 1rem;
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
  }
  h5 {
    font-size: 1rem;
  }
`;
