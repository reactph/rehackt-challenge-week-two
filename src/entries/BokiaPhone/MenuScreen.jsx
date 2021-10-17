import React, { useMemo, useState } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelopeOpen,
  faGamepad,
  faPhone,
} from "@fortawesome/free-solid-svg-icons"
import Screen from "./Screen"
import { useHistory } from "react-router"

const CustomScreen = styled(Screen)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const screens = [
  {
    name: "Messages",
    icon: faEnvelopeOpen,
    path: "messages",
  },
  {
    name: "Contacts",
    icon: faPhone,
    path: "contacts",
  },
  {
    name: "Games",
    icon: faGamepad,
    path: "games",
  },
]

const MenuScreen = () => {
  const history = useHistory()
  const [page, setPage] = useState(0)

  const currScreen = useMemo(() => screens[page], [page])

  return (
    <CustomScreen
      navbar={{
        right: `${page + 1} of ${screens.length}`,
      }}
      actbar="Select"
      onActionClick={() => {
        history.push(`/BokiaPhone/${currScreen.path}`)
      }}
      onCancelClick={() => {
        history.push(`/BokiaPhone`)
      }}
      onUpClick={() => {
        setPage((curr) => {
          const nextPage = curr - 1
          return nextPage < 0 ? screens.length - 1 : nextPage
        })
      }}
      onDownClick={() => {
        setPage((curr) => (curr + 1) % screens.length)
      }}
    >
      <h2 style={{ margin: 0 }}>{currScreen.name}</h2>
      <FontAwesomeIcon
        size="4x"
        icon={currScreen.icon}
        style={{ marginBottom: "12px" }}
      />
    </CustomScreen>
  )
}

export default MenuScreen
