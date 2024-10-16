const user = {
    username: "bharati",
    price: 999,
    welcomeMessage: function(){
         console.log(`${this.username}, welcome to website`);//this means current context
         console.log(this);//this keyword talks about the current context

    }
}
// user.welcomeMessage()
// user.username = "sammy"
// user.welcomeMessage()

 console.log(this);