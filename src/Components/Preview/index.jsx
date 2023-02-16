import styled from "styled-components";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveModalPreviewHistory,
  setActiveModalVideoPlay,
} from "../../Redux/States/LoginAction";
import HeaderImagen from "../../../assets/Img/amada3.jpg";
import Primero from "../../../assets/Img/primero.jpg";
import Capitulo1 from "../../../assets/Img/Part1.jpg";
import Capitulo2 from "../../../assets/Img/malecon.jpg";
import Capitulo3 from "../../../assets/Img/Capitulo3.jpg";
import Capitulo4 from "../../../assets/Img/Propuesta.png";
import Capitulo5 from "../../../assets/Img/Capitulo5.jpg";
import Capitulo6 from "../../../assets/Img/Capitulo6.jpg";
import Capitulo7 from "../../../assets/Img/Capitulo7.jpg";
import Capitulo8 from "../../../assets/Img/Capitulo8.jpg";
import Capitulo9 from "../../../assets/Img/Capitulo9.jpg";
import Capitulo10 from "../../../assets/Img/Capitulo10.jpg";
import Capitulo11 from "../../../assets/Img/Capitulo11.png";
import Capitulo12 from "../../../assets/Img/Capitulo12.jpg";
import Capitulo13 from "../../../assets/Img/Capitulo13.jpg";
import Capitulo14 from "../../../assets/Img/Capitulo14.jpg";
import Capitulo15 from "../../../assets/Img/Capitulo15.jpg";
import VideoPlay from "../VideoPlay";

const useStyless = makeStyles((theme) => ({
  modalPreview: {
    position: "absolute",
    width: "800px",
    "@media (max-width: 767px)": {
      width: "100%",
      height: "100%",
    },
    height: "600px",
    backgroundColor: "#0e0d0d",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "13px",
    overflow: "hidden",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  textfield: {
    width: "100%",
  },
  container: {
    textAlign: "center",
  },
}));

const Preview = () => {
  const styless = useStyless();
  const dispatch = useDispatch();
  const { sesion } = useSelector((store) => store);
  const { previewActive } = sesion;

  const CloseModalDetailPreview = () => {
    dispatch(setActiveModalPreviewHistory(false));
  };

  return (
    <>
      <div className={styless.container}>
        <Modal open={previewActive} onClose={CloseModalDetailPreview}>
          <div className={styless.modalPreview}>
            <Header imagen={HeaderImagen}>
              <Banner>
                <Title>EL MAYOR REGALO DE MIS DIAS</Title>

                <ContaineButton>
                  <ContentButton
                    onClick={() => dispatch(setActiveModalVideoPlay(true))}
                  >
                    Reproducir
                  </ContentButton>
                  <Cancelar onClick={() => CloseModalDetailPreview()}>
                    Atras
                  </Cancelar>
                </ContaineButton>
              </Banner>
            </Header>
            <Description>
              La chica de mis sueños quien convirtio en primavera todo de mi, me
              regalo las mas bastas sonrisas, me enseña un poco de amar si no
              conocia el significado ahora creo que estoy tocando el mismo
              cuando abro los ojos y ella esta entre mis brazos, sus labios con
              los mios las palabras sobran si se trata de ella, no ahi poema que
              la defina porque en medio de este sentimiento nace uno nuevo cada
              dia con firma y destino a su nombre y corazon.
            </Description>
            <br />
            <Subtitle>TEMPORADA 1</Subtitle>
            <br />
            <ContainerCard>
              <ContainerVideo imagen={Primero}></ContainerVideo>
              <ContainerText>
                <h1>Magia en Unos Ojos</h1>
                <div>
                  <span>
                    mi intencion en todo momento fue relacionarme lo menos
                    posible, en cualquier situacion o actitud, aun asi decidi ir
                    a samanes a un lugar donde no me esperaba nadie ni conocia a
                    casi nadie, valla sorpresa que me dio la vida, porque la
                    pase bonito, pero sobre todo observe lo que me robo toda
                    atencion en mi una chica con lente que portaba magia en un
                    par de ojos desde lejos un poco alejada pero hermosa, si
                    tuviera que resaltar algo de ella serian sus ojos de cielo
                    inmenso.
                  </span>
                </div>
              </ContainerText>
            </ContainerCard>
            <ContainerCard>
              <ContainerVideo imagen={Capitulo1}></ContainerVideo>
              <ContainerText>
                <h1>La primera salida</h1>
                <div>
                  <span>
                    como olvidarla, estabas hermosa terminamos el dia despues de
                    jugar en el malecon conversando del y del otro, luego
                    sentados en confianza compartiendo ideas criterios puntos de
                    vista tanto tuyos como mios y de regreso mi pensamiento
                    lleno de dicha por haber pasado ese dia contigo y deseando
                    muchos mas
                  </span>
                </div>
              </ContainerText>
            </ContainerCard>
            <ContainerCard>
              <ContainerVideo imagen={Capitulo2}></ContainerVideo>
              <ContainerText>
                <h1>Encuentro casual</h1>
                <div>
                  <span>
                    Pasaron los dias como si compitieran para terminar la semana
                    y valla que lo ansiaba la segunda vez que podria verte nos
                    sentamos a comer sanduches, y nuestro de tema de
                    conversacion fuimos ambos lo que no queriamos que pasara si
                    llegaba a suceder algo entre nosotros como podriamos
                    manejarlo aquel dia dormi toda la noche con una sonrisa
                    despues que me dijeras que te gustaba y mi primer abrazo
                  </span>
                </div>
              </ContainerText>
            </ContainerCard>
            <ContainerCard>
              <ContainerVideo imagen={Capitulo3}></ContainerVideo>
              <ContainerText>
                <h1>Sorpresa de al final</h1>
                <div>
                  <span>
                    Los dias volaban cada vez mas con el fin de semana a la
                    vuelta para poder verte, eras parte de mi poco a poco, rumbo
                    a finalizar nuestra salida y acompañarte a tomar el carro
                    mis pensamientos no pudieron preveer que en esos momentos no
                    dejara de sonreir mucho mas de lo que ya lo hacia mis labios
                    estaban con frio y estaban por besar tu frente como otras
                    veces, mayor fue mi sorpresa que los tuyos tocaran los mios
                    y marcaras en mi corazon tu huella
                  </span>
                </div>
              </ContainerText>
            </ContainerCard>
            <ContainerCard>
              <ContainerVideo imagen={Capitulo4}></ContainerVideo>
              <ContainerText>
                <h1>Propuesta A Una Diosa</h1>
                <div>
                  <span>
                    El rosar de tus labios, despues del cine no era un sueño,
                    porque estaba ocurriendo otra vez uno mas largo de esos que
                    pasan segundos pero duran una vida, mi anhelo llamarte mi
                    novia a pesar que ya vias dado un paso, no lo via pedido
                    aun, existian ideas variadas, hasta que sin darme cuenta ya
                    estaba frente a ti, y no necesitaba pensar palabras porque
                    el corazon dictaba cada una mientras mis oidos escuchan un
                    si quiero, y los ojos empañaban felicidad
                  </span>
                </div>
              </ContainerText>
            </ContainerCard>
            <ContainerCard>
              <ContainerVideo imagen={Capitulo5}></ContainerVideo>
              <ContainerText>
                <h1>Te extraños en la mente</h1>
                <div>
                  <span>
                    No habia momento en la semana que no extrañara poder estar
                    cerca de ti como ocurria al llegar los ultimos dias de la
                    semana, podrian ser un par de horas, unos minutos, una noche
                    con tal de que estuvieras presente para mi ya eran momentos
                    que valian oro dentro de mi memoria, y me dejaban con una
                    dicha para todo el resto de dias, que posterior se
                    complementaban con tu interaccion en cada uno de ellos
                    queriendote mas y mas
                  </span>
                </div>
              </ContainerText>
            </ContainerCard>

            <ContainerCard>
              <ContainerVideo imagen={Capitulo6}></ContainerVideo>
              <ContainerText>
                <h1>Paseo bajo la Luna</h1>
                <div>
                  <span>
                    dar vueltas sobre un lugar transcurrido pero de la mano de
                    mi amada era tan especial asi fuera la millonesima vez que
                    pisara ese lugar, un vestido negro acompañado de rojo frente
                    a una noche sin estrellas, pero no parecia asi frente a mis
                    ojos pues llevaba a la luna conmigo dandome caricias, bajo
                    desde lo alto para tomarme en brazos, cada momento que
                    ocurria algo asi me deja calido y con un sentimiento de
                    hogar dulce hogar, pues ahora el esta contigo Amor...
                  </span>
                </div>
              </ContainerText>
            </ContainerCard>
            <ContainerCard>
              <ContainerVideo imagen={Capitulo7}></ContainerVideo>
              <ContainerText>
                <h1>Compañia frente a un Titulo</h1>
                <div>
                  <span>
                    No me hubiera pasado por la cabeza en ningun momento que la
                    persona que quisiera me acompañara en mi primer titulo, solo
                    lo viera contemplado en los libros que tenia, al no ser algo
                    esperado lo convirtio en algo mucho mas valioso y hermoso si
                    era un sueño no queria despertar no solo estabas
                    acompañandome estabas hermosa tal cual el primer dia que te
                    vi en persona, una diosa de pies a cabeza pero sobre todo
                    esos ojitos que me mostraban el cielo.
                  </span>
                </div>
              </ContainerText>
            </ContainerCard>
            <ContainerCard>
              <ContainerVideo imagen={Capitulo8}></ContainerVideo>
              <ContainerText>
                <h1>Estrella Visitando La Noche</h1>
                <div>
                  <span>
                    En el ultimo mes, con las fechas mas esperadas por las
                    personas a la vuelta de la esquina, mi anhelo estaba
                    presente llegando aun era incierto que podrian pasar esos
                    dias si podria estar a tu lado o no salimos antes, y la
                    noche no fue como lo imaginabamos pero no le quito merito a
                    la vida y a ti por compartirme tu tiempo, recorrimos toda la
                    mayor parte de la ciudad en bus con una diosa frente a mi,
                    entre risas y mas la estrella que se via bajado del cielo
                    para mi noche
                  </span>
                </div>
              </ContainerText>
            </ContainerCard>
            <ContainerCard>
              <ContainerVideo imagen={Capitulo9}></ContainerVideo>
              <ContainerText>
                <h1>Navidad Anticipada</h1>
                <div>
                  <span>
                    pasariamos 24 con nuestras familias, no podria verte con lo
                    ocupada que estarias organizando todo ayudando y mas vendria
                    bastantes personas de tu familia no era para menos, pero
                    igual hicimos tiempo para poder saber del uno y el otro como
                    nos iba, en medio de te quiero y besos gracias a los textos
                    en unas pantallas que me permiten estar cerca de ti y
                    transmitirte mis sentimientos desde tan lejos, con las
                    ansias de comenzara el siguiente dia
                  </span>
                </div>
              </ContainerText>
            </ContainerCard>
            <ContainerCard>
              <ContainerVideo imagen={Capitulo10}></ContainerVideo>
              <ContainerText>
                <h1>Viaje En Unos Brazos</h1>
                <div>
                  <span>
                    Ansiaba que llegara el siguiente dia pues no era para menos
                    era 25 y podria pasar con la diosa de mi literatura
                    viajando, con ella dormida a mi lado viendo hermosos
                    paisajes que se volvian muchos mas lindos si te ponia a ti
                    en ellos pasandola mas que bonito no solo los dos sino
                    visitando a un gran amigo tuyo y yo teniendo la oportunidad
                    de conocerlo tambien en un ciudad linda con una novia linda
                    entre sus aceras
                  </span>
                </div>
              </ContainerText>
            </ContainerCard>
            <ContainerCard>
              <ContainerVideo imagen={Capitulo11}></ContainerVideo>
              <ContainerText>
                <h1>Despedida de año en tus manos</h1>
                <div>
                  <span>
                    desconocia a donde pasaria el ultimo dia del año, hasta
                    cuando me invitaste de la mano a que sea a tu lado, compras
                    de ultimo dia, eleccion de vestimenta, acompañarte, opinar,
                    un dia completo contigo en el, con un inicio unico como el
                    despertar y que estes tu a mi lado para decirme los buenos
                    dias y al terminar la doce decirte feliz año y que te quiero
                    en el nuevo y los que fueran a llegar porque si eres tu
                    nunca es suficiente.
                  </span>
                </div>
              </ContainerText>
            </ContainerCard>
            <ContainerCard>
              <ContainerVideo imagen={Capitulo12}></ContainerVideo>
              <ContainerText>
                <h1>Despertar De Inicio En Una Sonrisa</h1>
                <div>
                  <span>
                    Otra Verso mas que solo via leido en papel y ahora estaba
                    trascribiendose en mi realidad iniciar el año abrir los ojos
                    y ver a la persona que quiero junto a mi compartiendo
                    sabanas y una cama tibia sin recordar la hora lleno de una
                    sonrisa pintada por la tuya de lado a lado, en unos brazos
                    que abrigaban el alma completita.
                  </span>
                </div>
              </ContainerText>
            </ContainerCard>
            <ContainerCard>
              <ContainerVideo imagen={Capitulo13}></ContainerVideo>
              <ContainerText>
                <h1>Cine Descrito En Tus Ojos</h1>
                <div>
                  <span>
                    Ya no podria quedarme o recibirte pero eso es lo menos si
                    puedo verte y perderme a mi mundo contigo porque tu eres mi
                    mundo lo conquistaste y el no opuso resistencia queria ser
                    ciudadano de esos ojos que me encantan, podiamos ir a cine
                    esta abrazados por el frio ver peliculas hasta que caiga no
                    noche y solo quede salir de ultimos en un centro comercial o
                    despues de una larga caminata en algun otro lado.
                  </span>
                </div>
              </ContainerText>
            </ContainerCard>
            <ContainerCard>
              <ContainerVideo imagen={Capitulo14}></ContainerVideo>
              <ContainerText>
                <h1>Cena En Arrullo De Viernes</h1>
                <div>
                  <span>
                    Como olvidar una semana donde pude verte, sentirte y
                    abrazarte jueves viernes sabado, una alegria descrita en una
                    sonrisa y brillos de ojos, cena completa con una diosa que
                    robaba mirada con solo entrar, llegaba a casa lleno de
                    suspiros despues de pasar por la paginas intermedias de este
                    libro aferrado a las puntos seguidos para repetir el verso
                    que era el dia completo la hora en la que estabas presente,
                    queria repetirlo sin tener que pausar para avanzar a la
                    siguiente.
                  </span>
                </div>
              </ContainerText>
            </ContainerCard>
            <ContainerCard>
              <ContainerVideo imagen={Capitulo15}></ContainerVideo>
              <ContainerText>
                <h1>Febrero En Clavel</h1>
                <div>
                  <span>Cargando ...</span>
                </div>
              </ContainerText>
            </ContainerCard>
          </div>
        </Modal>
      </div>
      <VideoPlay />
    </>
  );
};

export default Preview;

const Header = styled.div`
  color: white;
  height: 300px;
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
  height: 270px;
  @media (max-width: 767px) {
    padding-top: 120px;
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
  background-color: rgba(156, 156, 156, 0.5);
  padding: 0.5rem 2rem;
  cursor: pointer;

  &:hover {
    color: #000;
    background-color: #e6e6e6;
  }
`;

const Cancelar = styled.button`
  color: #fff;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  margin-right: 1rem;
  background-color: rgba(156, 156, 156, 0.5);
  padding: 0.5rem 2rem;
  cursor: pointer;
  opacity: 0;

  &:hover {
    color: #000;
    background-color: #e6e6e6;
  }

  @media (max-width: 767px) {
    opacity: 1;
  }
`;

const Description = styled.div`
  text-align: center;
  max-width: 100%;
  height: 140px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: #fdfdfd;
  margin-top: 20px;
  font-family: "Sofia Sans Condensed", sans-serif;
  font-size: 21px;
  font-style: italic;
  border-bottom: 1px solid #fff;
  @media (max-width: 767px) {
    height: 240px;
  }
`;

const Subtitle = styled.div`
  color: #fff;
  display: flex;
  text-align: justify;
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 0 1rem;
`;

const ContainerCard = styled.div`
  border: 1px solid #fff;
  border-radius: 13px;
  height: 220px;
  margin: 0.7rem 0 0 0;
  overflow: hidden;
  display: flex;
  @media (max-width: 767px) {
    height: 500px;
    border-radius: 0;
  }
`;

const ContainerVideo = styled.div`
  width: 40%;
  height: 100%;
  background-image: url(${(props) => props.imagen});
  background-size: cover;
  background-position: center;
`;

const ContainerText = styled.div`
  /* background-color: yellow; */
  width: 60%;
  height: 100%;

  h1 {
    color: #fff;
    padding: 0.5rem;
    text-align: center;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    width: 90%;
    color: #fdfdfd;
    text-align: justify;
    font-size: 19px;
    font-family: "Sofia Sans Condensed", sans-serif;
  }
`;
