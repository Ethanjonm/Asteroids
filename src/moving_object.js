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
      vel: [0, 0],
      radius: 50,
      color: "blue"
    });
    
    ethan.draw(ctx);
  });

  MovingObject.prototype.move = function(){
    let currentPos = this.pos
    let this.vel[0]
  }
  
export default MovingObject;
