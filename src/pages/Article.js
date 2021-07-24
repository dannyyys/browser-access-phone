import { Box, Button } from "@chakra-ui/react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import ComponentToPrint from "../components/ComponentToPrint";

const Article = () => {
  const componentRef = useRef(null);

  const reactToPrintContent = () => componentRef.current;

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
  });
  return (
    <Box align="center">
      <ComponentToPrint ref={componentRef} />

      <Button mb="5" colorScheme="green" onClick={handlePrint}>
        Print this out!
      </Button>
    </Box>
  );
};

export default Article;
