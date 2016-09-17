Invoker
============
It's a process manager. To start it :
```bash
invoker start invoker.ini
```
It will run two commands :
```bash
riot -w  src/public src/public/tags.js
nodemon -w src/server.js src/server.js
```
