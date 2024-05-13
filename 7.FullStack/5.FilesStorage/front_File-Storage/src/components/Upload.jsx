import React, { useEffect, useState } from "react";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import app from "../firebase";

export default function Upload() {
  const [img, setImg] = useState(null);
  const [imgLink, setImgLink] = useState("");
  const [imgProgress, setImgProgress] = useState(0);
  const [allImg, setAllImg] = useState([]);

  useEffect(() => {
    img && uploadFile(img);
  }, [img]);

  useEffect(() => {
    async function getImages() {
      try {
        const response = await fetch("http://localhost:5000/api/images");
        if (response.ok) {
          const imagesFromApi = await response.json();
          // console.log(imagesFromApi);
          setAllImg(imagesFromApi);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getImages();
  }, []);

  const uploadFile = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, "images/" + fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log(snapshot);
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImgProgress(Math.round(progress));
      },
      (error) => {
        console.log(error);
        // switch (error.code) {
        //   case "storage/unauthorized":
        //     console.log(error);
        //     break;
        // }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) =>
          setImgLink(downloadUrl.toString())
        );
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/images", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ img: imgLink }),
      });

      if (response.ok) {
        const newImage = await response.json();
        console.log(newImage);
        setAllImg([...allImg, newImage]);
        setImg(null);
        setImgLink("");
        setImgProgress(0);
        const input = document.getElementById("img");
        input.value = "";
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="d-flex center flex-column">
      <form onSubmit={handleSubmit} className="mb-20">
        <div className="d-flex flex-column mb-20">
          <label htmlFor="img" className="mb-10">
            Image :
          </label>
          {imgProgress > 0 ? "Uploading: " + imgProgress + "%" : ""}
          <input
            type="file"
            id="img"
            accept="image/*"
            onChange={(e) => setImg(() => e.target.files[0])}
          />
        </div>
        <button className="btn btn-primary">Upload</button>
      </form>
      <div
        className="d-flex flex-row flew-wrap"
        style={{
          minWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {allImg &&
          allImg.map((img) => (
            <img
              key={img._id}
              src={img.imgUrl}
              alt="img"
              style={{
                width: "300px",
                maxHeight: "300px",
                marginRight: "20px",
              }}
            />
          ))}
      </div>
    </div>
  );
}
