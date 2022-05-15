import React, { useState } from "react";

//const image_input = document.querySelector("#input_image");

export default function Addpost() {
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState("");
  const [image, setImage] = useState(document.querySelector("#input_image"));
  var uploaded_img = "";

  image.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      uploaded_img = reader.result;
      document.querySelector(
        "#display_image"
      ).style.backgroundImage = `url(${uploaded_img})`;
    });
    reader.readAsDataURL(this.files[0]);
  });
  return (
    <div>
      <h1>Add your post</h1>
      <form>
        <label>Title</label>
        <br />
        <input type="text" value={title}></input>
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%" }}>
            <label>Price</label>
            <input type="text" value={price}></input>
          </div>
          <div style={{ width: "50%" }}>
            <label>Categories</label>
            <input type="text" value={categories}></input>
          </div>
        </div>
        <label>Image</label>
        <input
          type="file"
          accept="image/png, image/jpeg"
          id="input_image"
          value={image}
        ></input>
        <div id="display_image"></div>
        <label type="text"></label>
        <button type="submit"></button>
      </form>
    </div>
  );
}
