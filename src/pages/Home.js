import React, { useEffect, useState } from "react";
import { BiSmile } from "react-icons/bi";
import { RiShoppingCartFill, RiCheckboxBlankLine } from "react-icons/ri";
import useProduct from "../hooks/useProduct";

const Home = () => {
	const [products, setProducts] = useProduct([]);
  const [cart, setCart] = useState([]);
  const [hoodies, setHoodies] = useState("");
  const [sizes, setSizes] = useState("");
  const [selectedProducts, setSelectedProducts] = useState(products);
	
	useEffect(() =>{
		setSelectedProducts(products)
	}, [products])
	 
  const handleChange = (e, id) =>{
		console.log(id);
    if(e.target.checked){
			const selected = {};
			selected[id] = 1;
			setCart([...cart, selected])
		}
		else{
			console.log("uncheked")
		}
  }
  
  
  const addToCart= (products) => {
    // const newCart= [...cart, products];
    // setCart(newCart);
  }
	
	useEffect(()=>{
		const selected =products.filter(product=>{
			if(hoodies){
				return product.name.includes(hoodies);
			}
			return product;
		});
		setSelectedProducts(selected);
	}, [hoodies]);
	
	useEffect(()=>{
		const selected =products.filter(product=>{
			if(sizes){
				return product.size.includes(sizes);
			}
			return product;
		});
		setSelectedProducts(selected);
	}, [sizes]);
	
	
	const resetHandler = () => {
		setHoodies("");
	}

	return (
		<div>
			
			<div className="mt-10">
				<div className="overflow-x-auto container mx-auto">
					<div>
						<div className="navbar bg-base-100">
							<div className="flex-1">
							<select onChange={(e)=>setHoodies(e.target.value)}	type="text"name="Hoodies" placeholder="Hoodies" className="input bg-base-200 mx-2"> 
							<option selected={true} disabled>Hoodies</option>
							 	{
									products.map((name, key) =>(
										<option key={key} value={name.name}>{name.name}</option>
									))
								}
							</select>
							<select	type="text" placeholder="Hoodies" className="input bg-base-200 mx-2"> 
						  <option selected={true} disabled>sizes</option>
							 	{
									products.map((size, key) =>(
										<option key={key} value={size.size}>{size.size}</option>
									))
										//  selectedProducts[0]?.features.sizes.map((size, key)=><option key={key}>{size}</option>)
								
								}
							</select>
								
								<button onClick={resetHandler} className="btn btn-ghost normal-case text-md">reset</button>
							</div>
							<div className="flex-none gap-1">
								<div className="form-control">
									<span>Search: 
									<input
									onChange={(e)=>setHoodies(e.target.value)}
										type="text"
									
										className="input bg-base-200 ml-2"
									/></span>
								</div>
								<div className="">
									<label
										tabIndex={0}
										className="  "
									>
										
											<p onClick={()=>addToCart(selectedProducts)} className="btn btn-accent mx-2 text-white capitalize">Add to Cart</p>
										
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
							{selectedProducts.map((service, key) => {
								return (
									<tr className="" key={key}>
										<td className="py-0 border-0">
											<div className="bg-base-200 m-1">
											<img
												className="lg:h-12 p-2 transition mx-auto duration-300 delay-150  hover:delay-300 hover:scale-[1.2]  my-0"
												src={service.img}
												alt="Shoes"
											/>
											</div>
										</td>
										<td className="border-0">{service.name}</td>
										<td className="border-0">{service.features.colors[1]}</td>
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
										<td className="border-0">${service.price}.00</td>
										<td className="border-0">
											<form className="flex justify-center items-center">
												<input  type="number" placeholder="1" className="bg-slate-100 text-center w-10 lg:w-[20%]"	/>
												<div className="bg-black"><RiShoppingCartFill className="lg:mx-4  text-white my-1 "/></div>
												<input onChange={(e)=>handleChange(e, service.id)} type="checkbox" className="checkbox checkbox-success ml-3" />
												{/* <RiCheckboxBlankLine className="ml-4"/> */}
											</form>
											
										</td>
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
