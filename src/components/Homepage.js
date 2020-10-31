import React, { useState } from "react";
import { connect } from "react-redux";

import "../styles/fluid_grid.css";
import "../styles/home_page.css";

import * as persistItems from "../store/ducks/items.duck";





const Homepage = ({
	items,
	...props
}) => {

  items = JSON.parse(items ?? "[]");

  const [searchForm, setSearchForm] = useState("");
  const [cartTypeDesc, setCartTypeDesc] = useState(true);
  const [cartTitle, setCartTitle] = useState(true);
  const [productName, setProductName] = useState(true);

  const submitFormHandler = (e) => {
		e.preventDefault();
	}

  const searchFormChangeHandler = (e) => {
    let regex = new RegExp(".*" + e.target.value.toLowerCase() + ".*");
		setSearchForm(regex);
	}

	return (
		<div className="container">
			<h3>FORMS</h3>
				<form onSubmit={submitFormHandler}>
					<div id="form-flex">
						<div className="form-control">
							<input
								type="text"
								name="search"
								placeholder="Search for something"
								defaultValue={""}
								onChange={searchFormChangeHandler}
							/>
						</div>
						<div className="form-control">
							<input
								id="cart_type_desc"
								type="checkbox"
								name="cart_type_desc"
								placeholder="Search for something"
								checked={cartTypeDesc}
								onChange={(e) => {
									setCartTypeDesc(!cartTypeDesc);
								}}
							/>
							<label htmlFor="cart_type_desc">
								Cart Type Description
							</label>
						</div>

						<div className="form-control">
							<input
								id="cart_title"
								type="checkbox"
								name="cart_title"
								placeholder="Search for something"
								checked={cartTitle}
								onChange={(e) => {
									setCartTitle(!cartTitle);
								}}
							/>
							<label htmlFor="cart_title">
								Cart Title
							</label>
						</div>
					</div>
				</form>

			<h3>ITEMS</h3>
			{items.map((cart, cart_index) => {

				if(Boolean(searchForm) && cartTypeDesc && !cart.cart_type_desc.toLowerCase().match(searchForm)) return null;

				return (
					<div style={{ marginBottom: "3vh" }} key={cart.cart_type_code /*may use cart_index*/}>
						<h4>
							Cart Type Description: {cart.cart_type_desc}
						</h4>

						{cart.cart_items.map((cart_item, cart_item_index) => {

							if(Boolean(searchForm) && cartTitle && !cart_item.collection_data.title.toLowerCase().match(searchForm)) return null;

							return (
								<div key={cart_item_index} className="cart-items">
									
									<p style={{ textAlign: "center" }}>Cart Items</p>

									{cart_item.cart_quantity.length ? cart_item.cart_quantity.map((cart_quantity_values, cart_quantity_index) => {

										let prod_image_src = "";

										((cart_quantity_values.product_info ?? {}).images ?? []).map((image) => {
											prod_image_src = image.src;
											return null;
										});

										return (
											<div key={cart_quantity_index}>
												<div className="row">
													<div className="col-lg-2 col-sm-12">
														{prod_image_src ? 
															<img alt={prod_image_src} src={prod_image_src} className="item-image" /> : 
															"[No Image Found]" }
													</div>
													<div className="col-lg-10 col-sm-12">
														<p style={{ color: "gray" }}>
															<b>Cart Title: </b>
															{cart_item.collection_data.title}
														</p>
														<p>
															<b>
																<span>{cart_quantity_values.total_quantity}pc/s </span>
																<span>
																	{(cart_quantity_values.product_info ?? {}).title ?? "[No Product Info/Title]"}
																</span>
															</b>
														</p>
														<p>
															<span>Total of {cart_item.cart_currency} </span>
															<span>{parseInt(cart_quantity_values.total_cost).toFixed(2)} </span>
															<span>({cart_item.cart_currency} </span>
															<span>{(cart_quantity_values.product_info ?? {}).price ? parseInt((cart_quantity_values.product_info ?? {}).price).toFixed(2) + " each" : "[No Product Info/Price]"})</span>
														</p>

														{cart_quantity_values.recipients_quantity.map((recipients_quantity_value, recipients_quantity_index) => {
															return (
																<div key={recipients_quantity_index}>
																	<p>
																		<span>{ cart_item.cart_currency } </span>
																		<span>
																			{ /*parseInt(parseInt(recipients_quantity_value.quantity) * (recipients_quantity_value.recipients ?? []).length * (cart_quantity_values.product_info ?? {}).price ? parseInt((cart_quantity_values.product_info ?? {}).price) : 0).toFixed(2)*/ }

																			{
																				(parseInt(recipients_quantity_value.quantity) * 
																				(recipients_quantity_value.recipients ?? []).length *
																				parseInt(((cart_quantity_values.product_info ?? {}).price ?? 0))).toFixed(2)
																			}
																		</span>
																		<span>
																			&nbsp; - &nbsp;
																		</span>
																		<span>
																			{recipients_quantity_value.quantity}pc/s each
																		</span>
																	</p>

																	<div id="recipients">
																		<p>For &nbsp;</p>

																		{recipients_quantity_value.recipients ? (recipients_quantity_value.recipients).map((recipient_id, recipient_index) => {

																			return (
																				<div key={recipient_index}>
																					{cart_quantity_values.recipients_info.map((recipients_info_value, recipients_info_index) => {
																						if(recipients_info_value.employee_personal_info_employee_code !== recipient_id) return null;

																						return (
																							<div key={recipients_info_index}>
																								<span>{recipients_info_value.employee_personal_info_first_name} </span>
																								<span>{recipients_info_value.employee_personal_info_last_name}</span>
																								{ recipient_index + 1 < recipients_quantity_value.recipients.length && <span>, &nbsp;</span> }
																							</div>
																						);
																					})}
																				</div>
																			);
																		}) : "[Null Recipient]"}

																	</div>

																	{(recipients_quantity_index + 1) < cart_quantity_values.recipients_quantity.length && <hr />}
																</div>
															);
														})}
													</div>
												</div>
											</div>
										);
									}) : <p style={{ textAlign: "center" }}>[No Items]</p>}
								</div>
							);
						})}

						<hr />
					</div>
				);
			})}
		</div>
	);
}

const mapStateToProps = ({ 
  items: { items }
}) => ({
  items
});

export default connect(mapStateToProps, persistItems.actions)(Homepage);