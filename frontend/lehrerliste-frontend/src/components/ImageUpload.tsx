interface ImageUploadProps {
  onUpload: (file: File|undefined) => void;
  image?: File;
}

const ImageUpload = ({ onUpload, image }: ImageUploadProps) => {
  //Show the image if the user has uploaded one and also let him delete it and use the camera to take a picture

  return (
    <div className="form-control w-full">
      <div className="flex justify-center">
          <label className="btn btn-primary m-2">
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


          <label className="btn btn-primary m-2">
            <input
              type="file"
              className="hidden"
              accept="image/*"
              capture="environment"
              onChange={(e) => {
                if (e.target.files) {
                  console.log(e.target.files[0]);
                  onUpload(e.target.files[0]);
                }
              }}
            />
            Kamera
          </label>
        {image != undefined && (
            <label className="btn btn-primary m-2">
              <input
                type="button"
                className="hidden"
                onClick={() => {
                  onUpload(undefined);
                  //delete the image from the other input
                  const input = document.querySelector(
                    'input[type="file"]'
                  ) as HTMLInputElement;
                  input.value = "";

                }}
              />
              Löschen
            </label>

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
