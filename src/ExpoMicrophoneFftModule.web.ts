import { registerWebModule, NativeModule } from 'expo';

import { ExpoMicrophoneFftModuleEvents } from './ExpoMicrophoneFft.types';

class ExpoMicrophoneFftModule extends NativeModule<ExpoMicrophoneFftModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoMicrophoneFftModule, 'ExpoMicrophoneFftModule');
