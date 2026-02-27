function nameHandling(name) {
   if (name.length == 0) {
      return false;
   }

   for (let i = 0; i < name.length; i++) {
      if ((name.charCodeAt(i) >= 65 && name.charCodeAt(i) <= 90) || (name.charCodeAt(i) >= 97 && name.charCodeAt(i) <= 122) || (name.charCodeAt(i) == 32)) {}
      else {return false;}
   }

   return true;
}

function emailHandling(email) {
   if (email.length == 0) {return false;}

   if (email.includes('@')) {}
   else {return false;}

   let atCount = 0;
   for (let i = 0; i < email.length; i++) {
      if (email.charCodeAt(i) == 64) {
         atCount = atCount + 1;
      }
   }
   if (atCount > 1) {return false;}

   if (email.includes('.')) {}
   else {return false;}

   for (let i = 0; i < email.length; i++) {
      if ((email.charCodeAt(i) >= 64 && email.charCodeAt(i) <= 90) || (email.charCodeAt(i) >= 97 && email.charCodeAt(i) <= 122) || (email.charCodeAt(i) >= 48 && email.charCodeAt(i) <= 57) || (email.charCodeAt(i) == 46)) {}
      else {return false;}
   }

   return true;
}

function addressHandling(address) {
   if (address.length == 0) {return false;}

   if (address.includes('@')) {}
   else {return false;}

   let atCount = 0;
   for (let i = 0; i < address.length; i++) {
      if (address.charCodeAt(i) == 64) {
         atCount = atCount + 1;
      }
   }
   if (atCount > 1) {return false;}

   if (address.includes('.')) {}
   else {return false;}

   for (let i = 0; i < address.length; i++) {
      if ((address.charCodeAt(i) >= 64 && address.charCodeAt(i) <= 90) || (address.charCodeAt(i) >= 97 && address.charCodeAt(i) <= 122) || (address.charCodeAt(i) >= 48 && address.charCodeAt(i) <= 57) || (address.charCodeAt(i) == 46)) {}
      else {return false;}
   }

   return true;
}

function phoneHandling(phoneNumber) {
   let phoneExp = /^\d{3}-\d{3}-\d{4}$/;
   if (phoneExp.test(phoneNumber) == true) {}
   else {
      return false;
   }

   return true;
}

function phoneHandling(phoneNumber) {
   let phoneExp = /^\d{3}-\d{3}-\d{4}$/;
   if (phoneExp.test(phoneNumber) == true) {}
   else {
      return false;
   }

   return true;
}

function validate() {
   let email = document.forms["signupForm"]["email"].value;
   let name = document.forms["signupForm"]["name"].value;
   let phoneNumber = document.forms["signupForm"]["phone"].value;
   let passwordFirst = document.forms["signupForm"]["passwordOriginal"].value;
   let passwordSecond = document.forms["signupForm"]["passwordConfirm"].value;
   let address = document.forms["signupForm"]["address"].value;

   if (nameHandling(name) == true) {}
   else {
      alert(`Invalid name: ${name}`);
      return false;
   }

   if (nameHandling(address) == true) {}
   else {
      alert(`Invalid name: ${name}`);
      return false;
   }

   if (emailHandling(email) == true) {}
   else {
      alert(`Invalid email: ${email}`);
      return false;
   }

   if (phoneHandling(phoneNumber) == true) {}
   else {
      alert(`Invalid phone number: ${phoneNumber}`);
      return false;
   }

   console.log(passwordFirst);
   console.log(passwordSecond);
   if ((passwordFirst.length > 12 && passwordFirst == passwordSecond) == false) {
      alert(`Invalid password length or passwords do not match`);
      return false;
   }

   return true;
}