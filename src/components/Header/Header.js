import React from 'react';
import { HeaderWrapper, HeaderLeft, Title, HeaderCenter, SearchInput, HeaderRight, Icon } from './style'
import { FaUser } from 'react-icons/fa'; // Import icon người từ react-icons

const AppHeader = () => {
    return (
        <HeaderWrapper>
            <HeaderLeft>
                <Title>Tu dien Truong Dan</Title>
            </HeaderLeft>
            <HeaderCenter>
                <SearchInput type="text" placeholder="Search..." />
            </HeaderCenter>
            <HeaderRight>
                <Icon>
                    <FaUser />
                </Icon>

            </HeaderRight>
        </HeaderWrapper>
    );
};

export default AppHeader;