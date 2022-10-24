async function getdata() {
     const response= await fetch('https://jsonplaceholder.typicode.com/users');
     const data = await response.json();
     
     document.getElementById('nombre1').textContent = data[1].name
     document.getElementById('nombre2').textContent = data[2].name
     document.getElementById('nombre3').textContent = data[3].name
     document.getElementById('nombre4').textContent = data[4].name
     document.getElementById('nombre5').textContent = data[5].name
     document.getElementById('nombre6').textContent = data[6].name
     
};

getdata();