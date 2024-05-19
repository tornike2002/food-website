import Image from "next/image";
import styled from "styled-components";
import Line from "/public/assets/title-line.svg";
import ImgBackground from "/public/assets/image-background.svg";
import SectionImg from "/public/assets/home-side1.png";
export default function HomeOne() {
  return (
    <HomeSectionOne>
      <Image src={SectionImg} alt="Section one Img" width={540} height={720} />

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
  justify-content: space-around;
  gap: 125px;
  align-items: center;
  .SectionOne-wrapper {
    display: flex;
    flex-direction: column;
    gap: 27px;
    h1{
        
    }
  }
`;
