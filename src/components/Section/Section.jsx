import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = props => {
  return (
    <section className={styles.section_cap}>
      <h2 className={styles.section_title}>{props.title}</h2>
      <div>{props.children}</div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default Section;
