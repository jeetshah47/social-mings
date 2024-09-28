import { Pressable, PressableProps, View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedPressableProps = ViewProps & PressableProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedPressable({ style, lightColor, darkColor, ...otherProps }: ThemedPressableProps) {
    
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <Pressable style={[{ backgroundColor }, style]} {...otherProps} />;
}
