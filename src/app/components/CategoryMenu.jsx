import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import parentCategories from "../../jsons/ParentCategories.json";
import childCategories from "../../jsons/ChildCategories.json";
import products from "../../jsons/Products.json";

const CategoryMenu = () => {
  const [selectedParent, setSelectedParent] = useState(null);
  const [selectedChild, setSelectedChild] = useState(null);

  const handleMouseEnterParent = (parentId) => {
    setSelectedParent(parentId);
    setSelectedChild(null);
  };

  const handleMouseEnterChild = (childId) => {
    setSelectedChild(childId);
  };

  const getChildren = (parentId) => {
    return childCategories.filter((child) => child.parentId === parentId);
  };

  const getProducts = (childId) => {
    return products.filter((product) => product.childId === childId);
  };

  return (
    <div className="flex">
      <div
        className="main-menu w-full relative"
        onMouseLeave={() => {
          setSelectedParent(null);
          setSelectedChild(null);
        }}
      >
        <h3 className=" px-4 py-2 font-semibold">SHOP BY CATEGORIES</h3>
        {parentCategories.map((parent) => (
          <div
            key={parent.id}
            className="menu-item px-4 py-2 cursor-pointer hover:bg-primary hover:text-white flex justify-between items-center border-t group/parent "
            onMouseEnter={() => handleMouseEnterParent(parent.id)}
            aria-haspopup="true"
            aria-expanded={selectedParent === parent.id}
          >
            {parent.title}
            <FaChevronRight className=" text-white invisible group-hover/parent:visible" />
          </div>
        ))}
        {selectedParent && (
          <div className="category-menu absolute ps-2 top-0 left-full h-full w-full ">
            <div className="bg-white overflow-scroll h-full relative border border-[#0000001A] rounded-xl py-2">
              {getChildren(selectedParent).map((child) => (
                <div
                  key={child.id}
                  className="menu-item px-4 py-2  cursor-pointer hover:bg-primary hover:text-white border-b border-[#0000001A] flex justify-between items-center group/child"
                  onMouseEnter={() => handleMouseEnterChild(child.id)}
                >
                  {child.title}
                  <FaChevronRight className=" text-white invisible group-hover/child:visible" />
                </div>
              ))}
            </div>
            {selectedChild && (
              <div className="product-menu absolute top-0 ps-2 left-full w-full h-full">
                <div className=" bg-white overflow-scroll h-full border border-[#0000001A] rounded-xl py-2">
                  {getProducts(selectedChild).map((product) => (
                    <div
                      key={product.id}
                      className="menu-item px-4 py-2 cursor-pointer hover:bg-primary border-b border-[#0000001A] hover:text-white "
                    >
                      {product.title}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryMenu;
