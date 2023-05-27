import Config from "../config";
import Options from "../options";
import Sprite from "./Sprite";
import GameScene from "~/base_scenes/Game";

// Class Maxbet
export default class Maxbet {
  scene: any;
  maxBet: Sprite;
  txtMaxBet: Phaser.GameObjects.DynamicBitmapText;
  txtCountMaxBet: Phaser.GameObjects.Text;

  constructor(scene: any) {
    this.scene = scene;
    this.addMaxbet();
  }

  addMaxbet() {
    this.maxBet = new Sprite(
      this.scene,
      Config.width - 477,
      Config.height - 50,
      "bgButtons",
      "btn-maxbet.png"
    );
    this.txtMaxBet = this.scene.add.dynamicBitmapText(
      Config.width - 550,
      Config.height - 70,
      "txt_bitmap",
      Options.txtMaxBet,
      38
    );
    this.txtMaxBet.setDisplayCallback(this.scene.textCallback);
    this.txtCountMaxBet = this.scene.add.text(
      Config.width - 555,
      Config.height - 140,
      "BET: " + Options.coin * Options.line,
      {
        fontSize: "35px",
        color: "#fff",
        fontFamily: "PT Serif",
      }
    );
    // pointer down
    this.maxBet.on("pointerdown", this.onMaxbet, this);
    // pointer up
    this.maxBet.on("pointerup", () => this.maxBet.setScale(1));
  }

  onMaxbet(): void {
    if (
      !Options.checkClick &&
      Options.line * Options.coin < 1000 &&
      Options.txtAutoSpin === "AUTO"
    ) {
      this.maxBet.setScale(0.9);
      // play audio button
      this.scene.audioPlayButton();
      Options.line = 20;
      this.scene.btnLine.txtCountLine.setText(String(Options.line));
      Options.coin = 50;
      this.scene.coin.txtCountCoin.setText(String(Options.coin));
      this.txtCountMaxBet.setText("BET: " + Options.line * Options.coin);
    }
  }
}