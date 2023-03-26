import React from 'react'
import InputText from '../InputText/Input'
import TextArea from '../TexrArea/TextArea'
import Button from '../Button/Button'

const Form = (props) => {
  return (
    <form>
        <h2>{props.titulo}</h2>
        <InputText/>
        <TextArea/>
        <Button Label ="Enviar"/>

    </form>
  )
}

export default Form