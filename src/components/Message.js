function Message({ msg, bgColor }) {
  let styles = {
    padding: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: bgColor,
    borderRadius: "5px",
  };
  return (
    <div style={styles}>
      <p>{msg}</p>
    </div>
  );
}

export default Message;
