import React from "react"
import PropTypes from "prop-types"
import { ClipLoader } from "react-spinners"
import styles from "./Maze.module.css"

const Loading = ({ hasError }) => (
  <div className={styles.loading}>
    {!hasError ? (
      <ClipLoader color="black" />
    ) : (
      "Something went wrong. Please refresh."
    )}
  </div>
)

Loading.propTypes = {
  hasError: PropTypes.bool.isRequired,
}

export default Loading
