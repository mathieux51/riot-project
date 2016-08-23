riot.tag2('app', '<p>Hello {person}</p> <greeting name="Mathieu"></greeting> <button onclick="{sayHello}">Say Hello!</button>', '', '', function(opts) {
    this.person = "buddy"
    this.sayHello = () => {
      console.log("Say Hello!")
    }
});

riot.tag2('greeting', '<h1>Hello, {opts.name}!</h1>', '', '', function(opts) {
});





















