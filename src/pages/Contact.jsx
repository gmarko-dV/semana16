import { useState } from "react"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" })
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email) return
    setSuccess(true)
  }

  return (
    <div className="col-md-6 mx-auto">
      <h2>Contacto</h2>

      {success && <div className="alert alert-success">¡Formulario enviado!</div>}

      <form onSubmit={handleSubmit}>
        <input placeholder="Nombre" className="form-control my-2"
          onChange={(e)=>setForm({...form, name: e.target.value})}/>
        <input type="email" placeholder="Email" className="form-control my-2"
          onChange={(e)=>setForm({...form, email: e.target.value})}/>
        <textarea placeholder="Mensaje" className="form-control my-2"
          onChange={(e)=>setForm({...form, msg: e.target.value})}/>
        <button className="btn btn-dark w-100">Enviar</button>
      </form>
    </div>
  )
}