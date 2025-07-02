import './ShowAllProducts.css';
import Products from "../../layouts/Products/Products";
import { Helmet } from 'react-helmet-async';

export default function ShowAllProducts() {
    return (
        <div>
            <Helmet>
                <title>
                    Online Shopping - All Products
                </title>
            </Helmet>
            <div className="showAllProducts-Container">
                <p className="text-white py-3 ps-3 fw-bold" style={{ backgroundColor: '#111827' }}>All Products</p>
                <div className="row my-2 mx-1">
                    <div className="col-2">
                        <div className="products-filter-container bg-white">
                            <h5 className="py-3 mb-0 fw-bold text-center border-bottom">Filter</h5>
                            <div className="viewProduct-filterContainer my-">

                                {/* Search Bar */}
                                <div className="px-3 my-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search products"
                                    />
                                </div>

                                <div className="accordion" id="filterAccordion">

                                    {/* Category */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingCategory">
                                            <button className="accordion-button accordionButtons" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCategory" aria-expanded="true" aria-controls="collapseCategory">
                                                Category
                                            </button>
                                        </h2>
                                        <div id="collapseCategory" className="accordion-collapse collapse show" aria-labelledby="headingCategory" data-bs-parent="#filterAccordion">
                                            <div className="accordion-body">
                                                <div><input type="checkbox" /> Electronics</div>
                                                <div><input type="checkbox" /> Fashion</div>
                                                <div><input type="checkbox" /> Home</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Availability */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingAvailability">
                                            <button className="accordion-button accordionButtons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAvailability" aria-expanded="false" aria-controls="collapseAvailability">
                                                Availability
                                            </button>
                                        </h2>
                                        <div id="collapseAvailability" className="accordion-collapse collapse" aria-labelledby="headingAvailability" data-bs-parent="#filterAccordion">
                                            <div className="accordion-body">
                                                <div><input type="checkbox" /> In Stock</div>
                                                <div><input type="checkbox" /> Out of Stock</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Color */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingColor">
                                            <button className="accordion-button accordionButtons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseColor" aria-expanded="false" aria-controls="collapseColor">
                                                Color
                                            </button>
                                        </h2>
                                        <div id="collapseColor" className="accordion-collapse collapse" aria-labelledby="headingColor" data-bs-parent="#filterAccordion">
                                            <div className="accordion-body d-flex gap-2 flex-wrap">
                                                <span className="border rounded-circle p-2" style={{ backgroundColor: "red", width: 25, height: 25 }}></span>
                                                <span className="border rounded-circle p-2" style={{ backgroundColor: "blue", width: 25, height: 25 }}></span>
                                                <span className="border rounded-circle p-2" style={{ backgroundColor: "green", width: 25, height: 25 }}></span>
                                                <span className="border rounded-circle p-2" style={{ backgroundColor: "black", width: 25, height: 25 }}></span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Size */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSize">
                                            <button className="accordion-button accordionButtons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSize" aria-expanded="false" aria-controls="collapseSize">
                                                Size
                                            </button>
                                        </h2>
                                        <div id="collapseSize" className="accordion-collapse collapse" aria-labelledby="headingSize" data-bs-parent="#filterAccordion">
                                            <div className="accordion-body">
                                                <div><input type="checkbox" /> S</div>
                                                <div><input type="checkbox" /> M</div>
                                                <div><input type="checkbox" /> L</div>
                                                <div><input type="checkbox" /> XL</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Discount */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingDiscount">
                                            <button className="accordion-button accordionButtons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDiscount" aria-expanded="false" aria-controls="collapseDiscount">
                                                Discount
                                            </button>
                                        </h2>
                                        <div id="collapseDiscount" className="accordion-collapse collapse" aria-labelledby="headingDiscount" data-bs-parent="#filterAccordion">
                                            <div className="accordion-body">
                                                <div><input type="checkbox" /> 10% and above</div>
                                                <div><input type="checkbox" /> 20% and above</div>
                                                <div><input type="checkbox" /> 30% and above</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sort Options */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSort">
                                            <button className="accordion-button accordionButtons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSort" aria-expanded="false" aria-controls="collapseSort">
                                                Sort By
                                            </button>
                                        </h2>
                                        <div id="collapseSort" className="accordion-collapse collapse" aria-labelledby="headingSort" data-bs-parent="#filterAccordion">
                                            <div className="accordion-body">
                                                <div><input type="radio" name="sort" /> Price: Low to High</div>
                                                <div><input type="radio" name="sort" /> Price: High to Low</div>
                                                <div><input type="radio" name="sort" /> Newest Arrivals</div>
                                                <div><input type="radio" name="sort" /> Best Selling</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Price Range */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingPrice">
                                            <button className="accordion-button accordionButtons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePrice" aria-expanded="false" aria-controls="collapsePrice">
                                                Price Range
                                            </button>
                                        </h2>
                                        <div id="collapsePrice" className="accordion-collapse collapse" aria-labelledby="headingPrice" data-bs-parent="#filterAccordion">
                                            <div className="accordion-body">
                                                <div className="d-flex flex-column gap-2">
                                                    <input type="number" className="form-control" placeholder="Min Price" />
                                                    <input type="number" className="form-control" placeholder="Max Price" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Brand */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingBrand">
                                            <button className="accordion-button accordionButtons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBrand" aria-expanded="false" aria-controls="collapseBrand">
                                                Brand
                                            </button>
                                        </h2>
                                        <div id="collapseBrand" className="accordion-collapse collapse" aria-labelledby="headingBrand" data-bs-parent="#filterAccordion">
                                            <div className="accordion-body">
                                                <div><input type="checkbox" /> Samsung</div>
                                                <div><input type="checkbox" /> Nike</div>
                                                <div><input type="checkbox" /> Sony</div>
                                                <div><input type="checkbox" /> Apple</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Ratings */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingRating">
                                            <button className="accordion-button accordionButtons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseRating" aria-expanded="false" aria-controls="collapseRating">
                                                Ratings
                                            </button>
                                        </h2>
                                        <div id="collapseRating" className="accordion-collapse collapse" aria-labelledby="headingRating" data-bs-parent="#filterAccordion">
                                            <div className="accordion-body">
                                                <div><input type="checkbox" /> ⭐⭐⭐⭐⭐</div>
                                                <div><input type="checkbox" /> ⭐⭐⭐⭐ & above</div>
                                                <div><input type="checkbox" /> ⭐⭐⭐ & above</div>
                                                <div><input type="checkbox" /> ⭐⭐ & above</div>
                                                <div><input type="checkbox" /> ⭐ & above</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-10">
                        <div className="view-product-container">
                            <h5 className="py-3 mb-0 fw-bold bg-white text-center border-bottom">View Filter Products</h5>
                            {/* Product list goes here */}
                            <div className="bg-inf"><Products/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
