import { useState, useRef } from "react";
import { VStack, IconButton, Input, HStack, Heading } from "@chakra-ui/react";

import { AiFillCamera } from "react-icons/ai";
import { CloseIcon } from "@chakra-ui/icons";

export default function camera() {
  const [source, setSource] = useState([]);
  const imageInputRef = useRef(null);

  const triggerImageInput = () => imageInputRef.current.click();

  const doSomethingWithFiles = (fileList) => {
    let file = null;

    for (let i = 0; i < fileList.length; i++) {
      if (fileList[i].type.match(/^image\//)) {
        file = fileList[i];
        let newUrl = URL.createObjectURL(file);
        setSource((prev) => [...prev, newUrl]);
      }
    }
  };

  const handleCapture = (target) => {
    const fileList = target.files;
    doSomethingWithFiles(fileList);
  };

  const handleRemove = (id) => {
    const newList = source.filter((item) => source.indexOf(item) !== id);

    setSource(newList);
  };

  return (
    <VStack>
      <Heading>Capture image</Heading>
      <VStack>
        {source.map((photo, i) => {
          return (
            <HStack>
              <img key={i} alt="imgCamera" src={photo} />
              <IconButton
                icon={<CloseIcon />}
                onClick={() => handleRemove(i)}
              />
            </HStack>
          );
        })}
      </VStack>

      <Input
        accept="image/*"
        type="file"
        onChange={(e) => handleCapture(e.target)}
        ref={imageInputRef}
        display="none"
        multiple
      />

      <IconButton icon={<AiFillCamera />} onClick={triggerImageInput} />
    </VStack>
  );
}
