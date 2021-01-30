class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }
    display(){
        if (this.sling.bodyA){
            var pos1 = this.sling.bodyA.position
            var pos2 = this.sling.pointB
            push()
            stroke(42,28,8)
            if(pos1.y>=220){
                strokeWeight(7) 
                line(pos1.x-25,pos1.y-5,pos2.x,pos2.y)
                line(pos1.x-20,pos1.y-5 ,pos2.x+25,pos2.y-5) 
               
            }
            else{
                strokeWeight(2) 
                line(pos1.x+25,pos1.y-5,pos2.x,pos2.y)
                line(pos1.x+20,pos1.y-5 ,pos2.x+25,pos2.y-5)
                
            }
            pop()     
            }
        
    }
    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA=body
        }
}