import React from 'react'
import PropTypes from 'prop-types'

export default class Card extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <li className="catalog-item">
        <div className="catalog-item__wrapper">
          <p className="catalog-item__text">Сказочное заморское яство</p>
          <h3 className="catalog-item__title">
            {this.props.item.title}
            <span>{this.props.item.taste}</span>
          </h3>
          <p className="catalog-item__text">{this.props.item.gift.count}</p>
          <p className="catalog-item__text">{this.props.item.gift.name}</p>
          <div className="catalog-item__weight">{this.props.item.weight}</div>
        </div>
        Чего сидишь? Порадуй котэ, <button>купи</button>.
      </li>
    )
  }
}

Card.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    taste: PropTypes.string,
    gift: {
      count: PropTypes.number,
      name: PropTypes.string,
    },
    weight: PropTypes.number
  })
}
