import React from "react";

export interface Props {
    width?: string,
    height?:string,
    color?:string,
    radius?:string,
    border?:string,
    shadow?:string,
    background?:string,
    margin?:string,
    placeholder?: string,
    type?:string,
    children?:React.ReactNode,
    padding?:string,
    display?:string,
    textDecoration?:string,
    href?:string,
    estilo?:"button" | "a",
    justify?:string,
    alignItens?:string,
    imagem?: string,
    gap?:string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    cursor?:string;
}