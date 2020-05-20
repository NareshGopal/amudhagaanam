import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { showHidePopover } from "../../Redux/Popover/popoverAction";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, hideList) {
  const dispatch = useDispatch();

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */

    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        dispatch(showHidePopover(hideList));
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
  useOutsideAlerter(wrapperRef, props.hideList);
  return <div ref={wrapperRef}>{props.children}</div>;
}

OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired,
  hideList: PropTypes.object.isRequired,
};

export default OutsideAlerter;
