const pintarProductos = (data) => {
    const contenedor = document.getElementById("producto-contenedor");

    data.forEach(producto => {
      const div = document.createElement('div');
      div.classList.add('card');
      div.innerHTML += `<div class="card-image">
                          <img src=${producto.imagen}>
                          <span class="card-title">${producto.nombre}</span>
                          <a class="btn-floating halfway-fab wabes-effect waves-light red"><i id=${producto.id} class="material-icons agregar">add_shopping_cart</i></a>
                        </div>
                        <div class="card-content">
                            <p>${producto.desc}</p>
                            <p>${producto.precio}</p>
                        </div>
                       `
      contenedor.appendChild(div);
    });
  };