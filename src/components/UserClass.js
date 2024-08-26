import React from "react";

class UserClass extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {	
		const { name, location, contact, avatarImg } = this.props;
		return (
			<div className='border border-black p-4 my-4 flex space-x-3'>
				<img className="w-28" src={avatarImg} alt={name} />
				<div className="space-y-3">
					<h2>Name: {name}</h2>
					<h3>Location: {location || "Pune"}</h3>
					<h4>Contact: {contact}</h4>
				</div>
			</div>
		)
	}
};

export default UserClass;	