import React, { useState } from 'react';
import '../style/input.css';

const Nameinput = (props) => {

	let [value, setValue] = useState(props.value.inputValue);
	// useState(value++);
	// value = props.value.inputValue;
	return (
		<div className="component-input">
			<div className="component-input__text">
				{props.value.text}
			</div>
			<div className="component-input__block">
				<input className=" block-input" type="text"
					value={value}
					onChange={event => setValue(event.target.value)}
				/>
				<span className="text-end">
					{props.value.text_end}
				</span>
			</div>
		</div>
	);
}

export { Nameinput }