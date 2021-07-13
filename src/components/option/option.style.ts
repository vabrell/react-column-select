import styled from '@emotion/styled'
import { Theme } from '../../types'

export const Row = styled.button<{ isSelected: boolean; theme: Theme }>`
  margin: 0;
  padding: 1rem 0.5rem;
  background-color: ${({ isSelected }) =>
    isSelected ? ({ theme }) => theme.optionSelectedBgColor : 'transparent'};
  text-align: left;
  border: 0;
  user-select: none;
  cursor: pointer;

  &:first-of-type {
    margin-top: 1rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.optionHoverBgColor};
  }
`
