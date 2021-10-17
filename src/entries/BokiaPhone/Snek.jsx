import React from "react"

import useGame from "./hooks/useGame"
import { WIDTH } from "./constant"
import styled from "styled-components"
import Screen from "./Screen"
import { useHistory } from "react-router"

const CustomScreen = styled(Screen)`
  display: flex;
  align-items: center;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${WIDTH}, 1fr);
  width: fit-content;
  border: 2px solid #0f380f;
  margin: auto;
`

const GridCell = styled.div`
  width: 10px;
  height: 10px;
  /* border: 1px solid #0f380f0f; */
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ type }) =>
    type === "head" ? "#0f380f" : type === "body" ? "#0f380fcc" : ""};
`

const Food = styled.div`
  height: 60%;
  width: 60%;
  transform: rotate(45deg);
  background: #0f380f;
`

const Score = styled.h1`
  position: absolute;
  display: ${({ show }) => (show ? "inherit" : "none")};
  left: 42%;
`

const Snek = () => {
  const game = useGame()
  const history = useHistory()

  return (
    <CustomScreen
      onKeyDown={(e) => {
        console.log("x")
        game.setDirection((dir) => {
          switch (e.key) {
            case "ArrowLeft":
              return dir === "R" ? dir : "L"
            case "ArrowUp":
              return dir === "D" ? dir : "U"
            case "ArrowRight":
              return dir === "L" ? dir : "R"
            case "ArrowDown":
              return dir === "U" ? dir : "D"
            default:
              return dir
          }
        })
      }}
      tabIndex={0}
      actbar={game.isPlaying ? "Reset" : "Start"}
      onActionClick={() => {
        if (!game.isPlaying) {
          game.resetGame()
          game.setPlaying(true)
        } else {
          game.resetGame()
        }
      }}
      onCancelClick={() => {
        history.push("/BokiaPhone/games")
      }}
    >
      <Score show={game.isBitten}>{game.score}</Score>
      <Grid>
        {game.grid.map((row) =>
          row.map(({ position, type }) => (
            <GridCell type={type} key={JSON.stringify(position)}>
              {type === "food" && <Food />}
            </GridCell>
          ))
        )}
      </Grid>
    </CustomScreen>
  )
}

export default Snek
