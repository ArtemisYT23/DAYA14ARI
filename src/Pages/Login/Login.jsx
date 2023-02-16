import styled from "styled-components";
import Footer from "../../../assets/Img/Login.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SecurityServer } from "../../Config/axios";
import { useDispatch, useSelector } from "react-redux";
import { PrivateRoutes } from "../../Models";
import {
  setLoginUserTocken,
  setErrorUserTocken,
} from "../../Redux/States/LoginAction";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [User, setUser] = useState("");
  const [Pass, setPass] = useState("");
  const [validate, setValidate] = useState(true);

  useEffect(() => {
    User != "" && Pass != "" ? setValidate(false) : setValidate(true);
  }, [User, Pass]);

  const SubmitForm = () => {
    const formData = {
      userName: User,
      password: Pass,
    };

    axios({
      url: `${SecurityServer}user/login`,
      method: "POST",
      data: formData,
      headers: {
        "Content-Type": "Application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then(function (response) {
        if (response.status == 200) {
          dispatch(setLoginUserTocken(response.data.token, response.status));
          navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
        }
      })
      .catch(function (error) {
        console.log(error);
        dispatch(setErrorUserTocken());
      });
  };

  return (
    <ContainerLogin imagen={Footer}>
      <LoginForm>
        <FormContent>
          <TitleContent>
            <h1>Bienvenida Amada Mia</h1>
            <span>No necesitas registrarte ya estas en mi Corazon</span>
          </TitleContent>

          <InputContent>
            <label>Te quiero</label>
            <div>
              <input
                value={User}
                onChange={(e) => setUser(e.target.value)}
                type="text"
                placeholder="    Ingreso a tu corazon"
              />
            </div>

            <label>Te extraño</label>
            <div>
              <input
                value={Pass}
                onChange={(e) => setPass(e.target.value)}
                type="password"
                placeholder="   Ingreso a mi corazon"
              />
            </div>
          </InputContent>

          <SubmitContent>
            <input type="checkbox" checked={true} />
            <h2>Quererte hasta los huesitos</h2>
          </SubmitContent>

          <ButtonContent>
            <button disabled={validate} onClick={() => SubmitForm()}>
              Ingresar
            </button>
          </ButtonContent>
        </FormContent>
      </LoginForm>
      <ImageForm imagen={Footer}>
        <ContentBlank />
        <ContentPreview>
          <ContentInfo>
            <div>
              <span>
                Antes de ti no sabia que podia encontrar estrellas fuera del
                cielo escondidas en los mas hermosos ojos que puedo contemplar
              </span>
            </div>
            <div>
              <h1>Day & Ari</h1>
              <p>★★★★★</p>
            </div>
            <div>
              <a>para mi amada</a>
            </div>
          </ContentInfo>
        </ContentPreview>
      </ImageForm>
    </ContainerLogin>
  );
};

export default Login;

const ContainerLogin = styled.div`
  max-width: 100%;
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: var(--colorFont);
  @media (max-width: 767px) {
    background-image: url(${(props) => props.imagen});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const LoginForm = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const FormContent = styled.div`
  width: 60%;
  height: 80%;
  background-color: var(--colorFont);
  @media (max-width: 767px) {
    background: none;
    width: 70%;
  }
`;

const TitleContent = styled.div`
  margin: 0 0 1.8rem 0;

  h1 {
    margin: 0 0 1rem 0;
    color: var(--colorText);
  }

  span {
    color: var(--colorText);
  }
`;

const InputContent = styled.div`
  margin: 1rem 0 1.8rem 0;
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
    padding: 0 0 0.5rem 0;
    font-size: 20px;
    justify-content: start;
    align-items: start;
    color: var(--colorText);
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div:nth-child(2) {
    padding: 0 0 1.5rem 0;
  }

  input {
    width: 100%;
    height: 2.8rem;
    border-radius: 8px;
    outline: none;
    font-size: 16px;
    border: 1px solid #c4c4c4;
    ::placeholder {
      display: flex;
      font-size: 15px;
    }
  }
`;

const SubmitContent = styled.div`
  display: flex;
  margin: 0 0 1.5rem 0.8rem;

  h2 {
    font-weight: bold;
    font-size: 16px;
    margin: 0 0 0 0.5rem;
    color: var(--colorText);
  }
`;

const ButtonContent = styled.div`
  button {
    width: 100%;
    height: 2.8rem;
    background: #0ab8e4;
    color: var(--colorFont);
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    font-family: Roboto, sans-serif;
    border: none;
    cursor: pointer;

    :disabled {
      background: #fafafa90;
      cursor: default;
    }
  }
`;

const ImageForm = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  background-image: url(${(props) => props.imagen});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 767px) {
    display: none;
  }
`;

const ContentBlank = styled.div`
  width: 100%;
  height: 55%;
`;

const ContentPreview = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentInfo = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff22;

  div > span {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--colorText);
    text-align: justify;
    padding: 0.6rem;
    font-size: 22px;
    font-weight: bold;
    font-style: italic;
    font-family: Roboto, sans-serif;
  }

  div > h1 {
    color: var(--colorText);
    margin: 0 0 0 1rem;
  }

  div > p {
    color: #fffb02;
    font-size: 25px;
    padding: 0.5rem 0 0 1rem;
  }

  div > a {
    color: #ffffff8d;
    font-size: 16px;
    font-style: italic;
    padding: 0.5rem 0 0 1rem;
    font-family: Roboto, sans-serif;
  }

  div:nth-child(1) {
    width: 100%;
    height: 50%;
    padding: 1rem;
  }

  div:nth-child(2) {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }

  div:nth-child(3) {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }
`;
