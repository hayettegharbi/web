import { Component, OnInit } from '@angular/core';
import { Moniteur } from '../../models/moniteur.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MoniteursService } from '../../services/moniteurs.service';
@Component({
  selector: 'app-single-moniteur',
  templateUrl: './single-moniteur.component.html',
  styleUrls: ['./single-moniteur.component.scss']
})
export class SingleMoniteurComponent implements OnInit {

  Moniteur: Moniteur;

  constructor(private route: ActivatedRoute, private MoniteursService: MoniteursService,
              private router: Router) {}

  ngOnInit() {
    this.Moniteur = new Moniteur('');
    const id = this.route.snapshot.params['id'];
    this.MoniteursService.getSinglemoniteur(+id).then(
      (Moniteur: Moniteur) => {
        this.Moniteur = Moniteur;
        
        
      }
    );
  }

  onBack() {
    this.router.navigate(['/moniteurs']);
  }


}
