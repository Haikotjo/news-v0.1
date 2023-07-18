// DropdownComponent.js
import React from 'react';
import './Dropdown.module.scss';
import Dropdown from 'react-bootstrap/Dropdown';

const DropdownComponent = ({ title, items, onSelect }) => {
    return (
        <Dropdown onSelect={onSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {title}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {items.map((item, index) => (
                    <Dropdown.Item eventKey={item.value} key={index}>
                        {item.label}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default DropdownComponent;
