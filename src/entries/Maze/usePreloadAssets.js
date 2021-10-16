import { useEffect, useState } from "react"

const usePreloadImage = ({ link }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    try {
      const image = new Image()
      image.src = link
      image.onload = () => {
        setImageLoaded(true)
      }
    } catch (error) {
      console.log(error)
      setImageError(true)
    }
  }, [])

  return {
    loaded: imageLoaded,
    hasError: imageError,
  }
}

export default usePreloadImage
