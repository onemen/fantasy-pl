import styled from '@emotion/styled';

const SearchForm = styled.form`
  display: flex;
  background-color: #fff;
  border: 2px solid transparent;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.8);
  margin: 0 2.5px;
  transition: all 0.3s ease-in-out;

  :hover,
  :focus-within {
    border: 2px solid rgba(0, 0, 0, 0.5);
  }

  .btn {
    display: flex;
    align-self: center;
    background-color: inherit;
    border: none;

    img {
      transform: scale(-1, 1);
      margin: 0;
      opacity: 0.6;
    }

    &.search-btn {
      cursor: text;
      margin: 2px 9px 0 0;
    }

    &.delete-btn {
      transition: all 0.3s ease-in-out;
      opacity: ${p => (p.search ? 1 : 0)};

      img :hover {
        opacity: 0.8;
      }
    }
  }

  input {
    width: 100%;
    background-color: inherit;
    border: none;
    box-shadow: none;
    outline: none;
  }

  .result-counter {
    align-self: center;
    opacity: 0.6;
    font-size: 0.8rem;
    padding: 0 14px;
  }
`;

export default SearchForm;
