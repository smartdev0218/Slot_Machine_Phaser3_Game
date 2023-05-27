import { Scene } from 'phaser';

export default class Audio {
    scene: Scene;
    musicBackgroundDefault: any;
    audioReels: any;
    audioReelStop: any;
    audioWin: any;
    audioButton: any;
    audioLose: any;
    musicDefault: any;
    
    constructor(scene: Scene) {
        this.scene = scene;
        this.loadAudio();
    }

    loadAudio() {
        this.musicBackgroundDefault = this.scene.sound.add('backgroundDefault', {
            loop: true,
            volume: 1.5
        });
        this.audioReels = this.scene.sound.add('reels');
        this.audioReelStop = this.scene.sound.add('reelStop');
        this.audioWin = this.scene.sound.add('win', { loop: true });
        this.audioButton = this.scene.sound.add('button');
        this.audioLose = this.scene.sound.add('lose', { volume: 2.5 });
        this.musicDefault = this.scene.sound.add('musicDefault', {
            loop: true,
            volume: 2,
        });
    }
}