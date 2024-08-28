global.window = {};
global.window = global;
global.__reanimatedWorkletInit = () => {};

jest.useFakeTimers('legacy');
jest.mock('react-native-electrode-bridge', () => jest.fn());
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
