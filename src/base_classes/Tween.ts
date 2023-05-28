import Options from '../options';
import Spin from './Spin';

//Class Tween
export default class Tween {   
    scene: any;
    columnTween1: Phaser.Tweens.Tween;
    columnTween2: Phaser.Tweens.Tween;
    columnTween3: Phaser.Tweens.Tween;
    columnTween4: Phaser.Tweens.Tween;
    columnTween5: Phaser.Tweens.Tween;
    target1: any;
    target2: any;
    target3: any;
    target4: any;
    target5: any;
    
    constructor(scene: any) {
        this.scene = scene;
        this.renderTweens();
    }

    private renderTweens() {

        //column tweens 1
        this.columnTween1 = this.scene.tweens.add({
            targets: this.scene.container,
            props: { y: { value: "+=" + Options.symbolHeight, 
            duration: Options.duration }},
            repeat: Options.repeat[0],
            onRepeat: function(){
                const randomNumber = Phaser.Math.RND.between(0, 9);
                this.updateTo('y', this.targets[0].y + Options.symbolHeight, true);
                this.targets[0].first.y = this.targets[0].last.y - Options.symbolHeight;
                const symbol = this.targets[0].first;
                symbol.setVisible(true).setTexture('symbols_blur', 'symbols_' + randomNumber + '.png');
                this.targets[0].moveTo(symbol, 4);
            },
            onComplete: function() {
                this.targets[0].scene.tweens.add({
                    targets : this.targets[0],
                    props: { y: { value: "-=" + Options.symbolHeight, 
                            duration: Options.duration * 2 } },
                    repeat : 1,
                    onRepeat : function() {
                        this.updateTo('y', this.targets[0].y - Options.symbolHeight, true);
                    },
                    onComplete : function() {
                        this.targets[0].last.y = this.targets[0].first.y + 
                        Options.symbolHeight;
                        const symbol = this.targets[0].last as Phaser.GameObjects.Sprite;
                        this.targets[0].moveTo(symbol, 0);
                        //set texture symbols
                        for (let i = 0; i < 5; i++) {
                            const symbolsName = this.targets[0].list[i].frame.name;
                            this.targets[0].list[i].setTexture('symbols', symbolsName);
                        }
                        //play audio
                        if(this.targets[0].scene.audioMusicName === 'btn_music.png') {
                            this.targets[0].scene.audioObject.audioReelStop.play();
                        }     
                    }
                });
                this.target1 = this.targets[0];
            }
        }, this);


        //column tweens 2
        this.columnTween2 = this.scene.tweens.add({
            targets: this.scene.container2,
            props: { y: { value: "+=" + Options.symbolHeight, 
            duration: Options.duration } },
            repeat: Options.repeat[1],
            onRepeat: function(){
                const randomNumber = Phaser.Math.RND.between(0, 9);
                this.updateTo('y', this.targets[0].y + Options.symbolHeight, true);
                this.targets[0].first.y = this.targets[0].last.y - Options.symbolHeight;
                const symbol = this.targets[0].first as Phaser.GameObjects.Sprite;
                symbol.setVisible(true).setTexture('symbols_blur', 'symbols_' + randomNumber + '.png');
                this.targets[0].moveTo(symbol, 4);
            },
            onComplete: function() {
                this.targets[0].scene.tweens.add({
                    targets : this.targets[0],
                    props: { y: { value: "-=" + Options.symbolHeight, 
                            duration: Options.duration * 2 } },
                    repeat : 1,
                    onRepeat : function() {
                        this.updateTo('y', this.targets[0].y - Options.symbolHeight, true);
                    },
                    onComplete : function() {
                        this.targets[0].last.y = this.targets[0].first.y + 
                        Options.symbolHeight;
                        const symbol = this.targets[0].last as Phaser.GameObjects.Sprite;
                        this.targets[0].moveTo(symbol, 0);
                        //set texture symbols
                        for (let i = 0; i < 5; i++) {
                            const symbolsName = this.targets[0].list[i].frame.name;
                            this.targets[0].list[i].setTexture('symbols', symbolsName);
                        }
                        //play audio
                        if(this.targets[0].scene.audioMusicName === 'btn_music.png') {
                            this.targets[0].scene.audioObject.audioReelStop.play();
                        }     
                    }
                });
                this.target2 = this.targets[0];
            }
        }, this);


        //column tweens 3
        this.columnTween3 = this.scene.tweens.add({
            targets: this.scene.container3,
            props: { y: { value: "+=" + Options.symbolHeight, 
            duration: Options.duration } },
            repeat: Options.repeat[2],
            onRepeat: function(){
                const randomNumber = Phaser.Math.RND.between(0, 9);
                this.updateTo('y', this.targets[0].y + Options.symbolHeight, true);
                this.targets[0].first.y = this.targets[0].last.y - Options.symbolHeight;
                const symbol = this.targets[0].first;
                symbol.setVisible(true).setTexture('symbols_blur', 'symbols_' + randomNumber + '.png');
                this.targets[0].moveTo(symbol, 4);
            },
            onComplete: function() {
                this.targets[0].scene.tweens.add({
                    targets : this.targets[0],
                    props: { y: { value: "-=" + Options.symbolHeight, 
                            duration: Options.duration * 2 } },
                    repeat : 1,
                    onRepeat : function() {
                        this.updateTo('y', this.targets[0].y - Options.symbolHeight, true);
                    },
                    onComplete : function() {
                        this.targets[0].last.y = this.targets[0].first.y + 
                        Options.symbolHeight;
                        const symbol = this.targets[0].last;
                        this.targets[0].moveTo(symbol, 0);
                        //set texture symbols
                        for (let i = 0; i < 5; i++) {
                            const symbolsName = this.targets[0].list[i].frame.name;
                            this.targets[0].list[i].setTexture('symbols', symbolsName);
                        }
                        //play audio
                        if(this.targets[0].scene.audioMusicName === 'btn_music.png') {
                            this.targets[0].scene.audioObject.audioReelStop.play();
                        }     
                    }
                });  
                this.target3 = this.targets[0];
            }
        }, this);


        //column tweens 4
        this.columnTween4 = this.scene.tweens.add({
            targets: this.scene.container4,
            props: { y: { value: "+=" + Options.symbolHeight, 
            duration: Options.duration } },
            repeat: Options.repeat[3],
            onRepeat: function(){
                const randomNumber = Phaser.Math.RND.between(0, 9);
                this.updateTo('y', this.targets[0].y + Options.symbolHeight, true);
                this.targets[0].first.y = this.targets[0].last.y - Options.symbolHeight;
                const symbol = this.targets[0].first;
                symbol.setVisible(true).setTexture('symbols_blur', 'symbols_' + randomNumber + '.png');
                this.targets[0].moveTo(symbol, 4);
            },
            onComplete: function() {
                this.targets[0].scene.tweens.add({
                    targets : this.targets[0],
                    props: { y: { value: "-=" + Options.symbolHeight, 
                            duration: Options.duration * 2 } },
                    repeat : 1,
                    onRepeat : function() {
                        this.updateTo('y', this.targets[0].y - Options.symbolHeight, true);
                    },
                    onComplete : function() {
                        this.targets[0].last.y = this.targets[0].first.y + 
                        Options.symbolHeight;
                        const symbol = this.targets[0].last;
                        this.targets[0].moveTo(symbol, 0);
                        //set texture symbols
                        for (let i = 0; i < 5; i++) {
                            const symbolsName = this.targets[0].list[i].frame.name;
                            this.targets[0].list[i].setTexture('symbols', symbolsName);
                        }
                        //play audio
                        if(this.targets[0].scene.audioMusicName === 'btn_music.png') {
                            this.targets[0].scene.audioObject.audioReelStop.play();
                        }     
                    }
                });  
                this.target4 = this.targets[0];
            }
        }, this);


        //column tweens 5
        this.columnTween5 = this.scene.tweens.add({
            targets: this.scene.container5,
            props: { y: { value: "+=" + Options.symbolHeight, 
            duration: Options.duration } },
            repeat: Options.repeat[4],
            onRepeat: function(){
                const randomNumber = Phaser.Math.RND.between(0, 9);
                this.updateTo('y', this.targets[0].y + Options.symbolHeight, true);
                this.targets[0].first.y = this.targets[0].last.y - Options.symbolHeight;
                const symbol = this.targets[0].first;
                symbol.setVisible(true).setTexture('symbols_blur', 'symbols_' + randomNumber + '.png');
                this.targets[0].moveTo(symbol, 4);
            },
            onComplete: function () {
                this.targets[0].scene.tweens.add({
                    targets : this.targets[0],
                    props: { y: { value: "-=" + Options.symbolHeight, 
                            duration: Options.duration * 2 } },
                    repeat : 1,
                    onRepeat : function() {
                        this.updateTo('y', this.targets[0].y - Options.symbolHeight, true);
                    },
                    onComplete : function() {
                        this.targets[0].last.y = this.targets[0].first.y + 
                        Options.symbolHeight;
                        const symbol = this.targets[0].last;
                        this.targets[0].moveTo(symbol, 0);
                        //set texture symbols
                        for (let i = 0; i < 5; i++) {
                            const symbolsName = this.targets[0].list[i].frame.name;
                            this.targets[0].list[i].setTexture('symbols', symbolsName);
                        }
                        if(this.targets[0].scene.audioMusicName === 'btn_music.png') {
                            //play audio
                            this.targets[0].scene.audioObject.audioReelStop.play();
                            //stop audio
                            this.targets[0].scene.audioObject.audioReels.stop();
                        }
                        //add class Spin
                        const spin = new Spin(this.targets[0].scene);
                        //reset check click
                        Options.checkClick = false;     
                    }
                });
                this.target5 = this.targets[0];
            },
        }, this);
    }
}