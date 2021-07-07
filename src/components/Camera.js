import React from "react";
import { VStack, IconButton, Input } from "@chakra-ui/react";

import { AiFillCamera } from "react-icons/ai";
import { useState } from "react";

export default function camera() {
  const imageInputRef = React.useRef(null);
  const [source, setSource] = useState([]);

  const triggerImageInput = () => imageInputRef.current.click();

  const handleCapture = (target) => {
    const file = target.files[0];
    const newUrl = URL.createObjectURL(file);
    setSource((prev) => [...prev, newUrl]);
  };
  return (
    <VStack>
      <h5>Capture image</h5>
      {source && (
        <VStack>
          {source.map((photo, i) => {
            return <img key={i} alt="imgCamera" src={photo} />;
          })}
        </VStack>
      )}

      <Input
        accept="image/*"
        type="file"
        capture="environment"
        onChange={(e) => handleCapture(e.target)}
        ref={imageInputRef}
        display="none"
      />

      <IconButton icon={<AiFillCamera />} onClick={triggerImageInput} />
    </VStack>
  );
}
