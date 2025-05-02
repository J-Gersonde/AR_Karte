AFRAME.registerComponent('robot-animation', {
  tick: function (time, timeDelta) {
    const robot = this.el;

    // Drehen
    let rot = robot.getAttribute('rotation');
    rot.y += timeDelta * 0.05;
    robot.setAttribute('rotation', rot);

    // Leuchteffekt (pulsierend)
    let glow = Math.sin(time / 500) * 0.5 + 0.5;
    const children = robot.children;
    for (let i = 0; i < children.length; i++) {
      if (children[i].getAttribute('material')) {
        children[i].setAttribute('material', 'emissive', `rgb(${glow * 255}, ${glow * 255}, ${glow * 255})`);
      }
    }
  }
});

window.addEventListener('load', () => {
  const robot = document.getElementById('robot');
  robot.setAttribute('robot-animation', '');

  const starsContainer = document.getElementById('stars');
  for (let i = 0; i < 50; i++) {
    const star = document.createElement('a-sphere');
    const x = Math.random() * 4 - 2;
    const y = Math.random() * 4;
    const z = Math.random() * 4 - 2;
    star.setAttribute('position', `${x} ${y} ${z}`);
    star.setAttribute('radius', 0.05);
    star.setAttribute('color', 'yellow');
    starsContainer.appendChild(star);
  }
});
