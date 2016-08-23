
var ajax = {
  port: 3000,
  get: function (url, cb) {
    this.request('GET', url, null, cb)
  },
  post: function (url, body, cb) { this.request('POST', url, body, cb) },
  delete: function(url, body, cb){ this.request('DELETE', url, body, cb)},
  request: function (method, url, body, cb) {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = () => {
      if(xhttp.readyState == 4) {
        const status = xhttp.status
        if(xhttp.status == 200) {
          const pets = xhttp.response
          cb(null, xhttp.response)
        }   
        else if(xhttp.status == 404) {
          cb({
            status,
            title: "Pet Server Error",
            message: "We were unable to process your request at this time!", 
          }, xhttp.response)
        }
        else if(xhttp.status == 403) {
          cb({
            status,
            title: "Pet Already Exists",
            message: "Please choose another name!", 
          }, xhttp.response)
        }
        else {
          const error = {
            status: 500,
            title: "Holy Crap Batman!",
            message: "Unhandled error condition (status code) in xhttp handler.", 
          }
          console.error(error.message)
          cb(error, xhttp.response)
        }
      } 
    }
    xhttp.responseType = "json"
    xhttp.open(method, `http://localhost:${this.port}${url}`, true)
    xhttp.setRequestHeader('Content-Type', 'application/json')
    xhttp.send(JSON.stringify(body))
  }
}

var users = {
  all: function(cb) {
    ajax.get('/users', (err, users) => {
      cb(err, users)
    })
  }
}

// function initialize() {
//   users.all((err, users) => {
//     console.log(users)
//     riot.mount('todo', users)
//   })
// }

// initialize()

riot.mount('*', users)

