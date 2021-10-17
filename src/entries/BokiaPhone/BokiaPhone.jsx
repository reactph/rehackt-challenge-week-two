import React, { useEffect, useState } from "react"
import { Route, Switch, useHistory, useRouteMatch } from "react-router"

import BaseEntry from "../../components/BaseEntry/BaseEntry"
import ContactScreen from "./ContactScreen"
import GamesScreen from "./GamesScreen"
import HomeScreen from "./HomeScreen"
import InboxScreen from "./InboxScreen"
import MenuScreen from "./MenuScreen"
import MessageScreen from "./MessageScreen"
import MessagesScreen from "./MessagesScreen"
import NewMessageScreen from "./NewMessageScreen"
import Screen from "./Screen"
import Snek from "./Snek"

const BokiaPhone = () => {
  const history = useHistory()
  const [assetsLoaded, setAssetsLoaded] = useState(0)
  const [assetsError, setAssetsError] = useState(false)
  const completeAssets = assetsLoaded > 1
  const { path } = useRouteMatch()

  useEffect(() => {
    try {
      const loadFont = async () => {
        const customFont = new FontFace("Nokia", "url(/fonts/nokiafc22.woff)")
        await customFont.load()
        document.fonts.add(customFont)
        setAssetsLoaded((s) => s + 1)
      }
      loadFont()

      const image = new Image()
      image.src = "https://i.imgur.com/zjCHZjW.png"
      image.onload = () => {
        setAssetsLoaded((s) => s + 1)
      }
    } catch {
      setAssetsError(true)
    }
  }, [])

  if (assetsError || !completeAssets) {
    return <div>Cannot render assets</div>
  }

  return (
    <BaseEntry
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "420px",
          height: "100%",
        }}
      >
        <div
          style={{
            width: "420px",
            height: "600px",
            position: "absolute",
            background: "url(/phone.png) no-repeat center",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
        <Switch>
          <Route path={path} exact component={HomeScreen} />
          <Route path={`${path}/menu`} component={MenuScreen} />
          <Route path={`${path}/messages`} exact component={MessagesScreen} />
          <Route path={`${path}/messages/new`} component={NewMessageScreen} />
          <Route
            path={`${path}/messages/inbox`}
            exact
            component={InboxScreen}
          />
          <Route
            path={`${path}/messages/inbox/:id`}
            component={MessageScreen}
          />
          <Route path={`${path}/games`} exact component={GamesScreen} />
          <Route path={`${path}/games/snek`} component={Snek} />
          <Route path={`${path}/contacts`} component={ContactScreen} />
          <Route
            render={() => (
              <Screen
                navbar={{
                  right: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  }),
                }}
                actbar="Back"
                onActionClick={() => {
                  history.push(path)
                }}
                onCancelClick={() => {
                  history.push(path)
                }}
              >
                <p>3owH p0Wh. 404 p0wH k4y0uW :3</p>
                <p>{`*~,gHie-Ehm,~*`}</p>
              </Screen>
            )}
          />
        </Switch>
      </div>
    </BaseEntry>
  )
}

export default BokiaPhone
