import { PropsWithChildren } from "react";
import './Card.css'
import * as C from './Card.styles';

type CardProps = PropsWithChildren<{
    title: string
    align?: 'center' | 'left' | 'right'
}>
export default function Card(props: CardProps) {
    return <C.Wrapper align={props.align || 'center'}>
        <C.Title>{props.title}</C.Title>
        {props.children}
    </C.Wrapper>

}