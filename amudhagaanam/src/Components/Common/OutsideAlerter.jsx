import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, hideList) {
  const dispatch = useDispatch();

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    console.log("inside use effect");
    function handleClickOutside(event) {
      console.log("inside handle click");
      if (ref.current && !ref.current.contains(event.target)) {
        dispatch(hideList());
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
function OutsideAlerter(props) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.hideListGroup);
  return <div ref={wrapperRef}>{props.children}</div>;
}

OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired,
  hideListGroup: PropTypes.func.isRequired,
};

export default OutsideAlerter;
