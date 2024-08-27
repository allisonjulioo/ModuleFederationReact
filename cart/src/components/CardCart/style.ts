import styled from 'styled-components';

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1.4fr repeat(3, 1fr);
  gap: 12px;
  margin: 0.6em 0 2em;

  span {
    font-size: 12px;
    font-weight: bold;
    color: #999999;
  }

  @media (max-width: 981px) {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2em 0 0.3em;
  border-top: 1px solid #999999;
  margin-top: 0.7em;

  @media (max-width: 981px) {
    flex-direction: column-reverse;
  }

  a {
    max-width: 216px;

    @media (max-width: 981px) {
      max-width: 100%;
    }
  }

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-right: 1em;

    @media (max-width: 981px) {
      margin-right: 0;
      width: 100%;
      margin-bottom: 1em;
    }

    h2 {
      margin: 0;
    }

    strong {
      font-size: 14px;
      color: #999999;
    }
  }
`;
