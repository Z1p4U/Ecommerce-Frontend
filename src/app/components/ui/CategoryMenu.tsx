import { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import parentCategories from "@/jsons/ParentCategories.json";
import childCategories from "@/jsons/ChildCategories.json";
import products from "@/jsons/Products.json";

const CategoryMenu = () => {
  const [selectedParent, setSelectedParent] = useState(null);
  const [selectedChild, setSelectedChild] = useState(null);

  const handleMouseEnterParent = (parentId: any) => {
    if (getChildren(parentId).length > 0) {
      setSelectedParent(parentId);
      setSelectedChild(null);
    } else {
      setSelectedParent(null);
      setSelectedChild(null);
    }
  };

  const handleMouseEnterChild = (childId: any) => {
    if (getProducts(childId).length > 0) {
      setSelectedChild(childId);
    } else {
      setSelectedChild(null);
    }
  };

  const getChildren = (parentId: any) => {
    return childCategories.filter((child) => child.parentId === parentId);
  };

  const getProducts = (childId: any) => {
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
        <h3 className="px-4 py-2 font-semibold">SHOP BY CATEGORIES</h3>
        {parentCategories.map((parent) => (
          <div
            key={parent.id}
            className="menu-item px-4 py-2 z-10 cursor-pointer hover:bg-primary hover:text-white flex justify-between items-center border-t group/parent"
            onMouseEnter={() => handleMouseEnterParent(parent.id)}
          >
            {parent.title}
            {getChildren(parent.id).length > 0 && (
              <FaChevronRight className="text-white invisible group-hover/parent:visible" />
            )}
          </div>
        ))}
        {selectedParent && getChildren(selectedParent).length > 0 && (
          <div className="category-menu absolute ps-2 z-10 top-0 left-full h-full w-full">
            <div className="bg-white overflow-scroll h-full relative border border-[#0000001A] rounded-xl py-2">
              {getChildren(selectedParent).map((child) => (
                <div
                  key={child.id}
                  className="menu-item px-4 py-2 cursor-pointer hover:bg-primary hover:text-white border-b border-[#0000001A] flex justify-between items-center group/child"
                  onMouseEnter={() => handleMouseEnterChild(child.id)}
                >
                  {child.title}
                  {getProducts(child.id).length > 0 && (
                    <FaChevronRight className="text-white invisible group-hover/child:visible" />
                  )}
                </div>
              ))}
            </div>
            {selectedChild && getProducts(selectedChild).length > 0 && (
              <div className="product-menu absolute top-0 ps-2 left-full w-full h-full">
                <div className="bg-white overflow-scroll h-full border border-[#0000001A] rounded-xl py-2">
                  {getProducts(selectedChild).map((product) => (
                    <div
                      key={product?.id}
                      className="menu-item px-4 py-2 cursor-pointer hover:bg-primary border-b border-[#0000001A] hover:text-white"
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
