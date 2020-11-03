import React from 'react'
import Header from "../../header/header";
import Footer from "../../footer/footer";
import PropTypes from 'prop-types'

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="main-layout">
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node
}
