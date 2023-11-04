import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { enUS } from 'date-fns/locale';


export const Agenda = () => {
  const hoje = new Date();
  const [dataSelecionada, setDataSelecionada] = useState<Date | Date[]>(hoje);


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
    <div>
      <h2>Calendário</h2>
      <Calendar
        onChange={handleDateChange as any} // Forçar conversão de tipo para contornar o erro
        value={dataSelecionada as Date} // Forçar conversão de tipo para contornar o erro
        minDate={hoje} // Impede a seleção de datas anteriores ao dia atual
        locale={'pt-BR'} // Aplica o idioma personalizado
        selectRange={false} // Desabilita a seleção de intervalo
      />
      <p>Data selecionada: {dataSelecionada instanceof Date ? dataSelecionada.toDateString() : ''}</p>
      {/* Você pode adicionar mais lógica aqui com base na data selecionada */}
    </div>
  );
}
