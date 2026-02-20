function nameHandling(name) {
   if (name.length == 0) {
      return false;
   }

   for (let i = 0; i < name.length; i++) {
      if ((name.charCodeAt(i) >= 65 && name.charCodeAt(i) <= 90) || (name.charCodeAt(i) >= 97 && name.charCodeAt(i) <= 122)) {}
      else {return false;}
   }

   return true;
}

function emailHandling(email) {
   if (email.length == 0) { return false }

   if (email.includes('@')) { }
   else { return false }

   let atCount = 0;
   for (let i = 0; i < email.length; i++) {
      if (email.charCodeAt(i) == 64) {
         atCount = atCount + 1;
      }
   }
   if (atCount > 1) { return false }

   if (email.includes('.')) { }
   else { return false }

   for (let i = 0; i < email.length; i++) {
      if ((email.charCodeAt(i) >= 64 && email.charCodeAt(i) <= 90) || (email.charCodeAt(i) >= 97 && email.charCodeAt(i) <= 122) || (email.charCodeAt(i) >= 48 && email.charCodeAt(i) <= 57) || (email.charCodeAt(i) == 46)) { }
      else { return false }
   }

   return true;
}
