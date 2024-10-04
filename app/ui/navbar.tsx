"use client";
import { useState, useEffect, useRef } from "react";
import { Box, Link } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import { RiLinkedinBoxFill, RiGithubFill, RiMailFill } from "react-icons/ri";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp, color } from "framer-motion";

interface LinkItemProps {
  sections: string[];
}

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const LinkItem = ({ sections }: LinkItemProps) => {
  const [currentSection, setCurrentSection] = useState(0);
  const texts = ["Fahim Gharsa", "À Propos", "Mes Experiences", "Mes Projets"];

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section, index) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 10 &&
            rect.bottom >= window.innerHeight / 10
          ) {
            setCurrentSection(index);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const targetSection =
    currentSection === 3
      ? sections[currentSection - 3]
      : sections[currentSection + 1];

  const buttonText = texts[currentSection];
  return (
    <ChakraBox
      initial={{ width: "auto" }}
      animate={{ width: `${buttonText.length * 10}px` }}
      style={{ display: "inline-block", whiteSpace: "nowrap" }}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 10,
        duration: 0.1,
      }}
      bg="whiteAlpha.200"
      css={{ backdropFilter: "blur(10px)" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="full"
      cursor="pointer"
    >
      <motion.div
        key={buttonText}
        initial={{ filter: "blur(4px)", opacity: "0" }}
        animate={{ filter: "blur(0px)", opacity: "1" }}
        transition={{ duration: 0.5 }}
        style={{ whiteSpace: "nowrap" }}
      >
        <ScrollLink
          className="hidden md:flex h-[35px] items-center justify-center gap-2 text-base rounded-md text-sm font-medium md:justify-center md:px-3"
          to={targetSection}
          offset={-40}
          spy={true}
          smooth={true}
          duration={500}
        >
          {buttonText}
        </ScrollLink>
      </motion.div>
    </ChakraBox>
  );
};

const NavBar = () => {
  const sections = ["home", "about", "experience", "project"];
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      position="fixed"
      top="5"
      zIndex="2"
      gap="2"
      px="5"
      width="100%"
    >
      <Box className="flex justify-center">
        <LinkItem sections={sections} />
      </Box>
      <Box
        className="flex content-center px-2 py-3 md:px-3 md:py-2"
        alignItems="center"
        borderRadius="full"
        bg="whiteAlpha.200"
        css={{ backdropFilter: "blur(10px)" }}
      >
        <Box className="flex flex-col md:flex-row items-center gap-5">
          <Link
            href="https://www.linkedin.com/in/fahim-gharsa/"
            target="_blank"
            variant="ghost"
            _hover={{ color: "orange.200" }}
            colorScheme="whiteAlpha"
          >
            <RiLinkedinBoxFill size={25} />
          </Link>
          <Link
            variant="ghost"
            colorScheme="whiteAlpha"
            href="https://github.com/fahimgha"
            target="_blank"
            _hover={{ color: "orange.200" }}
          >
            <RiGithubFill size={25} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
export default NavBar;
