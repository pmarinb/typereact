import React, { useRef } from "react";

interface ShoppingFormProps {
  onAddItem: (product: string, quantity: number) => void;
}

function ShoppingForm({ onAddItem }: ShoppingFormProps): JSX.Element {
  const prodinputRef = useRef<HTMLInputElement>(null);
  const quainputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newProduct = prodinputRef.current!.value;
    const quantity = quainputRef.current!.value;

    onAddItem(newProduct, Number(quantity));

    prodinputRef.current!.value = "";
    quainputRef.current!.value = "0";
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" ref={prodinputRef} />
      <input type="number" min={0} placeholder="Quantity" ref={quainputRef} />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ShoppingForm;
