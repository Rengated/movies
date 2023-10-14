import "./Search.scss";
import icon from "../../../../assets/icons/search.svg";
import { Dispatch } from "react";

interface SearchProps {
  setQuery: React.Dispatch<React.SetStateAction<any>>;
}

export const Search = ({ setQuery }: SearchProps) => {
  return (
    <div className="search">
      <img
        src={icon}
        alt="search"
      />
      <input
        onChange={(e) => setQuery(e.target.value)}
        className="search__input"
        placeholder="Search Movies or TV Shows"
      />
    </div>
  );
};
