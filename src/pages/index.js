import Link from "next/link";
import { Box, IconButton, Heading, VStack } from "@chakra-ui/react";
import { AiFillCamera } from "react-icons/ai";

import Camera from "../components/Camera";
import Voice from "../components/Voice";

const Index = () => {
  return (
    <Box align="center">
      <Camera />
      <Voice />
      <VStack>
        <Heading>Camera 2</Heading>
        <Link href="/Camera2">
          <IconButton icon={<AiFillCamera />} />
        </Link>
      </VStack>
    </Box>
  );
};

export default Index;
