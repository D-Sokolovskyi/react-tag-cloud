import React from 'react';

import Wrap from '../../hoc/Wrap';
import withClass from '../../hoc/withClass';
import classes from './Info.css';
import InfoItem from './InfoItem/InfoItem';

const info = props => {
  let content = <p>Select a tag</p>;

  const convertToArray = obj => {
    return Object.keys(obj).map(key => `${key}: ${obj[key]}`);
  };

  if (props.item) {
    const mentions = [
      'total: ' +
        Object.values(props.item.sentiment).reduce((prev, cur) => prev + cur),
      ...convertToArray(props.item.sentiment)
    ];

    const pageTypes = convertToArray(props.item.pageType);

    content = (
      <Wrap>
        <h3>{props.item.label}</h3>
        <ul>
          Mentions:
          <InfoItem data={mentions} />
        </ul>
        <ul>
          Page Types:
          <InfoItem data={pageTypes} />
        </ul>
      </Wrap>
    );
  }

  return content;
};

export default withClass(info, classes.Info);
