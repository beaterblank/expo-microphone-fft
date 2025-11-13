// Reexport the native module. On web, it will be resolved to ExpoMicrophoneFftModule.web.ts
// and on native platforms to ExpoMicrophoneFftModule.ts
export { default } from './ExpoMicrophoneFftModule';
export { default as ExpoMicrophoneFftView } from './ExpoMicrophoneFftView';
export * from  './ExpoMicrophoneFft.types';
