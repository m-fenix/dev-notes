import React, { Component } from 'react';
import styles from './app.module.css';

class Empleado extends Component {
  render() { 
    return <h1 className={styles.colorRojo}> Soy un Empleado, Hola</h1>;
  }
}
 
export default Empleado;