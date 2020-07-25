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
        topScore: 0 //topScore is last highest score
    };

    //we want the cards to randomly reorganize/change positions (we do not want any to go away)
    shuffleCards = id => {
        const cardShuffle = this.state.beaches.sort(() => Math.random() - 0.5);
        this.setState({ beaches: cardShuffle });

        if (cardsClicked.includes(id)) { //if there's anything in the cardsClicked array,...
            //end game
            // document.querySelector("#gameOver").innerHTML then display "Game over - you already clicked that tile! in the title/header area"

            if (this.state.topScore < this.state.score) { //if the topScore (last recorded highest score) is less than newest recorded score,
                this.setState({ topScore: this.state.score }) //then make that newest-recorded score the topScore.
            }

            this.setState({ score: 0 })
            cardsClicked = [];
        } else {
            cardsClicked.push(id)
            this.setState({ score: this.state.score + 1 })
        }

    };

    // Map over this.state.beaches and render a Card component for each beaches object
    render() {
        return ( 
                < Wrapper >

                < Title > Guess that Beach! < /Title> 

                {
                this.state.beaches.map(beaches => ( <
                    Card shuffleCards = { this.shuffleCards }
                    id = { beaches.id }
                    key = { beaches.id }
                    image = { beaches.image }
                    location = { beaches.location }
                    />
                ))

            } <
            /Wrapper>
    );
}
}

export default App;