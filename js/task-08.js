document.querySelector('.login-form').addEventListener('submit', function (e) {
  e.preventDefault(); 
  const formData = new FormData(this); 

  const data = {}; 

  formData.forEach((value, key) => {
    data[key] = value; 
  });

  if (!data.email || !data.password) {
    
    alert('Всі поля повинні бути заповнені');
  } else {
   
    console.log('Введені дані:', data); 
    this.reset(); 
  }
});