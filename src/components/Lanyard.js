/* eslint-disable react/no-unknown-property */
'use client';
import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { Environment, Lightformer, Text, RoundedBox } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';
import './Lanyard.css';
import { createLanyardTexture, createCardGeometry } from '../assets/lanyard/createAssets';
import LanyardCard from './LanyardCard';
import LanyardClip from './LanyardClip';
import LanyardMemberImage from './LanyardMemberImage';
import LanyardBand from './LanyardBand';

extend({ MeshLineGeometry, MeshLineMaterial });

export default function Lanyard({ 
  member, 
  position = [0, 20, 0], 
  gravity = [0, -40, 0], 
  fov = 20, 
  transparent = true 
}) {
  const [windowSize, setWindowSize] = useState(() => {
    if (typeof window !== 'undefined') {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
    return { width: 1920, height: 1080 };
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Configuración responsive optimizada con cámara ajustada para ver más abajo
  const canvasConfig = useMemo(() => {
    const { width, height } = windowSize;
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;
    
    if (isMobile) {
      return {
        camera: { position: [0, 0, 25], fov: 30 }, // Cámara centrada para ver mejor
        gravity: [0, -30, 0],
        pixelRatio: Math.min(window.devicePixelRatio, 2),
        performance: { min: 0.5 }
      };
    } else if (isTablet) {
      return {
        camera: { position: [0, 0, 28], fov: 25 }, // Cámara centrada
        gravity: [0, -35, 0],
        pixelRatio: Math.min(window.devicePixelRatio, 2),
        performance: { min: 0.7 }
      };
    } else {
      return {
        camera: { position: [0, 0, 30], fov: 22 }, // Cámara centrada para desktop
        gravity: gravity,
        pixelRatio: Math.min(window.devicePixelRatio, 2),
        performance: { min: 0.8 }
      };
    }
  }, [windowSize, position, gravity, fov]);

  return (
    <div className="lanyard-wrapper">
      <Canvas
        camera={canvasConfig.camera}
        gl={{ 
          alpha: transparent,
          antialias: false,
          powerPreference: "high-performance"
        }}
        dpr={canvasConfig.pixelRatio}
        performance={canvasConfig.performance}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1);
          gl.physicallyCorrectLights = false;
        }}
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={canvasConfig.gravity} timeStep={1 / 60}>
          <Band member={member} windowSize={windowSize} />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
        </Environment>
      </Canvas>
    </div>
  );
}

function Band({ maxSpeed = 50, minSpeed = 0, member, windowSize }) {
  const band = useRef();
  const fixed = useRef();
  const j1 = useRef();
  const j2 = useRef();
  const j3 = useRef();
  const card = useRef();
  
  const vec = useRef(new THREE.Vector3());
  const ang = useRef(new THREE.Vector3());
  const rot = useRef(new THREE.Vector3());
  const dir = useRef(new THREE.Vector3());
  
  // Estados para inicialización suave
  const [isInitialized, setIsInitialized] = useState(false);
  // Estado que controla cuándo se libera la tarjeta (gravedad activada)
  const [released, setReleased] = useState(false);
  const initTimer = useRef(null);

  // En móvil no hay animación, solo tarjeta estática
  const isMobileDevice = windowSize.width < 768;
  
  useEffect(() => {
    if (!isMobileDevice) {
      const timer = setTimeout(() => setReleased(true), 200);
      return () => clearTimeout(timer);
    }
  }, [isMobileDevice]);

  // Configuración de física optimizada para evitar glitches
  const segmentProps = useMemo(() => ({ 
    type: 'dynamic', 
    canSleep: true, 
    colliders: false, 
    angularDamping: 8,
    linearDamping: 6,
    ccd: true,
    // Desactivamos la gravedad hasta que pasen 5 s
    gravityScale: released ? 1 : 0
  }), [released]);


  
  const cardGeometry = useMemo(() => createCardGeometry(), []);
  
  // Estados optimizados
  const [curve] = useState(() => new THREE.CatmullRomCurve3([
    new THREE.Vector3(), 
    new THREE.Vector3(), 
    new THREE.Vector3(), 
    new THREE.Vector3()
  ]));
  const [dragged, drag] = useState(false);
  const [hovered, hover] = useState(false);

  // Configuración responsive
  const isSmall = windowSize.width < 768;
  const isMobile = windowSize.width < 576;
  
  // Escalas optimizadas por dispositivo
  const scale = useMemo(() => {
    if (isMobile) return 1.4;
    if (isSmall) return 1.6;
    return 2.25;
  }, [isMobile, isSmall]);

  // Posición vertical ajustada para centrado perfecto
  const verticalPosition = useMemo(() => {
    if (isMobile) return -0.8;
    if (isSmall) return -1.0;
    return -1.2;
  }, [isMobile, isSmall]);

  // Posición inicial de la tarjeta, cambia cuando released
  const cardInitialPosition = released ? [0.5, 0, 5] : [0, 0, 5];

  // Inicialización con delay para animación suave
  useEffect(() => {
    // Dar tiempo a que la física se estabilice antes de mostrar
    initTimer.current = setTimeout(() => {
      setIsInitialized(true);
    }, 50); // 100ms para que la física se asiente

    return () => {
      if (initTimer.current) {
        clearTimeout(initTimer.current);
      }
    };
  }, []);

  // Texturas optimizadas
  const [lanyardTexture, setLanyardTexture] = useState(null);
  const [memberTexture, setMemberTexture] = useState(null);
  
  useEffect(() => {
    const canvas = createLanyardTexture();
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 20);
    texture.needsUpdate = true;
    setLanyardTexture(texture);
    return () => texture.dispose();
  }, []);

  // Textura del miembro optimizada
  const createFallbackMemberTexture = useCallback(() => {
    const canvas = document.createElement('canvas');
    const size = isSmall ? 256 : 512; // Menor resolución en móvil
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    
    const gradient = ctx.createLinearGradient(0, 0, size, size);
    if (member?.color) {
      const colors = member.color.split(' ');
      const colorMap = {
        'blue-500': '#3b82f6', 'purple-600': '#9333ea',
        'green-500': '#10b981', 'teal-600': '#0891b2',
        'orange-500': '#f97316', 'red-500': '#ef4444',
        'pink-500': '#ec4899', 'rose-600': '#e11d48',
        'indigo-500': '#6366f1', 'yellow-500': '#eab308'
      };
      
      const startColor = colorMap[colors[1]?.replace('from-', '')] || '#3b82f6';
      const endColor = colorMap[colors[3]?.replace('to-', '')] || '#8b5cf6';
      
      gradient.addColorStop(0, startColor);
      gradient.addColorStop(1, endColor);
    } else {
      gradient.addColorStop(0, '#3b82f6');
      gradient.addColorStop(1, '#8b5cf6');
    }
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
    
    if (member?.name) {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.font = `bold ${size * 0.4}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(member.name.charAt(0), size / 2, size / 2);
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    setMemberTexture(texture);
  }, [member, isSmall]);

  useEffect(() => {
    if (member) {
      if (member.image && !member.image.includes('placeholder')) {
        const loader = new THREE.TextureLoader();
        loader.load(
          member.image,
          (texture) => {
            // Preservar la imagen original sin modificaciones
            setMemberTexture(texture);
          },
          undefined,
          () => createFallbackMemberTexture()
        );
      } else {
        createFallbackMemberTexture();
      }
    }
  }, [member, createFallbackMemberTexture]);

  // Joints con configuración mejorada para evitar glitches
  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1.2]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1.2]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1.2]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.50, 0]]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => void (document.body.style.cursor = 'auto');
    }
  }, [hovered, dragged]);

  // Frame optimizado con mejor control de la cuerda
  const frameSkip = useRef(0);
  const lastTime = useRef(0);
  
  useFrame((state, delta) => {
    const currentTime = state.clock.elapsedTime;
    
    // Control de frame rate más suave
    if (isSmall) {
      frameSkip.current++;
      if (frameSkip.current % 2 !== 0) return;
    }

    // Evitar actualizaciones muy frecuentes
    if (currentTime - lastTime.current < 0.016) return; // ~60fps
    lastTime.current = currentTime;

    if (dragged) {
      vec.current.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.current.copy(vec.current).sub(state.camera.position).normalize();
      vec.current.add(dir.current.multiplyScalar(state.camera.position.length()));
      
      // Wake up todos los cuerpos para evitar glitches
      [card, j1, j2, j3, fixed].forEach((ref) => {
        if (ref.current) {
          ref.current.wakeUp();
        }
      });
      
      card.current?.setNextKinematicTranslation({ 
        x: vec.current.x - dragged.x, 
        y: vec.current.y - dragged.y, 
        z: vec.current.z - dragged.z 
      });
    }
    
    if (fixed.current && j1.current && j2.current && j3.current && isInitialized) {
      // Mejor control de la interpolación para evitar glitches
      [j1, j2].forEach((ref) => {
        if (!ref.current.lerped) {
          ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        }
        
        const currentPos = ref.current.translation();
        const lerpedPos = ref.current.lerped;
        
        // Interpolación más suave
        const distance = lerpedPos.distanceTo(currentPos);
        const clampedDistance = Math.max(0.05, Math.min(1, distance));
        const lerpSpeed = Math.min(0.1, delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)));
        
        lerpedPos.lerp(currentPos, lerpSpeed);
      });
      
      // Actualizar curva con más estabilidad
      try {
        curve.points[0].copy(j3.current.translation());
        curve.points[1].copy(j2.current.lerped);
        curve.points[2].copy(j1.current.lerped);
        curve.points[3].copy(fixed.current.translation());
        
        // Más puntos para curva más suave, pero menos en móvil
        const numPoints = isSmall ? 24 : 32;
        const points = curve.getPoints(numPoints);
        
        if (band.current && band.current.geometry) {
          band.current.geometry.setPoints(points);
        }
        
        // Control de rotación más suave
        if (card.current) {
          ang.current.copy(card.current.angvel());
          rot.current.copy(card.current.rotation());
          
          // Reducir la velocidad angular para más estabilidad
          card.current.setAngvel({ 
            x: ang.current.x * 0.8, 
            y: (ang.current.y - rot.current.y * 0.15) * 0.8, 
            z: ang.current.z * 0.8 
          });
        }
      } catch (error) {
        // Manejo de errores para evitar crashes
        console.warn('Error updating lanyard curve:', error);
      }
    }
  });

  curve.curveType = 'chordal';

  // Opacity gradual para entrada suave
  const opacity = isInitialized ? 1 : 0;

  return (
    <>
      {isMobileDevice ? (
        // Versión móvil: solo tarjeta grande en la parte inferior
        <group position={[0, 3, 0]}>
          <group
            scale={2.5}
            position={[0, 0, 0]}
          >
            <LanyardCard
              member={member}
              memberTexture={memberTexture}
              cardGeometry={cardGeometry}
              isMobile={isMobile}
              isSmall={isSmall}
              scale={2.5}
              verticalPosition={0}
            />
          </group>
        </group>
      ) : (
        <>
          <group position={[0, 6, 0]} visible={isInitialized}>
            <RigidBody ref={fixed} {...segmentProps} type="fixed" />
            <RigidBody position={[0.3, -1, 0]} ref={j1} {...segmentProps}>
              <BallCollider args={[0.1]} />
            </RigidBody>
            <RigidBody position={[0.6, -2.5, 0]} ref={j2} {...segmentProps}>
              <BallCollider args={[0.1]} />
            </RigidBody>
            <RigidBody position={[0.9, -4, 0]} ref={j3} {...segmentProps}>
              <BallCollider args={[0.1]} />
            </RigidBody>
            <RigidBody position={cardInitialPosition} ref={card} {...segmentProps} type={dragged ? 'kinematicPosition' : 'dynamic'}>
              <CuboidCollider args={[0.8, 1.125, 0.01]} />
              <LanyardCard
                member={member}
                memberTexture={memberTexture}
                cardGeometry={cardGeometry}
                isMobile={isMobile}
                isSmall={isSmall}
                scale={scale}
                verticalPosition={verticalPosition}
              />
            </RigidBody>
          </group>
          <LanyardBand
            bandRef={band}
            lanyardTexture={lanyardTexture}
            isSmall={isSmall}
            isMobile={isMobile}
            opacity={opacity}
          />
        </>
      )}
    </>
  );
} 