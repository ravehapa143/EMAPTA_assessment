import React, { useState } from "react";
import { connect } from "react-redux";

import "../styles/fluid_grid.css";
import "../styles/commerce_page.css";

import * as persistCommerce from "../store/ducks/commerce.duck";

const Commerce = ({
	products,
	...props
}) => {

	const [addProduct, setAddProduct] = useState(false);
	const [productName, setProductName] = useState("");
	const [productUpdate, setProductUpdate] = useState("");
	const [productNameUpdate, setProductNameUpdate] = useState("");

	products = JSON.parse(products ?? "[]");

	const addProductSubmitHandler = (e) => {
		e.preventDefault();
		let new_product = {
			id: (new Date()).getTime(),
			name: productName
		}
		products.push(new_product);
		props.setProducts(JSON.stringify(products));
	}

	return (
		<div className="container">
			<h3>E-Commerce</h3>			

			<table style={{ marginBottom: "3vh" }}>
				<thead>
					<tr>
						<th>
							No.
						</th>
						<th>
							Name
						</th>
						<th>
							Actions
						</th>
					</tr>
				</thead>
				<tbody>
					{products.map((product, product_index) => {
						return (
							<tr key={product_index}>
								<td>
									{product_index + 1}
								</td>
								<td>
									{
										product.id === productUpdate ? 
											<input
												id="product_name_update"
												type="textbox"
												name="product_name_update"
												value={productNameUpdate}
												placeholder="Insert product name..."
												onChange={(e) => {
													setProductNameUpdate(e.target.value);
												}}
											/> : 
											product.name
									}
								</td>
								<td>
									<button
										type="button"
										className="button-delete"
										onClick={() => {
											products.splice(product_index, 1);
											props.setProducts(JSON.stringify(products));
										}}
									>
										Delete
									</button>
									{
										product.id === productUpdate ? 
											<button
												type="button"
												className="button-create"
												onClick={() => {
													products.splice(product_index, 1, { id: product.id, name: productNameUpdate });
													props.setProducts(JSON.stringify(products));
													setProductUpdate("");
												}}
											> 
												Submit
											</button>
											: <button
												type="button"
												className="button-update"
												onClick={() => {
													setProductUpdate(product.id);
												}}
											>
												Update
											</button>
									}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>

			<form onSubmit={addProductSubmitHandler}>
				<input
					id="product_name"
					type="textbox"
					name="product_name"
					value={productName}
					placeholder="Insert product name..."
					onChange={(e) => {
						setProductName(e.target.value);
					}}
				/>

				<button
					type="submit"
				>
					Add Product
				</button>
			</form>
		</div>
	);
  
}

const mapStateToProps = ({ 
  commerce: { products },
}) => ({
  products,
});

export default connect(mapStateToProps, persistCommerce.actions)(Commerce);