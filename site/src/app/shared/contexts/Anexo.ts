// SeuArquivo.tsx
import { error } from 'console';
import { ApiException } from '../../shared/sevice/api/ApiException';
import { TarefasService } from '../sevice/api/tarefas/TarefasService';
import Swal from "sweetalert2";

export function Anexo(): Promise<File | null> {
  return new Promise((resolve) => {
    const inputFile = document.querySelector<HTMLInputElement>("#picture__inputPerfil");
    const pictureImage = document.querySelector<HTMLImageElement>(".picture__image");
    const pictureImageTxt = "Anexe seu documento aqui!";

    const showValidationErrorModal = (message: string) => {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
  
      Toast.fire({
        icon: "error",
        title: message,
      });
  
    };

    if (pictureImage) {
      pictureImage.innerHTML = pictureImageTxt;
    }

    const idUser = sessionStorage.getItem('id') ?? '';

    TarefasService.getArquivo(idUser)
      .then((result) => {
        if (result instanceof ApiException) {
          showValidationErrorModal("Erro ao carregar documento do usuário")
        } else {
          // Verifica se o resultado é um arquivo
          if (result instanceof File && result.size != 0) {
            const reader = new FileReader();

            reader.addEventListener("load", function (e) {
              const readerTarget = e.target as FileReader;

              const img = document.createElement("img");
              img.src = readerTarget.result as string; // O resultado do FileReader é um data URL
              img.classList.add("picture__image");

              if (pictureImage) {
                pictureImage.innerHTML = "";
                pictureImage.appendChild(img);
              }
            });

            reader.readAsDataURL(result); // Lê o arquivo como um data URL
          }
        }
      });


    inputFile?.addEventListener("change", function (e) {
      const inputTarget = e.target as HTMLInputElement;
      var file = inputTarget.files?.[0];


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

          if (file){
            TarefasService.postArquivo(file, idUser)
            resolve(file);
          }
        });

        reader.readAsDataURL(file);
      } else {
        if (pictureImage) {
          pictureImage.innerHTML = pictureImageTxt;
          resolve(null);
        }
      }
    });


  });
}
