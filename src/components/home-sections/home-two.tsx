import styled from "styled-components";
import Image from "next/image";
import divider from "/public/assets/title-line.svg";
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
    </HomeSectionTwo>
  );
}
const HomeSectionTwo = styled.section`
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
