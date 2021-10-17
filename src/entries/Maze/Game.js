import React, { useEffect, useRef } from "react"

import pointInPolygon from "point-in-polygon"
import PropTypes from "prop-types"
import styles from "./Maze.module.css"

const mazePolygon = [
  [0, 450],
  [200, 450],
  [200, 300],
  [500, 300],
  [500, 200],
  [100, 200],
  [100, 100],
  [300, 100],
  [300, 50],
  [350, 50],
  [350, 25],
  [370, 25],
  [370, 0],
  [385, 0],
  [385, 40],
  [370, 40],
  [370, 80],
  [330, 80],
  [330, 130],
  [140, 130],
  [140, 170],
  [650, 170],
  [650, 400],
  [300, 400],
  [300, 550],
  [0, 550],
  [0, 450],
]

const winAreaPolygon = [
  [370, 0],
  [370, 15],
  [385, 15],
  [385, 0],
  [370, 0],
]

const drawMaze = (ctx) => {
  ctx.fillStyle = "#01FFFF"

  ctx.moveTo(mazePolygon[0][0], mazePolygon[0][1])
  mazePolygon.slice(1).forEach((p) => {
    ctx.lineTo(p[0], p[1])
  })
  ctx.fill()

  ctx.fillStyle = "#FF0000"
  ctx.fillRect(370, 0, 15, 10)
}

const drawCharacter = (ctx, x, y) => {
  ctx.fillStyle = "#FF0000"
  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(x + 10, y)
  ctx.lineTo(x + 10, y + 10)
  ctx.lineTo(x, y + 10)
  ctx.lineTo(x, y)
  ctx.fill()
  ctx.closePath()
}

const checkIfInside = (x, y) => {
  return pointInPolygon([x, y], mazePolygon)
}

const checkIfWin = (x, y) => {
  return pointInPolygon([x, y], winAreaPolygon)
}

const Game = ({ winTheGame }) => {
  const canvasRef = useRef()
  const contextRef = useRef()
  const dragRef = useRef(false)
  const lastPointRef = useRef(null)

  useEffect(() => {
    contextRef.current = canvasRef.current.getContext("2d")
    const ctx = contextRef.current

    const offset = canvasRef.current.getBoundingClientRect()
    const offsetX = offset.left
    const offsetY = offset.top

    const handleMouseDown = (e) => {
      dragRef.current = true
      lastPointRef.current = {
        x: parseInt(e.clientX - offsetX),
        y: parseInt(e.clientY - offsetY),
      }
    }

    const handleMouseUp = () => {
      dragRef.current = false
    }

    const handleMouseMove = (e) => {
      if (!dragRef.current) {
        return null
      }

      const mouseX = parseInt(e.clientX - offsetX)
      const mouseY = parseInt(e.clientY - offsetY)

      const redraw = (x, y) => {
        if (contextRef.current && canvasRef.current) {
          contextRef.current.clearRect(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          )
          drawMaze(contextRef.current)
          drawCharacter(contextRef.current, x, y)
        }
      }

      if (checkIfWin(mouseX, mouseY)) {
        winTheGame()
      }

      if (ctx.isPointInPath(lastPointRef.current.x, lastPointRef.current.y)) {
        if (checkIfInside(mouseX, mouseY)) {
          redraw(mouseX - 5, mouseY - 5)
        } else {
          redraw(20, 500)
          dragRef.current = false
          redraw(20, 500)
        }
      }

      lastPointRef.current = {
        x: mouseX,
        y: mouseY,
      }
    }

    canvasRef.current.addEventListener("mousedown", handleMouseDown)
    canvasRef.current.addEventListener("mouseup", handleMouseUp)
    canvasRef.current.addEventListener("mousemove", handleMouseMove)

    drawMaze(contextRef.current)
    drawCharacter(contextRef.current, 20, 500)
  }, [])

  return (
    <canvas
      className={styles.gameCanvas}
      width={800}
      height={600}
      ref={canvasRef}
    ></canvas>
  )
}

Game.propTypes = {
  winTheGame: PropTypes.func.isRequired,
}

export default Game
