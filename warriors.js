function Warrior(n){
    let name = n;  
    
    this.name = function(n){
      if( n !== undefined ) {  
        name = n;
      }
      return name;
    }
  }
  
  Warrior.prototype.toString = function(){
      return "Hi! my name's " + this.name();
  }
  
  let boris = new Warrior("Boris");
  console.log(boris.toString());  
  boris.name("Bobo");
  console.log(boris.toString());  