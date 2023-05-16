import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { EtudiantService } from '../services/etudiant.service';
import { Departement } from '../model/departement.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
})
export class AddEtudiantComponent implements OnInit {
  newEtudiant = new Etudiant();
  message: string | undefined ;
  departements!: Departement[];
  newIdDepart!: number;
  newDepartement!: Departement;
  constructor(private etudiantService : EtudiantService,
    private router : Router) { }

  ngOnInit(): void {
    // this.departements = this.etudiantService.listeDepartements();
  }

  addEtudiant(){
    this.etudiantService.ajouterEtudiant(this.newEtudiant).subscribe(etud => {
      console.log(etud);
      this.router.navigate(['etudiants']);
});
  }
}
