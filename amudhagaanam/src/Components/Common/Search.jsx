import React from "react";
import trie from "../../Autocomplete/Trie";
import ListGroup from "../ListGroup";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import {
  showHidePopover,
  changeStyle,
} from "../../Redux/Popover/popoverAction";

function Search() {
  const { style, visibility, data } = useSelector((state) => state.popover);
  const dispatch = useDispatch();
  const history = useHistory();

  const changeHandler = (e) => {
    let style = {
      height: "250px",
      width: "227px",
      left: e.target.offsetLeft,
      top: e.target.offsetTop + 40,
      position: "fixed",
    };

    let searchString = e.target.value;
    let searchResult = trie.autoComplete(searchString.toLowerCase());
    if (searchResult.length == 0 && searchString.length > 0) {
      searchResult.push({ name: "No results found", id: "0" });
    }

    dispatch(changeStyle({ style, data: searchResult }));
    dispatch(showHidePopover(true));
  };

  const clickHandler = (id, resultItem) => {
    dispatch(showHidePopover(false));
    const { type, name } = resultItem;
    history.push(`/library/${type}/${name}`);
  };

  return (
    <>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search your song"
          aria-label="Search"
          onChange={changeHandler}
        />
        {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button> */}
        {visibility ? (
          <ListGroup
            itemsList={data}
            style={style}
            clickHandler={clickHandler}
          />
        ) : null}
      </form>
    </>
  );
}

export default Search;
