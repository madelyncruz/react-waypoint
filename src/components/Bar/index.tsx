import { ReactElement } from "react";

// Styles
import { BarStyled } from "./styles";
export interface Props {
  id?: string;
  className?: string;
}

const Bar = ({ ...props }: Props): ReactElement => {
  return <BarStyled {...props} />;
};

export default Bar;
