import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/NavigationBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  const greetings = "¡Bienvenidos a nuestra tienda para mascotas!";

  return (
    <>
      <NavigationBar/>
      <ItemListContainer greetings={greetings}/>
    </>
  )
}

export default App
