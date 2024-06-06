export function Button({
  onButtonClick,
  children,
  txtSz = "20px",
  txtWt = "500",
  bgClr = "#012E91",
  txtClr = "#fff",
  brdr = "none",
  btnWidth = "100%",
  btnHeigth = "auto",
  brdrRad = "30px",
  pad = "10px 20px",
  maxWidth = "300px",
  margin = "0",
}) {
  const btnStyle = {
    backgroundColor: bgClr,
    color: txtClr,
    border: brdr,
    width: btnWidth,
    height: btnHeigth,
    borderRadius: brdrRad,
    fontSize: txtSz,
    fontWeight: txtWt,
    padding: pad,
    maxWidth: maxWidth,
    margin: margin,
  };
  return (
    <button
      className="pageNavigatorBtn"
      onClick={(ev) => onButtonClick("", ev)}
      style={btnStyle}
    >
      {children}
    </button>
  );
}
