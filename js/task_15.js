function checkAge(age) {
  let message;

  if (age >= 18) { 
    message = 'Вы совершеннолетний человек';
  } else {
    message = 'Вы не совершеннолетний человек';
  }

  return message;
}
