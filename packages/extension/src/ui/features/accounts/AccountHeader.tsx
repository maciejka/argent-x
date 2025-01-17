import styled from "styled-components"

import { ResponsiveFixedBox } from "../../components/Responsive"

export const AccountHeader = styled(ResponsiveFixedBox)`
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    0deg,
    rgba(16, 16, 16, 0.4) 0%,
    ${({ theme }) => theme.bg1} 73.72%
  );
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(10px);
  height: 68px;
  z-index: 100;
`
