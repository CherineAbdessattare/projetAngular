import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { EtudiantService } from '../services/etudiant.service';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html'
})
export class EtudiantsComponent implements OnInit {

 etudiants: Etudiant[];
  constructor(private etudiantService : EtudiantService) { 
   this.etudiants=[];
  }

  ngOnInit(): void {
    //this.etudiants = this.etudiantService.listeEtudiants();
    // this.etudiantService.listeEtudiant().subscribe(etuds => {
    //   console.log(etuds);
    //   this.etudiants = etuds;
    //   });
      this.chargerEtudiants();
  }

  chargerEtudiants(){
    this.etudiantService.listeEtudiant().subscribe(etuds => {
    console.log(etuds);
    this.etudiants = etuds;
    }); 
    }
    supprimerEtudint(e: Etudiant)
    {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.etudiantService.supprimerEtudiant(e.idEtudiant).subscribe(() => {
    console.log("produit supprimé");
    this.chargerEtudiants();
    });
    }

  // supprimerEtudiant(e : Etudiant) {
  //   //console.log(e);
  //   let conf = confirm("Etes-vous sûr ?");
  //   if (conf)

  //   this.etudiantService.supprimerEtudiant(e);

  //   }

}
