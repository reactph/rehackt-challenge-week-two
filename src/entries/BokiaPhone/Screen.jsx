import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const ScreenWrapper = styled.div`
  z-index: 0;
  margin: auto;
  width: 295px;
  height: 225px;
  background: #798873;
  padding: 8px 12px;
  color: #152914;
  font-family: Nokia;
  font-size: 20px;
  position: relative;
  padding-bottom: 15px;
`

const ScreenGlowWrapper = styled.div`
  position: absolute;
  width: 295px;
  height: 225px;
  overflow: hidden;
  opacity: 40%;
  top: 0;
  left: 0;
  pointer-events: none;
`

const ScreenGlow = styled.div`
  box-shadow: 0 0 60px 30px #fff, 0 0 100px 100px #5aa840,
    0 0 140px 90px #798873;
`

const Content = styled.div`
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header"
    "main"
    "footer";
  display: grid;
  height: 100%;
`

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-area: header;
`

const Main = styled.div`
  grid-area: main;
`

const Actbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: footer;
`

const CancelButton = styled.div`
  z-index: 10;
  width: 75px;
  height: 75px;
  background: red;
  opacity: 0.2;
  position: absolute;
  bottom: -106px;
  left: -12px;
  cursor: pointer;
`

const ActionButton = styled.div`
  z-index: 10;
  width: 113px;
  height: 62px;
  background: red;
  opacity: 0.2;
  position: absolute;
  bottom: -83px;
  left: 91px;
  cursor: pointer;
`

const UpButton = styled.div`
  z-index: 10;
  width: 60px;
  height: 70px;
  background: red;
  opacity: 0.2;
  position: absolute;
  bottom: -94px;
  right: -13px;
  cursor: pointer;
`

const DownButton = styled.div`
  z-index: 10;
  width: 60px;
  height: 70px;
  background: red;
  opacity: 0.2;
  position: absolute;
  bottom: -154px;
  right: 37px;
  cursor: pointer;
`

const Screen = ({
  children,
  className,
  navbar,
  actbar,
  hideNavbar,
  hideActbar,
  onActionClick,
  onCancelClick,
  onUpClick,
  onDownClick,
  ...props
}) => (
  <ScreenWrapper {...props}>
    <Content>
      {!hideNavbar && (
        <Navbar>
          <div>{navbar?.left}</div>
          <div>{navbar?.right}</div>
        </Navbar>
      )}
      <Main className={className}>{children}</Main>
      {!hideActbar && <Actbar onClick={onActionClick}>{actbar}</Actbar>}
    </Content>
    <ScreenGlowWrapper>
      <ScreenGlow />
    </ScreenGlowWrapper>
    <CancelButton onClick={onCancelClick} />
    <ActionButton onClick={onActionClick} />
    <UpButton onClick={onUpClick} />
    <DownButton onClick={onDownClick} />
  </ScreenWrapper>
)

Screen.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  navbar: PropTypes.objectOf({
    left: PropTypes.string,
    right: PropTypes.string,
  }),
  actbar: PropTypes.string,
  hideNavbar: PropTypes.bool,
  hideActbar: PropTypes.bool,
  onActionClick: PropTypes.func,
  onCancelClick: PropTypes.func,
  onUpClick: PropTypes.func,
  onDownClick: PropTypes.func,
}

export default Screen
