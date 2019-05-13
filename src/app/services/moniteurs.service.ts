import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Moniteur } from '../models/moniteur.model';
import * as firebase from 'firebase' ;

@Injectable({
  providedIn: 'root'
})
export class MoniteursService {
  moniteurs: Moniteur[] = [];
  moniteurSubject = new Subject<Moniteur[]>();
  constructor() { 
    this.getMoniteurs() ;
  }
  
  emitMoniteurs() {
    this.moniteurSubject.next(this.moniteurs);
  }
  saveMoniteurs() {
    firebase.database().ref('/moniteurs').set(this.moniteurs);
}

getMoniteurs() {
  firebase.database().ref('/moniteurs')
    .on('value', (data: firebase.database.DataSnapshot) => {
        this.moniteurs = data.val() ? data.val() : [];
        this.emitMoniteurs();
      }
    );
}
getSinglemoniteur(id: number) {
  return new Promise(
    (resolve, reject) => {
      firebase.database().ref('/moniteurs/' + id).once('value').then(
        (data: firebase.database.DataSnapshot) => {
          resolve(data.val());
        }, (error) => {
          reject(error);
        }
      );
    }
  );
}
createNewmoniteur(newmoniteur: Moniteur) {
  this.moniteurs.push(newmoniteur);
  this.saveMoniteurs();
  this.emitMoniteurs();
}

removemoniteur(moniteur: Moniteur) {
  if(moniteur.photo) {
    const storageRef = firebase.storage().refFromURL(moniteur.photo);
    storageRef.delete().then(
      () => {
        console.log('Photo removed!');
      },
      (error) => {
        console.log('Could not remove photo! : ' + error);
      }
    );
  }
  const moniteurIndexToRemove = this.moniteurs.findIndex(
    (moniteurEl) => {
      if(moniteurEl === moniteur) {
        return true;
      }
    }
  );
  this.moniteurs.splice(moniteurIndexToRemove, 1);
  this.saveMoniteurs();
  this.emitMoniteurs();
}
uploadFile(file: File) {
  return new Promise(
    (resolve, reject) => {
      const almostUniqueFileName = Date.now().toString();
      const upload = firebase.storage().ref()
        .child('images/' + almostUniqueFileName + file.name).put(file);
      upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
        () => {
          console.log('Chargement…');
        },
        (error) => {
          console.log('Erreur de chargement ! : ' + error);
          reject();
        },
        () => {
          upload.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            resolve(downloadURL);

          });
          
        }
      );
    }
  );
}


}
