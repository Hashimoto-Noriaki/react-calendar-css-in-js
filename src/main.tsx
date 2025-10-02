import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;  /* 横方向中央 */
  align-items: center;      /* 縦方向中央 */
  height: 100vh;            /* 画面全体を使う */
`;

const Title = styled.h1`
  font-size: 1.875rem; /* text-3xl */
  line-height: 2.25rem;
  font-weight: 700; /* bold */
  text-decoration: underline;
  color: skyblue; /* テキストスカイブルー */
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Container>
      <Title>Hello world!</Title>
    </Container>
  </React.StrictMode>
);
