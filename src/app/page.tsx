"use client";
import styled from "styled-components";
import Image from "next/image";
import Dine from "/public/assets/dine.svg";
export default function Home() {
  return (
    <HomeHeader>
      <Image src={Dine} alt="Home logo" />
      <div className="home-wrapper">
        <h1>
          Exquisite dining
          <br /> since 1989
        </h1>
        <p>
          Experience our seasonal menu in beautiful country
          <br /> surroundings. Eat the freshest produce from the
          <br /> comfort of our farmhouse.
        </p>
        <button>BOOK A TABLE</button>
      </div>
    </HomeHeader>
  );
}
const HomeHeader = styled.header`
  background: url("/assets/home-pizza.jpg") no-repeat;
  background-position: center top;
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  color: #ffffff;
  padding: 5% 5%;
  display: flex;
  flex-direction: column;
  gap: 153px;
  font-family: "League Spartan", sans-serif;
  .home-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    h1 {
      font-weight: 300;
      font-size: 80px;
      line-height: 80px;
    }
    p {
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 30px;
    }
    button {
      padding: 25px 54px;
      font-weight: 600;
      font-size: 17px;
      line-height: 16px;
      letter-spacing: 2.5px;
      color: #ffffff;
      background-color: transparent;
      border: 1px solid #ffffff;
      width: fit-content;
    }
  }
`;
