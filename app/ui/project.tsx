"use client";
import { Box, Text, Link, Tag, Container } from "@chakra-ui/react";
import Image from "next/image";
import { RiGithubLine } from "react-icons/ri";
import { motion } from "framer-motion";
interface GridProjetsProps {
  title: string;
  children: string;
  stacks: string[];
  image: any;
  href: string;
}

export const GridProject = ({
  children,
  title,
  image,
  stacks,
  href,
}: GridProjetsProps) => {
  return (
    <Box
      as={motion.div}
      role="group"
      className=" flex row mb-4 px-6 py-5 rounded-lg"
      w="100%"
      _hover={{
        background: "blackAlpha.100",
      }}
      whileHover={{ scale: 1.02 }}
    >
      <Box
        className="flex flex-col content-between justify-between"
        _groupHover={{ border: "orange.200" }}
      >
        <Image
          className="rounded-lg border-solid border-2 border-opacity-25 border-white"
          src={image}
          width={300}
          alt="Picture of the RatingSoftware website"
        />
      </Box>
      <Container>
        <Box>
          <Box className="flex  text-center items-center justify-between mb-4 ">
            <Text _groupHover={{ color: "orange.200" }} fontSize={18}>
              {title}
            </Text>
            <Link
              className="p-1.5 rounded-full"
              bg="whiteAlpha.100"
              _hover={{ color: "orange.200", bg: "red.500" }}
              href={href}
              target="_blank"
            >
              <RiGithubLine size={20} />
            </Link>
          </Box>
          <Text fontSize={14} mb={4}>
            {children}
          </Text>
        </Box>
        <Box className="flex text-xs mb-4 items-center justify-start gap-2">
          {Array.isArray(stacks) &&
            stacks.map((s: string, index: number) => (
              <Tag
                key={index}
                variant="subtle"
                color="orange.200"
                bgColor="rgba(255, 165, 0, 0.1)"
                borderRadius="full"
              >
                {s}
              </Tag>
            ))}
        </Box>
      </Container>
    </Box>
  );
};
