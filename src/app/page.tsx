"use client"
import styled from "styled-components";

export default function Home() {
  return (
    <HomeHeader>
      <h1>hello</h1>
    </HomeHeader>
  );
}
const HomeHeader =styled.header`
  background: url("/assets/home-pizza.jpg") no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 100vh;
  width: 100%;
`