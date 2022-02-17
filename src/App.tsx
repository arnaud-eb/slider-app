import * as React from "react";
import styled from "styled-components";

import Reviews from "./components/Reviews";

const AppWrapper = styled.main`
  width: 90vw;
  margin: 5rem auto;
  max-width: var(--max-width);

  @media screen and (min-width: 992px) {
    width: 95vw;
  }
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-size: 0.85em;
      color: var(--clr-primary-5);
      margin-right: 1rem;
      font-weight: 700;
    }
  }
`;

function App() {
  return (
    <AppWrapper>
      <Title>
        <h2>
          <span>/</span>reviews
        </h2>
      </Title>
      <Reviews />
    </AppWrapper>
  );
}

export default App;
