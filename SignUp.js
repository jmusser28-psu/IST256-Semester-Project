function nameHandling(name) {
   let valid = false;


   if (name.length == 0) {
      lengthValid = false;
      throw "Please enter a name";
   }

   for (let i = 0; i < name.length; i++) {
      if ((name.charAt(i) >= 65 && name.charAt(i) <= 90) || !(name.charAt(i) >= 97 && name.charAt(i) <= 122)) {
         valid = true;
      }
      else {
        valid = false;
        throw `invalid character: ${name.charA(i)}`;
      }
   }
}


function emailHandling(email) {
    let valid = false;

    if (email.length == 0) {
        valid = false;
        throw "Please enter a name";
    }

    for (let i = 0; i < email.length; i++) {
      if ((email.charCodeAt(i) >= 64 && email.charCodeAt(i) <= 90) || (email.charCodeAt(i) >= 97 && email.charCodeAt(i) <= 122) || (email.charCodeAt(i) == 46)) {
         valid = true;
      }
   }

   for (let i = 0; i < email.length; i++) {
      if (email.charCodeAt(i) == 46) {
         valid = true;
      }
   }

    console.log(valid);
}

emailHandling("jmusser28@psu.edu");
