import React from "react";
import { VStack, IconButton, Input } from "@chakra-ui/react";

import { MdKeyboardVoice } from "react-icons/md";
import { useState } from "react";

export default function camera() {
  const recordingInputRef = React.useRef(null);
  const [source, setSource] = useState([]);

  const triggerRecordingInput = () => recordingInputRef.current.click();

  const handleCapture = (target) => {
    const file = target.files[0];
    const newUrl = URL.createObjectURL(file);
    setSource((prev) => [...prev, newUrl]);
  };
  return (
    <VStack>
      <h5>Record conversation</h5>
      {source && (
        <VStack>
          {source.map((recording, i) => {
            return <audio key={i} alt="imgCamera" src={recording} controls />;
          })}
        </VStack>
      )}

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
