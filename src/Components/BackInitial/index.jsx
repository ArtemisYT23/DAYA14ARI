import styled from "styled-components";
import HeaderImagen from "../../../assets/Img/amada3.jpg";
import { useDispatch } from "react-redux";
import { setActiveModalPreviewHistory, setClearTockenInvalidate } from "../../Redux/States/LoginAction";
import Preview from "../Preview";

const BackInitial = () => {
  const dispatch = useDispatch();
  return (
    <HeaderInitial imagen={HeaderImagen}>
      <Banner>
        <Title>EL MAYOR REGALO DE MIS DIAS</Title>

        <ContaineButton>
          <ContentButton
            onClick={() => dispatch(setActiveModalPreviewHistory(true))}
          >
            Play
          </ContentButton>
          <ContentButton onClick={() => dispatch(setClearTockenInvalidate())}>Cerrar Sesion</ContentButton>
        </ContaineButton>

        <Description>
          La chica de mis sueños quien convirtio en primavera todo de mi, me
          regalo las mas bastas sonrisas, me enseña un poco de amar si no
          conocia el significado ahora creo que estoy tocando el mismo cuando
          abro los ojos y ella esta entre mis brazos, sus labios con los mios
          las palabras sobran si se trata de ella, no ahi poema que la defina
          porque en medio de este sentimiento nace uno nuevo cada dia con firma
          y destino a su nombre y corazon.
        </Description>
      </Banner>
      <FadeButton />
      <Preview />
    </HeaderInitial>
  );
};

export default BackInitial;

const HeaderInitial = styled.header`
  color: white;
  height: 448px;
  object-fit: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${(props) => props.imagen});
  background-size: cover;
`;

const Banner = styled.div`
  margin-left: 30px;
  padding-top: 170px;
  height: 230px;
  @media (max-width: 767px) {
    padding-top: 130px;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
  font-family: "Sofia Sans Condensed", sans-serif;
`;

const ContaineButton = styled.div`
  display: flex;
`;

const ContentButton = styled.button`
  color: #fff;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  margin-right: 1rem;
  background-color: rgba(51, 51, 51, 0.5);
  padding: 0.5rem 2rem;
  cursor: pointer;

  &:hover {
    color: #000;
    background-color: #e6e6e6;
  }
`;

const Description = styled.p`
  max-width: 90%;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: #ffffffda;
  margin-top: 20px;
  font-weight: bold;
  font-family: "Sofia Sans Condensed", sans-serif;
  font-size: 22px;
  font-style: italic;
`;

const FadeButton = styled.div`
  height: 7.4rem;
  z-index: -1;
`;
