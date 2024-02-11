import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = props => {
  const { name, onClickButton } = props;
  return (
    <button className={styles.button} type="button" onClick={onClickButton}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClickButton: PropTypes.func.isRequired,
};
export default Button;
