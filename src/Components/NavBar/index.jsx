import styled from "styled-components";

const NavBar = () => {
  return (
    <Nav>
      <ImagenLogo
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        alt="Netflix Logo"
      />
    </Nav>
  );
};

export default NavBar;

const Nav = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 30px;
  display: flex;
  z-index: 1;
  justify-content: space-between;
  transition-timing-function: ease-in;
  transition: all 0.5s;
`;

const ImagenLogo = styled.img`
  position: fixed;
  left: 20px;
  width: 80px;
  object-fit: contain;
`;
