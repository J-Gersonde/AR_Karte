window.addEventListener('DOMContentLoaded', () => {
    const marker = document.querySelector('a-marker');
  
    const island = document.createElement('a-sphere');
    island.setAttribute('position', '0 0.15 0');
    island.setAttribute('radius', '1');
    island.setAttribute('theta-length', '90');
    island.setAttribute('segments-height', '8');
    island.setAttribute('color', '#f7e6b2'); // heller Sand
    island.setAttribute('rotation', '0 0 0');
    marker.appendChild(island);
  


const trunk = document.createElement('a-cylinder');
trunk.setAttribute('position', '0 0.9 0'); // X=0, Y=Hälfte des Stamms, Z=0
trunk.setAttribute('radius', '0.06');
trunk.setAttribute('height', '1.8'); // etwas länger
trunk.setAttribute('color', '#7b4b1f');
marker.appendChild(trunk);


for (let i = 0; i < 6; i++) {
  const leaf = document.createElement('a-plane');
  leaf.setAttribute('position', '0 1.8 0'); // exakt oben auf dem Stamm
  leaf.setAttribute('rotation', `${-30 + i * 5} ${i * 60} 0`); // in alle Richtungen
  leaf.setAttribute('width', '1');
  leaf.setAttribute('height', '0.25');
  leaf.setAttribute('material', 'color: #2e8b57; side: double; opacity: 0.9');
  marker.appendChild(leaf);
}

  
    const sun = document.createElement('a-sphere');
    sun.setAttribute('position', '1.5 2 1');
    sun.setAttribute('radius', '0.35');
    sun.setAttribute('color', '#ffeb3b');
    sun.setAttribute('material', 'emissive: yellow; emissiveIntensity: 0.8');
    marker.appendChild(sun);

const water = document.createElement('a-ring');
water.setAttribute('position', '0 0.03 0'); // knapp über Markerboden
water.setAttribute('rotation', '-90 0 0'); // flach liegend
water.setAttribute('inner-radius', '1.05'); // knapp größer als Insel
water.setAttribute('radius', '2'); // Außenradius
water.setAttribute('color', '#88cde7'); // Wasserblau
water.setAttribute('opacity', '0.8');
marker.appendChild(water);

  });
  
