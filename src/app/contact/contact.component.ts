import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  isLoading = false;

  contacto = {
    nombre: '',
    email: '',
    mensaje: ''
  };

  mostrarMensajeExito(title: string, text: string) {
    Swal.fire({
      icon: 'success',
      title: title,
      text: text,
      confirmButtonText: 'Ok',
      background: '#f0f8ff',
      iconColor: '#4caf50',
      confirmButtonColor: '#4caf50',
    });
  }

  // Método para mostrar un mensaje de error
  mostrarMensajeError(title: string, text: string) {
    Swal.fire({
      icon: 'error',
      title: title,
      text: text,
      confirmButtonText: 'Ok',
      background: '#f0f8ff',
      iconColor: '#ff0000',
      confirmButtonColor: '#ff0000',
    });
  }



  onSubmit() {
    this.isLoading = true;
    setTimeout(() => {
      console.log('Mensaje enviado:', this.contacto);
      this.mostrarMensajeExito("¡Gracias por tu mensaje!", " Nos pondremos en contacto contigo pronto.");
      this.contacto = { nombre: '', email: '', mensaje: '' }; // Resetea el formulario
      this.isLoading = false;
    }, 2000);

  }


}
