import Config from "../config";
import Options from "../options";
// import class
import Sprite from "./Sprite";
import Tween from "./Tween";

// Class Base Spin
export default class BaseSpin {
  scene: any;
  bgSpin: Sprite;
  txtSpin: Phaser.GameObjects.DynamicBitmapText;
  tweens: Tween;

  constructor(scene: any) {
    this.scene = scene;
    this.addSpin();
  }

  addSpin() {
    this.bgSpin = new Sprite(
      this.scene,
      Config.width - 275,
      Config.height - 50,
      "bgButtons",
      "btn-spin.png"
    );
    // text spin
    this.txtSpin = this.scene.add.dynamicBitmapText(
      Config.width - 315,
      Config.height - 70,
      "txt_bitmap",
      Options.txtSpin,
      38
    );
    this.txtSpin.setDisplayCallback(this.scene.textCallback);
    this.bgSpin.on("pointerdown", this.playTweens, this);
    this.bgSpin.on("pointerup", () => this.bgSpin.setScale(1));
  }

  playTweens(): void {
    if (
      !Options.checkClick &&
      this.scene.valueMoney >= Options.coin * Options.line &&
      Options.txtAutoSpin === "AUTO"
    ) {
      // destroy line array
      this.destroyLineArr();
      // setTint
      this.setColor();
      Options.checkClick = true;
      this.bgSpin.setScale(0.9);
      // funtion remove text win
      this.removeTextWin();
      // save localStorage
      this.saveLocalStorage();
      // Class Tween
      this.tweens = new Tween(this.scene);
    }
  }

  destroyLineArr(): void {
    if (Options.lineArray.length > 0) {
      for (let i = 0; i < Options.lineArray.length; i++) {
        Options.lineArray[i].destroy();
      }
      Options.lineArray = [];
    }
  }

  removeTextWin(): void {
    // play audio button
    this.scene.audioPlayButton();

    if (this.scene.audioMusicName === "btn_music.png") {
      // stop audio win
      this.scene.audioObject.audioWin.stop();
      this.scene.audioObject.audioReels.play();
    }
    // set money
    this.scene.valueMoney -= Options.coin * Options.line;
    this.scene.txtMoney.setText(this.scene.valueMoney + "$");
    // remove text txtwin
    if (this.scene.txtWin) {
      this.scene.txtWin.destroy();
    }
  }

  setColor(): void {
    this.bgSpin.setTint(0xa09d9d);
    this.scene.autoSpin.buttonAuto.setTint(0xa09d9d);
    this.scene.maxBet.maxBet.setTint(0xa09d9d);
    this.scene.coin.coin.setTint(0xa09d9d);
    this.scene.btnLine.btnLine.setTint(0xa09d9d);
    this.scene.btnMusic.setTint(0xa09d9d);
    this.scene.btnSound.setTint(0xa09d9d);
  }

  saveLocalStorage(): void {
    if (localStorage.getItem("money")) {
      localStorage.removeItem("money");
      localStorage.setItem("money", this.scene.valueMoney);
    }
    localStorage.setItem("money", this.scene.valueMoney);
    this.scene.setTextX(this.scene.valueMoney);
    this.scene.txtMoney.setText(this.scene.valueMoney + "$");
  }
}