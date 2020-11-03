import React from 'react'
import PropTypes from 'prop-types'

export default class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <main>
        {this.props.children}
      </main>
    )
  }
}

Content.propTypes = {
  children: PropTypes.node
}
