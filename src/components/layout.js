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
    line-height: 1.55;
    word-wrap: break-word;
  }
  body {
    color: ${theme.colors.gray};
    background-color: ${theme.colors.primaryDark};
  }
  button {
    cursor: pointer;
  }
  input,
  textarea {
    border-radius: 4px;
    border: 1px solid ${theme.colors.gray};
    padding: 5px 10px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    ::placeholder {
      opacity: 0.4;
    }
  }

  ${reset};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  line-height: 1.55;
  word-wrap: break-word;

  .content-wrapper {
    flex-grow: 1;
  }
`;

const Layout = ({
  children,
  className,
  maxWidth = 1170,
  language = 'he',
  dir = language === 'he' ? 'rtl' : 'ltr',
}) => {
  return (
    <Container maxWidth={maxWidth}>
      <Global styles={globalStyles} />
      <div className="content-wrapper">
        <Header maxWidth={maxWidth} dir={dir} />
        <main
          css={css`
            margin: 0 auto;
            max-width: ${maxWidth ? `${maxWidth}px` : 'none'};
          `}
          dir={dir}
          className={className}
        >
          {children}
        </main>
      </div>
      <Footer maxWidth={maxWidth} dir={dir} />
    </Container>
  );
};

export default Layout;
