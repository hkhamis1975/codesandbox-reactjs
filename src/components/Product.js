export default function Product() {
  let content;
  const products = ["Laptop", "Mobile", "Laptop", "PowerBank"];
  content = products.map((product, index) => <h3 key={index}>{product}</h3>);

  return (
    <div>
      <h1>Product.js</h1>
      {content}
    </div>
  );
}
