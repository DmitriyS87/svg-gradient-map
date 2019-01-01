import {combineReducers} from 'redux';

import primitives from './primitives';
import primitiveControls from './primitiveControls.js';
import presetControls from './presetControls.js';
import dragDrop from './dragDrop.js';
import playground from './playground.js';
import palettes from './palettes.js';

export default combineReducers({
  primitives,
  primitiveControls,
  presetControls,
  dragDrop,
  playground,
  palettes
});
