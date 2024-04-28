import { Button, Stack } from "@mui/material";
import { useDaumPostcodePopup, Address } from "react-daum-postcode";
import * as S from "../playground.style";
import { useState } from "react";
import Input from "@/components/Input";

/** 다음 카카오에서 제공하는 우편번호 검색 서비스
 *
 * 검색 후 조회되는 결과에 대한 스키마는 해당 페이지 참고
 *
 * @link [카카오 우편번호 서비스](https://postcode.map.daum.net/guide#attributes)
 */
export default function PlaygroundPostcode() {
  const [fullAddress, setFullAddress] = useState("");
  const [address, setAddress] = useState<Address>();
  const [addressDetail, setAddressDetail] = useState("");
  const open = useDaumPostcodePopup();

  /** 카카오 postcode 검색 후 주소 선택 시 실행 함수 */
  const handleComplete = (data: Address) => {
    console.log(data);

    if (data.addressType === "R") {
      let _fullAddress = data.address;
      let extraAddress: string = "";

      if (data.bname !== "") {
        extraAddress += data.bname;
      }

      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }

      _fullAddress +=
        extraAddress !== "" ? ` (${extraAddress}), ${data.zonecode}` : "";

      setFullAddress(_fullAddress);
    }

    setAddress(data);
  };

  const handleClick = () => {
    open({
      onComplete: handleComplete,
      width: 500, // 팝업창 가로 너비
      height: 500, // 팝업창 세로 높이
      top: window.innerHeight / 2 - 250, // 팝업창 y좌표 (페이지 영역 절반 - 팝업창 절반)
      left: window.innerWidth / 2 - 250, // 팝업창 x좌표 (페이지 영역 절반 - 팝업창 절반)
      popupTitle: "은슐랭 주소검색", // 팝업 title
      popupKey: "eunchelin-address-popup", // 키가 없는 경우 매 클릭 시 팝업 생성
    });
  };

  const handleReset = () => {
    setAddress(undefined);
    setFullAddress("");
    setAddressDetail("");
  };

  return (
    <S.CollapseContainer>
      <Stack gap={2}>
        <Stack direction="row" gap={2}>
          <Button fullWidth onClick={handleClick}>
            주소 검색
          </Button>
          <Button fullWidth onClick={handleReset} color="error">
            초기화
          </Button>
        </Stack>
        <Stack>
          <Input value={fullAddress} placeholder="전체 주소" />
        </Stack>
        <Stack direction="row" gap={2} sx={{ gridColumn: "1 / 4" }}>
          <Input
            value={
              address !== undefined
                ? address?.roadAddress
                  ? address.roadAddress
                  : address.autoRoadAddress
                : ""
            }
            placeholder="도로명 주소"
          />
          <Input
            value={
              address !== undefined
                ? address?.jibunAddress
                  ? address.jibunAddress
                  : address.autoJibunAddress
                : ""
            }
            placeholder="지번 주소"
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <Input
            value={address !== undefined ? address?.sido : ""}
            placeholder="시 / 도"
          />
          <Input
            value={address !== undefined ? address?.sigungu : ""}
            placeholder="시 / 군 / 구"
          />
          <Input
            value={address !== undefined ? address?.bname : ""}
            placeholder="읍 / 면 / 동"
          />
          <Input
            value={address !== undefined ? address?.buildingName : ""}
            placeholder="건물명"
          />
          <Input
            value={address !== undefined ? address?.zonecode : ""}
            placeholder="우편번호"
          />
        </Stack>
        <Input
          value={addressDetail}
          onChange={(e) => setAddressDetail(e.target.value)}
          placeholder="상세주소 입력"
        />
      </Stack>
    </S.CollapseContainer>
  );
}
