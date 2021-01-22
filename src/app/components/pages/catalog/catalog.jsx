import React from 'react'
import Card from "../../../shared/components/card/card";
import {getFoodList} from "../../../../mock/mock";

export default class Catalog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      loaded: false
    };
  }

  componentDidMount() {

    getFoodList.then((list) => {
      this.setState({ list, loaded: true })
    });
  }

  render() {
    console.log(this.state.list)

    let cards;
    if (this.state.loaded) {
      cards = this.state.list.map((item, i) => <Card key={i.toString()} item={item}/>);
    }

    return (
      <section className="catalog">
        <h1 className="visually-hidden">Каталог еды для кошек</h1>
        <div className="container">
          <div className="catalog__inner">
            <p className="catalog__text">Ты сегодня покормил кота?</p>
            <ul className="catalog__list">
              {cards}
            </ul>
          </div>
        </div>
      </section>
    )
  }
}
