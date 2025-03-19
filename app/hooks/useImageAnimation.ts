import { useSharedValue, withTiming, Easing } from "react-native-reanimated";

interface UseImageAnimationReturn {
  opacity: any;
  fadeOut: () => Promise<void>;
  fadeIn: () => void;
}

export function useImageAnimation(): UseImageAnimationReturn {
  const opacity = useSharedValue(0);

  const fadeOut = async (): Promise<void> => {
    opacity.value = withTiming(0, {
      duration: 300,
      easing: Easing.out(Easing.ease),
    });
    
    return new Promise(resolve => setTimeout(resolve, 300));
  };

  const fadeIn = (): void => {
    opacity.value = withTiming(1, {
      duration: 500,
      easing: Easing.in(Easing.ease),
    });
  };

  return {
    opacity,
    fadeOut,
    fadeIn,
  };
}