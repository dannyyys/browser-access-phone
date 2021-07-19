import React, { useState, useRef, useEffect } from "react";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

function renderPictures(uriPictures) {
  return uriPictures.map((e, i) => {
    return (
      <div key={i} className="demo-image-preview">
        <img alt="preview" key={i} src={e} />
      </div>
    );
  });
}

export default function PictureComponent(props) {
  const [dataUri, setDataUri] = useState(null);
  const [uriPictures, setUriPictures] = useState([]);

  function handleTakePhoto(uriPicture) {
    setDataUri(uriPicture);
  }

  useEffect(() => {
    if (dataUri) {
      setUriPictures([...uriPictures, dataUri]);
    }
  }, [dataUri]);

  function handleCameraError(error) {
    console.log("handleCameraError", error);
  }

  const refCamera = useRef(
    <Camera
      onTakePhoto={handleTakePhoto}
      onCameraError={handleCameraError}
      idealFacingMode={FACING_MODES.ENVIRONMENT}
      idealResolution={{ width: 640, height: 480 }}
      imageType={IMAGE_TYPES.JPG}
      imageCompression={0.97}
      isMaxResolution={true}
      isImageMirror={false}
      isSilentMode={false}
      isDisplayStartCameraError={true}
      isFullscreen={false}
      sizeFactor={1}
    />
  );

  return (
    <React.Fragment>
      {refCamera.current}
      {renderPictures(uriPictures)}
    </React.Fragment>
  );
}
