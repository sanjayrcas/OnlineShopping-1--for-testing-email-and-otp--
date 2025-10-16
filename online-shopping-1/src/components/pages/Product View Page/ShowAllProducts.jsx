// import './ShowAllProducts.css';
// import Products from "../../layouts/Products/Products";
// import { Helmet } from 'react-helmet-async';

// export default function ShowAllProducts() {
//     return (
//         <div>
//             <Helmet>
//                 <title>
//                     Online Shopping - All Products
//                 </title>
//             </Helmet>
//             <div className="showAllProducts-Container">
//                 <p className="text-white py-3 ps-3 fw-bold" style={{ backgroundColor: '#111827' }}>All Products</p>
//                 <div className="row my-2 mx-1">
//                     <div className="col-2">
//                         <div className="products-filter-container bg-white">
//                             <h5 className="py-3 mb-0 fw-bold text-center border-bottom">Filter</h5>
//                             <div className="viewProduct-filterContainer my-">

//                                 {/* Search Bar */}
//                                 <div className="px-3 my-2">
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         placeholder="Search products"
//                                     />
//                                 </div>

//                                 <div className="accordion" id="filterAccordion">

//                                     {/* Category */}
//                                     <div className="accordion-item">
//                                         <h2 className="accordion-header" id="headingCategory">
//                                             <button className="accordion-button accordionButtons" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCategory" aria-expanded="true" aria-controls="collapseCategory">
//                                                 Category
//                                             </button>
//                                         </h2>
//                                         <div id="collapseCategory" className="accordion-collapse collapse show" aria-labelledby="headingCategory" data-bs-parent="#filterAccordion">
//                                             <div className="accordion-body">
//                                                 <div><input type="checkbox" /> Electronics</div>
//                                                 <div><input type="checkbox" /> Fashion</div>
//                                                 <div><input type="checkbox" /> Home</div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Availability */}
//                                     <div className="accordion-item">
//                                         <h2 className="accordion-header" id="headingAvailability">
//                                             <button className="accordion-button accordionButtons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAvailability" aria-expanded="false" aria-controls="collapseAvailability">
//                                                 Availability
//                                             </button>
//                                         </h2>
//                                         <div id="collapseAvailability" className="accordion-collapse collapse" aria-labelledby="headingAvailability" data-bs-parent="#filterAccordion">
//                                             <div className="accordion-body">
//                                                 <div><input type="checkbox" /> In Stock</div>
//                                                 <div><input type="checkbox" /> Out of Stock</div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Color */}
//                                     <div className="accordion-item">
//                                         <h2 className="accordion-header" id="headingColor">
//                                             <button className="accordion-button accordionButtons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseColor" aria-expanded="false" aria-controls="collapseColor">
//                                                 Color
//                                             </button>
//                                         </h2>
//                                         <div id="collapseColor" className="accordion-collapse collapse" aria-labelledby="headingColor" data-bs-parent="#filterAccordion">
//                                             <div className="accordion-body d-flex gap-2 flex-wrap">
//                                                 <span className="border rounded-circle p-2" style={{ backgroundColor: "red", width: 25, height: 25 }}></span>
//                                                 <span className="border rounded-circle p-2" style={{ backgroundColor: "blue", width: 25, height: 25 }}></span>
//                                                 <span className="border rounded-circle p-2" style={{ backgroundColor: "green", width: 25, height: 25 }}></span>
//                                                 <span className="border rounded-circle p-2" style={{ backgroundColor: "black", width: 25, height: 25 }}></span>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Size */}
//                                     <div className="accordion-item">
//                                         <h2 className="accordion-header" id="headingSize">
//                                             <button className="accordion-button accordionButtons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSize" aria-expanded="false" aria-controls="collapseSize">
//                                                 Size
//                                             </button>
//                                         </h2>
//                                         <div id="collapseSize" className="accordion-collapse collapse" aria-labelledby="headingSize" data-bs-parent="#filterAccordion">
//                                             <div className="accordion-body">
//                                                 <div><input type="checkbox" /> S</div>
//                                                 <div><input type="checkbox" /> M</div>
//                                                 <div><input type="checkbox" /> L</div>
//                                                 <div><input type="checkbox" /> XL</div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Discount */}
//                                     <div className="accordion-item">
//                                         <h2 className="accordion-header" id="headingDiscount">
//                                             <button className="accordion-button accordionButtons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDiscount" aria-expanded="false" aria-controls="collapseDiscount">
//                                                 Discount
//                                             </button>
//                                         </h2>
//                                         <div id="collapseDiscount" className="accordion-collapse collapse" aria-labelledby="headingDiscount" data-bs-parent="#filterAccordion">
//                                             <div className="accordion-body">
//                                                 <div><input type="checkbox" /> 10% and above</div>
//                                                 <div><input type="checkbox" /> 20% and above</div>
//                                                 <div><input type="checkbox" /> 30% and above</div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Sort Options */}
//                                     <div className="accordion-item">
//                                         <h2 className="accordion-header" id="headingSort">
//                                             <button className="accordion-button accordionButtons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSort" aria-expanded="false" aria-controls="collapseSort">
//                                                 Sort By
//                                             </button>
//                                         </h2>
//                                         <div id="collapseSort" className="accordion-collapse collapse" aria-labelledby="headingSort" data-bs-parent="#filterAccordion">
//                                             <div className="accordion-body">
//                                                 <div><input type="radio" name="sort" /> Price: Low to High</div>
//                                                 <div><input type="radio" name="sort" /> Price: High to Low</div>
//                                                 <div><input type="radio" name="sort" /> Newest Arrivals</div>
//                                                 <div><input type="radio" name="sort" /> Best Selling</div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Price Range */}
//                                     <div className="accordion-item">
//                                         <h2 className="accordion-header" id="headingPrice">
//                                             <button className="accordion-button accordionButtons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePrice" aria-expanded="false" aria-controls="collapsePrice">
//                                                 Price Range
//                                             </button>
//                                         </h2>
//                                         <div id="collapsePrice" className="accordion-collapse collapse" aria-labelledby="headingPrice" data-bs-parent="#filterAccordion">
//                                             <div className="accordion-body">
//                                                 <div className="d-flex flex-column gap-2">
//                                                     <input type="number" className="form-control" placeholder="Min Price" />
//                                                     <input type="number" className="form-control" placeholder="Max Price" />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Brand */}
//                                     <div className="accordion-item">
//                                         <h2 className="accordion-header" id="headingBrand">
//                                             <button className="accordion-button accordionButtons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBrand" aria-expanded="false" aria-controls="collapseBrand">
//                                                 Brand
//                                             </button>
//                                         </h2>
//                                         <div id="collapseBrand" className="accordion-collapse collapse" aria-labelledby="headingBrand" data-bs-parent="#filterAccordion">
//                                             <div className="accordion-body">
//                                                 <div><input type="checkbox" /> Samsung</div>
//                                                 <div><input type="checkbox" /> Nike</div>
//                                                 <div><input type="checkbox" /> Sony</div>
//                                                 <div><input type="checkbox" /> Apple</div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Ratings */}
//                                     <div className="accordion-item">
//                                         <h2 className="accordion-header" id="headingRating">
//                                             <button className="accordion-button accordionButtons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseRating" aria-expanded="false" aria-controls="collapseRating">
//                                                 Ratings
//                                             </button>
//                                         </h2>
//                                         <div id="collapseRating" className="accordion-collapse collapse" aria-labelledby="headingRating" data-bs-parent="#filterAccordion">
//                                             <div className="accordion-body">
//                                                 <div><input type="checkbox" /> ⭐⭐⭐⭐⭐</div>
//                                                 <div><input type="checkbox" /> ⭐⭐⭐⭐ & above</div>
//                                                 <div><input type="checkbox" /> ⭐⭐⭐ & above</div>
//                                                 <div><input type="checkbox" /> ⭐⭐ & above</div>
//                                                 <div><input type="checkbox" /> ⭐ & above</div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-10">
//                         <div className="view-product-container">
//                             <h5 className="py-3 mb-0 fw-bold bg-white text-center border-bottom">View Filter Products</h5>
//                             {/* Product list goes here */}
//                             <div className="bg-inf"><Products/></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


import React, { useState, useEffect } from 'react';
import './ShowAllProducts.css';
import '../../layouts/Products/Products style/Products.css';
import '../../layouts/Products/Products MediaQ/MediaQProducts.css';
import { Helmet } from 'react-helmet-async';
import { Heart, ShoppingCart } from 'phosphor-react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../redux/cartSlice';
import { addToWishlist } from '../../../redux/wishlistSlice';

export default function ShowAllProducts() {
    const cartProducts = useSelector((state) => state.Cart.cartItems);
    const wishlistProducts = useSelector((state) => state.Wishlist.wishlistItems);
    const dispatch = useDispatch();

    const [productData, setProductData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const [filters, setFilters] = useState({
        name: '',
        priceSort: '',
        priceRange: 5000,
        category: '',
    });

    const addToCartBtn = (item) => {
        dispatch(addToCart(item));
    };

    const addToWishlistBtn = (item) => {
        dispatch(addToWishlist(item));
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://onlineshopping-1-for-testing-email-and.onrender.com/api/products/getAllProducts');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                if (Array.isArray(data)) {
                    setProductData(data);
                    setFilteredData(data);
                    console.log('Data fetched successfully:', data);
                } else {
                    console.error('Unexpected response format:', data);
                    alert('Failed to fetch products. Unexpected data format received.');
                }
            } catch (error) {
                console.error('Error in fetching product data:', error);
                alert('Failed to fetch products. please try again later');
            }
        };
        fetchProducts();
    }, []);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const applyFilters = () => {
        let temp = [...productData];

        // Filter by name
        if (filters.name) {
            temp = temp.filter((item) =>
                item.productsName.toLowerCase().includes(filters.name.toLowerCase())
            );
        }

        // Filter by category
        if (filters.category) {
            temp = temp.filter((item) =>
                item.productsCategory.toLowerCase() === filters.category.toLowerCase()
            );
        }

        // Filter by price range
        if (filters.priceRange) {
            temp = temp.filter(
                (item) => item.productsOriginalPrice <= parseInt(filters.priceRange)
            );
        }

        // Sort by price
        if (filters.priceSort === 'lowToHigh') {
            temp.sort((a, b) => a.productsOriginalPrice - b.productsOriginalPrice);
        } else if (filters.priceSort === 'highToLow') {
            temp.sort((a, b) => b.productsOriginalPrice - a.productsOriginalPrice);
        }

        setFilteredData(temp);
    };

    return (
        <div className="product-main">
            <Helmet>
                <title>
                    Online Shopping - View All Products
                </title>
            </Helmet>
            <div className="product-title-container bg-dark position-sticky top-0 z-1">
                <p className="product-title text-white ps-3 py-2 mb-0 fs-5 fw-bold">View All Products</p>
            </div>
            {/* Breadcrumb Navigation start */}
            <nav className="wishlist-breadCrump" style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
                <ol className="breadcrumb px-3 py-2">
                    <li className="breadcrumb-item"><Link to="/user-dashboard" className="text-decoration-none" style={{ color: '#838383' }}>Home</Link></li>
                    <li className="breadcrumb-item active" style={{ color: '#838383' }} aria-current="page">View All Products</li>
                </ol>
            </nav>
            {/* Breadcrumb Navigation end */}
            <div className="product-main-container row m-0">
                {/* Filters Sidebar */}
                <div className="col-12 col-lg-2 bg-dange">
                    <div className="filters-sidebar bg-white p-2 mx-1 mb-2 rounded-2">
                        <h5 className="mb-3 text-center  fw-bold mt-4">Filters</h5>

                        <div className="mb-4">
                            <label className="form-label fw-bold">Filter by Name</label>
                            <input type="text" className="form-control" placeholder="Search by name" name="name" 
                            value={filters.name} onChange={handleFilterChange} 
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label fw-bold">Sort by Price</label>
                            <select className="form-select" name="priceSort" value={filters.priceSort} onChange={handleFilterChange} >
                                <option value="">Select</option>
                                <option value="lowToHigh">Low to High</option>
                                <option value="highToLow">High to Low</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="form-label fw-bold">Price Range (Max ₹{filters.priceRange})</label>
                            <input type="range" className="form-range" min="0" max="5000" 
                                name="priceRange" value={filters.priceRange} onChange={handleFilterChange} 
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label fw-bold">Filter by Category</label>
                            <select
                                className="form-select" name="category" value={filters.category} onChange={handleFilterChange} >
                                <option value="">All</option>
                                <option value="electronics">Men's Collections</option>
                                <option value="fashion">Women's Collections</option>
                                <option value="home">Kid's Collections</option>
                            </select>
                        </div>

                        <button className="btn btn-primary fw-bold w-100" onClick={applyFilters}>
                            Apply Filters
                        </button>
                    </div>
                </div>

                {/* show all products */}
                <div className="bg-warnin mb-2 col-12 col-lg-10">
                    <div className="row product-row mx-1">
                        {filteredData.length > 0 ? (
                            filteredData.map((item) => (
                                <div
                                    key={item._id}
                                    className="col-12 col-xl-3 col-lg-4 col-md-4 col-sm-6 border-0 bg-dange bg-transparent card product-col sap-product-card p-0 mb-2"
                                >
                                    <div className="product-inside-container sap-product-inside-container py-1 me-2 border-1 rounded-2 bg-warnin overflow-hidden">
                                        <Link>
                                            <div className="product-img-container card-img">
                                                <img
                                                    src={item.productsImg}
                                                    className="product-img"
                                                    alt={item.productsName}
                                                />
                                            </div>
                                        </Link>

                                        <div className="product-details-container px-4 card-body p-0">
                                            <Link className="product-details-link text-black text-decoration-none">
                                                <p className="product-name m-0 mt-2">{item.productsName}</p>
                                                <p className="product-category m-0 mt-2">{item.productsCategory}</p>
                                                <p className="product-off-price border rounded-1 p-1 d-inline-block mt-2 mb-0 me-4">
                                                    ₹{item.productsOriginalPrice}
                                                    <span className="product-original-price ps-1 m-0 fw-normal text-secondary text-decoration-line-through">
                                                        ₹20{item.productsOffPrice}
                                                    </span>
                                                    <span className="product-offPercentage ps-1 fw-semibold">
                                                        {item.productsOffPercentage}% off
                                                    </span>
                                                </p>
                                                <p className="product-status d-inline-block text-danger fw-bold mt-1">
                                                    {item.productsStatus}
                                                </p>
                                            </Link>

                                            <p className="product-description sap-product-description mt-1 m-0 text-black">
                                                {item.productsDescription}
                                            </p>

                                            <div className="product-buyNow-cart-wishlist sap-product-buyNow-cart-wishlist mt-2 mb-3">
                                                <div className="product-buyBtn-container mt-2 d-inline-block">
                                                    <Link
                                                        to={`/SingleProductView/${item._id}`}
                                                        className="product-buyBtn text-decoration-none px-4 px-lg-3 px-md-3 px-sm-3 py-2 fw-semibold border rounded-2"
                                                        style={{ backgroundColor: '#fd963a', color: 'white' }}
                                                    >
                                                        View Product
                                                    </Link>
                                                </div>

                                                {wishlistProducts.find((items) => items._id === item._id) ? (
                                                    <button
                                                        className="product-wishlist-btn p-1 border-0 float-end"
                                                        disabled
                                                    >
                                                        <Heart className="product-wishlist-icon" color="#dc3545" />
                                                    </button>
                                                ) : (
                                                    <button
                                                        className="product-wishlist-btn p-1 border-0 float-end"
                                                        onClick={() => addToWishlistBtn(item)}
                                                    >
                                                        <Heart className="product-wishlist-icon" color="#dc3545" />
                                                    </button>
                                                )}

                                                {cartProducts.find((items) => items._id === item._id) ? (
                                                    <button
                                                        className="product-cart-btn border-0 p-1 me-1 float-end"
                                                        disabled
                                                    >
                                                        <ShoppingCart className="product-cart-icon" color="#388e3c" />
                                                    </button>
                                                ) : (
                                                    <button
                                                        className="product-cart-btn border-0 p-1 me-1 float-end"
                                                        onClick={() => addToCartBtn(item)}
                                                    >
                                                        <ShoppingCart className="product-cart-icon" color="#388e3c" />
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center">No products found matching the filters.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
