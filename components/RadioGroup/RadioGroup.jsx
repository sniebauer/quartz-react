import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Radio from './Radio.jsx';
import RadioButton from './RadioButton.jsx';

function getClassName({ buttons, color, stacked }) {
  return classNames({
    'radio-teal': color === 'teal',
    'radio-gray': color === 'gray',
    'radio--buttons': buttons,
    'radio--stacked': stacked,
  });
}

function getRadioComponent({ buttons, onCheck, selectedIndex }) {
  return buttons ?
    (item, i) => <RadioButton onCheck={onCheck} index={i} key={item.uniqueId} checked={selectedIndex === i} {...item} /> :
    (item, i) => <Radio onCheck={onCheck} index={i} key={item.uniqueId} checked={selectedIndex === i} {...item} />;
}

const RadioGroup = ({ buttons, color, items, onCheck, selectedIndex, stacked }) => (
  <div className='form'>
    <ul className={getClassName({ buttons, color, stacked })}>
      { items.map(getRadioComponent({ buttons, onCheck, selectedIndex })) }
    </ul>
  </div>
);

const radioItemPropType = PropTypes.shape({
  label: PropTypes.string.isRequired,
  uniqueId: PropTypes.string.isRequired,
});

RadioGroup.propTypes = {
  buttons: PropTypes.bool,
  color: PropTypes.oneOf([ 'teal', 'gray' ]),
  items: PropTypes.arrayOf(radioItemPropType).isRequired,
  onCheck: PropTypes.func,
  selectedIndex: PropTypes.number,
  stacked: PropTypes.bool,
};

RadioGroup.defaultProps = {
  buttons: false,
  color: 'teal',
  onCheck: () => {},
  selectedIndex: -1,
  stacked: false,
};

export default RadioGroup;
