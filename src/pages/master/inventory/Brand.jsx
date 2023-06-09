// import React, { useState } from 'react';
// import {
//   FormGroup,
//   InputGroup,
//   Button,
//   HTMLTable,
//   Intent,
//   MenuItem,
// } from '@blueprintjs/core';
// import { Select } from '@blueprintjs/select';
// import './styles/Brand.css';

// const options = [
//   { label: 'Search Key', value: 'key' },
//   { label: 'Product', value: 'product' },
//   { label: 'Brand', value: 'brand' },
// ];

// const renderOption = (option, { handleClick }) => {
//   return (
//     <MenuItem key={option.value} text={option.label} onClick={handleClick} />
//   );
// };

// const productData = [
//   {
//     product: 'MARG ERP SILVER',
//     brand: 'Brand 1',
//     category: 'Category 1',
//     stock: 10,
//     mrp: 1999,
//     status: 'Active',
//   },
//   {
//     product: 'EXTRA COMPANY',
//     brand: 'Brand 1',
//     category: 'Category 1',
//     stock: 10,
//     mrp: 100,
//     status: 'Active',
//   },
//   {
//     product: 'Barcode Implementation',
//     brand: 'Brand 1',
//     category: 'Category 1',
//     stock: 10,
//     mrp: 18780,
//     status: 'Active',
//   },
//   {
//     product: 'Product 1',
//     brand: 'Brand 1',
//     category: 'Category 1',
//     stock: 10,
//     mrp: 154564,
//     status: 'Active',
//   },
//   {
//     product: 'Product 1',
//     brand: 'Brand 1',
//     category: 'Category 1',
//     stock: 10,
//     mrp: 154564,
//     status: 'Active',
//   },
//   {
//     product: 'Product 1',
//     brand: 'Brand 1',
//     category: 'Category 1',
//     stock: 10,
//     mrp: 154564,
//     status: 'Active',
//   },
//   {
//     product: 'Product 1',
//     brand: 'Brand 1',
//     category: 'Category 1',
//     stock: 10,
//     mrp: 154564,
//     status: 'Active',
//   },
//   {
//     product: 'Product 1',
//     brand: 'Brand 1',
//     category: 'Category 1',
//     stock: 10,
//     mrp: 154564,
//     status: 'Active',
//   },
//   {
//     product: 'Product 1',
//     brand: 'Brand 1',
//     category: 'Category 1',
//     stock: 10,
//     mrp: 154564,
//     status: 'Active',
//   },
//   {
//     product: 'Product 1',
//     brand: 'Brand 1',
//     category: 'Category 1',
//     stock: 10,
//     mrp: 154564,
//     status: 'Active',
//   },
//   {
//     product: 'Product 1',
//     brand: 'Brand 1',
//     category: 'Category 1',
//     stock: 10,
//     mrp: 154564,
//     status: 'Active',
//   },
//   {
//     product: 'Product 1',
//     brand: 'Brand 1',
//     category: 'Category 1',
//     stock: 10,
//     mrp: 154564,
//     status: 'Active',
//   },
//   // Add more data objects here
// ];

// const footerData = [
//   {
//     title: 'Price Details',
//     rows: [
//       { label: 'M.R.P', icon: 'bp3-icon-dollar' },
//       { label: 'Purch.Rate', icon: 'bp3-icon-dollar', defaultValue: '0.00' },
//       { label: 'Cost', icon: 'bp3-icon-dollar', defaultValue: '0.00' },
//       { label: 'Purch.Desc', icon: 'bp3-icon-dollar', defaultValue: '0.00' },
//       { label: 'Rate', icon: 'bp3-icon-dollar', defaultValue: '0.00' },
//       { label: 'Margin', icon: 'bp3-icon-dollar', defaultValue: '0.00' },
//     ],
//   },
//   {
//     title: 'Tax Details',
//     rows: [
//       { label: 'HSM/SAC', icon: 'bp3-icon-percent', defaultValue: '0.00' },
//       { label: 'IGST', icon: 'bp3-icon-percent', defaultValue: '0.00' },
//       { label: 'SGST', icon: 'bp3-icon-percent', defaultValue: '0.00' },
//       { label: 'CGST', icon: 'bp3-icon-percent', defaultValue: '0.00' },
//     ],
//   },
//   {
//     title: 'Other Details',
//     rows: [
//       { label: 'UNIT 1/2', icon: 'bp3-icon-percent', defaultValue: '0.00' },
//       { label: 'CONVERSION', icon: 'bp3-icon-percent', defaultValue: '0.00' },
//       { label: 'GROUP', icon: 'bp3-icon-percent', defaultValue: '0.00' },
//       { label: 'CATEGORY', icon: 'bp3-icon-percent', defaultValue: '0.00' },
//       { label: 'RACK', icon: 'bp3-icon-percent', defaultValue: '0.00' },
//     ],
//   },
// ];

// const Brand = () => {
//   const [selectedProduct, setSelectedProduct] = useState(productData[0].product);
//   const [mrpValue, setMRPValue] = useState('0.00');

//   const handleProductClick = (product) => {
//     const selectedProductData = productData.find((data) => data.product === product);
//     setSelectedProduct(product);
//     setMRPValue(selectedProductData.mrp.toString());
//   };

//   const [selectedOption, setSelectedOption] = useState(options[0]);

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//   };

//   return (
//     <>
//       <div className="product-container">
//         <div className="form-container">
//           <div className="header">
//             <h1>Product Master</h1>
//             <div className="header-buttons">
//               <Button icon="add" text="Add" intent={Intent.PRIMARY} />
//               <Button icon="delete" text="Delete" intent={Intent.DANGER} />
//             </div>
//           </div>
//           <hr />
//           <div className="search-row">
//             <div className="search-key">
//               <FormGroup labelFor="searchKey">
//                 <Select
//                   items={options}
//                   itemRenderer={renderOption}
//                   filterable={false}
//                   onItemSelect={handleOptionSelect}
//                   activeItem={selectedOption}
//                 >
//                   <Button rightIcon="caret-down" text="Search key" />
//                 </Select>
//               </FormGroup>
//             </div>
//             <div className="search-input">
//               <FormGroup labelFor="searchInput">
//                 <InputGroup id="searchInput" placeholder="Search..." />
//               </FormGroup>
//             </div>
//           </div>

//           <div className="body">
//             <div className="product-table-container">
//               <HTMLTable className="product-table" striped={true}>
//                 <thead>
//                   <tr>
//                     <th>Product</th>
//                     <th>Brand</th>
//                     <th>Category</th>
//                     <th>Stock</th>
//                     <th>MRP</th>
//                     <th>Status</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {productData.map((data, index) => (
//                     <tr
//                       key={index}
//                       onClick={() => handleProductClick(data.product)}
//                     >
//                       <td>{data.product}</td>
//                       <td>{data.brand}</td>
//                       <td>{data.category}</td>
//                       <td>{data.stock}</td>
//                       <td>{data.mrp}</td>
//                       <td>{data.status}</td>
//                       <td>
//                         <Button icon="confirm" intent={Intent.SUCCESS} />
//                         <Button icon="edit" intent={Intent.PRIMARY} />
//                         <Button icon="trash" intent={Intent.DANGER} />
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </HTMLTable>
//             </div>
//           </div>

//           <h4 className="prodName">{selectedProduct}</h4>

//           <div className="footer">
//             {footerData.map((table, index) => (
//               <div className="footer-table-container" key={index}>
//                 <HTMLTable className="price-detail-table">
//                   <thead>
//                     <tr>
//                       <th>{table.title}</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {table.rows.map((row, rowIndex) => (
//                       <tr key={rowIndex}>
//                         <td>{row.label}</td>
//                         <td>
//                           {row.label === 'M.R.P' ? (
//                             <input
//                               type="number"
//                               value={mrpValue}
//                               onChange={(e) => setMRPValue(e.target.value)}
//                               className="bp3-input"
//                               placeholder="Input Price"
//                             />
//                           ) : (
//                             <InputGroup
//                               defaultValue={row.defaultValue}
//                               placeholder="Input Price"
//                               rightElement={<span className={`bp3-icon ${row.icon}`} />}
//                             />
//                           )}
//                         </td>

//                       </tr>
//                     ))}
//                   </tbody>
//                 </HTMLTable>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Brand;
