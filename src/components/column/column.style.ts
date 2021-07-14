import styled from '@emotion/styled'

export const VStack = styled.div<{ isSearchable: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-top-width: ${({ isSearchable }) => (isSearchable ? 'thin' : '0')};
  border-top-style: solid;
  border-color: inherit;
  overflow-y: auto;
  height: 20rem;
`
