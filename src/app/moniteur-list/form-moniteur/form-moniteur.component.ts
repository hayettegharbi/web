import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Moniteur } from '../../models/moniteur.model';
import { MoniteursService } from '../../services/moniteurs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-moniteur',
  templateUrl: './form-moniteur.component.html',
  styleUrls: ['./form-moniteur.component.scss']
})
export class FormMoniteurComponent implements OnInit {

  moniteurForm: FormGroup;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;

  constructor(private formBuilder: FormBuilder, private MoniteursService: MoniteursService,
              private router: Router) { }
              
  ngOnInit() {
    this.initForm();
  }


  
  initForm() {
    this.moniteurForm = this.formBuilder.group({
      cin: ['', Validators.required],
      nom: '',
      prenom: '' ,



    });
  }
  

  onSaveMoniteur() {
    const nom = this.moniteurForm.get('nom').value;
    const prenom = this.moniteurForm.get('prenom').value;
    const cin = this.moniteurForm.get('cin').value;
    const newMoniteur = new Moniteur(cin);
    newMoniteur.nom = nom;
    newMoniteur.prenom = prenom;
    newMoniteur.cin = cin;
    newMoniteur.photo = '';
    newMoniteur.users=[] ;
    console.log(this.fileUrl);
    if(this.fileUrl && this.fileUrl !== '') {
      newMoniteur.photo = this.fileUrl;
    }
    this.MoniteursService.createNewmoniteur(newMoniteur);
    this.router.navigate(['/moniteurs']);
}

  onUploadFile(file: File) {
    this.fileIsUploading = true;
    this.MoniteursService.uploadFile(file).then(
      (url: string) => {
        console.log(url);
        
        this.fileUrl = url;
        this.fileIsUploading = false;
        this.fileUploaded = true;
      }
    );
}

detectFiles(event) {
  console.log(event.target.files[0]);
  
  this.onUploadFile(event.target.files[0]);
}

}

