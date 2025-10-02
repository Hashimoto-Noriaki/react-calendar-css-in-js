import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Header = styled.header``;

const HeaderInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const AppTitle = styled.p``;

const NavList = styled.ul`
    display: flex;
    gap: 1.25rem; /* Tailwind gap-5 相当（20px） */
    list-style: none;
    margin: 0;
    padding: 0;
`;

const NavItem = styled.li``;

export const TopPage: React.FC = () => {
    return (
        <Container>
            <Header>
            <HeaderInner>
                <AppTitle>スケジュール管理APP</AppTitle>
                <nav>
                <NavList>
                    <NavItem>ご利用方法</NavItem>
                    <NavItem>ログイン</NavItem>
                </NavList>
                </nav>
            </HeaderInner>
            </Header>
        </Container>
    );
};
