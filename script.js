const body = document.body;

function draw(){
    const myCanvas = document.querySelector('#myCanvas');
    if(myCanvas.getContext){
        const ctx = myCanvas.getContext('2d');

        // WORKING WITH RECTANGES
        ctx.fillStyle = 'rgb(200,0,0)';
        ctx.fillRect(25, 25, 48, 48);
        ctx.fillRect(75, 25, 48, 48);
        ctx.fillRect(75, 75, 48, 48);
        ctx.fillRect(25, 75, 48, 48);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50, 50, 50, 50);

        //DRAWING PATHS (A HOUSE)
        ctx.lineWidth = 5; 
        //Roof
        ctx.beginPath();
        ctx.moveTo(25, 175);
        ctx.lineTo(125, 175);
        ctx.lineTo(75, 125);
        ctx.closePath();
        ctx.stroke();
        //Wall
        ctx.strokeRect(35, 175, 80, 60);
        //Door
        ctx.fillStyle = 'black';
        ctx.fillRect(60, 175+60, 30, -40);

        //DRAWING ARCS
        for(let i = 0; i < 4; i++){
            for(let j = 0; j < 3; j++){ 
                ctx.beginPath();
                const x = 200 + j * 50;
                const y = 50 + i * 50;
                const radius = 25; //arc radius
                const startAngle = 0; //Starting point
                const endAngle = Math.PI + (Math.PI * j) / 2;
                const counterclockwise = i % 2 !== 0;
                ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
                if(i > 1){
                    ctx.fill();
                }else{
                    ctx.stroke();
                }
            }
        }

        ctx.translate(220, 220);
        
    }
    
}


body.onload = draw();