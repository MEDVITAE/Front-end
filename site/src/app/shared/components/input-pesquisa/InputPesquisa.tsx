import React from "react";

interface IInputPesquisaProps {
    type?: string;
    placeholder: string;
    className: string;

    aoMudarTextoDeBusca?: (novoTexto: string) => void;
}

export const InputPesquisa: React.FC<IInputPesquisaProps> = ({
    type = '',
    placeholder = '',
    className = '',
    aoMudarTextoDeBusca
}) => {
    return (
            <input
                type={type}
                placeholder={placeholder}
                className={className}
                onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}
            />
    );
};