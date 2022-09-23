import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.img`
  width: 70px;
  height: 70px;
  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
  @media screen and (max-width: 576px) {
    width: 40px;
    height: 40px;
  }
`;

const InputSearch = styled.input.attrs((props) => ({
  type: "search",
  size: props.small ? 5 : undefined,
}))`
  border-radius: 100px;
  border: 1px solid #000;
  display: block;
  margin: 10px 0;
  width: 300px;
  height: 40px;
  outline: none;
  padding: ${(props) => props.padding};

  ::placeholder {
    color: palevioletred;
  }

  @media screen and (max-width: 576px) {
    width: 200px;
    height: 30px;
  }
`;

const Header = ({sidebar, showSidebar }) => {
  return (
    <div className="navbar">
      <div className="search">
        <form action="#">
          <InputSearch />
        </form>
      </div>
      <div className="avater">
        <Link to={`#`}>
          <Logo src="https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
