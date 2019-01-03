import React from 'react';
import PropTypes from 'prop-types';

import DragDrop from '../../containers/DragDrop';
import DragDropItem from '../../containers/DragDropItem';
import PalettePanel from '../PalettePanel/container';
import GrayscaleSwitcher from '../GrayscaleSwitcher/container';
import ConstructorPlaceholder from '../ConstructorPlaceholder';

import './Constructor.css';

let prevPalette = null;

const Constructor = ({
  primitives,
  paletteChanged,
  section,
  palette
}) => {
  const paletteStr = palette
    .filter(item => !item.disabled)
    .map(item => item.value)
    .join('');

  if(paletteStr !== prevPalette) {
    prevPalette = paletteStr;
    paletteChanged(palette);
  }

  return (
    <section className="Constructor">
      <h2 className="visuallyhidden">Constructor</h2>
      <div
        className="Constructor__container">
        {!palette.length && <ConstructorPlaceholder section={section}/>}

        {palette.length > 0 && <GrayscaleSwitcher/>}

        <DragDrop>

          {palette.map((color, index) => {
            const {
              id,
              value,
              disabled,
              justAdded,
              nativeEvent
            } = color;
            const props = {
              id,
              index,
              key: id,
              type: 'color',
              value,
              disabled
            };

            return (
              <div
                key={id}
                id={id}
                className="Constructor__item"
              >
                <DragDropItem
                  id={id}
                  listId="palette"
                  index={index}
                  justAdded={justAdded}
                  nativeEvent={nativeEvent}
                >
                  <PalettePanel {...props}/>
                </DragDropItem>
              </div>
            );
          })}
        </DragDrop>
      </div>
    </section>
  );
};

export default Constructor;

Constructor.propTypes = {
  primitives: PropTypes.array,
  paletteChanged: PropTypes.func,
  section: PropTypes.string,
};
