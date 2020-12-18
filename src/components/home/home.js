import React from 'react'
import css from './home.module.css'

class Home extends React.Component {
  render = () => {
    return (
      <div className={css.container}>
        <div className={css.title}>
          Hola {this.props.userName}
          <div>Opciones</div>
          <button>Agregar Usuario</button>
          <button>Eliminar Usuario</button>
        </div>
        <button>Logout</button>
      </div>
    )
  }
}

export default Home