riot.tag2('app', '<p>Hello {person}</p> <greeting name="Mathieu"></greeting> <button class="btn btn-primary" onclick="{sayHello}">Say Hello!</button> <p> Time to get {opts.name}</p>', '', '', function(opts) {
    this.person = "buddy"
    this.sayHello = () => {
      console.log("Say Hello!")
    }
});

riot.tag2('greeting', '<h1>Hello, {opts.name}!</h1>', '', '', function(opts) {
});





















riot.tag2('test', '<h1>{name}</h1>', '', '', function(opts) {
    this.name = "Mathieu"
    this.on('mount', function() {
      console.log("mount")
      setTimeout( () => {
        console.log("setTimeout")
        this.name = "Bernard"
        this.update()
      }, 3000)
    })
    this.on('update', function() {
      console.log("update")
    })
});