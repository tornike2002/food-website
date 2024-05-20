import { FunctionComponent } from "react";
import styled from "styled-components";
import Image from "next/image";
import divider from "/public/assets/title-line.svg";
import foodone from "/public/assets/food1.png";
import foodtwo from "/public/assets/food2.png";
import foodthree from "/public/assets/food3.png";
export default function Footer() {
  return (
    <FooterContainer>
      <div className="footer-wrapper">
        <Image src={divider} alt="Divider" />
        <h1>
          Enjoyable place
          <br /> for all the family
        </h1>
        <p>
          Our relaxed surroundings make dining with us a great
          <br /> experience for everyone. We can even arrange a tour
          <br /> of the farm before your meal.
        </p>
      </div>
      <div className="footer-food">
        <div className="food-one">
          <Image src={foodone} alt="food icon" />
        </div>
        <div className="food-two">
          <Image src={foodtwo} alt="food icon" />
        </div>
        <div className="food-three">
          <Image src={foodthree} alt="food icon" />
        </div>
      </div>
    </FooterContainer>
  );
}
const FooterContainer = styled.footer`
  min-height: 60vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .footer-wrapper {
    display: flex;
    flex-direction: column;
    gap: 27px;
    z-index: 1;

    h1 {
      padding-top: 28px;
      font-weight: 700;
      font-size: 48px;
      line-height: 48px;
      letter-spacing: -0.5px;
      color: #fff;
    }

    p {
      font-size: 20px;
      font-weight: 400;
      line-height: 30px;
      color: #fff;
    }
  }
  .footer-food {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-direction: column;
    .food-one,
    .food-two,
    .food-three {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
`;
