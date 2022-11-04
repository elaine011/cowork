import { useState, useEffect } from "react";

function useVideoPlayer(videoElement: any) {
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    progress: 0,
    speed: 1,
    isMuted: false,
  });
  const playVideo = () => {
    setPlayerState({
      ...playerState,
      isPlaying: true,
    });
  };
  useEffect(() => {
    if (videoElement.current) {
      playerState.isPlaying
        ? videoElement.current.play()
        : videoElement.current.pause();
    }
  }, [playerState.isPlaying, videoElement]);
  const toggleMute = () => {
    setPlayerState({
      ...playerState,
      isMuted: !playerState.isMuted,
    });
  };
  useEffect(() => {
    if (videoElement.current) {
      playerState.isMuted
        ? (videoElement.current.muted = true)
        : (videoElement.current.muted = false);
    }
  }, [playerState.isMuted, videoElement]);
  return {
    playerState,
    playVideo,
    toggleMute,
  };
}

export default useVideoPlayer;
