
import React from 'react'
import Card from './Card'


// const CardList = ({robots}) => {
// 	return (
// 		<div>
// 			<Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
// 			<Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
// 			<Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
// 		</div>
// 	);
// }   see below looped


// const CardList = ({robots}) => {
// 	const cardComponent = robots.map((user, i) => { 
// 		return (
// 			<Card 
// 			key={i} 
// 			id={user.id} // can use user instead of robots[i]
// 			name={robots[i].name} 
// 			email={robots[i].email} 
// 			/> 
// 		);
// 	})
// 	return (
// 			<div>
// 				{cardComponent}
// 			</div>
// 	);
// }


// another loop option without const cardComponent

const CardList = ({robots}) => {
	return (
		<div>
			{
				robots.map((user, i) => { 
					return (
						<Card 
						key={i} 
						id={user.id} // can use user instead of robots[i]
						name={robots[i].name} 
						email={robots[i].email} 
						/> 
					);
				})
			}
		</div>
	);
}



//.map is creating the loop. Can use foreach

// key prop. for loops. 

export default CardList;