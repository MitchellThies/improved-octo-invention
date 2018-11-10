import React, { Component } from 'react';
import Task from './Task.js';
//import ScreenSelect from './ScreenSelect.js';
import CreateGame from './CreateGame.js';
import JoinGame from './JoinGame.js';
import Join from '../api/Join.js';

import { browserHistory } from 'react-router';
// App component - represents the whole app
// function WarningBanner(props) {
//   if (!props.warn) {
//     return null;
//   }

//   return //renderNewgame();
//   (
//   <form id="create-game">
//     <div class="">
//       <input type="text" id="player-name" name="playerName" placeholder='enter your name'/>
//       <div class="button-container">
//         <input type="submit" value='create game'/>
//         <button class="btn-back">back</button>
//       </div>
//     </div>
//   </form>
//   );
// }

export default class App extends React.Component {
/*
  componentDidMount() {
    browserHistory.push('/');
}
*/
  renderNewGame() {
  return(
  <form id="create-game">
    <div class="">
      <input type="text" id="player-name" name="playerName" placeholder='enter your name'/>
      <div class="button-container">
        <input type="submit" value='create game'/>
        <button class="btn-back">back</button>
      </div>
    </div>
  </form>
  );
  }

  constructor(props) {
    super(props);
    this.state = {showWarning: true}
    //this.handleToggleClick = this.handleToggleClick.bind(this);
		this.handleJGClick = this.handleJGClick.bind(this);
		this.handleCGClick = this.handleCGClick.bind(this);
		this.state = { cGame: false};
		this.state = { jGame: false};
		//this.mainScreen = this.mainScreen.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }

  handleJGClick() {
    this.setState({ jGame: true });
		this.setState({ cGame: false });
  }

  handleCGClick() {
    this.setState({ cGame: true });
		this.setState({ jGame: false });
  }

  
  render() {

		var jGame = this.state.jGame;
		var cGame = this.state.cGame;
		var screen;

		 if (jGame) {
      screen = <JoinGame />;
    } else if (cGame) {
      screen = <CreateGame />;
    }
	 	//	else {
		//	screen = <ScreenSelect />;
		//}
	

    return (
			 <div className="container">
        <header>
          <h1>myPartyGame</h1>
        </header>
        <ul>
          <button id="btn-new-game" onClick={this.handleCGClick}>new game</button>
					<button id="btn-join-game" onClick={this.handleJGClick}>join game</button>
					
				</ul>
				<h2>{screen}

			</h2>
			</div>

    );
  }
}

//var mfunc =
// function mainScreen(props) {
//  return
// 	     <div className="container">
//         <header>
//           <h1>Todo List</h1>
//         </header>
//         <ul>
//           <button id="btn-new-game" onClick={this.renderNewGame()}>new game</button>
// 					<button id="btn-join-game">join game</button>
// 				</ul>
// 			</div>;
// }
/*
old {
     <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
        <ul>
          <button id="btn-new-game" onClick={this.handleCGClick}>new game</button>
					<button id="btn-join-game">join game</button>
					

				</ul>
				<h2>{screen}
				<ScreenSelect />
				<mainScreen />
			</h2>
			</div>


}

function createGame(props) {
return 
return (
		<form id="create-game">
    <div class="">
      <input type="text" id="player-name" name="playerName" placeholder='enter your name'/>
      <div class="button-container">
        <input type="submit" value='create game'/>
        <button class="btn-back">back</button>
      </div>
    </div>
  	</form>
  	);
}

function screenSelect(props) {

if (true) {
		return <mainScreen />
	}
		return <createGame />
}
*/
/* <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
        <ul>
          <button id="btn-new-game" onClick={this.renderNewGame()}>new game</button>
					<button id="btn-join-game">join game</button>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
          </button>
        </ul>

      </div>*/
