import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const GridStyle = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0 2.5rem;
  margin: 2rem 0 0;

  & .card .card-image .card-title {
    bottom: -3.5rem;
    color: black;
  }

  & .card {
    transition: 0.15s linear !important;
    opacity: 0.9;
    display: flex;
    flex-direction: column;

    &:hover {
      opacity: 1;
      box-shadow: 0 1px 10px 3px ${COLORS.red};
      cursor: pointer;
    }
  }

  & .card-content {
    padding: 36px 24px 12px;
    flex: 1 0 auto;
  }

  & .card-action {
    text-align: center;
  }
`;
