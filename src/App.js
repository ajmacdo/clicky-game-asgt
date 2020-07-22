import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import beaches from "./beaches.json";

let cardsClicked = []

class App extends Component {
  // Setting this.state.beaches to the beaches json array
  state = {
    beaches,
    score: 0,
    topScore: 0
  };

  //we want the cards to randomly reorganize/change positions (we do not want any to go away)
  
shuffleCards = id => {
const cardShuffle = this.state.beaches.sort(() => Math.random() -0.5);
this.setState({beaches: cardShuffle});

if (cardsClicked.includes(id)) {
  //end game
if (this.state.topScore < this.state.score) {
 this.setState({topScore: this.state.score})
}
this.setState({score: 0})
cardsClicked = [];
} else {
  cardsClicked.push(id)
  this.setState({score: this.state.score + 1})
}


    // // Filter this.state.beaches to find beaches with an id not equal to the id being removed
    // const beaches = this.state.beaches.filter(beaches => beaches.id !== id);
    // // Set this.state.beaches equal to the new beaches array
    // this.setState({ beaches });
  };

  // Map over this.state.beaches and render a Card component for each beaches object
  render() {
    return (
      <Wrapper>
        <Title>Beaches List</Title>
        {this.state.beaches.map(beaches => (
          <Card
            shuffleCards={this.shuffleCards}
            id={beaches.id}
            key={beaches.id}
            image={beaches.image}
            location={beaches.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
