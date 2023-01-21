import PropTypes from 'prop-types';

import { SectionTag } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionTag>
      {title && title === 'Phonebook' ? <h1>{title}</h1> : <h2>{title}</h2>}

      {children}
    </SectionTag>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
