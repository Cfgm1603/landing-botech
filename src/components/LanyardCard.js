import { RoundedBox, Text } from '@react-three/drei';
import LanyardClip from './LanyardClip';

export default function LanyardCard({ member, memberTexture, cardGeometry, isMobile, isSmall, scale, verticalPosition }) {
  return (
    <group
      scale={scale}
      position={[0, verticalPosition, -0.05]}
    >
      {/* Tarjeta principal */}
      <RoundedBox args={[cardGeometry.card.width, cardGeometry.card.height, cardGeometry.card.depth]} radius={0.05} smoothness={isSmall ? 8 : 16}>
        <meshPhysicalMaterial 
          color="#ffffff"
          clearcoat={1} 
          clearcoatRoughness={0.15} 
          roughness={0.1} 
          metalness={0.1}
          envMapIntensity={1.5}
        />
      </RoundedBox>
      {/* Imagen del miembro */}
      {memberTexture && (
        <RoundedBox args={[1.0, 1.0, 0.01]} radius={0.05} smoothness={isSmall ? 8 : 16} position={[0, 0.3, 0.015]}>
          <meshBasicMaterial map={memberTexture} />
        </RoundedBox>
      )}
      {/* Logo BO-TECH */}
      <Text
        position={[0, 0.9, 0.015]}
        fontSize={isMobile ? 0.06 : isSmall ? 0.07 : 0.08}
        color="#3b82f6"
        anchorX="center"
        anchorY="middle"
        fontWeight="bold"
        letterSpacing={0.05}
      >
        BO-TECH
      </Text>
      {/* Información del miembro */}
      {member && (
        <>
          <Text
            position={[0, -0.4, 0.015]}
            fontSize={isMobile ? 0.08 : isSmall ? 0.10 : 0.10}
            color="#1f2937"
            anchorX="center"
            anchorY="middle"
            maxWidth={1.4}
            fontWeight="bold"
            textAlign="center"
          >
            {member.name}
          </Text>
          <Text
            position={[0, -0.6, 0.015]}
            fontSize={isMobile ? 0.06 : isSmall ? 0.07 : 0.07}
            color="#3b82f6"
            anchorX="center"
            anchorY="middle"
            maxWidth={1.4}
            fontWeight="600"
            textAlign="center"
          >
            {member.role}
          </Text>
          <Text
            position={[0, -0.8, 0.015]}
            fontSize={isMobile ? 0.04 : isSmall ? 0.05 : 0.05}
            color="#6b7280"
            anchorX="center"
            anchorY="middle"
            maxWidth={1.3}
            textAlign="center"
          >
            {member.skills.slice(0, 2).join(' • ')}
          </Text>
        </>
      )}
      {/* Hebilla */}
      <group position={[0, 1.1, 0.02]} renderOrder={2}>
        <LanyardClip cardGeometry={cardGeometry} isSmall={isSmall} />
      </group>
    </group>
  );
} 