import { css, Global } from '@emotion/core';
import styled from '@emotion/styled';
import { darken } from 'polished';
import React from 'react';
import '../styles/fonts.css';
import Footer from './footer';
import Header from './header';

const brand = {
  primary: '#00CA6F',
  secondary: '#EEF4F2',
};

const colors = {
  primaryDark: '#575353',
  primaryDarker: '#3C2F2F',
  // primaryDarker: '#676262',
  gray: '#DBDADA',
  lightGreen: '#4CE656',
  green: '#00CA6F',
  link_color: brand.primary,
  link_color_hover: `${darken(0.07, brand.primary)}`,
};

export const globalStyles = css`
  :root {
    --primary-color: ${colors.gray};
    --dark-bg-color: ${colors.primaryDarker};
    --menu-text-color: ${colors.lightGreen};
    --link_color: ${colors.link_color};
    --link_color_hover: ${colors.link_color_hover};
    --active_menu: ${darken(0.15, brand.primary)};
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  html,
  body {
    font-style: normal;
    font-size: 18px;
    padding: 0;
    margin: 0;
    line-height: 1.7;
    word-wrap: break-word;
  }
  body {
    color: ${colors.gray};
    background-color: ${colors.primaryDark};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  line-height: 1.7;
  word-wrap: break-word;

  .content-wrapper {
    flex-grow: 1;
  }

  .content {
    margin: 0 auto;
    max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : 'none')};
  }
`;

const Layout = ({ children, maxWidth = 1170 }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <Container maxWidth={maxWidth}>
        <div className="content-wrapper">
          <Header maxWidth={maxWidth} />
          <div className="content">{children}</div>
        </div>
        <Footer maxWidth={maxWidth} />
      </Container>
    </>
  );
};

export default Layout;
