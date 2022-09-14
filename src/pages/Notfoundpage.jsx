import React from 'react';
import { Link } from 'react-router-dom'


function Notfoundpage() {
	return (
		<div>
			This page doesn't exist. Go <Link to="/">main</Link>
		</div>
	);
}

export default Notfoundpage;
// const Notfoundpage = () => {
// 	return (
// 		<div>
// 			This page doesn't exist. Go <Link to="/">main</Link>
// 		</div>
// 	)
// }
// export { Notfoundpage };