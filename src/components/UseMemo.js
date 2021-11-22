import React, { useMemo, useRef, useState } from "react";

export default function UseMemo() {
  const storage = JSON.parse(localStorage.getItem("list-product")) ?? [];
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [listProduct, setListProduct] = useState(storage);
  const inputProduct = useRef();
  // biến totalPrice dùng với useMemo() thì chỉ khi listProduct thay đổi thì mới cần tính toán lại
  const totalPrice = useMemo(() => {
    console.log("tinh toan");
    let result = listProduct.reduce((sum, product) => sum + product.price, 0);
    return result;
  }, [listProduct]);

  console.log(listProduct);
  const handleAddProduct = () => {
    setListProduct((prev) => {
      const newArr = [
        ...prev,
        {
          product: product,
          price: Number(price) || 0,
        },
      ];
      localStorage.setItem("list-product", JSON.stringify(newArr));
      return newArr;
    });
    setProduct("");
    setPrice("");
    inputProduct.current.focus();
  };

  const handleClearProduct = () => {
    setListProduct([]);
    localStorage.setItem("list-product", JSON.stringify([]));
  };

  return (
    <div>
      <input
        ref={inputProduct}
        placeholder="product"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
      />
      <br />
      <input
        placeholder="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleAddProduct}>Thêm sản phẩm</button>
      <button onClick={handleClearProduct}>clear</button>
      <h3>Thành tiền: {totalPrice}vnd</h3>
      <ul>
        {listProduct.map((product, index) => (
          <li key={index}>
            {product.product} - {product.price}vnd
          </li>
        ))}
      </ul>
    </div>
  );
}
