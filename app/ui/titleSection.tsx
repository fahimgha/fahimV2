import { Box, Heading } from "@chakra-ui/react";
import { outfit } from "@/app/ui/font";
import clsx from "clsx";

interface TitleSectionProps {
  num: number;
  children: string;
}
export default function TitleSection({ num, children }: TitleSectionProps) {
  const totalCircles = 3;
  return (
    <Box className="my-6">
      <div className=" flex items-center">
        <div className="flex space-x-2">
          {Array.from({ length: totalCircles }).map((_, index) => (
            <div
              key={index}
              className={clsx(
                "w-3.5 h-3.5 rounded-full ",
                index < num ? "bg-primary-red " : "border-2 border-primary-red"
              )}
            ></div>
          ))}
        </div>

        <div className="ml-3.5 w-full border-t border-t-2  border-primary-red "></div>
      </div>
      <Heading
        className={`${outfit.className} my-2`}
        color="orange.200"
        fontSize="xl"
        variant="section-title"
      >
        {children}
      </Heading>
    </Box>
  );
}
