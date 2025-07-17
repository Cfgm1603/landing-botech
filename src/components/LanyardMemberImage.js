import { RoundedBox } from '@react-three/drei';

export default function LanyardMemberImage({ memberTexture, isSmall }) {
  if (!memberTexture) return null;
  return (
    <RoundedBox args={[1.0, 1.0, 0.01]} radius={0.05} smoothness={isSmall ? 8 : 16} position={[0, 0.3, 0.015]}>
      <meshBasicMaterial map={memberTexture} />
    </RoundedBox>
  );
} 