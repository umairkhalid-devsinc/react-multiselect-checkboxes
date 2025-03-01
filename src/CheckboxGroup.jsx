import React from "react";
import PropTypes from "prop-types";
import { css } from '@emotion/css';
import CheckboxWithIndeterminate from "../lib/CheckboxWithIndeterminate";

function CheckboxGroup(props) {
  const {
    children,
    className,
    cx,
    getStyles,
    Heading,
    setValue,
    data,
    label,
    getValue,
    theme,
    selectProps: { getOptionValue },
  } = props;
  // const getOptionValue = props.selectProps.getOptionValue;
  const optionsIncludes = (v) =>
    !!data.options.find((opt) => getOptionValue(opt) === getOptionValue(v));

  const numCheckedOptions = getValue().filter((v) => optionsIncludes(v)).length;
  const checked = numCheckedOptions === data.options.length;
  const indeterminate = numCheckedOptions > 0 && !checked;
  const checkboxProps = { indeterminate, checked };
  const selectAllOptions = () => {
    const newValue = [
      ...getValue().filter((v) => !optionsIncludes(v)),
      ...data.options,
    ];
    setValue(newValue);
  };
  const clearOptions = () => {
    const newValue = getValue().filter((v) => !optionsIncludes(v));
    setValue(newValue);
  };
  return (
    <div
      className={cx(css(getStyles("group", props)), { group: true }, className)}
    >
      <Heading
        checkboxProps={checkboxProps}
        getStyles={getStyles}
        cx={cx}
        theme={theme}
        onClick={() => {
          if (indeterminate || checked) {
            clearOptions();
          } else {
            selectAllOptions();
          }
        }}
      >
        {label}
      </Heading>
      <div>{children}</div>
    </div>
  );
}

CheckboxGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cx: PropTypes.func.isRequired,
  getStyles: PropTypes.func.isRequired,
  Heading: PropTypes.func.isRequired,
  getValue: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  data: PropTypes.shape({
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.node,
        value: PropTypes.any,
      })
    ),
  }).isRequired,
  theme: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
CheckboxGroup.defaultProps = {
  children: null,
  className: undefined,
};

export function CheckboxGroupHeading(props) {
  const {
    className,
    cx,
    getStyles,
    children,
    checkboxProps,
    ...cleanProps
  } = props;
  return (
    <div
      className={cx(
        css(getStyles("groupHeading", { ...props, ...checkboxProps })),
        { "group-heading": true },
        className
      )}
      {...cleanProps}
    >
      <CheckboxWithIndeterminate readOnly type="checkbox" {...checkboxProps} />
      {children}
    </div>
  );
}

CheckboxGroupHeading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cx: PropTypes.func.isRequired,
  getStyles: PropTypes.func.isRequired,
  checkboxProps: PropTypes.shape({
    checked: PropTypes.bool,
    indeterminate: PropTypes.bool,
  }).isRequired,
};
CheckboxGroupHeading.defaultProps = {
  children: null,
  className: undefined,
};

export default CheckboxGroup;
