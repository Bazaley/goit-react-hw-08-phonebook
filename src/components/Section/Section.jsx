import PropTypes from 'prop-types';

import { SectionTag, TitleStyled } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionTag>
      {title && <TitleStyled>{title}</TitleStyled>}

      {children}
    </SectionTag>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
