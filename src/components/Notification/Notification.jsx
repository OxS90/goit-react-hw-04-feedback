import PropTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = props => {
  return <p className={styles.notification}>{props.message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
