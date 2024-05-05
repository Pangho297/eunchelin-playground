import { ReactNode, useEffect, useRef, useState } from "react";
import * as S from "./Drawer.style";
import MdiIcon from "../MdiIcon";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import useToggle from "@/hooks/useToggle";

type DrawerProps = {
  children: ReactNode;
  width?: number;
  height?: string | number;
  dir?: "top" | "left" | "bottom" | "right";
  defaultOpen?: boolean;
  onFold?: (fold: boolean) => void;
};

export default function Drawer({
  children,
  width = 410,
  height,
  dir = "left",
  defaultOpen = true,
  onFold,
}: DrawerProps) {
  const [open, toggle] = useToggle(defaultOpen);
  const bleedingWidth = useRef<number>(24);

  useEffect(() => onFold?.(!open), [open]);

  return (
    <S.DrawerBox {...{ height, open, dir }}>
      <S.DrawerWrapper>
        <S.CustomDrawer
          className="test"
          variant="permanent"
          open={open}
          swipeAreaWidth={bleedingWidth.current}
          onClose={() => toggle(false)}
          onOpen={() => toggle(open)}
          ModalProps={{
            keepMounted: true,
          }}
          width={width}
          dir={dir}
        >
          {open ? children : null}
        </S.CustomDrawer>
        <S.SwipeButton
          onClick={toggle}
          bleedingWidth={bleedingWidth.current}
          dir={dir}
        >
          <MdiIcon path={open ? mdiChevronLeft : mdiChevronRight} size={1} />
        </S.SwipeButton>
      </S.DrawerWrapper>
    </S.DrawerBox>
  );
}
