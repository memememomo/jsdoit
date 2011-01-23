var Circle = function(x, y, vx, vy, r) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.r = r;
    this.color = '#00F';
};

Circle.prototype.move = function(canvas) {
  this.x += this.vx;
  this.y += this.vy;
  
  if ( this.x - this.r < 0 ) {
      this.x = this.r;
    this.vx *= -1;
  }
  
  if ( this.x + this.r > canvas.width ) {
    this.x = canvas.width - this.r;
    this.vx = -1;
  }

  if ( this.y - this.r < 0 ) {
      this.y = this.r;
    this.vy *= -1;
  }

  if ( this.y + this.r > canvas.height ) {
    this.y = canvas.height - this.r;
    this.vy *= -1;
  }
};


Circle.prototype.draw = function(cc) {
    cc.beginPath();
    cc.strokeStyle = this.color;
    cc.fillStyle = this.color;
    cc.arc(this.x, this.y, this.r, Math.PI * 2, false);
    cc.fill();
    cc.stroke();
    cc.restore();
};

(function() {
  var canvas = document.getElementById('canvas');
  var cc = canvas.getContext('2d');

  var circle = new Circle(canvas.width/2, canvas.height/2, 2.0, 2.0, 30);

  var loop = function() {
    circle.move(canvas);
      
    cc.save();

      cc.beginPath();
      cc.clearRect(0, 0, canvas.width, canvas.height);
    cc.restore();

      circle.draw(cc);

      setTimeout(loop, 30);
    };
  

    loop();
})();

