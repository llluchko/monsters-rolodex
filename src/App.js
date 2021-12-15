import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searhField: '',
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  // e is a function parameter
  // javasctipt by default doesn't set the context
  // arrow function automaticly define this

  handleChange = (e) => {
    this.setState({ searhField: e.target.value });
  };

  render() {
    const { monsters, searhField } = this.state;
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    // setState is async - undefined amount of time - javascript doesn't know about it
    const filterdMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searhField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filterdMonsters} />
      </div>
    );
  }
}

export default App;
