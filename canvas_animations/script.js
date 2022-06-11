const body = document.body;

function clock(){
    const myCanvas = document.querySelector('#myCanvas');
    if(myCanvas.getContext){
        const ctx = myCanvas.getContext('2d');

        const now = new Date();

        //Saving state and clearing canvas
        ctx.save();
        ctx.clearRect(0, 0, myCanvas.width, myCanvas.width);
        //Changing our start from 0, 0 to 75, 75
        ctx.translate(75, 75);
        //Changing the scale in x and y
        ctx.scale(0.4, 0.4);
        //Rotating 90 degrees
        ctx.rotate(-Math.PI / 2);
        //Selecting style
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'white';
        ctx.lineWidth = 8;
        ctx.lineCap = 'round';

        //Hour marks
        ctx.save()
        for(let i = 0; i < 12; i++){
            ctx.beginPath();
            ctx.rotate(Math.PI/6);
            ctx.moveTo(100, 0);
            ctx.lineTo(120, 0);
            ctx.stroke();
        }
        ctx.restore()
       
        //Minutes marks
        ctx.save()
        ctx.lineWidth = 8;
        for(let i = 0; i < 60; i++){
            if(i % 5 != 0){
                ctx.beginPath();
                ctx.moveTo(118, 0);
                ctx.lineTo(120, 0);
                ctx.stroke();
            }
            ctx.rotate(Math.PI/30);
        }
        ctx.restore()

        const sec = now.getSeconds();
        const min = now.getMinutes();
        const hr  = now.getHours() % 12;

        ctx.fillStyle = 'black';

        //Write hours
        ctx.save();
        ctx.rotate(hr * (Math.PI/6) + (Math.PI/360) * min + (Math.PI/21600)*sec)
        ctx.lineWidth = 14;
        ctx.beginPath();
        ctx.moveTo(-20, 0);
        ctx.lineTo(80, 0);
        ctx.stroke();
        ctx.restore();

        //Write minutes
        ctx.save();
        ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.moveTo(-28, 0);
        ctx.lineTo(112, 0);
        ctx.stroke();
        ctx.restore();

        // Write seconds
        //Line pointer
        ctx.save();
        ctx.rotate(sec * Math.PI / 30);
        ctx.strokeStyle = '#D40000';
        ctx.fillStyle = '#D40000';
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(-30, 0);
        ctx.lineTo(83, 0);
        ctx.stroke();
        //Cirle in the end 
        ctx.beginPath();
        ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(92, 0, 10, 0, Math.PI * 2, true);
        ctx.stroke();
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0)';
        ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.restore();

        //Outside circle of the clock
        ctx.beginPath();
        ctx.lineWidth = 14;
        ctx.strokeStyle = '#325FA2';
        ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
        ctx.stroke();

        ctx.restore();

        window.requestAnimationFrame(clock);
    }
    
}


window.requestAnimationFrame(clock);