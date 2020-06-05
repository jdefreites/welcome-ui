import styled, { css } from '@xstyled/styled-components'
import { up } from '@xstyled/system'

export const Page = styled.main`
  display: flex;
  overflow: hidden;
  height: 100vh;
  background-color: nude.100;
  flex-direction: column;

  ${up(
    'lg',
    css`
      flex-direction: row;
    `
  )}
`
