import React, { PropTypes, Component } from 'react'

export default class Collapsible extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    heading: PropTypes.string
  }

  static defaultProps = {
    heading: 'h3'
  }

  state = {
    collapsed: false
  }

  render() {
    const { collapsed } = this.state
    const { title, heading: Tag, children } = this.props
    const toggle = () => this.setState({ collapsed: !collapsed })

    const icon = collapsed ? 'fa fa-plus' : 'fa fa-minus'
    const titleTag = (
      <Tag className="block-title">
        <i className={icon} onClick={toggle}></i>
        {title}
      </Tag>
    )

    return (
      <div>
        {titleTag}
        {!collapsed && children}
      </div>
    )
  }
}
