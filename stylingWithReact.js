class Magic extends React.Component {
  render() {
    return (
      <div style={{ color: Math.random() < 0.5 ? "red" : "green" }}>
        yo!guess the color!
        <div style={{ color: Math.random() < 0.5 ? "red" : "green" }}>
          omeraa!
        </div>{" "}
      </div>
    );
  }
}

ReactDOM.render(<Magic />, mountNode);
