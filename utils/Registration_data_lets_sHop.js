
export function generateFirstName(length) {
  return Math.random().toString(36).substring(2, 2 + length);
}

export function generateLastName(length) {
  return Math.random().toString(36).substring(2, 2 + length);
}


export function generateR_eMail(){
const email_random = Math.random().toString(36).substring(2,9);
return `${email_random}@yopmail.com`;

}

export function generatePhoneNumber(){
return Math.floor(1000000000 + Math.random() * 9000000000).toString();
}

export function generateOccupation() {
  const occupations = ["Doctor", "Student", "Engineer", "Scientist"];
  const randomIndex = Math.floor(Math.random() * occupations.length);
  return occupations[randomIndex];
}

export function selectGender(){
const gender_M_F = ["Male" ,"Female"];
const Genderindex = Math.floor(Math.random() * gender_M_F.length);
return gender_M_F[Genderindex]; 
}

export function generatePassword() {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*!";
  const length = Math.floor(Math.random() * 3) + 8; // 8–10 chars
  
  return Array.from({ length }, () =>
    chars[Math.floor(Math.random() * chars.length)]
  ).join('');
}





//export { generateFirstName, generateLastName };