import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import '../../../../../html-css-template/css/Agenda.css'
import Swal from 'sweetalert2';


export const Agenda = () => {
  const hoje = new Date();
  const [dataSelecionada, setDataSelecionada] = useState<Date | Date[]>(hoje);

  
  const showChosenDate = (message: string) => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    
    Toast.fire({
      icon: "info",
      title: message
    });
  };

  const showWrongDate = (message: string) => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    
    Toast.fire({
      icon: "error",
      title: message
    });
  };
  
  
  const handleDateChange = (date: Date | Date[]) => {
    if (date instanceof Date) {
      const diaDaSemana = date.getDay();
      if (diaDaSemana !== 0 && diaDaSemana !== 6) {
        setDataSelecionada(date);
        sessionStorage.setItem('data', date.getFullYear() + "-" + (Number(date.getMonth()) + 1) + "-" + date.getDate());
        showChosenDate("Agora, selecione um Hemocentro caso ainda não o tenha escolhido.")
      }
      else {
        showWrongDate("Opa, a não doação pode ser feita em fins de semana.")
      }
    }
  };

  return (
    <div className='calendario roboto'>
      <Calendar
        onChange={handleDateChange as any} // Forçar conversão de tipo para contornar o erro
        value={dataSelecionada as Date} // Forçar conversão de tipo para contornar o erro
        minDate={hoje} // Impede a seleção de datas anteriores ao dia atual
        locale={'pt-BR'} // Aplica o idioma personalizado
        selectRange={false} // Desabilita a seleção de intervalo
      />
    </div>
  );
}
