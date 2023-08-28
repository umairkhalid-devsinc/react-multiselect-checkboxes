import React from "react";
import PropTypes from "prop-types";
import { css } from '@emotion/css';
import CheckboxWithIndeterminate from "./CheckboxWithIndeterminate";

function CheckboxOption(props) {
  const {
    children,
    className,
    cx,
    getStyles,
    isDisabled,
    isFocused,
    isSelected,
    innerRef,
    innerProps,
  } = props;
  return (
    <div
      ref={innerRef}
      className={cx(
        css(getStyles("react-select__option", props)),
        {
          option: true,
          "option--is-disabled": isDisabled,
          "option--is-focused": isFocused,
          "option--is-selected": isSelected,
        },
        className
      )}
      {...innerProps}
    >
      <CheckboxWithIndeterminate
        readOnly
        type="checkbox"
        checked={isSelected}
      /> I am
      {children}
    </div>
  );
}
CheckboxOption.propTypes = {
  children: PropTypes.node,
};

CheckboxOption.defaultProps = {
  children: null,
};

export default CheckboxOption;
