import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slider1 from "../../../assets/Img/amada1.jpg";
import Slider2 from "../../../assets/Img/amada2.jpg";
import Slider3 from "../../../assets/Img/amada3.jpg";

function ImgSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 350,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a href="/">
          <ContainerSlider>
            <ContentImage imagen={Slider1}>
              <span>Mi Diosa</span>
            </ContentImage>
          </ContainerSlider>
        </a>
      </Wrap>
      <Wrap>
        <a href="/">
          <ContainerSlider>
            <ContainerImage1 imagen={Slider2}>
              <span>Mi Mundo</span>
            </ContainerImage1>
          </ContainerSlider>
        </a>
      </Wrap>
      <Wrap>
        <a href="/">
          <ContainerSlider>
            <ContainerImage2 imagen={Slider3}>
              <span>Mi Loteria</span>
            </ContainerImage2>
          </ContainerSlider>
        </a>
      </Wrap>
    </Carousel>
  );
}

const ContainerSlider = styled.div`
  width: 100%;
  height: 300px;
`;

const ContentImage = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.imagen});
  background-size: contain;
  background-position: center;
  border-radius: 13px;

  @media screen and (max-width: 767px) {
    background-repeat: no-repeat;

    span {
      display: none;
    }
  }

  span {
    color: #f7f7f7;
    font-size: 120px;
    font-style: italic;
  }
`;

const ContainerImage1 = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.imagen});
  background-size: contain;
  background-position: center;
  border-radius: 13px;

  @media screen and (max-width: 767px) {
    background-repeat: no-repeat;

    span {
      display: none;
    }
  }

  span {
    color: #f7f7f7;
    font-size: 120px;
    font-style: italic;
  }
`;

const ContainerImage2 = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.imagen});
  background-size: contain;
  background-position: center;
  border-radius: 13px;

  @media screen and (max-width: 767px) {
    background-repeat: no-repeat;

    span {
      display: none;
    }
  }

  span {
    color: #f7f7f7;
    font-size: 120px;
    font-style: italic;
  }
`;

const Carousel = styled(Slider)`
  margin: 15px 0 0 0;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: 250ms all;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: #fff;
    }
  }

  li.slick-active button:before {
    color: #fff;
  }

  .slick-list {
    overflow: initial;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 70%) 0px 25px 30px -10px,
      rgb(0 0 0 / 70%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border: 4px solid #b4b4b4;
    }
  }
`;

export default ImgSlider;
