import "../../App.scss";
import { useState } from "react";
import { Link } from "react-router-dom";


export function SellForm() {

	const [inputs, setInputs] = useState({});

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs(values => ({...values, [name]: value}))
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(inputs);
		
	}

	return (
		<>
		<form onSubmit={handleSubmit}>
			<div className="sellFormContainer">
				<label className="sellFormHeader">Item Name
					<br></br>
					<input 
						type="text"
						name="productName"
						value={inputs.productName || ""}
						onChange={handleChange}
						className="sellItemForm"
						placeholder="Title"
					/>
				</label>
				<br></br>
				
			</div>
			
			<div className="sellFormContainer">
				<label className="sellFormHeader">Description of Item
					<br></br>
					<textarea 
						
						name="description"
						value={inputs.description || ""}
						onChange={handleChange}
						className="sellDescriptionForm"
						cols={40}
						rows={5}
						
					/>
				</label>

			</div>
			
			<div className="sellFormContainer">
				<label className="sellFormHeader">Condition
					<br></br>
					<input 
						type="text"
						name="condition"
						value={inputs.condition || ""}
						onChange={handleChange}
						className="sellConditionForm"
					/>
				</label>
			</div>
			
			<div className="sellFormContainer">
				<label className="sellFormHeader">Set the price
					<br></br>
					<input 
						type="text"
						name="price"
						value={inputs.price || null}
						onChange={handleChange}
						className="sellPriceForm"
						placeholder="$0"
					/>
				</label>
			</div>
			
			<button type="submit" className="sellSubmit">Submit</button>
			
		</form>


		</>
	);
}