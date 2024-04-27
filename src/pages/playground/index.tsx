import { Stack } from "@mui/material";
import Collapse from "@/components/Collapse";
import PlaygroundButton from "./PlaygroundButton";
import PlaygroundInput from "./PlaygroundInput";
import PlaygroundSelect from "./PlaygroundSelect";
import PlaygroundCheck from "./PlaygroundCheck";
import PlaygroundToast from "./PlaygroundToast";
import { ReactNode } from "react";
import PlaygroundModal from "./PlaygroundModal";

const playList: { title: string; children: ReactNode }[] = [
  {
    title: "Button",
    children: <PlaygroundButton />,
  },
  {
    title: "Input",
    children: <PlaygroundInput />,
  },
  {
    title: "Select",
    children: <PlaygroundSelect />,
  },
  {
    title: "Checkbox & Radio",
    children: <PlaygroundCheck />,
  },
  {
    title: "Toast",
    children: <PlaygroundToast />,
  },
  {
    title: "Modal",
    children: <PlaygroundModal />,
  },
];

export default function Playground() {
  return (
    <Stack alignItems="center">
      <Stack sx={{ p: 3, maxWidth: "1200px", width: "100%" }}>
        {playList.map((item, i) => (
          <Collapse key={i} title={item.title}>
            {item.children}
          </Collapse>
        ))}
      </Stack>
    </Stack>
  );
}
