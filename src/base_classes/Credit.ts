import Options from "../options";
import Sprite from "./Sprite";
import Config from "../config";
import GameScene from "~/base_scenes/Game";

// Class Credit
export default class Credit {
  scene: any;
  credits: Sprite;
  paylines!: Sprite;
  btnExit!: Sprite;

  constructor(scene: any) {
    this.scene = scene;
    this.addCredit();
  }

  addCredit() {
    this.credits = new Sprite(
      this.scene,
      Config.width - 235,
      Config.height - 680,
      "about",
      "btn-credits.png"
    ).setScale(0.7);
    this.credits.on("pointerdown", () => {
      // play audio button
      this.scene.audioPlayButton();
      this.paylines = new Sprite(
        this.scene,
        Config.width / 2,
        Config.height / 2,
        "about",
        "palines.png"
      ).setDepth(1);
      this.btnExit = new Sprite(
        this.scene,
        Config.width - 30,
        Config.height - 635,
        "bgButtons",
        "btn_exit.png"
      )
        .setScale(0.9)
        .setDepth(1);
      this.btnExit.on("pointerdown", this.deleteCredit, this);
    });
  }

  private deleteCredit(): void {
    // play audio button
    this.scene.audioPlayButton();
    this.btnExit.destroy();
    this.paylines.destroy();
  }
}