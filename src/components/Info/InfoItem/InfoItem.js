import React from 'react';

const infoItem = props => props.data.map((item, i) => (
  <li key={item + '-' + i}>{item}</li>
));

export default infoItem;
