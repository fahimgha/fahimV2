"use client";
import { Box, Text, Flex, Tag, Container } from "@chakra-ui/react";
import { RiCircleFill } from "react-icons/ri";
import { motion } from "framer-motion";

interface GridExperiencesProps {
  title: string;
  date: string;
  company: string;
  stacks: string[];
  missions: string[];
}
export const GridExperience = ({
  title,
  date,
  stacks,
  company,
  missions,
}: GridExperiencesProps) => {
  return (
    <Box
      as={motion.div}
      role="group"
      className="flex row items-start mb-4 px-6 py-5 rounded-lg"
      w="100%"
      _hover={{
        background: "blackAlpha.100",
      }}
      whileHover={{ scale: 1.02 }}
    >
      <Box className="py-1 w-24	">
        <Text className="text-xs">{date}</Text>
      </Box>
      <Container>
        <Box>
          <Box className="flex  text-center items-center justify-between mb-2 ">
            <Text _groupHover={{ color: "orange.200" }} fontSize={18}>
              {title}
            </Text>
          </Box>
          <Text fontSize={16} mb={2}>
            {company}
          </Text>
          <Box fontSize={14} mb={4}>
            {missions.map((mission, index) => (
              <Box key={index}>
                <Flex align="baseline">
                  <RiCircleFill size={10} color="#CA003D" />
                  <Text ml={2}>{mission}</Text>
                </Flex>
              </Box>
            ))}
          </Box>
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
