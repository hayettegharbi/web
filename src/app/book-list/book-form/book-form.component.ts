import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '../../models/book.model';
import { BooksService } from '../../services/books.service';
import { Router } from '@angular/router';
import { MoniteursService } from '../../services/moniteurs.service';
import { Moniteur } from '../../models/moniteur.model';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class bookformComponent implements OnInit {
  CondidatForm: FormGroup;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;
  moniteurs: Moniteur[];
  MoniteursSubscription: Subscription;

  constructor(private formBuilder: FormBuilder, private booksService: BooksService,
              private router: Router , private MoniteursService: MoniteursService,) { }
              
  ngOnInit() {
    this.MoniteursSubscription = this.MoniteursService.moniteurSubject.subscribe(
      (Moniteurs: Moniteur[]) => {
        this.moniteurs = Moniteurs;
        console.log(this.moniteurs);
      }
    );
    this.MoniteursService.emitMoniteurs();
    
    this.initForm();
  }
  
  
  initForm() {
    this.CondidatForm = this.formBuilder.group({
      cin: ['', Validators.required],
      nom: '',
      prenom: '' ,
      moniteur:  ['', Validators.required]

    });
  }
  

  onSaveCondidat() {
    const nom = this.CondidatForm.get('nom').value;
    const prenom = this.CondidatForm.get('prenom').value;
    const cin = this.CondidatForm.get('cin').value;
    const moniteur = this.CondidatForm.get('moniteur').value;
    console.log(moniteur);
    const newCondidat = new Book(cin , moniteur);
    newCondidat.nom = nom;
    newCondidat.prenom = prenom;
    newCondidat.cin = cin;
    newCondidat.photo = '';
    newCondidat.moniteur  = moniteur ;
    console.log(this.fileUrl);
    if(this.fileUrl && this.fileUrl !== '') {
      newCondidat.photo = this.fileUrl;
    }
    this.booksService.createNewBook(newCondidat );
    this.router.navigate(['/books']);
}

  onUploadFile(file: File) {
    this.fileIsUploading = true;
    this.booksService.uploadFile(file).then(
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

