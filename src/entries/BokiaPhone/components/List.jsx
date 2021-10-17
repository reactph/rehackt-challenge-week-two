import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const ListWrapper = styled.div`
  width: 100%;
  overflow: auto;
  height: 145px;

  &::-webkit-scrollbar {
    width: 0;
  }
`

const ListItem = styled.div`
  padding: 8px 12px;
  color: ${(props) => (props.selected ? "#798873" : "#152914")};
  background-color: ${(props) => (!props.selected ? "#798873" : "#152914")};
  white-space: pre-wrap;
  max-height: 65px;
  text-overflow: ellipsis;
  overflow: hidden;
`

const List = ({ items, selected }) => {
  return (
    <ListWrapper>
      {items.map(({ key, name, ref }, i) => (
        <ListItem
          key={key}
          selected={selected === i}
          ref={(element) => {
            if (ref) {
              ref(element)
            }
          }}
        >
          {name}
        </ListItem>
      ))}
    </ListWrapper>
  )
}

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.objectOf({
      key: PropTypes.string,
      name: PropTypes.string,
      path: PropTypes.string,
      ref: PropTypes.func,
    })
  ),
  selected: PropTypes.number,
}

export default List
