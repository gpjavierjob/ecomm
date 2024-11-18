import Image from 'react-bootstrap/Image';

function Logo(props) {
  return (
    <>
      <Image
        className={props.className}
        src="https://www.svgviewer.dev/static-svgs/329128/lettuce.svg"
        alt="Logo"
        width="50"
      />
    </>
  );
}

export default Logo;