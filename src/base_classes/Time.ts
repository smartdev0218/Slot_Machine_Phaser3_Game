import Config from '../config';

//Class Time
export default class Time {
    private txtTime: Phaser.GameObjects.Text;
    private scene: any;

    constructor(scene: any) {
        this.scene = scene;
        this.addTime();
    }

    addTime() {
        this.txtTime = this.scene.add.text(Config.width - 1260, Config.height - 700, '', {
            fontSize : '20px',
            color : '#ffffff',
            fontFamily : 'PT Serif'
        });
        //function callbackTime
        this.callbackTime();
        //event loop time
        this.scene.time.addEvent({
            delay: 1000,
            callback: this.callbackTime,
            callbackScope: this,
            loop: true
        });
    }

    private callbackTime() {
        //get clock
        const d = new Date();
        let hours: string | number = d.getHours();
        hours = hours >= 10 ?  hours : '0' + hours;  
        let minutes: string | number = d.getMinutes();
        minutes = minutes >= 10 ? minutes : '0' + minutes;
        let seconds: string | number = d.getSeconds();
        seconds = seconds >= 10 ? seconds : '0' + seconds;
        const time = hours + ':' + minutes + ':' + seconds;
        this.txtTime.setText(time);
    }
}