export const createAction = (type, propNames = []) => {
  const action = (props, value) => {
    const result = {
      type: type
    };

    if (value) {
      result.value = value;
    }

    if (!propNames) {
      return result;
    }

    propNames.forEach(propName => {
      if (props[propName] !== undefined) {
        result[propName] = props[propName];
      }
    });

    return result;
  };
  return action;
};

const ADD_PRIMITIVE = 'ADD_PRIMITIVE';
const DISCOVERY_PRIMITIVE = 'DISCOVERY_PRIMITIVE';
const DELETE_PRIMITIVE = 'DELETE_PRIMITIVE';
const PURGE_PRIMITIVES = 'PURGE_PRIMITIVES';
const DUPLICATE_PRIMITIVE = 'DUPLICATE_PRIMITIVE';
const TOGGLE_PRIMITIVE = 'TOGGLE_PRIMITIVE';
const UPDATE_INS = 'UPDATE_INS';
const CHANGE_PRIMITIVE_PROP = 'CHANGE_PRIMITIVE_PROP';
const CHANGE_PRIMITIVE_CHILDREN_PROPS = 'CHANGE_PRIMITIVE_CHILDREN_PROPS';
const CHANGE_PROP_TYPE = 'CHANGE_PROP_TYPE';
const TOGGLE_PROP = 'TOGGLE_PROP';
const SWAP_PRIMITIVES = 'SWAP_PRIMITIVES';
const SWAP_PALETTE_COLORS = 'SWAP_PALETTE_COLORS';
const SWITCH_CHILD = 'SWITCH_CHILD';
const MOVE_TO_PLAYGROUND = 'MOVE_TO_PLAYGROUND';
const SET_COLOR_INTERPOL_FILTERS = 'SET_COLOR_INTERPOL_FILTERS';
const TOGGLE_DOCS = 'TOGGLE_DOCS';
const SET_GRAYSCALE_TYPE = 'SET_GRAYSCALE_TYPE';

const SET_PLAYGROUND_TYPE = 'SET_PLAYGROUND_TYPE';
const UPDATE_SVG = 'UPDATE_SVG';
const UPDATE_IMAGE = 'UPDATE_IMAGE';

const ADD_PRESET = 'ADD_PRESET';

const ADD_PALETTE = 'ADD_PALETTE';
const CHANGE_PALETTE_COLOR = 'CHANGE_PALETTE_COLOR';
const DELETE_PALETTE_COLOR = 'DELETE_PALETTE_COLOR';
const DUPLICATE_PALETTE_COLOR = 'DUPLICATE_PALETTE_COLOR';
const TOGGLE_PALETTE_COLOR = 'TOGGLE_PALETTE_COLOR';

const START_DRAG = 'START_DRAG';
const MOVE_DRAG = 'MOVE_DRAG';
const STOP_DRAG = 'STOP_DRAG';
const SWITCH_OFF_LAST_ADDED = 'SWITCH_OFF_LAST_ADDED';

export const addPrimitive = createAction(
  ADD_PRIMITIVE,
  ['item', 'nativeEvent', 'section']
);

export const discoveryPrimitive = createAction(
  DISCOVERY_PRIMITIVE,
  ['primitives']
);

export const deletePrimitive = createAction(
  DELETE_PRIMITIVE,
  ['id', 'childId', 'section']
);

export const purgePrimitives = createAction(
  PURGE_PRIMITIVES,
  ['section']
);

export const duplicatePrimitive = createAction(
  DUPLICATE_PRIMITIVE,
  ['id', 'childId', 'section']
);

export const togglePrimitive = createAction(
  TOGGLE_PRIMITIVE,
  ['id', 'childId', 'disabled', 'section']
);

export const updateIns = createAction(
  UPDATE_INS,
  ['section']
);

export const changePrimitiveProp = createAction(
  CHANGE_PRIMITIVE_PROP,
  ['id', 'parentId', 'param', 'value', 'section']
);

export const changePrimitiveChildrenProps = createAction(
  CHANGE_PRIMITIVE_CHILDREN_PROPS,
  ['section', 'parentId', 'propsSet']
);

export const changePropType = createAction(
  CHANGE_PROP_TYPE,
  ['id', 'parentId', 'param', 'propType', 'section']
);

export const toggleProp = createAction(
  TOGGLE_PROP,
  ['id', 'parentId', 'param', 'disabled', 'section']
);

export const addPreset = createAction(
  ADD_PRESET,
  ['id', 'name', 'primitives', 'colorInterpolationFilters']
);

export const addPalette = createAction(
  ADD_PALETTE,
  ['colors', 'nativeEvent']
);

export const changePaletteColor = createAction(
  CHANGE_PALETTE_COLOR,
  ['index','color']
);

export const deletePaletteColor = createAction(
  DELETE_PALETTE_COLOR,
  ['index']
);

export const duplicatePaletteColor = createAction(
  DUPLICATE_PALETTE_COLOR,
  ['index']
);

export const togglePaletteColor = createAction(
  TOGGLE_PALETTE_COLOR,
  ['index']
);

export const startDrag = createAction(
  START_DRAG,
  ['id', 'index', 'parentId', 'listId', 'elemClientRect', 'offset']
);

export const moveDrag = createAction(
  MOVE_DRAG,
  ['coords']
);

export const stopDrag = createAction(
  STOP_DRAG
);

export const switchOffLastAdded = createAction(
  SWITCH_OFF_LAST_ADDED,
  ['id', 'section']
);

export const swapPrimitives = createAction(
  SWAP_PRIMITIVES,
  ['parentId', 'indexes', 'swapSnapshot', 'section']
);

export const swapPaletteColors = createAction(
  SWAP_PALETTE_COLORS,
  ['parentId', 'indexes', 'swapSnapshot', 'section']
);

export const switchChild = createAction(
  SWITCH_CHILD,
  ['id', 'parentId', 'section']
);

export const moveToPlayground = createAction(
  MOVE_TO_PLAYGROUND,
  ['section']
);

export const setPlaygroundType = createAction(
  SET_PLAYGROUND_TYPE,
  ['playgroundType']
);

export const setGrayscaleType = createAction(
  SET_GRAYSCALE_TYPE,
  ['grayscaleType']
);

export const setColorInterpolFilters = createAction(
  SET_COLOR_INTERPOL_FILTERS,
  ['colorInterpolationFilters']
);

export const toggleDocs = createAction(
  TOGGLE_DOCS,
  ['id', 'childId', 'section']
);

export const updateSvg = createAction(
  UPDATE_SVG,
  ['value']
);

export const updateImage = createAction(
  UPDATE_IMAGE,
  ['image']
);
