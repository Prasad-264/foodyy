import React from 'react';
import UserClass from "./UserClass"

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
    }
  }

  async componentDidMount() {
    // https://api.github.com/users/Prasad-264
    const response = await fetch("https://api.github.com/users/Prasad-264");
    const data = await response.json();
    this.setState({
      userData: data,
    });
  }
  
  render() {
    // console.log(this.state.userData);    
    const {name, location, twitter_username, avatar_url} = this.state.userData;
    return (
      <div className="about-container">
        <h2>About Us</h2>
        <UserClass name={name} location={location} contact={twitter_username} avatarImg={avatar_url} />
      </div>
    )
  }
}

export default About;