// Roboter dreht sich und leuchtet
AFRAME.registerComponent('robot-animation', {
  schema: {},
  init: function () {
    this.lightIntensity = 0;
    this.increasing = true;
  },
  tick: function (time, timeDelta) {
    const robot = this.el;
    let rot = robot.getAttribute('rotation');
    rot.y += timeDelta * 0.05; // Dreht sich langsam
    robot.setAttribute('rotation', rot);

    // Leuchteffekt (emissive pulsierend)
    let colorIntensity = Math.sin(time / 500) * 0.5 + 0.5; // 0–1
    const children = robot.children;
    for (let i = 0; i < children.length; i++) {
      if (children[i].getAttribute('material')) {
        children[i].setAttribute(
          'material',
          'emissive',
          `rgb(${colorIntensity * 255}, ${colorIntensity * 255}, ${colorIntensity * 255})`
        );
      }
    }
  }
});

// Sterne erzeugen
window.addEventListener('load', () => {
  const robot = document.getElementById('robot');
  robot.setAttribute('robot-animation', ''); // Aktiviert Drehung + Glow

  const starsContainer = document.getElementById('stars');

  for (let i = 0; i < 50; i++) {
    let star = document.createElement('a-sphere');
    let x = Math.random() * 4 - 2;
    let y = Math.random() * 4;
    let z = Math.random() * 4 - 2;

    star.setAttribute('position', `${x} ${y} ${z}`);
    star.setAttribute('radius', 0.05);
    star.setAttribute('color', 'yellow');

    starsContainer.appendChild(star);
  }
});
