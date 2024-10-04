import { motion, useScroll } from "framer-motion";

import { Box, chakra, shouldForwardProp } from "@chakra-ui/react";
import { useRef } from "react";
// Typage de StyledDiv
const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

function Section({ children, delay = 0 }) {
  return (
    <StyledDiv
      margin={0}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      mb={6}
    >
      {children}
    </StyledDiv>
  );
}

export default Section;
