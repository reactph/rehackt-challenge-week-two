import React, { useRef, useState } from "react"
import Screen from "./Screen"
import { useHistory } from "react-router"
import List from "./components/List"
import { messages } from "./constant"
import { useEffect } from "react/cjs/react.development"

const InboxScreen = () => {
  const history = useHistory()
  const [item, setItem] = useState(0)
  const itemsRef = useRef([])

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, messages.length)
  }, [messages])

  return (
    <Screen
      navbar={{
        right: `${item + 1} of ${messages.length}`,
      }}
      actbar="Select"
      onActionClick={() => {
        history.push(`/BokiaPhone/messages/inbox/${item}`)
      }}
      onCancelClick={() => {
        history.push(`/BokiaPhone/menu`)
      }}
      onUpClick={() => {
        const nextPage = item - 1 < 0 ? messages.length - 1 : item - 1
        setItem(nextPage)
        itemsRef?.current[nextPage]?.scrollIntoView()
      }}
      onDownClick={() => {
        const nextPage = (item + 1) % messages.length
        setItem(nextPage)
        itemsRef?.current[nextPage]?.scrollIntoView()
      }}
    >
      <List
        items={messages.map(({ sender, message }, i) => ({
          key: `${sender}-${message}`,
          name: `${sender}\n${message}`,
          path: `${i}`,
          ref: (element) => itemsRef.current.push(element),
        }))}
        selected={item}
      />
    </Screen>
  )
}

export default InboxScreen
