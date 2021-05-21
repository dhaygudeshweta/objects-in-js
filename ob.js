function dog(name,age,color)
{
    this.fname=name;
    this.Age=age;
    this.dcolor=color;
    

}
mydog=new dog("spike","1","black");

console.log(mydog.Age +" " +mydog.fname+" " +mydog.dcolor);

