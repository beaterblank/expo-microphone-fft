import * as React from 'react';

import { ExpoMicrophoneFftViewProps } from './ExpoMicrophoneFft.types';

export default function ExpoMicrophoneFftView(props: ExpoMicrophoneFftViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
