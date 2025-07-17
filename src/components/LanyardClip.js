import { RoundedBox } from '@react-three/drei';

export default function LanyardClip({ cardGeometry, isSmall }) {
  return (
    <>
      <RoundedBox args={[cardGeometry.clip.width, cardGeometry.clip.height, cardGeometry.clip.depth]} radius={0.02} smoothness={isSmall ? 4 : 8}>
        <meshPhysicalMaterial 
          color="#b8b8b8" 
          roughness={0.2} 
          metalness={0.9}
          clearcoat={0.8}
          clearcoatRoughness={0.1}
          envMapIntensity={2}
        />
      </RoundedBox>
      <RoundedBox args={[cardGeometry.clip.width * 0.8, cardGeometry.clip.height * 0.6, 0.02]} radius={0.01} smoothness={isSmall ? 4 : 8} position={[0, 0, 0.02]}>
        <meshPhysicalMaterial 
          color="#8a8a8a" 
          roughness={0.1} 
          metalness={1}
          envMapIntensity={2}
        />
      </RoundedBox>
      <RoundedBox args={[cardGeometry.clip.width * 0.9, 0.03, 0.01]} radius={0.005} smoothness={4} position={[0, cardGeometry.clip.height * 0.3, 0.01]}>
        <meshPhysicalMaterial 
          color="#9a9a9a" 
          roughness={0.15} 
          metalness={0.95}
          envMapIntensity={1.5}
        />
      </RoundedBox>
      <RoundedBox args={[cardGeometry.clip.width * 0.9, 0.03, 0.01]} radius={0.005} smoothness={4} position={[0, -cardGeometry.clip.height * 0.3, 0.01]}>
        <meshPhysicalMaterial 
          color="#9a9a9a" 
          roughness={0.15} 
          metalness={0.95}
          envMapIntensity={1.5}
        />
      </RoundedBox>
    </>
  );
} 