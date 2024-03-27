import React from 'react';

const TabItem = props => {
  const { eachItemDetails } = props;
  const { displayText } = eachItemDetails;

  return (
    <li className="tab-item">
      <button type="button" className="media-Button"> 
        {displayText}
      </button>
    </li>
  );
};

export default TabItem;
