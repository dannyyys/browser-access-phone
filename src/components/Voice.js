import { useState, useRef } from "react";
import { VStack, IconButton, Input, HStack, Heading } from "@chakra-ui/react";

import { MdKeyboardVoice } from "react-icons/md";
import { CloseIcon } from "@chakra-ui/icons";

export default function camera() {
  const [source, setSource] = useState([]);
  const recordingInputRef = useRef(null);

  const triggerRecordingInput = () => recordingInputRef.current.click();

  const handleCapture = (target) => {
    const file = target.files[0];
    const newUrl = URL.createObjectURL(file);
    setSource((prev) => [...prev, newUrl]);
  };

  const handleRemove = (id) => {
    const newList = source.filter((item) => source.indexOf(item) !== id);

    setSource(newList);
  };

  return (
    <VStack>
      <Heading>Record conversation</Heading>
      <VStack>
        {source.map((recording, i) => {
          return (
            <HStack>
              <audio key={i} alt="imgCamera" src={recording} controls />
              <IconButton
                icon={<CloseIcon />}
                onClick={() => handleRemove(i)}
              />
            </HStack>
          );
        })}
      </VStack>

      <Input
        accept="audio/*"
        type="file"
        capture="environment"
        onChange={(e) => handleCapture(e.target)}
        ref={recordingInputRef}
        display="none"
      />

      <IconButton icon={<MdKeyboardVoice />} onClick={triggerRecordingInput} />
    </VStack>
  );
}
