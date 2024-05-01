import { Stack } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";

export default function DefaultLayout() {
  const { pathname } = useLocation();
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "linear",
    curation: 0.5,
  };

  return (
    <Stack sx={{ height: "100dvh" }}>
      <Header>
        <motion.div
          key={pathname}
          initial="initial"
          animate="in"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Stack>
            <Outlet />
          </Stack>
        </motion.div>
      </Header>
    </Stack>
  );
}
