import React, { useState } from 'react';
import './NavigationBar.css'; 

const NavigationBar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const content = {
    Home: 'This is the Home page content.',
    Books: 'This is the Books page content.',
    About: 'This is the About page content.',
    Philosophers: 'This is the Philosophers page content.',
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <ul className="navigation-list">
        {Object.keys(content).map((item) => (
          <li key={item} onClick={() => handleItemClick(item)}>
            {item}
          </li>
        ))}
      </ul>
      {selectedItem && <div className="content">{content[selectedItem]}</div>}
    </div>
  );
};

export default NavigationBar;
