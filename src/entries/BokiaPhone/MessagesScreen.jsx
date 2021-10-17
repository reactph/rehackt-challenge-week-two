import React, { useMemo, useState } from "react"
import Screen from "./Screen"
import { useHistory } from "react-router"
import List from "./components/List"

const listItems = [
  {
    key: "new",
    name: "Create new Message",
    path: "new",
  },
  {
    key: "inbox",
    name: "Inbox",
    path: "inbox",
  },
]

const MessagesScreen = () => {
  const history = useHistory()
  const [item, setItem] = useState(0)
  const currItem = useMemo(() => listItems[item], [item])

  return (
    <Screen
      navbar={{
        right: `${item + 1} of ${listItems.length}`,
      }}
      actbar="Select"
      onActionClick={() => {
        history.push(`/BokiaPhone/messages/${currItem.path}`)
      }}
      onCancelClick={() => {
        history.push(`/BokiaPhone/menu`)
      }}
      onUpClick={() => {
        setItem((curr) => {
          const nextPage = curr - 1
          return nextPage < 0 ? listItems.length - 1 : nextPage
        })
      }}
      onDownClick={() => {
        setItem((curr) => (curr + 1) % listItems.length)
      }}
    >
      <List items={listItems} selected={item} />
    </Screen>
  )
}

export default MessagesScreen
