import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoMicrophoneFftViewProps } from './ExpoMicrophoneFft.types';

const NativeView: React.ComponentType<ExpoMicrophoneFftViewProps> =
  requireNativeView('ExpoMicrophoneFft');

export default function ExpoMicrophoneFftView(props: ExpoMicrophoneFftViewProps) {
  return <NativeView {...props} />;
}
