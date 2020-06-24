const readline = require('readline-sync')



const content = {}
content.name = ""
content.subject = ""

content.name = setName("leone")
content.subject = setSubject("Subject")

start()

function start(){
  console.log(content)
}

function setSubject(subject){
  return subject
}

function setName(name){
  return name
  //return readline.question('Type your name: ')
}
