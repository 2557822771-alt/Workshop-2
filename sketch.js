let frames = [];
let FRAME_COUNT = 15;
let frameIndex = 0;

function preload() {
  // 加载 1.png ~ 15.png
  for (let i = 1; i <= FRAME_COUNT; i++) {
    const path = `assets/frames/${i}.PNG`;
    frames.push(loadImage(
      path,
      () => print(`✅  ${path}`),
      () => print(`❌  ${path}`)
    ));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(255); // 白色背景

  // 获取触摸或鼠标的横向位置
  const x = touches[0]?.x ?? mouseX;
  const t = constrain(x / width, 0, 1);
  frameIndex = floor(t * (FRAME_COUNT - 1));

  // 显示当前帧
  const img = frames[frameIndex];
  if (img) {
    const scaleFit = min(width / img.width, height / img.height) * 0.9;
    image(img, width / 2, height / 2, img.width * scaleFit, img.height * scaleFit);
  }
}

function touchMoved() {
  return false; 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
