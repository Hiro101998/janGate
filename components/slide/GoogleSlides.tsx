import { useEffect } from "react";
import ReactGoogleSlides from "react-google-slides";

const GoogleSlides = () => {
  return (
    <ReactGoogleSlides
      width={1000}
      height={500}
      slidesLink="https://docs.google.com/presentation/d/15wHD1yMrdnPKFCJPPRydWvL3VR9bGypO7rT4apHEyGM/edit#slide=id.p"
      slideDuration={5}
      position={1}
      showControls
      loop
    />
  );
};
export default GoogleSlides;
