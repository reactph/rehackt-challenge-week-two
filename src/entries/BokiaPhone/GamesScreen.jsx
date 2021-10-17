import React, { useMemo, useState } from "react"
import Screen from "./Screen"
import { useHistory } from "react-router"
import List from "./components/List"
import { games } from "./constant"

const GamesScreen = () => {
  const history = useHistory()
  const [item, setItem] = useState(0)
  const currItem = useMemo(() => games[item], [item])

  return (
    <Screen
      navbar={{
        right: `${item + 1} of ${games.length}`,
      }}
      actbar="Select"
      onActionClick={() => {
        history.push(`/BokiaPhone/games/${currItem.path}`)
      }}
      onCancelClick={() => {
        history.push(`/BokiaPhone/menu`)
      }}
      onUpClick={() => {
        setItem((curr) => {
          const nextPage = curr - 1
          return nextPage < 0 ? games.length - 1 : nextPage
        })
      }}
      onDownClick={() => {
        setItem((curr) => (curr + 1) % games.length)
      }}
    >
      <List items={games} selected={item} />
    </Screen>
  )
}

export default GamesScreen
