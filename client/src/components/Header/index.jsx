import React from 'react'
import { HeaderWrapper, Logo, Link, LinkWrapper } from './styles';

const Header = () =>{
    return (
        <HeaderWrapper>
            <Logo>
                CRUD
            </Logo>

            <LinkWrapper>
                <Link href="">
                    Login
                </Link>

                <Link href="">
                    Sign In
                </Link>
            </LinkWrapper>
        </HeaderWrapper>
    )
}

export default Header;