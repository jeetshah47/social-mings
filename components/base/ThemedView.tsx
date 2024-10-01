import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor ? darkColor : "transparent" }, 'background');

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
import Feather from '@expo/vector-icons/Feather';
