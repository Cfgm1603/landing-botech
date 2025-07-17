import { meshLineGeometry, meshLineMaterial } from 'meshline';
import * as React from 'react';

export default function LanyardBand({ bandRef, lanyardTexture, isSmall, isMobile, opacity }) {
  return (
    <mesh ref={bandRef} position={[0, 0, -0.1]} renderOrder={1}>
      <meshLineGeometry />
      <meshLineMaterial
        color="white"
        depthTest={true}
        resolution={isSmall ? [800, 800] : [1000, 1000]}
        useMap={!!lanyardTexture}
        map={lanyardTexture}
        repeat={[1, 1]}
        lineWidth={isMobile ? 1.5 : isSmall ? 1.8 : 1.5}
        transparent={true}
        opacity={opacity}
      />
    </mesh>
  );
} 