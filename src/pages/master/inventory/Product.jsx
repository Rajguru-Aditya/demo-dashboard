import React, { useState } from 'react';
import {
  FormGroup,
  InputGroup,
  Button,
  HTMLTable,
  Intent,
  Menu,
  MenuItem,
} from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';
import './styles/Product.css';

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

const renderOption = (option, { handleClick }) => {
  return (
    <MenuItem key={option.value} text={option.label} onClick={handleClick} />
  );
};

const productData = [
  {
    product: 'MARG ERP SILVER',
    brand: 'Brand 1',
    category: 'Category 1',
    stock: 10,
    mrp: 100,
    status: 'Active',
  },
  {
    product: 'EXTRA COMPANY',
    brand: 'Brand 1',
    category: 'Category 1',
    stock: 10,
    mrp: 100,
    status: 'Active',
  },
  {
    product: 'Barcode Implementation',
    brand: 'Brand 1',
    category: 'Category 1',
    stock: 10,
    mrp: 100,
    status: 'Active',
  },
  {
    product: 'Product 1',
    brand: 'Brand 1',
    category: 'Category 1',
    stock: 10,
    mrp: 100,
    status: 'Active',
  },
  // Add more data objects here
];

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(productData[0].product);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="product-container">
      <div className="form-container">
        <div className="header">
          <h1>Product Master</h1>
          <div className="header-buttons">
            <Button icon="add" text="Add" intent={Intent.PRIMARY} />
            <Button icon="delete" text="Delete" intent={Intent.DANGER} />
          </div>
        </div>
        <hr />
        <div className="search-row">
          <div className="search-key">
            <FormGroup labelFor="searchKey">
              <Select
                items={options}
                itemRenderer={renderOption}
                filterable={false}
              >
                <Button rightIcon="caret-down" text="Search key" />
              </Select>
            </FormGroup>
          </div>
          <div className="search-input">
            <FormGroup labelFor="searchInput">
              <InputGroup id="searchInput" placeholder="Search..." />
            </FormGroup>
          </div>
        </div>

        <div className="body">
          <HTMLTable className="product-table" striped={true}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Brand</th>
                <th>Category</th>
                <th>Stock</th>
                <th>MRP</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {productData.map((data, index) => (
                <tr
                  key={index}
                  onClick={() => handleProductClick(data.product)}
                >
                  <td>{data.product}</td>
                  <td>{data.brand}</td>
                  <td>{data.category}</td>
                  <td>{data.stock}</td>
                  <td>{data.mrp}</td>
                  <td>{data.status}</td>
                  <td>
                    <Button icon="confirm" intent={Intent.SUCCESS} />
                    <Button icon="edit" intent={Intent.PRIMARY} />
                    <Button icon="trash" intent={Intent.DANGER} />
                  </td>
                </tr>
              ))}
            </tbody>
          </HTMLTable>
        </div>

        <h4 className='prodName'>{selectedProduct}</h4>

        <div className="footer">
          <div className="footer-table-container">
            <HTMLTable className="price-detail-table">
              <thead>
                <tr>
                  <th>Price Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Text or Label</td>
                  <td>
                    <InputGroup
                      placeholder="Input Price"
                      rightElement={
                        <span className="bp3-icon bp3-icon-dollar" />
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>Text or Label</td>
                  <td>
                    <InputGroup
                      placeholder="Input Price"
                      rightElement={
                        <span className="bp3-icon bp3-icon-dollar" />
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>Text or Label</td>
                  <td>
                    <InputGroup
                      placeholder="Input Price"
                      rightElement={
                        <span className="bp3-icon bp3-icon-dollar" />
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>Text or Label</td>
                  <td>
                    <InputGroup
                      placeholder="Input Price"
                      rightElement={
                        <span className="bp3-icon bp3-icon-dollar" />
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>Text or Label</td>
                  <td>
                    <InputGroup
                      placeholder="Input Price"
                      rightElement={
                        <span className="bp3-icon bp3-icon-dollar" />
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>Text or Label</td>
                  <td>
                    <InputGroup
                      placeholder="Input Price"
                      rightElement={
                        <span className="bp3-icon bp3-icon-dollar" />
                      }
                    />
                  </td>
                </tr>
              </tbody>
            </HTMLTable>
          </div>
          <div className="footer-table-container">
            <HTMLTable className="tax-detail-table">
              <thead>
                <tr>
                  <th>Tax Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Text or Label</td>
                  <td>
                    <InputGroup
                      placeholder="Input Tax"
                      rightElement={
                        <span className="bp3-icon bp3-icon-percent" />
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>Text or Label</td>
                  <td>
                    <InputGroup
                      placeholder="Input Tax"
                      rightElement={
                        <span className="bp3-icon bp3-icon-percent" />
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>Text or Label</td>
                  <td>
                    <InputGroup
                      placeholder="Input Tax"
                      rightElement={
                        <span className="bp3-icon bp3-icon-percent" />
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>Text or Label</td>
                  <td>
                    <InputGroup
                      placeholder="Input Tax"
                      rightElement={
                        <span className="bp3-icon bp3-icon-percent" />
                      }
                    />
                  </td>
                </tr>
              </tbody>
            </HTMLTable>
          </div>
          <div className="footer-table-container">
            <HTMLTable className="other-detail-table">
              <thead>
                <tr>
                  <th>Other Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Text or Label</td>
                  <td>Dynamic Data</td>
                </tr>
                <tr>
                  <td>Text or Label</td>
                  <td>Dynamic Data</td>
                </tr>
                <tr>
                  <td>Text or Label</td>
                  <td>Dynamic Data</td>
                </tr>
                <tr>
                  <td>Text or Label</td>
                  <td>Dynamic Data</td>
                </tr>
                <tr>
                  <td>Text or Label</td>
                  <td>Dynamic Data</td>
                </tr>
              </tbody>
            </HTMLTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
