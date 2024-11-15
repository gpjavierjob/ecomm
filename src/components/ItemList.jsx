import Item from "./Item";

function ItemList({data}) {

  return (
    <>
      {data.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </>
  );
}

export default ItemList;
