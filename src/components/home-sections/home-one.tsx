import Image from "next/image";
import styled from "styled-components";
import Line from "/public/assets/title-line.svg";
import ImgBackground from "/public/assets/image-background.svg";
import SectionImg from "/public/assets/home-side1.png";

export default function HomeOne() {
  return (
    <HomeSectionOne>
      <div className="image-container">
        <Image
          src={SectionImg}
          alt="Section one Img"
          width={540}
          height={720}
          className="sectionOneRelative"
        />
        <Image
          src={ImgBackground}
          alt="bg"
          className="sectionOneAbsolute"
          width={895}
          height={320}
        />
      </div>
      <div className="SectionOne-wrapper">
        <Image src={Line} alt="Divider" />
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
    </HomeSectionOne>
  );
}

const HomeSectionOne = styled.section`
  display: flex;
  margin: 0 6.5%;
  gap: 125px;
  align-items: center;
  font-family: "League Spartan", sans-serif;

  .image-container {
    position: relative;
    width: 40%;
    transform: translateY(-60px);
  }

  .sectionOneRelative {
    position: relative;
    z-index: 1;
  }

  .sectionOneAbsolute {
    position: absolute;
    bottom: 25%;
    left: 0;
    z-index: 0;
    max-width: 100%;
  }

  .SectionOne-wrapper {
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
