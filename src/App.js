import styled from "@emotion/styled";
import Carousel from "./Carousel";
import { useState } from "react";

const travelList = [
  {
    image: "/img/oaska.svg",
    country: "오사카",
    desc: "일본에서 세 번째로 큰 도시로 맛있는 음식과 활기찬 분위기가 특징이에요.",
  },
  {
    image: "/img/tokyo.svg",
    country: "도쿄",
    desc: "도쿄는 일본의 수도이자 독특한 매력으로 전 세계에서 사랑받는 대도시입니다",
  },
  {
    image: "/img/bangkok.svg",
    country: "방콕",
    desc: "화려한 사원과 쇼핑몰이 유명하고, 물가도 저렴한 편이에요.",
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState(""); // ← 상태 생성
  const [recentSearch, setRecentSearch] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);

  return (
    <Layout>
      <Container>
        <Header>
          <Logo src="img/logo.svg" alt="로고" />
          <UtilsBox>
            {/* <IconWithMargin src="/img/alarm.svg" alt="알람" /> */}
            <Icon src="/img/mypage.svg" alt="마이페이지" />
          </UtilsBox>
        </Header>
        <Body>
          <Wrapper1>
            <Title>지금 가기 좋아요</Title>
            <ImageBox>
              {travelList.map((item, index) => (
                <Box key={index}>
                  {/* <ImageWrapper>
                    <Image src={item.image} />
                    <CountryName>{item.country}</CountryName>
                  </ImageWrapper> */}

                  <ImageWrapper>
                    <Image src={item.image} />
                    <ImageOverlay />
                    <CountryName>{item.country}</CountryName>
                  </ImageWrapper>
                  <Desc>{item.desc}</Desc>
                </Box>
              ))}
            </ImageBox>
          </Wrapper1>
          <SearchWrapper>
            <Search
              placeholder="국가, 지역, 장소 검색"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              onKeyUp={e => {
                if (e.key === "Enter" && searchTerm.trim()) {
                  setRecentSearches(prev => [...prev, searchTerm.trim()]);
                  setSearchTerm(""); // 입력창 비우기
                }
              }}
            />
            {/* <SearchIcon src="/img/search.svg" alt="" /> */}
          </SearchWrapper>

          {recentSearches.length > 0 && (
            <RecentSearchWrapper>
              {recentSearches.map((item, index) => (
                <SearchItembox key={index}>
                  <TimeIcon src="/img/time.svg" alt="최근 검색어" />
                  <Term>{item}</Term>
                </SearchItembox>
              ))}
            </RecentSearchWrapper>
          )}
          <LocationWrapper>
            <LocationIconBox>
              <LocationIcon src="/img/location.svg" alt="" />
            </LocationIconBox>
            <TextBox>
              <Text1>근처의 다른 곳을 찾고 있나요?</Text1>
              <Text2>현재 위치 기준으로 검색하기</Text2>
            </TextBox>
            <img src="/img/arrow.svg" alt="" />
          </LocationWrapper>
          <Wrapper3>
            <Title>요즘 뜨고 있는 곳</Title>
            <Carousel />
          </Wrapper3>
        </Body>
      </Container>
    </Layout>
  );
}

export default App;

const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 380px;
  height: 100vh;
  padding: 20px;
  border: 1px solid #f3f3f3;
  /* background-color: aliceblue; */
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Logo = styled.img``;

const UtilsBox = styled.div`
  display: flex;
`;

const Icon = styled.img``;

const IconWithMargin = styled(Icon)`
  margin-right: 15px;
`;

const Body = styled.div``;

const Wrapper1 = styled.div`
  margin-bottom: 21px;
`;

const Title = styled.div`
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 800;
`;

const ImageBox = styled.div`
  display: flex;
  overflow-x: auto;

  /* 스크롤바 숨기기 (선택사항) */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Box = styled.div`
  margin-right: 10px;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 200px;
  height: 120px;
  margin-bottom: 8px;
  border-radius: 16px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120px;
  border-radius: 16px;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.36) 84.5%,
    #000000 100%
  );

  backdrop-filter: blur(0.5px);
  z-index: 1;
`;

const CountryName = styled.div`
  position: absolute;
  bottom: 20px;
  left: 12px;
  font-size: 20px;
  font-weight: 700;
  color: white;
  z-index: 100;
`;

const Desc = styled.div`
  font-size: 12px;
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Search = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 48px 0 20px;
  margin-bottom: 16px;
  border: none;
  border: 1px solid #01adb9;
  border-radius: 100px;
  box-sizing: border-box;

  &::placeholder {
    color: #01adb9;
  }
`;

// 추후에
// const SearchIcon = styled.img`
//   position: absolute;
//   right: 16px;
//   top: 50%;
//   transform: translateY(-50%);
//   width: 20px;
//   height: 20px;
// `;

const RecentSearchWrapper = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const SearchItembox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 83px;
  height: 25px;
  margin-right: 16px;
  border-radius: 100px;
  background-color: #f0f0f0;
`;

const TimeIcon = styled.img`
  margin-right: 8px;
`;

const Term = styled.div`
  font-size: 14px;
  color: #01adb9;
`;

const LocationWrapper = styled.div`
  width: 282px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  margin: 0 auto;
  margin-bottom: 16px;
  border-radius: 24px;
  background-color: #cceff1;
`;

const LocationIconBox = styled.div`
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: white;
`;

const LocationIcon = styled.img``;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text1 = styled.div`
  font-size: 12px;
  margin-bottom: 6px;
`;

const Text2 = styled.div`
  font-size: 14px;
  font-weight: 700;
`;

const Wrapper3 = styled.div``;
