import React, { PropTypes } from 'react'

function renderItem(item, index) {
  const children = item.children && (
    <ul>
      {item.children.map(renderItem)}
    </ul>
  );

  return (
    <li key={index} onClick={item.onClick}>
      <span>{item.text}</span>
      {children}
    </li>
  )
}

export default function Flyout({ items, className = 'flyout' }) {
  return (
    <ul className={className}>
      {items.map(renderItem)}
    </ul>
  )
}
