import React, { useState } from "react";
import styled from "styled-components";
import Calc from "./components/Calc";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  font-family: Roboto, sans-serif;
`;

const Background = styled.div`
  background: #222;
`;

const Header = styled.header`
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 24px;
  font-family: Roboto, sans-serif;
`;

const Footer = styled.footer`
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 24px;
  font-family: Roboto, sans-serif;
`;

const Ancor = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
`;

function App() {
  return (
    <Background>
      <Header>
        <h1>Calculadora NS</h1>
      </Header>
      <Main>
        <Calc />
      </Main>
      <Footer>
        <p>
          Desenvolvido por{" "}
          <Ancor href="https://www.linkedin.com/in/nathanss/" target="_blank">
            Nathan Sodré{" "}
          </Ancor>
          © {new Date().getFullYear()}
        </p>
      </Footer>
    </Background>
  );
}

export default App;
