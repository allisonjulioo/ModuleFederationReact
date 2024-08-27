import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Anchor = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  padding: 1em 3em;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;
  width: 100%;

  &:active {
    transform: scale(0.98);
  }
`;
export type AnchorProps = typeof Anchor;
