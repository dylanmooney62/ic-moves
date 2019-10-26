import React from 'react';
import { ReactComponent as ICLogo } from '../../assets/icons/logo-white.svg';
import { ReactComponent as ICLogoText } from '../../assets/icons/logo-white-text.svg';

const Logo = ({ withText, className }) => (
  <>
    {withText ? (
      <ICLogoText className={className} />
    ) : (
      <ICLogo className={className} />
    )}
  </>
);

export default Logo;
