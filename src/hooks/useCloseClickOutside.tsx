import { modalCloseVar } from "@/stores/modalStore";
import { useReactiveVar } from "@apollo/client";
import { useEffect } from "react";

export function useCloseClickOutside(ref: any, callback: () => void) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, close]);
}
