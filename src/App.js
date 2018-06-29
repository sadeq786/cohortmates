import React from 'react';
import Classmate from "./components/Classmate";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import classmates from "./classmates.json";
import './App.css';

class App extends React.Component {

  //define state
  state = {
    classmates,
    updatedClassmates: [],
    count: 0,
    total: 0,
    topScore: 5
  }

  reset = () => {
    this.setState({ count: 0 });
    this.setState({ updatedClassmates: [] });
  }

  // we are passing in the id of the clicked object. 
  evaluateScore = (id, clickedStatus) => {
    console.log('clicked');
    console.log('id : ', id);
    console.log('clickedStatus : ', clickedStatus);
    clickedStatus = true;
    // once clicked, check if classmate id is in this.state.updatedClassmates
    // else push id into this.state.updatedClassmates
    if (this.state.updatedClassmates.includes(id)) {
      console.log('ID ALREADY IN ARRAY');
      console.log('YOU LOST. NOW RESET APPROPRIATE VALUES');
      this.reset();

      


      console.log("post loss", this.state.count);
    } else {
      this.state.updatedClassmates.push(id);
      console.log('updated Classmates array: ', this.state.updatedClassmates);
      this.setState({ count: this.state.count + 1 });
      // HERE CHECK FOR TOP SCORE. 
      if (this.state.count > this.state.total) {
        this.setState({ total: this.state.count })
      } else {
        this.setState({ total: this.state.total + 1 });
      }
    }
  };

  render() {
    return (
      
      <Wrapper>
        {console.log('new state values: ', this.state)}
        <Header
          score={this.state.count}
          total={this.state.total}
        // displayMessage
        />
        {/* <div className="jumbotron">
          <h1 className="text-center">Clicky Game!</h1>
          <h3 className="text-center">Click on an image to earn points, but don't click on any more than once!</h3>
        </div> */}
        {
          // FIRST, GET ALL THE CARDS TO SHOW UP. ✅
          // make score and top score increment one you click on the card. ✅
          // check if this particular card has been clicked in this iteration before we change score and top score. ✅
          // shuffle cards 
        }


        {this.state.classmates.map(classmate => (

          // WE SHOULD ALSO SHUFFLE CARD IDs RANDOMLY. 
          <Classmate
            //id. This prop is what we are using to identify if card has been clicked. 
            id={classmate.id}
            // key. Don't use this as a prop and just leave it for REACT. Use id insterad
            key={classmate.id}
            // clickedStatus
            clickedStatus={classmate.clickedStatus}
            // ** Here, we are passing the function evaluateScore which takes in an id from classmate.js
            // ** 
            clickEvent={this.evaluateScore}
            name={classmate.name}
            image={classmate.image}

          />
        ))
        }



      </Wrapper>

    );
  }
}

export default App;
