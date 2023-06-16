import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetalertService {


  constructor() { }

  message(data: any){
    this.close();
    
    Swal.fire({
      position: 'center',
      icon: data.type,
      title: data.message,
      showConfirmButton: true,
      timer: 1000,
      
    });
  }

  loading(title: string, html: string){
    Swal.fire({
      title: title,
      html: html,
      didOpen: () => {
        Swal.showLoading()
      },
    });
  }

  close(){
    Swal.close();
  }
}
