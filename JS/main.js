
//BibliotecApp, app para tener un control de lo que tenes en tu biblioteca.

//array principal, biblioteca
const biblioteca = [
    { id: 1, cat: "movie", name: "Star Wars: Episode III - Revenge of the Sith", precio: 1200, img: " ", genero:"Science fiction", existencia:"tengo", year: 2005},
    { id: 2, cat: "movie", name: "The Matrix", precio: 1800, img: "matrix.jpg", genero:"Science fiction", existencia:"tengo", year: 1999},
    { id: 3, cat: "movie", name: "The Imitation Game", precio: 2800, img: "imitation.jpg", genero:"Drama", existencia:"tengo", year: 2014},
    { id: 4, cat: "movie", name: "Snowden", precio: 1500, img: "snow.webp", genero:"Thriller", existencia:"tengo", year: 2016},
    { id: 5, cat: "movie", name: "Inception", precio: 1100, img: "inception.webp", genero:"Science fiction", existencia:"tengo", year: 2010},
    { id: 6, cat: "movie", name: "The Great Gatsby", precio: 1900, img: "gatsby.jpeg", genero:"Drama", existencia:"tengo", year: 2013},
    { id: 7, cat: "movie", name: "Fury", precio: 5800, img: "furia.png", genero:"War", existencia:"quiero", year: 2014},
    { id: 8, cat: "movie", name: "Kill Bill: Volume 1", precio: 12800, img: "vol1.png", genero:"Martial arts", existencia:"quiero", year: 2003},
    { id: 9, cat: "movie", name: "Kill Bill: Volume 2", precio: 7800, img: "volumen2.jpeg",genero:"Martial arts", existencia:"quiero", year: 2004},
    { id: 10, cat: "book", name: "1984", autor: "George Orwell", precio: 12800, img: "1984.jpg", genero:"Science fiction", existencia:"quiero", year: 1949},
    { id: 11, cat: "book", name: "To Kill a Mockingbird", autor: "Harper Lee", precio: 7800, img: "tokillamockingbird.jpg" ,genero:"Fiction", existencia:"quiero", year: 1960},
  ];
  
  // funcion constructora
function elementoBiblioteca(cat, name, autor, precio, img, genero, existencia, year) {
    this.id = biblioteca.length + 1;
    this.cat = cat;
    this.name = name;
    this.autor = autor;
    this.precio = parseFloat(precio);
    this.genero = genero;
    this.existencia = existencia;
    this.year = parseInt(year);
    if (!img) {
        this.img = "https://via.placeholder.com/300";
      } else {
        this.img = img;
      }
  }
  


  //VER LA BIBLIOTECA COMO CARDS
  // Obtener el contenedor de la biblioteca
  const bibliotecaContainer = document.getElementById("biblioteca");
  
  // Mostrar la biblioteca inicial
  mostrarBiblioteca();
  
  // Función para mostrar la biblioteca completa
  function mostrarBiblioteca() {
    let html = "";
    biblioteca.forEach((entrada) => {
      html += `
        <div class="card">
          <img src="./img/${entrada.img}" alt="${entrada.name}">
          <hr>
          <h3>${entrada.name}</h3>
          <p>Precio: $${entrada.precio}</p>
        </div>
      `;
    });
    bibliotecaContainer.innerHTML = html;
  }
  
  // Obtener el formulario
  const formulario = document.getElementById("formulario");
  
  // Agregar un event listener al evento "submit" del formulario
  formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el comportamiento por defecto del formulario
  
    // Obtener los valores ingresados por el usuario
    const categoria = document.getElementById("categoria").value;
    const nombre = document.getElementById("nombre").value;
    const autor = document.getElementById("autor").value;
    const precio = parseFloat(document.getElementById("precio").value);
    const imagen = document.getElementById("imagen").value;
    const genero = document.getElementById("genero").value;
    const existencia = document.getElementById("existencia").value;
    const year = parseInt(document.getElementById("year").value);
  
    // Crear un nuevo objeto utilizando los valores ingresados
    const nuevaEntrada = new elementoBiblioteca(
      categoria,
      nombre,
      autor,
      precio,
      imagen,
      genero,
      existencia,
      year
    );
  
    // Agregar el objeto a la biblioteca
    biblioteca.push(nuevaEntrada);
  
    // Mostrar mensaje o realizar otras acciones según sea necesario
    alert("El elemento ha sido agregado a la biblioteca.");
  
    // Restablecer los valores del formulario
    formulario.reset();
  
    // Mostrar la biblioteca actualizada
    mostrarBiblioteca();

    //console.log(biblioteca)
  });


  //console.log(biblioteca)



  //BUSCAR POR NOMBRE

// Obtener el campo de búsqueda y el botón de búsqueda
const searchInput = document.getElementById("search");
const btnSearch = document.getElementById("btnSearch");

// Agregar un event listener al botón de búsqueda
btnSearch.addEventListener("click", function () {
  const searchTerm = searchInput.value.toLowerCase();
  const results = buscarPorNombre(biblioteca, searchTerm);
  mostrarResultadoBusqueda(results);
});

// Función para buscar entradas por nombre
function buscarPorNombre(entradas, searchTerm) {
    return entradas.filter((entrada) =>
      entrada.name.toLowerCase().includes(searchTerm)
    );
  }
  
  // Función para mostrar el resultado de la búsqueda
  function mostrarResultadoBusqueda(results) {
    const resultadoContainer = document.getElementById("resultado");
    let html = "";
  
    results.forEach((entrada) => {
      html += `
      <div class="card">
      <img src="./img/${entrada.img}" alt="${entrada.name}">
      <hr>
      <h3>${entrada.name}</h3>
      <p>Precio: $${entrada.precio}</p>
    </div>
      `;
    });
  
    resultadoContainer.innerHTML = html;
  }
  

