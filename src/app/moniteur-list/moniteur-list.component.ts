import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoniteursService } from '../services/moniteurs.service';
import { Moniteur } from '../models/moniteur.model';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moniteur-list',
  templateUrl: './moniteur-list.component.html',
  styleUrls: ['./moniteur-list.component.scss']
})
export class MoniteurListComponent implements OnInit {

  moniteurs: Moniteur[];
  MoniteursSubscription: Subscription;

  constructor(private MoniteursService: MoniteursService, private router: Router) {}

  ngOnInit() {
    this.MoniteursSubscription = this.MoniteursService.moniteurSubject.subscribe(
      (Moniteurs: Moniteur[]) => {
        this.moniteurs = Moniteurs;
        console.log(this.moniteurs);
      }
    );
    this.MoniteursService.emitMoniteurs();
    
  }

  onNewMoniteur() {
    this.router.navigate(['/moniteurs', 'new']);
  }

  onDeleteMoniteur(moniteur: Moniteur) {
    this.MoniteursService.removemoniteur(moniteur);
  }

  onViewmoniteur(id: number) {
    this.router.navigate(['/moniteurs', 'view', id]);
  }
  
  ngOnDestroy() {
    this.MoniteursSubscription.unsubscribe();
  }
}


