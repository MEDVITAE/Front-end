// SeuArquivo.tsx

export function Anexo(): void {
    const inputFile = document.querySelector<HTMLInputElement>("#picture__inputPerfil");
    const pictureImage = document.querySelector<HTMLImageElement>(".picture__image");
    const pictureImageTxt = "Anexe seu documento aqui!";
  
    if (pictureImage) {
      pictureImage.innerHTML = pictureImageTxt;
    }
  
    inputFile?.addEventListener("change", function (e) {
      const inputTarget = e.target as HTMLInputElement;
      const file = inputTarget.files?.[0];
  
      if (file) {
        const reader = new FileReader();
  
        reader.addEventListener("load", function (e) {
          const readerTarget = e.target as FileReader;
  
          const img = document.createElement("img");
          img.src = readerTarget.result as string;
          img.classList.add("picture__image");
  
          if (pictureImage) {
            pictureImage.innerHTML = "";
            pictureImage.appendChild(img);
          }
        });
  
        reader.readAsDataURL(file);
      } else {
        if (pictureImage) {
          pictureImage.innerHTML = pictureImageTxt;
        }
      }
    });
  }
  