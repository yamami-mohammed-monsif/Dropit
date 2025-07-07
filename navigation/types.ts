export type RootStackParamList = {
  Splash: undefined;
  Welcome: undefined;
  Main: undefined;
  Home: undefined;
  // Add other screen params here
};

export type TabParamList = {
  Home: undefined;
  Orders: undefined;
  Profile: undefined;
};

// Extend navigation types
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
