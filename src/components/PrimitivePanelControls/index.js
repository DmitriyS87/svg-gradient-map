import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import PrimitivePanelSwitcher from '../PrimitivePanelSwitcher';

import './PrimitivePanelControls.css';

const PrimitivePanelControls = ({
  duplicatePrimitive,
  removePrimitive,
  togglePrimitive,
  primitiveDisabled,
  toggleDocs,
  hasResult,
  section,
  id,
  parentId,
  groupName,
  hasChildrenMod,
  parentHasSingleChild,
  noChangesForChildren
}) => {
  const panelClassList = [
    'PrimitivePanelControls',
    `PrimitivePanelControls--${hasChildrenMod}`
  ];
  let showDocs = false;

  if (!hasResult) {
    panelClassList.push('PrimitivePanelControls--no-result');
  }
  if (parentHasSingleChild) {
    panelClassList.push('PrimitivePanelControls--parentHasSingleChild');
  }

  if (parentHasSingleChild) {
    return (
      <div className={panelClassList.join(' ')}>
        <PrimitivePanelSwitcher
          id={id}
          parentId={parentId}
          primitiveDisabled={primitiveDisabled}
        />
      </div>
    );
  }

  return (
    <div className={panelClassList.join(' ')}>
      <button
        className="PrimitivePanelControl PrimitivePanelControl--toggle"
        onClick={togglePrimitive}
        type="button"
      >
        <Icon
          symbol={primitiveDisabled ? 'eye' : 'eye-blocked'}
          color="currentColor"
          size="16"/>
      </button>

      <button
        className="PrimitivePanelControl PrimitivePanelControl--add"
        onClick={duplicatePrimitive}
        type="button"
      >
        <Icon
          symbol="plus"
          color="currentColor"
          size="14"/>
      </button>

      <button
        className="PrimitivePanelControl PrimitivePanelControl--remove"
        type="button"
        onClick={removePrimitive}
      >
        <Icon
          symbol="cross"
          color="currentColor"
          size="13"/>
      </button>

    </div>
  );
};

export default PrimitivePanelControls;

PrimitivePanelControls.propTypes = {
  duplicatePrimitive: PropTypes.func,
  removePrimitive: PropTypes.func,
  togglePrimitive: PropTypes.func,
  toggleDocs: PropTypes.func,
  primitiveDisabled: PropTypes.bool,
  hasResult: PropTypes.bool,
  section: PropTypes.string,
  id: PropTypes.string,
  parentId: PropTypes.string,
  groupName: PropTypes.string,
  hasChildrenMod: PropTypes.string,
  parentHasSingleChild: PropTypes.bool,
  noChangesForChildren: PropTypes.bool,
};
