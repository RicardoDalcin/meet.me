import { css } from 'styled-components';

export const flexCenter = css`
  display: flex;
  align-content: center;
`;

export const hideElement = css`
  clip: rect(0, 0, 0, 0);
  height: 1px;
  width: 1px;
  position: absolute;
  border: 0;
  overflow: hidden;
  margin: -1px;
  white-space: nowrap;
`;
