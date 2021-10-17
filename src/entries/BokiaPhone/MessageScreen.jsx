import React, { useRef } from "react"
import styled from "styled-components"
import Screen from "./Screen"
import { useHistory, useParams } from "react-router"
import { useMemo } from "react/cjs/react.development"
import { messages } from "./constant"

const Message = styled.p`
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
  margin: 0;
  height: 140px;
  overflow: auto;
  white-space: pre-wrap;

  &::-webkit-scrollbar {
    width: 0;
  }
`

const MessageScreen = () => {
  const history = useHistory()
  const params = useParams()
  const { sender, message } = useMemo(() => messages[params.id], [params.id])
  const ref = useRef()

  return (
    <Screen
      navbar={{
        left: sender,
      }}
      actbar="Reply"
      onActionClick={() => {
        history.push("/BokiaPhone/messages/new")
      }}
      onCancelClick={() => {
        history.push("/BokiaPhone/messages/inbox")
      }}
      onDownClick={() => {
        ref.current.scrollBy(0, 140)
      }}
      onUpClick={() => {
        ref.current.scrollBy(0, -140)
      }}
    >
      <Message ref={ref}>{message}</Message>
    </Screen>
  )
}

export default MessageScreen
