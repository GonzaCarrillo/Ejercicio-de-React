import Producto from "./Producto";

function App() {
  return (
    <div>
      <h1>Lista de Productos</h1>

      <Producto
        name="Zapatillas Nike"
        price={120}
        discount={20}
        category="Calzado"
      />

      <Producto
        name="Camiseta Adidas"
        price={45}
        category="Ropa"
      />
    </div>
  );
}

export default App;
