import { NativeModule, requireNativeModule } from 'expo';

import { ExpoMicrophoneFftModuleEvents } from './ExpoMicrophoneFft.types';

declare class ExpoMicrophoneFftModule extends NativeModule<ExpoMicrophoneFftModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoMicrophoneFftModule>('ExpoMicrophoneFft');
