const useAudio = ({ mp3Url }) => {
  const audio = new Audio(mp3Url)

  const playSound = () => {
    audio.play()
  }

  return playSound
}

export default useAudio
