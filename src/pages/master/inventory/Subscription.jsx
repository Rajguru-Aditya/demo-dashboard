import React, { useState } from 'react';
import {
  FormGroup,
  InputGroup,
  Button,
  HTMLTable,
  Intent,
  MenuItem,
} from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';
import './styles/Subscription.css';

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
    pack: 'MARG ERP SILVER',
    status: 'Active',
  },
  {
    pack: 'EXTRA COMPANY',
    status: 'Active',
  },
  {
    pack: 'Barcode Implementation',
    status: 'Active',
  },
  {
    pack: 'Product 1',
    status: 'Active',
  },
  // Add more data objects here
];

const Subscription = () => {
  const [selectedProduct, setSelectedProduct] = useState(productData[0].product);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="product-container">
      <div className="form-container">
        <div className="header">
          <h1>Subscription Master</h1>
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
          {productData.length === 0 ? (
            <div className="empty-message">
              No products found.
            </div>
          ) : (
            <HTMLTable className="product-table" striped={true}>
              <thead>
                <tr>
                  <th>Pack</th>
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
                  <td>{data.pack}</td>
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Subscription;