import React from 'react';
import Tag from './Tag/Tag';
import withClass from '../../hoc/withClass';
import classes from './Tags.css';

const tags = props => props.data.map(item => (
  <Tag
    key={item.id}
    id={item.id}
    label={item.label}
    sentimentScore={item.sentimentScore}
    onItemClick={() => props.clicked(item.id)} />
));

export default withClass(tags, classes.Tags);