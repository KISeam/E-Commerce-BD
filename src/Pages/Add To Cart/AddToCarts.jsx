import React, { useEffect, useState } from "react";
import PageHeader from "../../Components/PageHeader";
import HeadDetails from "../../Components/HeadDetails";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useCart } from "../../contexts/CartContext";

const AddToCarts = () => {
  const { cartItems, removeFromCart, updateQuantity, toggleCheck } = useCart();

  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [checkoutTotal, setCheckoutTotal] = useState(0);

  const totalPrice = cartItems.reduce((total, item) => {
    return item.checked
      ? total + (item.discountPrice || item.price) * item.quantity
      : total;
  }, 0);

  const totalItems = cartItems.reduce((total, item) => {
    return item.checked ? total + item.quantity : total;
  }, 0);

  const handleIncrease = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      updateQuantity(id, item.quantity + 1);
    }
  };

  const handleDecrease = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      updateQuantity(id, item.quantity - 1);
    }
  };

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleToggleCheck = (id) => {
    toggleCheck(id);
  };

  const handleCheckout = () => {
    const checkedItems = cartItems.filter((item) => item.checked);
    setSelectedItems(checkedItems);
    setCheckoutTotal(totalPrice);
    setShowCheckout(true);
  };

  const handleBackToCart = () => {
    setShowCheckout(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <div className="flex flex-col gap-6 md:gap-10 lg:gap-12">
        <PageHeader page={"AddToCarts"} />
        <div className="flex flex-col gap-6 md:gap-10 lg:gap-12 container mx-auto px-4 sm:px-6 lg:px-8">
          <HeadDetails
            title={"Add To"}
            colortitle={"Carts"}
            subtitle={"Your product wish is our first priority."}
          />

          {showCheckout ? (
            <div className="mb-10">
              <div className="w-full max-w-5xl mx-auto space-y-6 text-gray-600">
                <button
                  onClick={handleBackToCart}
                  className="text-[#63B295] hover:text-[#518e79] font-medium flex items-center gap-1 cursor-pointer"
                >
                  ← Back to Cart
                </button>

                <h2 className="text-xl font-bold">Checkout Summary</h2>

                {selectedItems.map((item) => (
                  <div key={item.id} className="border-b border-gray-200 pb-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4 w-full sm:w-auto">
                        <img
                          className="size-16 sm:size-20 object-cover rounded-md"
                          src={item.image}
                          alt={item.title}
                        />
                        <div className="flex-1 sm:flex-none">
                          <div className="font-medium text-sm sm:text-base">
                            {item.title}
                          </div>
                          <div className="text-xs sm:text-sm opacity-75 mt-1">
                            Quantity: {item.quantity}
                          </div>
                        </div>
                      </div>
                      <div className="font-medium text-right sm:w-24">
                        $
                        {(
                          (item.discountPrice || item.price) * item.quantity
                        ).toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div className="font-medium text-base sm:text-lg">
                      Total (
                      {selectedItems.reduce(
                        (acc, item) => acc + item.quantity,
                        0
                      )}{" "}
                      items)
                    </div>
                    <div className="font-bold text-lg sm:text-xl">
                      ${checkoutTotal.toFixed(2)}
                    </div>
                  </div>
                  <button className="mt-4 w-full bg-[#63B295] hover:bg-[#518e79] text-white py-2 rounded-md transition-colors cursor-pointer">
                    Confirm Order
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="mb-10">
              <div className="w-full max-w-5xl mx-auto space-y-6 text-gray-600">
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="border-b border-gray-200 pb-4"
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-4 w-full sm:w-auto">
                          <input
                            type="checkbox"
                            checked={item.checked || false}
                            onChange={() => handleToggleCheck(item.id)}
                            className="checkbox bg-transparent border-[#63B295] checked:border-[#63B295] checked:bg-[#63B295] checked:text-white"
                          />
                          <img
                            className="size-16 sm:size-20 object-cover rounded-md"
                            src={item.image}
                            alt={item.title}
                          />
                          <div className="flex-1 sm:flex-none">
                            <div className="font-medium text-sm sm:text-base">
                              {item.title}
                            </div>
                            <div className="text-xs uppercase font-semibold opacity-60">
                              {item.category}
                            </div>
                            <div className="text-xs sm:text-sm opacity-75 mt-1">
                              {item.subtitle}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between w-full sm:w-auto sm:gap-4">
                          <div className="flex items-center gap-2">
                            <button
                              className="text-sm bg-gray-200 px-2 py-1 rounded-md cursor-pointer hover:bg-gray-300"
                              onClick={() => handleDecrease(item.id)}
                            >
                              -
                            </button>
                            <span className="min-w-[20px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              className="text-sm bg-gray-200 px-2 py-1 rounded-md cursor-pointer hover:bg-gray-300"
                              onClick={() => handleIncrease(item.id)}
                            >
                              +
                            </button>
                          </div>
                          <div className="font-medium text-right sm:w-24">
                            $
                            {(
                              (item.discountPrice || item.price) * item.quantity
                            ).toFixed(2)}
                            {item.discountPrice && (
                              <div className="text-xs line-through text-gray-500">
                                ${(item.price * item.quantity).toFixed(2)}
                              </div>
                            )}
                          </div>
                          <button
                            className="text-red-500 hover:text-red-700 cursor-pointer ml-2 sm:ml-0"
                            onClick={() => handleRemove(item.id)}
                          >
                            <RiDeleteBin6Line size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-10">
                    <p className="text-lg">Your cart is empty</p>
                  </div>
                )}

                {cartItems.length > 0 && (
                  <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div className="font-medium text-base sm:text-lg">
                        Total ({totalItems} items)
                      </div>
                      <div className="font-bold text-lg sm:text-xl">
                        ${totalPrice.toFixed(2)}
                      </div>
                    </div>
                    <button
                      onClick={handleCheckout}
                      className="mt-4 w-full bg-[#63B295] hover:bg-[#518e79] text-white py-2 rounded-md transition-colors cursor-pointer"
                      disabled={totalItems === 0}
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddToCarts;
