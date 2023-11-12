import React from "react";

function CategoryFilter({ categories, onCategoryClick, selectedCategory }) {


  const categoryButtons = categories.map((category) => {
    const className = category === selectedCategory ? "selected" : "";
    return (
      <button
        key={category}
        className={className} 
        onClick={() => onCategoryClick(category)} 
        >
        {category}
      </button>
    );
})


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
