// class based component
// export default App;
// class that react gives us that already has some default functionality
import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { useState, useEffect } from "react";

// const App = () => {
//   const [searchField, setSearchField] = useState("");
//   const [monsters, setMonster] = useState([]);
//   const [filteredMonsters, setFilterdMonsters] = useState(monsters);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       // fetch returns a response/promise
//       // need to convert to json
//       .then((res) => {
//         return res.json();
//       })
//       .then((users) => {
//         setMonster(users);
//       });
//   },[]);

//   useEffect(() => {
//     const newfilteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     setFilterdMonsters(newfilteredMonsters);
//   },[monsters, searchField])


//   const onSearchChange = (event) => {
//     const searchFieldString = event.target.value.toLocaleLowerCase();
//     setSearchField(searchFieldString);
//   };

  

//   return (
//     <div className="App">
//       <h1 className="app-title">Monsters Rolodex</h1>
//       <SearchBox
//         onChangeHandler={onSearchChange}
//         placeholder="Search Monsters"
//         className="search-box"
//       />
//       <CardList monsters={filteredMonsters} />
//     </div>
//   );
// };

// class based component
// export default App;
// class that react gives us that already has some default functionality
class App extends Component {
  constructor() {
    super();

    // set state to be empty at first before we fetch data
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  // Call when the component is rendered for the first time
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      // fetch returns a response/promise
      // need to convert to json
      .then((res) => {
        return res.json();
      })
      .then((users) => {
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }

  // just going to update App.js searchfield value
  onSearchChange = (event) => {
    // lowercase the search string to lowercase
    const searchField = event.target.value.toLocaleLowerCase();
    // const filteredMonsters = this.state.monsters.filter((monster) => {
    //   // check inside monster name and see if the string contains the target value
    //   // not case sensitive
    //   return monster.name.toLocaleLowerCase().includes(seachString);
    // });

    // issue: the original list of monsters doesnt reappear when you remove characters from the searhc input
    // solution: instead of using state, use the new filterd array => move code out of render method by storing search string to state

    this.setState(() => {
      return {
        searchField,
      };
    });
  };

  render() {
    // ES6 destructuring = cleaner code
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      // check inside monster name and see if the string contains the target value
      // not case sensitive
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="Search Monsters"
          className="search-box"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
