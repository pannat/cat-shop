import React from 'react'
import PropTypes from 'prop-types'

export default class Card extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    const getGiftBlock = () => {
      const count = this.props.item.gift.count;
      let word = 'мышь'
      if (count > 1 && count < 5) { word = 'мыши' }
      if (count >= 5) { word = 'мышей' }

      const countElement = count > 1 ? <b>{count}</b>  : '';
      const additionalElement = count > 5 ? <p className="card__text">заказчик доволен</p> : '';

      return (<div className="card__gift">
                <p className="card__text">{countElement} {word} в подарок</p>
                {additionalElement}
              </div>)
    }

    const getWeightElement = () => {
      let weight = Number((this.props.item.weight / 1000).toFixed(1));
      weight = new Intl.NumberFormat().format(weight)
      return <div className="card__weight">{weight} <span>кг</span></div>
    }

    return (
      <li className="card">
        <div className="card__wrapper">
            <p className="card__text card__text--promo">Сказочное заморское яство</p>
            <h2 className="card__title">{this.props.item.title}</h2>
            <h3 className="card__title card__title--second">{this.props.item.taste}</h3>
            <p className="card__text">
              <b>{this.props.item.count}</b> порций
            </p>
            {getGiftBlock()}
            {getWeightElement()}
        </div>
        Чего сидишь? Порадуй котэ, <button>купи</button>.
      </li>
    )
  }
}

Card.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    taste: PropTypes.string,
    count: PropTypes.number,
    gift: PropTypes.shape({
      count: PropTypes.number,
    }),
    weight: PropTypes.number
  })
}
