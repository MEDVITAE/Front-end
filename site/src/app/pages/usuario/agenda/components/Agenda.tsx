import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import '../../../../../html-css-template/css/Agenda.css'


export const Agenda = () => {
  const hoje = new Date();
  const [dataSelecionada, setDataSelecionada] = useState<Date | Date[]>(hoje);

  sessionStorage.setItem('data', dataSelecionada.toLocaleString());


  const handleDateChange = (date: Date | Date[]) => {
    if (date instanceof Date) {
      const diaDaSemana = date.getDay();
      if (diaDaSemana !== 0 && diaDaSemana !== 6) {
        setDataSelecionada(date);
        console.log(dataSelecionada);
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
