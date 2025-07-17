// Script para crear textura de cuerda BO-TECH realista
export function createLanyardTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');

  // Color beige para la cuerda
  const beigeColor = '#F5F5DC';
  ctx.fillStyle = beigeColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Agregar gradiente sutil para dar profundidad
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, 'rgba(255,255,255,0.2)');
  gradient.addColorStop(0.5, 'rgba(0,0,0,0.05)');
  gradient.addColorStop(1, 'rgba(0,0,0,0.1)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Configurar el texto
  ctx.save();
  const fontSize = Math.floor(canvas.height * 0.45); // Ligeramente más pequeño
  ctx.font = `bold ${fontSize}px "Afacad", sans-serif`;
  ctx.fillStyle = '#516ba0'; // Color azul BO-TECH
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';

  // Agregar sombra sutil al texto
  ctx.shadowColor = 'rgba(0,0,0,0.15)';
  ctx.shadowBlur = 3;
  ctx.shadowOffsetX = 1;
  ctx.shadowOffsetY = 1;

  // Calcular espaciado óptimo para el texto
  const text = 'BO-TECH';
  const textWidth = ctx.measureText(text).width;
  const spacing = textWidth * 1.8; // Más espacio entre repeticiones
  
  // Aplicar transformación de espejo vertical (voltear de arriba a abajo)
  ctx.save();
  ctx.scale(1, -1); // Espejo vertical
  ctx.translate(0, -canvas.height); // Ajustar posición después del espejo
  
  // Dibujar el texto repetido
  for (let x = spacing/2; x < canvas.width + textWidth; x += spacing) {
    // Dibujar el texto principal
    ctx.fillText(text, x, canvas.height/2);
    
    // Dibujar líneas decorativas entre textos
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(59,130,246,0.3)'; // Color azul BO-TECH semi-transparente
    ctx.lineWidth = 1;
    ctx.moveTo(x - textWidth/2 - 20, canvas.height/2);
    ctx.lineTo(x - textWidth/2 - 8, canvas.height/2);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(x + textWidth/2 + 8, canvas.height/2);
    ctx.lineTo(x + textWidth/2 + 20, canvas.height/2);
    ctx.stroke();
  }
  
  ctx.restore();
  ctx.restore();

  // Agregar efecto de tejido sutil
  ctx.save();
  ctx.globalCompositeOperation = 'multiply';
  for (let y = 0; y < canvas.height; y += 4) {
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0,0,0,0.03)';
    ctx.lineWidth = 2;
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }
  ctx.restore();

  // Agregar bordes sutiles
  ctx.strokeStyle = 'rgba(0,0,0,0.1)';
  ctx.lineWidth = 1;
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  return canvas;
}

function createRopeBackground(ctx, width, height) {
  // Fondo blanco para la cuerda
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, width, height);
  
  // Gradiente sutil para dar profundidad a la cuerda
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, 'rgba(0,0,0,0.02)'); // Sombra muy sutil arriba
  gradient.addColorStop(0.5, 'rgba(0,0,0,0)'); // Transparente en el medio
  gradient.addColorStop(1, 'rgba(0,0,0,0.05)'); // Sombra sutil abajo
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
}

function addRepeatingText(ctx, width, height) {
  ctx.save();
  
  // Configurar fuente más grande para que se vea bien
  const fontSize = Math.floor(height * 0.5); // 50% de la altura de la cuerda
  ctx.font = `bold ${fontSize}px Arial, sans-serif`;
  ctx.fillStyle = '#1e40af'; // Azul corporativo
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';
  
  // Sombra sutil para dar profundidad
  ctx.shadowColor = 'rgba(0,0,0,0.1)';
  ctx.shadowOffsetX = 1;
  ctx.shadowOffsetY = 1;
  ctx.shadowBlur = 2;
  
  const text = 'BO-TECH';
  const textWidth = ctx.measureText(text).width;
  
  // Calcular espaciado para máximo 5 repeticiones
  const maxRepetitions = 5;
  const totalTextWidth = textWidth * maxRepetitions;
  const availableSpaceForSpacing = width - totalTextWidth;
  const spacing = availableSpaceForSpacing / (maxRepetitions + 1); // +1 para espacios al inicio y final
  
  // Dibujar máximo 5 repeticiones bien espaciadas
  for (let i = 0; i < maxRepetitions; i++) {
    const x = spacing + (i * (textWidth + spacing)) + (textWidth / 2);
    if (x + (textWidth / 2) <= width) { // Asegurar que no se salga del canvas
      ctx.fillText(text, x, height / 2);
    }
  }
  
  ctx.restore();
}

function addRopeEffects(ctx, width, height) {
    ctx.save();
  
  // Agregar líneas horizontales muy sutiles para simular fibras de cuerda
  ctx.strokeStyle = 'rgba(0,0,0,0.03)';
  ctx.lineWidth = 0.5;
  
  for (let i = 0; i < height; i += 4) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(width, i);
    ctx.stroke();
  }
  
  // Agregar highlight muy sutil en la parte superior
  const highlight = ctx.createLinearGradient(0, 0, 0, height * 0.2);
  highlight.addColorStop(0, 'rgba(255,255,255,0.3)');
  highlight.addColorStop(1, 'rgba(255,255,255,0)');
  
  ctx.fillStyle = highlight;
  ctx.fillRect(0, 0, width, height * 0.2);
  
  // Agregar sombra muy sutil en la parte inferior
  const shadow = ctx.createLinearGradient(0, height * 0.8, 0, height);
  shadow.addColorStop(0, 'rgba(0,0,0,0)');
  shadow.addColorStop(1, 'rgba(0,0,0,0.05)');
  
  ctx.fillStyle = shadow;
  ctx.fillRect(0, height * 0.8, width, height * 0.2);
  
    ctx.restore();
  }
  
// Función para crear textura de cuerda alternativa con patrón diagonal
export function createDiagonalLanyardTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');

  // Fondo blanco
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Texto azul bien espaciado
  ctx.save();
  
  const fontSize = Math.floor(canvas.height * 0.45);
  ctx.font = `bold ${fontSize}px "Afacad", sans-serif`;
  ctx.fillStyle = '#1e40af'; // Azul corporativo
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';
  
  // Sombra sutil
  ctx.shadowColor = 'rgba(0,0,0,0.1)';
  ctx.shadowOffsetX = 1;
  ctx.shadowOffsetY = 1;
  ctx.shadowBlur = 2;
  
  const text = 'BO-TECH';
  const textWidth = ctx.measureText(text).width;
  
  // Máximo 5 repeticiones bien espaciadas
  const maxRepetitions = 5;
  const totalTextWidth = textWidth * maxRepetitions;
  const availableSpaceForSpacing = canvas.width - totalTextWidth;
  const spacing = availableSpaceForSpacing / (maxRepetitions + 1);
  
  // Dibujar con ligera variación en Y para efecto tejido
  for (let i = 0; i < maxRepetitions; i++) {
    const x = spacing + (i * (textWidth + spacing)) + (textWidth / 2);
    if (x + (textWidth / 2) <= canvas.width) {
      const yOffset = Math.sin(i * 0.8) * 1.5; // Variación muy sutil en Y
      ctx.fillText(text, x, (canvas.height / 2) + yOffset);
    }
  }
  
  ctx.restore();
  
  // Agregar patrón de tejido sutil
  addWeavePattern(ctx, canvas.width, canvas.height);
  
  return canvas.toDataURL();
}

function addWeavePattern(ctx, width, height) {
  ctx.save();
  
  // Líneas diagonales muy sutiles para simular tejido
  ctx.strokeStyle = 'rgba(0,0,0,0.02)';
  ctx.lineWidth = 0.5;
  
  // Líneas diagonales hacia la derecha
  for (let i = -height; i < width; i += 12) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i + height, height);
    ctx.stroke();
  }
  
  // Líneas diagonales hacia la izquierda
  ctx.strokeStyle = 'rgba(0,0,0,0.02)';
  for (let i = 0; i < width + height; i += 12) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i - height, height);
    ctx.stroke();
  }
  
  ctx.restore();
}

export function createCardGeometry() {
  // Geometría mejorada para la tarjeta
  return {
    card: {
      width: 1.6,
      height: 2.25,
      depth: 0.02
    },
    clip: {
      width: 0.4,
      height: 0.25,
      depth: 0.08
    },
    lanyard: {
      width: 0.08,  // Ancho de la cuerda
      length: 3.0,  // Longitud de la cuerda
      segments: 50  // Segmentos para suavidad
    }
  };
}

// Función auxiliar para crear geometría de cuerda curva
export function createLanyardGeometry(scene) {
  // Esta función sería para crear la geometría 3D de la cuerda
  // Usarías esto en tu código Three.js principal
  const geometry = createCardGeometry();
  
  // Puntos de control para la curva de la cuerda
  const curvePoints = [
    [0, 0.5, 0],     // Punto inicial (en el clip)
    [0.2, 0.3, 0.1], // Curva hacia afuera
    [0.1, -0.5, 0.2], // Punto medio colgando
    [0.3, -1.2, 0.1], // Curva hacia abajo
    [0.2, -1.8, 0]   // Punto final
  ];
  
  return {
    geometry: geometry,
    curvePoints: curvePoints,
    textureRepeat: {
      x: 1,    // Una repetición completa en X
      y: 20    // 20 repeticiones en Y para que se vea continuo
    }
  };
}

// Función para aplicar la textura correctamente
export function applyLanyardTexture(mesh, texture, THREE) {
  // Configurar la repetición de textura
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 20); // 1 en X, 20 en Y para repetición continua
  
  // Aplicar al material
  mesh.material.map = texture;
  mesh.material.needsUpdate = true;
}