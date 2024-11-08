import Image from 'react-bootstrap/Image';

function Logo(props) {
  return (
    <>
      <Image className={props.className} src="/PetStore-Logo.svg" alt="Logo" width="50"/>
    </>
  )
}

export default Logo