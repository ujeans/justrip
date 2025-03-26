import styled from "@emotion/styled";

const travelList = [
  {
    image: "/img/berlin.png",
    country: "베를린",
    desc: "--",
  },
  {
    image: "/img/singapore.png",
    country: "싱가폴",
    desc: "초고층 빌딩과 푸른 열대정원이 어우러져 미래와 전통이 교차하는 곳",
  },
  {
    image: "/img/london.png",
    country: "런던",
    desc: "화려한 사원과 쇼핑몰이 유명하고, 물가도 저렴한 편이에요.",
  },
];

export default function Carousel() {
  return (
    <Container>
      {travelList.map((item, index) => {
        const isCenter = index === 1; // 가운데 카드만 크게
        return (
          <Card key={index} isCenter={isCenter}>
            <Image src={item.image} alt={item.country} />
            {isCenter && (
              <Overlay>
                <CountryName>{item.country}</CountryName>
                <Desc>{item.desc}</Desc>
              </Overlay>
            )}
          </Card>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;

  /* 스크롤바 숨기기 (선택사항) */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.div`
  position: relative;
  width: ${props => (props.isCenter ? "200px" : "75px")};
  height: ${props => (props.isCenter ? "221px" : "221px")};
  margin-right: 16px;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 12px;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 30%,
    rgba(0, 0, 0, 0.6) 100%
  );
  color: white;
`;

const CountryName = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Desc = styled.div`
  font-size: 12px;
  line-height: 1.4;
`;
