import React, { useEffect, useState } from "react";
import { BiSmile } from "react-icons/bi";

const Home = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch("service.json")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);

	return (
		<div>
			
			<div className="mt-10">
				<div className="overflow-x-auto container mx-auto">
					<div>
						<div className="navbar bg-base-100">
							<div className="flex-1">
							<select	type="text" placeholder="Hoodies" className="input bg-base-200 mx-2"> 
							<option>Hoodies</option>
							</select>
								
								<a className="btn btn-ghost normal-case text-md">reset</a>
							</div>
							<div className="flex-none gap-1">
								<div className="form-control">
									<span>Search: 
									<input
										type="text"
									
										className="input bg-base-200 ml-2"
									/></span>
								</div>
								<div className="">
									<label
										tabIndex={0}
										className="  "
									>
										
											<p className="btn btn-accent mx-2 text-white capitalize">Add to Cart</p>
										
									</label>
								
								</div>
							</div>
						</div>
					</div>
					<table className="table w-full mt-2">
						<thead>
							<tr>
								<th>Image</th>
								<th>Name</th>
								<th>color</th>
								<th>stock</th>
								<th>Price</th>
								<th>Buy</th>
							</tr>
						</thead>
						<tbody>
							{services.map((service, key) => {
								return (
									<tr className="border-y-8" key={key}>
										<td>
											<img
												className="h-12 bg-base-100 p-2"
												src={service.img}
												alt="Shoes"
											/>
										</td>
										<td>{service.name}</td>
										<td>{service.features.colors.color1}</td>
										<td
											className={`flex items-center border-0 ${
												service.availableQuantity > 0
													? "text-green-600"
													: "text-red-600"
											}`}
										>
											<span className="mr-2 mt-1">
												<BiSmile />
											</span>
											{service.availableQuantity > 0 ? "in stock" : "Stock out"}
										</td>
										<td>${service.price}.00</td>
										<td>{service.name}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Home;
