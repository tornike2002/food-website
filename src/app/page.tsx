"use client";
import styled from "styled-components";
import Image from "next/image";
import Dine from "/public/assets/dine.svg";
export default function Home() {
  return (
    <HomeHeader>
      <Image src={Dine} alt="Home logo" />
      <div>
        <h1>Exquisite dining since 1989</h1>
        <p>
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse.
        </p>
        <button>BOOK A TABLE</button>
      </div>
    </HomeHeader>
  );
}
const HomeHeader = styled.header`
  background: url("/assets/home-pizza.jpg") no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 100vh;
  width: 100%;
`;
