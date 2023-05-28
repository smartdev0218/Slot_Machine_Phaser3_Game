//Class Sprite
export default class Sprite extends Phaser.GameObjects.Sprite {
    constructor(
        scene: any,
        x: number,
        y: number,
        texture: string | Phaser.Textures.Texture,
        frame?: string | integer
    ) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.setInteractive();
    }
}