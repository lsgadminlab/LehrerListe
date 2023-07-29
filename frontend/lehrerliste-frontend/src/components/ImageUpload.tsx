import React from "react";

interface ImageUploadProps {
  onUpload: (file: File) => void;
  image?: File;
}

const ImageUpload = ({ onUpload, image }: ImageUploadProps) => {
  //Show the image if the user has uploaded one and also let him delete it and use the camera to take a picture

  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">Bild</span>
      </label>
      <div className="flex">
        <div className="flex-1">
          <label className="btn btn-primary">
            <input
              type="file"
              className="hidden"
              onChange={(e) => {
                if (e.target.files) {
                  onUpload(e.target.files[0]);
                }
              }}
            />
            Bild hochladen
          </label>
        </div>
        <div className="flex-1">
          <label className="btn btn-primary">
            <input
              type="file"
              className="hidden"
              accept="image/*"
              capture="environment"
              onChange={(e) => {
                if (e.target.files) {
                  onUpload(e.target.files[0]);
                }
              }}
            />
            Kamera
          </label>
        </div>
        {image != undefined && (
          <div className="flex-1">
            <label className="btn btn-primary">
              <input
                type="button"
                className="hidden"
                onClick={() => {
                  onUpload(new File([], "empty"));
                }}
              />
              Löschen
            </label>
          </div>
        )}
      </div>
      {image != undefined && (
        <div className="flex justify-center">
          <div className="flex-1 justify-center">
            <img
              src={URL.createObjectURL(image)}
              alt="uploaded"
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
