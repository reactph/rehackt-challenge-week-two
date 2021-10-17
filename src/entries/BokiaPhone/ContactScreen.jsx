import React, { useRef, useState, useEffect } from "react"
import Screen from "./Screen"
import { useHistory } from "react-router"
import List from "./components/List"
import { contacts } from "./constant"

const ContactScreen = () => {
  const history = useHistory()
  const [item, setItem] = useState(0)
  const itemsRef = useRef([])

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, contacts.length)
  }, [contacts])

  return (
    <Screen
      navbar={{
        right: `${item + 1} of ${contacts.length}`,
      }}
      actbar={item === 12 ? "Call" : ""}
      onActionClick={() => {
        if (item === 12) {
          window
            .open(
              "https://c.tenor.com/zKXoWs6g9M0AAAAC/gihun-squid.gif",
              "_blank"
            )
            .focus()
        }
      }}
      onCancelClick={() => {
        history.push(`/BokiaPhone/menu`)
      }}
      onUpClick={() => {
        const nextPage = item - 1 < 0 ? contacts.length - 1 : item - 1
        setItem(nextPage)
        itemsRef?.current[nextPage]?.scrollIntoView()
      }}
      onDownClick={() => {
        const nextPage = (item + 1) % contacts.length
        setItem(nextPage)
        itemsRef.current[nextPage].scrollIntoView()
      }}
    >
      <List
        items={contacts.map(({ name, number }, i) => ({
          key: `${name}-${number}`,
          name: `${name}\n${number}`,
          path: `${i}`,
          ref: (element) => itemsRef.current.push(element),
        }))}
        selected={item}
      />
    </Screen>
  )
}

export default ContactScreen
