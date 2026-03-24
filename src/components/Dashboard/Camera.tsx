import { useEffect, useRef } from "react";

const Camera = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream: MediaStream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing webcam:", error);
      }
    };

    startCamera();
  }, []);
  return (
    <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  z-[99999] w-[500px] h-1/2  p-5">
      <video ref={videoRef} autoPlay />
    </div>
  );
};

export default Camera;
