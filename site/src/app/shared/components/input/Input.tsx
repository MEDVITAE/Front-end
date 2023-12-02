import React from "react";

interface IInputProps {
    value?: string;
    type?: string;
    placeholder: string;
    className: string;
    maxLength?: number;

    onChange: (newValue: string) => void;
    onPressEnter?: () => void;
    aoMudarTextoDeBusca?: (novoTexto: string) => void;
}

export const Input = React.forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
    return (
            <input
                ref={ref}
                value={props.value}
                type={props.type}
                maxLength={props.maxLength}
                onChange={e => props.onChange(e.target.value)}
                //Com a mudança no argumento, verifica se o mesmo é "undefined"
                // com "&&", se não for ele executa a função
                onKeyDown={e => e.key === 'Enter' ? props.onPressEnter && props.onPressEnter() : undefined}
                placeholder={props.placeholder}
                className={props.className}
            />
    );
});