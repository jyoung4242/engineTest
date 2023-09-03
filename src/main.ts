import "./style.css";
import { UI } from "@peasy-lib/peasy-ui";
import { Engine } from "@peasy-lib/peasy-engine";

const model = {};
const template = `<div> Hello Peasy!!! </div>`;
await UI.create(document.body, model, template).attached;

const INPUT_DELAY = 5;
const PHYSICS_DELAY = 15;
const RENDER_DELAY = 7;

async function wait(ms: number) {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

class myScene {
  engine: Engine;
  constructor() {
    this.engine = Engine.create({ fps: 60, started: false, callback: this.GameLoop });
  }

  startEngine() {
    this.engine.start();
  }

  async pollForUserInput() {
    await wait(Math.random() * INPUT_DELAY);
  }

  async updatePhysics() {
    await wait(Math.random() * PHYSICS_DELAY);
  }

  async updateRenderer() {
    await wait(Math.random() * RENDER_DELAY);
  }

  GameLoop = async () => {
    await this.pollForUserInput();
    await this.updatePhysics();
    await this.updateRenderer();
  };
}

let scene = new myScene();
scene.startEngine();
