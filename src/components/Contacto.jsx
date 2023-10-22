import { useState } from 'react'
import { useForm } from 'react-hook-form'

const Contacto = () => {

    const { register, handleSubmit } = useForm()

    const [mensaje,setMensaje] = useState(false)

    const [formularioEnviado, setFormularioEnviado] = useState(false);

    const enviar = (datos) => {
      console.log(datos)
      setMensaje(true)
      setFormularioEnviado(true);
      setMostrarTitulo(false);
    }
  return (
    <div className='contact-container'>
    {formularioEnviado ? (
        
        <h2 className='titulo-form'>Formulario enviado correctamente, pronto nos pondremos en contacto!</h2>
    ) : (
      <>
      <h2>Necesitas ayuda? Contactanos!</h2>
      <form className='form-contact' onSubmit={handleSubmit(enviar)}>
            <input type="text" placeholder='Indique su nombre' className='input-contact' {...register("nombre")} />
            <input type="email" placeholder='Indique su email' className='input-contact' {...register("email")} />
            <button type='submit' className='btn-contact' onClick={() => setFormularioEnviado(true)}>Enviar</button>
        </form>
      </>
    )}

</div>
  )
}

export default Contacto