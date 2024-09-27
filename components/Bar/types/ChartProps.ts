import { ColorValue, DimensionValue } from "react-native";

export type ChartProps = {
  width:  number ;
  height?: DimensionValue | undefined;
  color: ColorValue | undefined;
};
