class Paper {
    constructor(){
        var options ={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
        density:1.2
        }
        this.body = Bodies.circle(10,10,20,options) 
         World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
        ellipse(0,0,40,40)
        pop()
    }
}