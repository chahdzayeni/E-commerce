// about.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  formData: any = {}; // Les données du formulaire seront stockées ici

  submitForm() {
    // Ajoutez ici la logique pour traiter les données du formulaire (envoi à un serveur, etc.)
    console.log('Form submitted:', this.formData);
    alert('Votre avis a été enregistré!');
  }
}
