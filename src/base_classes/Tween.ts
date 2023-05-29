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
        Options.getSymbolNum();
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
                        //combination reels with winning rate
                        if(Options.line == 1)
                            this.targets[0].list[2].setTexture('symbols', `symbols_${Options.symbolNum}.png`);
                        else if(Options.line == 2)
                            this.targets[0].list[3].setTexture('symbols', `symbols_${Options.symbolNum}.png`);
                        else if(Options.line == 3)
                            this.targets[0].list[1].setTexture('symbols', `symbols_${Options.symbolNum}.png`);
                        else if(Options.line == 4)
                            this.targets[0].list[3].setTexture('symbols', `symbols_${Options.symbolNum}.png`);
                        else if(Options.line == 5)
                            this.targets[0].list[1].setTexture('symbols', `symbols_${Options.symbolNum}.png`);
                        else if(Options.line == 6)
                            this.targets[0].list[2].setTexture('symbols', `symbols_${Options.symbolNum}.png`);
                        else if(Options.line == 7)
                            this.targets[0].list[2].setTexture('symbols', `symbols_${Options.symbolNum}.png`);
                        else if(Options.line == 8)
                            this.targets[0].list[3].setTexture('symbols', `symbols_${Options.symbolNum}.png`);
                        else if(Options.line == 9)
                            this.targets[0].list[1].setTexture('symbols', `symbols_${Options.symbolNum}.png`);
                        else if(Options.line == 10)
                            this.targets[0].list[2].setTexture('symbols', `symbols_${Options.symbolNum}.png`);
                        else if(Options.line == 11)
                            this.targets[0].list[2].setTexture('symbols', `symbols_${Options.symbolNum}.png`);
                        else if(Options.line == 12)
                            this.targets[0].list[3].setTexture('symbols', `symbols_${Options.symbolNum}.png`);
                        else if(Options.line == 13)
                            this.targets[0].list[1].setTexture('symbols', `symbols_${Options.symbolNum}.png`);
                        else if(Options.line == 14)
                            this.targets[0].list[3].setTexture('symbols', `symbols_${Options.symbolNum}.png`);
                        else if(Options.line == 15)
                            this.targets[0].list[1].setTexture('symbols', `symbols_${Options.symbolNum}.png`);
                        else if(Options.line == 16)
                            this.targets[0].list[2].setTexture('symbols', `symbols_${Options.symbolNum}.png`);
                        else if(Options.line == 17)
                            this.targets[0].list[2].setTexture('symbols', `symbols_${Options.symbolNum}.png`);
                        else if(Options.line == 18)
                            this.targets[0].list[3].setTexture('symbols', `symbols_${Options.symbolNum}.png`);
                        else if(Options.line == 19)
                            this.targets[0].list[1].setTexture('symbols', `symbols_${Options.symbolNum}.png`);
                        else if(Options.line == 20)
                            this.targets[0].list[3].setTexture('symbols', `symbols_${Options.symbolNum}.png`);
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
                        Options.getSymbolNum1();
                        this.targets[0].last.y = this.targets[0].first.y + 
                        Options.symbolHeight;
                        const symbol = this.targets[0].last as Phaser.GameObjects.Sprite;
                        this.targets[0].moveTo(symbol, 0);
                        //set texture symbols
                        for (let i = 0; i < 5; i++) {
                            const symbolsName = this.targets[0].list[i].frame.name;
                            this.targets[0].list[i].setTexture('symbols', symbolsName);
                        }
                        //combination reels with winning rate
                        if(Options.line == 1)
                            this.targets[0].list[2].setTexture('symbols', `symbols_${Options.symbolNum1}.png`);
                        else if(Options.line == 2)
                            this.targets[0].list[3].setTexture('symbols', `symbols_${Options.symbolNum1}.png`);
                        else if(Options.line == 3)
                            this.targets[0].list[1].setTexture('symbols', `symbols_${Options.symbolNum1}.png`);
                        else if(Options.line == 4)
                            this.targets[0].list[2].setTexture('symbols', `symbols_${Options.symbolNum1}.png`);
                        else if(Options.line == 5)
                            this.targets[0].list[2].setTexture('symbols', `symbols_${Options.symbolNum1}.png`);
                        else if(Options.line == 6)
                            this.targets[0].list[3].setTexture('symbols', `symbols_${Options.symbolNum1}.png`);
                        else if(Options.line == 7)
                            this.targets[0].list[1].setTexture('symbols', `symbols_${Options.symbolNum1}.png`);
                        else if(Options.line == 8)
                            this.targets[0].list[3].setTexture('symbols', `symbols_${Options.symbolNum1}.png`);
                        else if(Options.line == 9)
                            this.targets[0].list[1].setTexture('symbols', `symbols_${Options.symbolNum1}.png`);
                        else if(Options.line == 10)
                            this.targets[0].list[1].setTexture('symbols', `symbols_${Options.symbolNum1}.png`);
                        else if(Options.line == 11)
                            this.targets[0].list[3].setTexture('symbols', `symbols_${Options.symbolNum1}.png`);
                        else if(Options.line == 12)
                            this.targets[0].list[2].setTexture('symbols', `symbols_${Options.symbolNum1}.png`);
                        else if(Options.line == 13)
                            this.targets[0].list[2].setTexture('symbols', `symbols_${Options.symbolNum1}.png`);
                        else if(Options.line == 14)
                            this.targets[0].list[2].setTexture('symbols', `symbols_${Options.symbolNum1}.png`);
                        else if(Options.line == 15)
                            this.targets[0].list[2].setTexture('symbols', `symbols_${Options.symbolNum1}.png`);
                        else if(Options.line == 16)
                            this.targets[0].list[2].setTexture('symbols', `symbols_${Options.symbolNum1}.png`);
                        else if(Options.line == 17)
                            this.targets[0].list[2].setTexture('symbols', `symbols_${Options.symbolNum1}.png`);
                        else if(Options.line == 18)
                            this.targets[0].list[3].setTexture('symbols', `symbols_${Options.symbolNum1}.png`);
                        else if(Options.line == 19)
                            this.targets[0].list[1].setTexture('symbols', `symbols_${Options.symbolNum1}.png`);
                        else if(Options.line == 20)
                            this.targets[0].list[1].setTexture('symbols', `symbols_${Options.symbolNum1}.png`);
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
                        Options.getSymbolNum2();
                        this.targets[0].last.y = this.targets[0].first.y + 
                        Options.symbolHeight;
                        const symbol = this.targets[0].last;
                        this.targets[0].moveTo(symbol, 0);
                        //set texture symbols
                        for (let i = 0; i < 5; i++) {
                            const symbolsName = this.targets[0].list[i].frame.name;
                            this.targets[0].list[i].setTexture('symbols', symbolsName);
                        }
                        //combination reels with winning rate
                        if(Options.line == 1)
                            this.targets[0].list[2].setTexture('symbols', `symbols_${Options.symbolNum2}.png`);
                        else if(Options.line == 2)
                            this.targets[0].list[3].setTexture('symbols', `symbols_${Options.symbolNum2}.png`);
                        else if(Options.line == 3)
                            this.targets[0].list[1].setTexture('symbols', `symbols_${Options.symbolNum2}.png`);
                        else if(Options.line == 4)
                            this.targets[0].list[1].setTexture('symbols', `symbols_${Options.symbolNum2}.png`);
                        else if(Options.line == 5)
                            this.targets[0].list[3].setTexture('symbols', `symbols_${Options.symbolNum2}.png`);
                        else if(Options.line == 6)
                            this.targets[0].list[3].setTexture('symbols', `symbols_${Options.symbolNum2}.png`);
                        else if(Options.line == 7)
                            this.targets[0].list[1].setTexture('symbols', `symbols_${Options.symbolNum2}.png`);
                        else if(Options.line == 8)
                            this.targets[0].list[2].setTexture('symbols', `symbols_${Options.symbolNum2}.png`);
                        else if(Options.line == 9)
                            this.targets[0].list[2].setTexture('symbols', `symbols_${Options.symbolNum2}.png`);
                        else if(Options.line == 10)
                            this.targets[0].list[2].setTexture('symbols', `symbols_${Options.symbolNum2}.png`);
                        else if(Options.line == 11)
                            this.targets[0].list[2].setTexture('symbols', `symbols_${Options.symbolNum2}.png`);
                        else if(Options.line == 12)
                            this.targets[0].list[2].setTexture('symbols', `symbols_${Options.symbolNum2}.png`);
                        else if(Options.line == 13)
                            this.targets[0].list[2].setTexture('symbols', `symbols_${Options.symbolNum2}.png`);
                        else if(Options.line == 14)
                            this.targets[0].list[3].setTexture('symbols', `symbols_${Options.symbolNum2}.png`);
                        else if(Options.line == 15)
                            this.targets[0].list[1].setTexture('symbols', `symbols_${Options.symbolNum2}.png`);
                        else if(Options.line == 16)
                            this.targets[0].list[3].setTexture('symbols', `symbols_${Options.symbolNum2}.png`);
                        else if(Options.line == 17)
                            this.targets[0].list[1].setTexture('symbols', `symbols_${Options.symbolNum2}.png`);
                        else if(Options.line == 18)
                            this.targets[0].list[1].setTexture('symbols', `symbols_${Options.symbolNum2}.png`);
                        else if(Options.line == 19)
                            this.targets[0].list[3].setTexture('symbols', `symbols_${Options.symbolNum2}.png`);
                        else if(Options.line == 20)
                            this.targets[0].list[1].setTexture('symbols', `symbols_${Options.symbolNum2}.png`);
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