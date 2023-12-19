!(async () => {
  /**
   * You will be using the Dummy Product API. You can find the documentation here:
   * @see https://dummyjson.com/docs/products
   *
   * You will be building a Create Update Read Delete (CRUD) application.
   * You will need to make three AJAX requests using the Dummy Product API.
   *
   * 1. Make an AJAX request to get a list of products.
   *
   */
  const tableBody = document.querySelector("#productTableBody");
  tableBody.innerHTML = "";

  try {
    const results = await axios("https://dummyjson.com/products");
    results.data.products.forEach((product) => {
      let row = document.createElement("tr");
      row.id = product.id;
      row.innerHTML = `
      <td>${product.id}</td>
      <td>${product.title}</td>
      <td>${product.description}</td>
      <td>${product.price}</td>
      <td>${product.discount}</td>
      <td>${product.rating}</td>
      <td>${product.stock}</td>
      <td>${product.brand}</td>
      <td>${product.category}</td>
      <td><button class="deleteBtn">Delete</button></td>
    `;
      tableBody.appendChild(row);
      // console.log(row.id);
    });
  } catch (err) {
    return console.log(err);
  }

  /*
   *    Display the list of products in the table below.
   *    See the sample table row HTML below.
   *    Each row must have a "Delete" button.
   *
   * 2. When the user clicks on a "Delete" button,
   *    it should make an AJAX request to delete the product.
   *
   * 3. When the user fills out and submits the "Add Product" form,
   *    send an AJAX request to add the new product.
   *
   * You can use Axios if you like to solve this problem. (You will need to get the library from a CDN.)
   * You can choose to use promise or async and await.
   *
   * HINT: You might want to embed the product ID somewhere in the HTML
   * @see https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
   *
   * Sample table row HTML:
   * @example
   * <tr>
   *   <td>1</td>
   *   <td>iPhone 9</td>
   *   <td>An apple mobile which is nothing like apple</td>
   *   <td>$549.00</td>
   *   <td>12.96</td>
   *   <td>4.69</td>
   *   <td>94</td>
   *   <td>Apple</td>
   *   <td>smartphones</td>
   *   <td>
   *     <button class="btn btn-danger btn-sm delete-product-btn">Delete</button>
   *   </td>
   * </tr>
   */
})();
