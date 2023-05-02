function MovingObject(obj) {
        this.pos = obj.pos
        this.vel = obj.vel
        this.radius = obj.radius
        this.color = obj.color
}
MovingObject.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 30;
    ctx.fillStyle = this.color;
    ctx.fill();
  }



document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("game-canvas");
  const ctx = canvasEl.getContext("2d");
    
  const ethan = new MovingObject({
     pos: [100, 100],
    vel: [1, 1],
    radius: 50,
     color: "blue"
  });

  ethan.draw(ctx);
      setInterval(() => {
    ethan.move();
    ctx.clearRect(0,0, canvasEl.width, canvasEl.height);
    ethan.draw(ctx)
  }, 10)


});

MovingObject.prototype.move = function(){
  this.pos[0] += this.vel[0]
  this.pos[1] += this.vel[1]
}




export default MovingObject;
