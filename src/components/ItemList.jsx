import Item from "./Item";

function ItemList({data}) {
  console.log(data);
  return (
    <>
      {data.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </>
  );
}

export default ItemList;
