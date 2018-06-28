import React from 'react';
import Classmate from "./components/Classmate";
import Wrapper from "./components/Wrapper";
import classmates from "./classmates.json";
import './App.css';

class App extends React.Component {

  //define state
  state = {
    classmates
  }

  render() {
    return (
      <Wrapper>
        <header>
          <h2 className="text-center">Clicky Game</h2>
          <h2 className="text-center"><span>Click an image to begin!</span></h2>
          <h2 className="text-center">
            <span>Score :
          <span> 0</span>
            </span>
            <span> | Top Score:
          <span> 0</span>
            </span>
          </h2>
        </header>
        <div className="jumbotron">
          <h1 className="text-center">Clicky Game!</h1>
          <h3 className="text-center">Click on an image to earn points, but don't click on any more than once!</h3>
        </div>
        {
          // in activity 15, once you click on the x, the friend is deleted. that is not what we are doing here. 
          // in this game, onclick is assigned to each card instead of span x. 
          // once clicked, it checks if it has been clicked then updates the score approriately. ********
          // FIRST, GET ALL THE CARDS TO SHOW UP. 
        }
        <div>
        {this.state.classmates.map(classmate => (
        <Classmate 
          //removefriend method needs to be passed in
          // removeFriend = {this.removeFriend}
          //id
          id={classmate.id}
          // key. Don't use this as a prop and just leave it for REACT. Use id insterad
          key={classmate.id}
          name={classmate.name}
          image={classmate.image}
          
        />
        ))
      }
      </div>


      </Wrapper>

    );
  }
}

export default App;
