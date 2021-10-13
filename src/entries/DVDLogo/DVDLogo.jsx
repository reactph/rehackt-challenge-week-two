import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"

import BaseEntry from "../../components/BaseEntry/BaseEntry"

const Canvas = styled.canvas`
  background-color: #e5e7eb;
`

function useInterval(callback, delay) {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

const DVDLogo = () => {
  const canvasRef = useRef(null)
  const [context, setContext] = useState(null)

  const [xPos, setXPos] = useState(0)
  const [xDir, setXDir] = useState(1)
  const [yPos, setYPos] = useState(0)
  const [yDir, setYDir] = useState(1)

  useEffect(() => {
    if (canvasRef.current) {
      const renderCtx = canvasRef.current.getContext("2d")

      if (renderCtx) {
        setContext(renderCtx)
      }
    }
  }, [context])

  const draw = () => {
    setXPos(xPos + xDir)
    setYPos(yPos + yDir)
    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    context.fillStyle = "#ffffff"
    context.beginPath()
    const img = new Image()
    img.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/DVD_logo.svg/320px-DVD_logo.svg.png"
    const dWidth = img.width / 2
    const dHeight = img.height / 2
    context.drawImage(img, xPos, yPos, dWidth, dHeight)
    context.fill()

    if (xPos < 0) {
      setXDir(1)
    }
    if (xPos + dWidth > context.canvas.width) {
      setXDir(-1)
    }
    if (yPos < 0) {
      setYDir(1)
    }
    if (yPos + dHeight > context.canvas.height) {
      setYDir(-1)
    }
  }

  useInterval(draw, 10)

  return (
    <BaseEntry>
      <Canvas ref={canvasRef} width="800" height="600" />
    </BaseEntry>
  )
}

export default DVDLogo
