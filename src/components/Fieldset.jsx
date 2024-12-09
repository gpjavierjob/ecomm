function Fieldset({ children, disabled }) {
  return (
    <>
      {disabled ? (
        <fieldset disabled>{children}</fieldset>
      ) : (
        <fieldset>{children}</fieldset>
      )}
    </>
  );
}

export default Fieldset;
