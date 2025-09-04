// Type your code below this line!

function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
    this.printMail = function (){

      console.log(this.subject+":"+this.message)
      
    }
  }  
// Aqui faltaban las variables subject y message, las agregamos  
const subject =  process.argv[2]  
const message =  process.argv[3]

  const newMail = new Mail(subject, message)
  
  // Type your code above this line!
  
  newMail.printMail()
