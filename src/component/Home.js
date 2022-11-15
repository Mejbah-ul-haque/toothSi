import React, { useEffect, useState } from "react";

const Home = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch("service.json")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);

	return (
		<div>
			<h1>This is home</h1>
			<div>
				<div className="overflow-x-auto">
					<table className="table w-full">
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
                    <td><img className="h-12 bg-slate-200 p-2" src={service.img} alt="Shoes" /></td>
                    <td>{service.name}</td>
                    <td>{service.features.colors.color1}</td>
                    <td className={`font-bold ${service.availableQuantity > 0 ? "text-green-600" : "text-red-600"}`}>{service.availableQuantity > 0 ? "in stock" : "Stock out"}</td>
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
