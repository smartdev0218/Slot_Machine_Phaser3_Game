import Options from "../options";
import GameScene from "~/base_scenes/Game";

// Class Container
export default class Container extends Phaser.GameObjects.Container {
  constructor(scene: any, x: number, y: number) {
    super(scene, x, y);
    scene.add.existing(this);
    // symbols column
    const symbols1 = scene.add.sprite(0, 0, "symbols", "symbols_" + this.randomBetween(0, 9) + ".png");
    const symbols2 = scene.add.sprite(
      0,
      -Options.symbolHeight,
      "symbols",
      "symbols_" + this.randomBetween(0, 9) + ".png"
    );
    const symbols3 = scene.add.sprite(
      0,
      -Options.symbolHeight * 2,
      "symbols",
      "symbols_" + this.randomBetween(0, 9) + ".png"
    );
    const symbols4 = scene.add.sprite(
      0,
      -Options.symbolHeight * 3,
      "symbols",
      "symbols_" + this.randomBetween(0, 9) + ".png"
    );
    const symbols5 = scene.add.sprite(
      0,
      -Options.symbolHeight * 4,
      "symbols",
      "symbols_" + this.randomBetween(0, 9) + ".png"
    );
    this.add([symbols1, symbols2, symbols3, symbols4, symbols5]);
  }

  private randomBetween(min: number, max: number): number {
    return Phaser.Math.Between(min, max);
  }
}