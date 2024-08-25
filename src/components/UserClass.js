import React from "react";

class UserClass extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {	
		const { name, location, contact, avatarImg } = this.props;
		return (
			<div className='user-container'>
				<img src={avatarImg} alt={name} />
				<h2>Name: {name}</h2>
				<h3>Location: {location || "Pune"}</h3>
				<h4>Contact: {contact}</h4>
			</div>
		)
	}
};

export default UserClass;	