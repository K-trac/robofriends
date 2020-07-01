import React from 'react';

// const Card = (props) => {
	// const {name, email, id} = props;

// or

const Card = ({name, email, id}) => {
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow5 tc'>
			<img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

//or in the curly brackets if props is not defined use props.name, props.id, props.email etc.


export default Card;




