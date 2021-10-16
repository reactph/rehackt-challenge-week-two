import React, { useState } from "react"
import { useEffect } from "react/cjs/react.development"

import BaseEntry from "../../components/BaseEntry/BaseEntry"
import Game from "./Game"
import Loading from "./Loading"

import useAudio from "./useAudio"
import usePreloadImage from "./usePreloadAssets"
import Winner from "./Winner"

const imageAsset = "https://i.ibb.co/wQyZSBs/Do-Jh-S7-WVAAEhsm-G.jpg"

const Maze = () => {
  const [scare, setScare] = useState(false)
  const playScare = useAudio({ mp3Url: "/scare.mp3" })
  const imageStatus = usePreloadImage({ link: imageAsset })

  const winTheGame = () => {
    setScare(true)
    playScare()
  }

  useEffect(() => {
    if (!scare) {
      const scareTimer = setTimeout(winTheGame, 10000)
      return () => {
        clearTimeout(scareTimer)
      }
    }
  }, [scare])

  useEffect(() => {
    if (scare) {
      const scareTimer = setTimeout(() => setScare(false), 5000)
      return () => {
        clearTimeout(scareTimer)
      }
    }
  }, [scare])

  return (
    <BaseEntry>
      {imageStatus.loaded ? (
        <>{scare ? <Winner /> : <Game winTheGame={winTheGame} />}</>
      ) : (
        <Loading hasError={imageStatus.hasError} />
      )}
    </BaseEntry>
  )
}

export default Maze
