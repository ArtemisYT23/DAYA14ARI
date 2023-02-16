import styled from "styled-components";
import { useSelector } from "react-redux";
import BackInitial from "../../../Components/BackInitial";
import ContentPreview from "../../../Components/ContentPreview";
import LoadingApp from "../../../Utilities/LoadingApp";

const Home = () => {
  const { sesion } = useSelector((store) => store);
  const { isLoadingSesion } = sesion;

  return (
    <>
      {isLoadingSesion ? (
        <LoadingApp />
      ) : (
        <>
          <ContainerFirst>
            <BackInitial />
            <Container>
              <ContentPreview />
            </Container>
          </ContainerFirst>
        </>
      )}
    </>
  );
};

export default Home;

const ContainerFirst = styled.div`
  width: 100%;
  background-color: #040714; 
`;

const Container = styled.main`
  overflow-x: hidden;
  overflow-y: hidden;
  display: block;
  top: 72px;

  &:after {
    background: url(${(props) => props.imagen}) center no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
