class Ground  {
    constructor(x,y,w,h)
    {
        this.x = x
        this.y = y
        this.width = w
        this.height = h
        var options = {
        isStatic: true
                      }
        this.body = Bodies.rectangle(x,y,w,h,options)
    World.add(world,this.body)

    }
    display(){
        var a = this.body.position
        rect(a.x,a.y,this.width,this.height)
    }
}