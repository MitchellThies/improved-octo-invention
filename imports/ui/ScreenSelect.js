import React, { Component } from 'react';

class ScreenSelect extends Component {
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
    //this.state = {showWarning: true}
    //this.handleToggleClick = this.handleToggleClick.bind(this);
		this.handleJGClick = this.handleJGClick.bind(this);
		this.handleCGClick = this.handleCGClick.bind(this);
		this.state = { cGame: false};
		this.state = { jGame: false};
		//this.mainScreen = this.mainScreen.bind(this);
  }

  handleJGClick() {
    this.setState({ jGame: true });
  }

  handleCGClick() {
    this.setState({ cGame: true });
  }

  
  render() {

		const jGame = this.state.jGame;
		const cGame = this.state.cGame;
		var screen;

		 if (jGame) {
      screen = <LogoutButton onClick={this.handleLogoutClick} />;
    } else if (cGame) {
      screen = createGame;
    }
	 		else {
			screen = mainScreen;
		}
	

    return (
	     <div className="container">
        <header>
          <h1>Game</h1>
        </header>
        <ul>
          <button id="btn-new-game" onClick={this.handleCGClick}>new game</button>
					<button id="btn-join-game">join game</button>
				</ul>
			</div>
    );
  }
}

function mainScreen(props) {
 return
	     <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
        <ul>
          <button id="btn-new-game" onClick={this.handleCGClick}>new game</button>
					<button id="btn-join-game">join game</button>
				</ul>
			</div>;
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

export default ScreenSelect;
