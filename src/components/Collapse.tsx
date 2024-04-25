import {
  IconButton,
  Stack,
  Typography,
  Collapse as MUICollapse,
  ButtonBase,
} from "@mui/material";
import MdiIcon from "./MdiIcon";
import { ReactNode, useState } from "react";
import { mdiChevronDown } from "@mdi/js";

type Props = {
  title: string;
  children: ReactNode;
};

export default function Collapse({ title, children }: Props) {
  const [open, setOpen] = useState(true);
  return (
    <Stack>
      <Stack direction="row" alignItems="center" gap={3} sx={{ p: 1.5 }}>
        <Typography variant="h2">{title}</Typography>
        <ButtonBase
          onClick={() => setOpen((prev) => !prev)}
          sx={{ p: 0.5, borderRadius: "100%" }}
        >
          <Stack
            sx={{
              transform: open ? "rotate(-90deg)" : undefined,
              transition: "transform 300ms ease",
            }}
          >
            <MdiIcon path={mdiChevronDown} size={1.2} />
          </Stack>
        </ButtonBase>
      </Stack>
      <MUICollapse in={open} timeout="auto" unmountOnExit>
        {children}
      </MUICollapse>
    </Stack>
  );
}
