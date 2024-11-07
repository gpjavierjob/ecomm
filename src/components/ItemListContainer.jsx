import Stack from 'react-bootstrap/Stack';

function ItemListContainer(props) {
  return (
    <Stack direction="vertical" gap={3}>
      <h2>{props.greetings}</h2>
      <Stack direction="horizontal" gap={3}>
        <div className="p-2">Producto 1</div>
        <div className="p-2">Producto 2</div>
        <div className="p-2">Producto 3</div>
      </Stack>
    </Stack>
  )
}

export default ItemListContainer;