const CardList = props => (
  <div>
    {" "}
    {props.profiles.map(profile => (
      <Card key={profile.id} {...profile} />
    ))}{" "}
  </div>
);

class Form extends React.Component {
  state = { userName: "" };
  handleSubmit = async event => {
    event.preventDefault();
    const resp = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    console.log(resp.data);
    this.props.onSubmit(resp.data);
    this.setState({ userName: "" });
    // console.log(this.state.userName)
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Github Username"
          required
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
        />{" "}
        <button> Add user </button>{" "}
      </form>
    );
  }
}
class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} />{" "}
        <div className="info">
          <div className="name" style={{ color: "green" }}>
            {" "}
            {profile.name} <div className="company"> {profile.company} </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}
class App extends React.Component {
  state = {
    profiles: []
  };
  addNewProfile = profileData => {
    //console.log('App',profileData)
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }));
  };
  render() {
    return (
      <div>
        <div className="header"> {this.props.title} </div>{" "}
        <Form onSubmit={this.addNewProfile} />{" "}
        <CardList profiles={this.state.profiles} />{" "}
      </div>
    );
  }
}
ReactDOM.render(<App title="The GitHub Cards App" />, mountNode);
