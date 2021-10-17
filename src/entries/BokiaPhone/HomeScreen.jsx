import React, { useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBatteryFull,
  faBroadcastTower,
} from "@fortawesome/free-solid-svg-icons"
import Screen from "./Screen"
import { useHistory, useRouteMatch } from "react-router"

const CustomScreen = styled(Screen)`
  display: flex;
  align-items: center;
  justify-content: center;
`

const LevelBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.align};
  padding: "12px 0";
`

const LevelBar = styled.div`
  height: 24px;
  width: ${(props) => `${12 - props.num * 2}px`};
  background-color: #16290f;
  opacity: ${(props) => (4 - props.num < props.level ? 1 : 0)};
  margin-bottom: 4px;
`

const LevelBars = ({ level, align, icon }) => (
  <LevelBarWrapper align={align}>
    {Array.from(new Array(4))
      .map((_, i) => i)
      .map((key) => (
        <LevelBar key={key} num={key} level={level} />
      ))}
    <FontAwesomeIcon
      icon={icon}
      style={{ fontSize: "16px", marginTop: "4px" }}
    />
  </LevelBarWrapper>
)

LevelBars.propTypes = {
  level: PropTypes.number,
  align: PropTypes.string,
  icon: PropTypes.object,
}

const HomeScreen = () => {
  const history = useHistory()
  const { url } = useRouteMatch()
  const [signalLevel] = useState(Math.floor(Math.random() * 4) + 2)
  const [batteryLevel] = useState(Math.floor(Math.random() * 4) + 2)

  return (
    <CustomScreen
      navbar={{
        right: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      }}
      actbar="Menu"
      onActionClick={() => {
        history.push(`${url}/menu`)
      }}
    >
      <LevelBars level={signalLevel} icon={faBroadcastTower} />
      <p style={{ width: "100%", textAlign: "center", marginBottom: "64px" }}>
        GLOB3
      </p>
      <LevelBars level={batteryLevel} align="flex-end" icon={faBatteryFull} />
    </CustomScreen>
  )
}

export default HomeScreen
