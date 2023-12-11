import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategorySelect }) {

  const handleCategoryClick = (category) => {
      onCategorySelect(category);
    };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category)=>(
        <button 
          onClick={() => handleCategoryClick(category)} 
          className={category === selectedCategory ? 'selected' : ''} 
          key={category.id}>
            {category}
        </button>
      ))}
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
