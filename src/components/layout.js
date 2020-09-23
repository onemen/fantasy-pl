import { css, Global } from '@emotion/core';
import styled from '@emotion/styled';
import '../styles/fonts.css';
import reset from '../styles/reset';
import theme from '../styles/theme';
import Footer from './footer';
import Header from './header';

export const globalStyles = css`
  :root {
    --primary-color: ${theme.colors.gray};
    --dark-bg-color: ${theme.colors.primaryDarker};
    --card-bg-color: ${theme.colors.darkGray};
    --title-color: ${theme.colors.lightGreen};
    --link_color: ${theme.colors.link_color};
    --link_color_hover: ${theme.colors.link_color_hover};
    --active_menu: ${theme.colors.link_color_active};
  }
  html,
  body {
    font-style: normal;
    font-size: 18px;
    line-height: 1.7;
    word-wrap: break-word;
  }
  body {
    color: ${theme.colors.gray};
    background-color: ${theme.colors.primaryDark};
  }
  button {
    cursor: pointer;
  }

  ${reset};
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

const Layout = ({ children, maxWidth = 1170, language = 'he' }) => {
  return (
    <div>
      <Global styles={globalStyles} />
      <Container maxWidth={maxWidth}>
        <div className="content-wrapper">
          <Header maxWidth={maxWidth} language={language} />
          <div className="content">{children}</div>
        </div>
        <Footer maxWidth={maxWidth} language={language} />
      </Container>
    </div>
  );
};

export default Layout;
