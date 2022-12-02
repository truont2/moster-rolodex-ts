import './search-box.styles.css';

import {ChangeEvent} from 'react'

// hwo to assign type: const name: string;

// use interface to type objects
// interface ISearchBoxProps {
//   className: string;
//   placeholder: string;
// }

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;