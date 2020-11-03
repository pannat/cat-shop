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
      cards = this.state.list.map((item, i) => <Card key={i.toString()} item={item}></Card>);
    }

    return (
      <section>
        <h2>Ты сегодня покормил кота?</h2>
        <ul>
          {cards}
        </ul>
      </section>
    )
  }
}
