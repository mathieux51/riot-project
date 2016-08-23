<test>
  <h1>{name}</h1>
  <script>
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
  </script>
</test>