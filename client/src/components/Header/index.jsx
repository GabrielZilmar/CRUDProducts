import React from 'react';

import {

  HeaderWrapper, Logo, Link, LinkWrapper,

} from './styles';

const Header = () => (

  <HeaderWrapper>
    <Logo>
      CRUD
    </Logo>
    <LinkWrapper>
      <Link href="sign-in">
        Login
      </Link>

      <Link href="sign-in">
        Sign In
      </Link>
    </LinkWrapper>
  </HeaderWrapper>

);

export default Header;
