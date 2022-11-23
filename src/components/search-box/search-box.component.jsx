import { Component } from "react";
import './search-box.styles.css'

class SearchBox extends Component {
  render() {
    return (
      <input
    //   combines general styling with specific styling
        className={`search-box ${this.props.className}`}
        placeholder={this.props.placeholder}
        type="search"
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
