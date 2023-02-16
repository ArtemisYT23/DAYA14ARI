import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import styled from "styled-components";
import { Timeline } from "primereact/timeline";
import { Card } from "primereact/card";
import Slader from "../../Components/Slader";

const ContentPreview = () => {
  const events1 = [
    {
      status: "Por Como LLegaste",
      date: "solo tu pudiste hacerlo",
      icon: "pi pi-heart-fill",
      color: "#b02727",
      image:
        "https://sisadazurestorage.blob.core.windows.net/toyota/IMG-20221217-WA0042.jpg",
      text: "No te buscaba, mucho menos te esperaba pero valla que agradeci hasta el dia de hoy y todos los posteriores a este que siga aqui a mi lado construyendo de la manera que solo creia que podia imaginar al cerrar los ojos mientras leia libros enteros, ahora contigo escribio mi propio libro sin pensar en su contenido",
    },
    {
      status: "Por Como Te Hiciste Mi Mundo",
      date: "encontre el cielo en tus ojos",
      icon: "pi pi-heart-fill",
      color: "#b02727",
      image:
        "https://sisadazurestorage.blob.core.windows.net/toyota/IMG-20221217-WA0042.jpg",
      text: "Encontre en unos ojitos cafe la maravilla de todo mi alrededor, podia verlos durante varios minutos y sentir lo calido que me trasmitia no podia evitar sonreir queria verlos mas de cerca, te queria mas de cerca mis dias dejaron de ser mios mis pensamientos estaban en que llegara la noche para poder ver a mi estrella, mi cielo, era como si seguias rumbo a conquistar todo mi mundo y yo queria que lo hicieras",
    },
    {
      status: "Por Como Compartiste Tu Sonrisa",
      date: "la arquitecta que la construyo",
      icon: "pi pi-heart-fill",
      color: "#b02727",
      image:
        "https://sisadazurestorage.blob.core.windows.net/toyota/IMG-20221217-WA0042.jpg",
      text: "No habia una forma definida pues deje de recordar como se soltaba una sonrisa en medio de la calle, pero estabas alli y sin darme cuenta mis mejillas se alzaban mis labios se abrian y formaban lo que estaba viendo en tus rostro verte sonriendo ocasionaba en mi tambien hacerlo y el motivo eras nadie mas q tu fue tan completo y natural que me extasiaba y queria una dos tres y tantas veces como pudiera si en ella estaba mi amada",
    },
    {
      status: "Por Como Te Quedaste",
      date: "hiciste tu espacio y solo es el inicio",
      icon: "pi pi-heart-fill",
      color: "#b02727",
      image:
        "https://sisadazurestorage.blob.core.windows.net/toyota/IMG-20221217-WA0042.jpg",
      text: "Supiste ganarte en espacio enorme por no decir casi todo aqui en mi pecho, mi corazon, y mi mente despues de ya no poder verte todos los dias, empezaba en cuenta regresiva los inicios de semana con el anhelo de que ya sea viernes y pueda verte puede que solo 1 hora o un pequeño tiempo pero para mi valen multiplicados por el infinito si eras tu, igual estabas presente en mi dia a dia deseandome el inicio de cada uno de ellos animandome confiando no podia pedir mas tenerte a ti significo todo",
    },
  ];

  const customizedMarker = (item) => {
    return (
      <span
        style={{
          backgroundColor: item.color,
          width: "40px",
          height: "40px",
          borderRadius: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <i className={item.icon}></i>
      </span>
    );
  };

  const customizedContent = (item) => {
    return (
      <>
        <Card title={item.status} subTitle={item.date}>
          {item.image && (
            <Imagen
              src={item.image}
              onError={(e) =>
                (e.target.src =
                  "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
              }
              alt="cargando ..."
            />
          )}

          <TextFont>{item.text}</TextFont>
          <br />
          <Counter>+1 Te Quiero</Counter>
        </Card>
        <br />
      </>
    );
  };

  return (
    <Container>
      <ContainerTitle>
        <h1>Ranking de las formas que te quiero</h1>
      </ContainerTitle>
      <br />
      <Timeline
        value={events1}
        align="alternate"
        className="customized-timeline"
        marker={customizedMarker}
        content={customizedContent}
      />

      <Slader />
    </Container>
  );
};

export default ContentPreview;

const Container = styled.div`
  margin: 1rem 0 0 0;
  width: 100%;
  height: 1900px;
  @media (max-width: 767px) {
    height: 3380px;
  }
`;

const ContainerTitle = styled.div`
  width: 100%;
  height: 3rem;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;

  h1 {
    font-family: "Sofia Sans Condensed", sans-serif;
    font-size: 35px;
  }
`;

const Imagen = styled.img`
  width: 190px;
  border-radius: 5px;
`;

const TextFont = styled.p`
  padding: 1rem 0 0 0;
`;

const Counter = styled.span`
  font-weight: bold;
  font-size: 20px;
`;
