import './nav.css'

function funciona() {
  let navUl = document.querySelector(".nav ul");

  if (window.innerWidth < 600 && !navUl.classList.contains("cerrar")) {
    console.log("La clase se agregó");
    navUl.classList.add("cerrar");
  } else {
    navUl.classList.remove("cerrar");
  }
}


function App() {
  return (
    <nav>
      <div className='nav'>
        <div className='logo'>
          <div className="titulo">
            <a href="#">Pagina Nueva</a>
          </div>
        </div>

        <button onClick={()=>funciona()} className='hamburguesa'><i className="fas fa-bars"></i></button>
        <ul className='cerrar'>
          <li><a href="">opcion1</a></li>
          <li><a href="">opcion2</a></li>
          <li><a href="">opcion3</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default App
