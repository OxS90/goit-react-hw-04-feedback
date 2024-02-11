import PropTypes from 'prop-types';
import Button from '../Button/Button';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = props => {
  const { options, onLeaveFeedback } = props;
  return (
    <div className={styles.feedback_div}>
      {options.map(elem => (
        <Button name={elem} key={elem} onClickButton={onLeaveFeedback} />
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
