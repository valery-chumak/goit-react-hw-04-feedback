import PropTypes from 'prop-types';
import { List, Item } from './Statistics.styled';
    
export default function Statistics({ good, neutral, bad, total, positivePercentage}) {
  return (
      <List>
        <Item>Good: { good }</Item> 
        <Item>Neutral: { neutral }</Item>    
        <Item>Bad: {bad}</Item>
      <Item>Total: { total }</Item>
      <Item>Positive Feedback: { positivePercentage } %</Item>
      </List>      
  )
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number
}
    