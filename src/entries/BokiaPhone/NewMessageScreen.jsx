import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Screen from "./Screen"
import { useHistory } from "react-router"

const Textarea = styled.textarea`
  font-size: 20px;
  font-family: Nokia;
  background: #798873;
  color: #152914;
  border: 0;
  max-width: 270px;
  word-break: break-word;
  background-color: transparent;
  resize: none;
  outline: none;

  &::-webkit-scrollbar {
    width: 0;
  }
`

const NewMessageScreen = () => {
  const history = useHistory()
  const [sent, setSent] = useState(false)
  const [text, setText] = useState("")
  const inputRef = useRef()

  useEffect(() => {
    if (inputRef?.current) {
      inputRef.current.focus()
    }
  })

  return (
    <Screen
      navbar={{
        right: `${128 - text.length}`,
      }}
      actbar={sent ? "Back" : "Send"}
      onActionClick={() => {
        if (sent) {
          history.push("/BokiaPhone/messages")
        }

        setTimeout(() => {
          setSent(true)
        }, 1000)
      }}
      onCancelClick={() => {
        history.push("/BokiaPhone/messages")
      }}
    >
      {sent ? (
        "Message sent!"
      ) : (
        <Textarea
          ref={inputRef}
          onChange={(e) => {
            const { value } = e.target

            if (value.length <= 128) {
              setText(e.target.value)
            }
          }}
          value={text}
          rows={4}
        />
      )}
    </Screen>
  )
}

export default NewMessageScreen
