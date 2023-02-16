import styled from "styled-components";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import { PrivateRoutes } from "../../Models";
import Home from "./Home";

const Private = () => {
  return (
    <Content>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to={PrivateRoutes.HOME} />} />
        <Route path={`${PrivateRoutes.HOME}`} element={<Home />} />
      </Routes>
    </Content>
  );
};

export default Private;

const Content = styled.div`
  width: 100%;
  display: flex;
  background-color: #040714; 
`;
