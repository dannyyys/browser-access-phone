import { Box } from "@chakra-ui/react";
import Camera from "../components/Camera";
import Voice from "../components/Voice";

export default function Home() {
  return (
    <Box>
      <Camera />
      <Voice />
    </Box>
  );
}
