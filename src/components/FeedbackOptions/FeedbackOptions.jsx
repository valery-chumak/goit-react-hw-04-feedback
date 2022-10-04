import React from 'react';
import PropTypes from 'prop-types';
import { Button, List, Item } from './FeedbackOptions.styled';
export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <List>
      <Item>
        <Button onClick={() => onLeaveFeedback(`good`)}>Good</Button>
      </Item>
      <Item>
        <Button onClick={() => onLeaveFeedback('neutral')}>Neutral</Button>
      </Item>
      <Item>
        <Button onClick={() => onLeaveFeedback('bad')}>Bad</Button>
      </Item>
    </List>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
