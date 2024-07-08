import React from "react";
import "./PetItemspage.css";
import PetHeader from "../Header/PetHeader";
import PetItems from "../PetItems/Items";
import Footer from '../Footer/Footer';

const mockup = [
  {
    id: 1,
    title: "펀딩중",
    imgURL: "https://cdn3.wadiz.kr/studio/images/2024/06/13/92daa32e-e953-4f56-ab36-4ce4191d1b5e.jpeg/wadiz/resize/800/format/jpg/quality/85/",
    name: "[반려견 눈물자국 개선 프로젝트] 저알러지 사료+덴탈껌+트릿 세트!",
    funding: "20/30 명",
    FundingPeriod: "7월2일~7월13일",
  },
  {
    id: 2,
    title: "펀딩중",
    imgURL: "https://cdn3.wadiz.kr/studio/images/2024/06/04/16f78a9e-930b-4bab-b4fa-1ea6466358b1.jpeg/wadiz/resize/800/format/jpg/quality/85/",
    name: "딸깍. 켜놓고 출근 하면 끝 | 이제 고양이들의 사냥파티 시작",
    funding: "20/30 명",
    FundingPeriod: "7월10일~7월20일",
  },
  {
    id: 3,
    title: "펀딩중",
    imgURL:
      "https://cdn3.wadiz.kr/studio/images/2024/06/06/1790acdb-7c53-4133-80f0-84d1fbea6fe7.jpeg/wadiz/resize/800/format/jpg/quality/85/MockupImg/Mlik.jpga",
    name: "[5차 신규입고 예약할인] 펫츠온 호주 프리미엄 펫밀크 독앤퍼피/캣앤키튼",
    funding: "10/30 명",
    FundingPeriod: "7월2일~7월13일",
  },
];
const PetItemspage = () => {
  return (
    <div>
      <PetHeader />
      <PetItems images={mockup} />
      <Footer/>
    </div>
  );
};

export default PetItemspage;
