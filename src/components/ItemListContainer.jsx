import Stack from 'react-bootstrap/Stack';

function ItemListContainer(props) {
  return (
    <Stack className="m-3 align-items-center" direction="vertical" gap={3}>
      <h3 className="text-center">{props.greetings}</h3>
      <Stack className="mt-3 justify-content-center flex-wrap" direction="horizontal" gap={3}>
        <div className="p-2">Producto 1</div>
        <div className="p-2">Producto 2</div>
        <div className="p-2">Producto 3</div>
      </Stack>
    </Stack>
  )
}

export default ItemListContainer;