<app>
  <p>Hello {person}</p>
  <greeting name="Mathieu" />
  <button class="btn btn-primary" onclick={sayHello}>Say Hello!</button>
  <p> Time to get { opts.name }</p>
  <script>
    this.person = "buddy"
    this.sayHello = () => {
      console.log("Say Hello!")
    }
  </script>
</app>

<greeting>
  <h1>Hello, {opts.name}!</h1>
</greeting>


















<!--Examples-->
<!--<todo>
    <ul>
      <li each={opts.users}>{name}</li>
    </ul>
  </todo>-->
<!--
  <hello>
  <h1>Hello</h1>
  <text></text>
  <script>
    console.log("Hello I'm the hello tag...")
  </script>
</hello>

<text>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam dignissimos atque esse nostrum qui sapiente nobis, eos hic nam eum accusantium voluptatem libero fugit excepturi quod accusamus, repellendus dolor. Maxime.</p>
</text>-->