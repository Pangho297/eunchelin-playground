import { useEffect, useState } from "react";

export default function useGetCurrentLocation() {
  const [myLocation, setMyLocation] = useState<
    { latitude: number; longitude: number } | string
  >("");

  // 현재 위치 받아오기
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }

    // 위치 조회 성공 시
    function success(position: any) {
      setMyLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }

    // 위치 조회 실패 시
    function error() {
      setMyLocation({
        latitude: 37.5394725,
        longitude: 126.7385336,
      });
    }
  }, []);

  return myLocation;
}
