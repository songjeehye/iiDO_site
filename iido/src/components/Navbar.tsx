import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Nav = styled.nav`
  width: 100%;
`;
const ContainerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogoImg = styled.img`
  width: auto;
  max-width: 100%;
`;
const NavbarDiv = styled.div`

  & ul li:not(:last-child) {
    margin-right: var(--padding-68);
  }
  
  @media (max-width: 991.98px) {
    & ul li:not(:last-child) {
      margin-right: var(--padding-48);
    }
  }
  @media (max-width: 767.98px) {
    background-color: var(--primary-color);
    transition: all 0.3s ease-in-out;
    display: none;

    &.active {
      position: absolute;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: calc(100vh - 80px);
      left: 0;
      top: 80px;
    }
    &.active ul {
      flex-direction: column;
      width: 540px;
      margin: 0 auto;
      padding: 0 var(--margin-12);
    }
    &.active ul li:first-child {
      margin-top: var(--padding-48);
    }
    &.active ul li:not(:first-child) {
      margin-top: var(--margin-24);
    }
    &.active ul .gnb-menu {
      font-size: var(--font-size-20);
    }
    &.active .navbar-social {
      margin-top: var(--padding-54);
      cursor: pointer;
    }
  }
`;
const GnbMenuSpan = styled.span`
  position: relative;
  padding: var(--margin-10) var(--margin-2);
  color: var(--secondary-scale01);
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-400);
  letter-spacing: var(--letter-spacing_nav);

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 0;
    left: 0;
    background-color: var(--secondary-scale01);
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s;
  }
  &:hover:after {
    transform-origin: bottom left;
    transform: scaleX(1);
  }

  @media (max-width: 767.98px) {
    font-size: var(--font-size-20);
  }
`;

function Navbar() {
  const navigate = useNavigate();

  return (
    <header>
      <Nav>
        <ContainerDiv className="container">
          <LogoImg onClick={() => navigate("/")} src="assets/images/iiDO_logo.svg" alt="로고 이미지" />
          <NavbarDiv>
            <ul className="d-flex">
              <li>
                <GnbMenuSpan onClick={() => navigate("/about")}>
                  About Us
                </GnbMenuSpan>
              </li>
              <li>
                <GnbMenuSpan onClick={() => navigate("/reserve")}>
                  Reservation
                </GnbMenuSpan>
              </li>
              <li>
                <GnbMenuSpan onClick={() => navigate("/celeb")}>
                  Celeb’s Pick
                </GnbMenuSpan>
              </li>
              <li>
                <GnbMenuSpan onClick={() => navigate("/gallery")}>
                  Gallery
                </GnbMenuSpan>
              </li>
            </ul>
            <div className="navbar-social d-flex gap-3 d-md-none">
              <div>
                <img className="img-fluid" src="assets/images/contact-icon-home.png" alt="홈 아이콘" />
              </div>
              <div>
                <img className="img-fluid" src="assets/images/contact-icon-instagram.png" alt="인스타그램 아이콘" />
              </div>
              <div>
                <img className="img-fluid" src="assets/images/contact-icon-twitter.png" alt="트위터 아이콘" />
              </div>
            </div>
          </NavbarDiv>
          <div className="navbar-toggle d-block d-md-none ms-auto">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
          </div>
        </ContainerDiv>
      </Nav>
    </header>
  );
}

export default Navbar;