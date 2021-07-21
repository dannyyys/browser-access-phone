import Link from "next/link";
import { Box, IconButton, Heading, VStack, Text } from "@chakra-ui/react";
import { AiFillCamera } from "react-icons/ai";
import { GrArticle } from "react-icons/gr";

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
      <VStack>
        <Heading>To Article</Heading>
        <Link href="/Article">
          <IconButton icon={<GrArticle />} />
        </Link>
      </VStack>
    </Box>
  );
};

export default Index;
