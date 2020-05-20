import React from "react";
import trie from "../../Autocomplete/Trie";
import ListGroup from "../ListGroup";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  showHidePopover,
  changeStyle,
} from "../../Redux/Popover/popoverAction";
import OutsideAlerter from "./OutsideAlerter";

function Search() {
  const { style, visibility, data } = useSelector((state) => state.popover);
  const dispatch = useDispatch();
  const history = useHistory();

  const changeHandler = (e) => {
    let style = {
      height: "273px",
      width: "300px",
      left: e.target.offsetLeft,
      top: e.target.offsetTop + 40,
      position: "fixed",
      overflow: "auto",
    };

    let searchString = e.target.value;
    let searchResult = trie.autoComplete(searchString.toLowerCase());
    if (searchResult.length === 0 && searchString.length > 0) {
      searchResult.push({ name: "No results found", id: "0" });
    }

    dispatch(changeStyle({ style, data: searchResult }));
    dispatch(showHidePopover({ isSearch: true }));
  };

  const clickHandler = (resultItem) => {
    debugger;

    const { type, name } = resultItem;
    history.push(`/library/${type}/${name}`);
    dispatch(showHidePopover({ isSearch: false }));
  };

  return (
    <>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search for a song (Eg., anthem)"
          aria-label="Search"
          onChange={changeHandler}
        />

        {visibility.isSearch && data.length > 0 ? (
          <OutsideAlerter hideList={{ isSearch: false }}>
            <ListGroup
              itemsList={data}
              style={style}
              clickHandler={clickHandler}
            />
          </OutsideAlerter>
        ) : null}
      </form>
    </>
  );
}

export default Search;
