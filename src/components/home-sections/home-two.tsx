import styled from "styled-components";
import Image from "next/image";
import divider from "/public/assets/title-line.svg";
import homeTwo from "/public/assets/home-side2.png";
import SideMark from "/public/assets/side-mark.png";
export default function HomeTwo() {
  return (
    <HomeSectionTwo>
      <div className="sectionTwo-wrapper">
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
      <div className="image-container">
        <Image src={homeTwo} alt="home background" />
      </div>
      <Image src={SideMark} alt="side Mark" />
    </HomeSectionTwo>
  );
}
const HomeSectionTwo = styled.section`
  display: flex;
  margin: 0 6.5%;
  gap: 125px;
  align-items: center;
  justify-content: space-evenly;
  font-family: "League Spartan", sans-serif;
  .sectionTwo-wrapper {
    display: flex;
    flex-direction: column;
    gap: 27px;
    h1 {
      padding-top: 28px;
      font-weight: 700;
      font-size: 48px;
      line-height: 48px;
      letter-spacing: -0.5px;
      color: #242b37;
    }

    p {
      font-size: 20px;
      font-weight: 400;
      line-height: 30px;
      color: #242b37;
    }
  }
`;
