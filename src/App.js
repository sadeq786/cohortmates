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
    count: 4,
    total: 40,
    topScore: 5
  }

  evaluateScore = () => {
    console.log('clicked');
    console.log('id', this.id);
    //if else statements to check if card was clicked. 
    console.log('this: ', this );
    this.setState({ count: this.state.count + 1 });
    this.setState({ total: this.state.total + 1 });
    console.log(this.state.count);
    console.log(this.state.total);
  };

  render() {
    return (
      <Wrapper>
        <Header 
         score = {this.state.count}
         total = {this.state.total}
         // displayMessage
        />
        {/* <div className="jumbotron">
          <h1 className="text-center">Clicky Game!</h1>
          <h3 className="text-center">Click on an image to earn points, but don't click on any more than once!</h3>
        </div> */}
        {
          // FIRST, GET ALL THE CARDS TO SHOW UP. ✅
          // make score and top score increment one you click on the card. ✅
          // check if this particular card has been clicked in this iteration before we change score and top score. 
          // shuffle cards 
        }
        
        
        {this.state.classmates.map(classmate => (
        <Classmate 
          //id
          id={classmate.id}
          // key. Don't use this as a prop and just leave it for REACT. Use id insterad
          key={classmate.id}
          // clickedStatus
          clickedStatus={classmate.clickedStatus}
          clickEvent = {this.evaluateScore}
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
