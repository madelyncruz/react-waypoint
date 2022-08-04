import styled from "@emotion/styled";

export const BarStyled = styled.div`
  background-color: red;
  width: 100%;
  height: 100px;
  margin-bottom: 5px;

  &.fixedBar {
    position: fixed;
    top: 80px;
    bottom: 2000px;
  }

  /* &.fixedBottom {
    position: relative;
    top: 0px;
  } */
`;
