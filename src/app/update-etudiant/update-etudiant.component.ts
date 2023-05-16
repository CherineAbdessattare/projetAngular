import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from '../services/etudiant.service';
import { Etudiant} from '../model/etudiant.model';
import { Departement } from '../model/departement.model';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  })
export class UpdateEtudiantComponent implements OnInit {
  currentEtudiant = new Etudiant();
  departements! : Departement[];
  updatedDepId! : number;
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params.id);
//this.currentEtudiant = this.etudiantService.consulterEtudiant(this.activatedRoute.snapshot. params['id']);
//onsole.log(this.currentEtudiant);

// this.departements = this.etudiantService.listeDepartements();
// this.updatedDepId=this.currentEtudiant.departement.idDepart;
this.etudiantService.consulterEtudiant(this.activatedRoute.snapshot.params['id']).
 subscribe( etud =>{ this.currentEtudiant = etud; } ) ;

  }

//   updateEtudiant()
// {  
//   // console.log(this.currentEtudiant);
// this.currentEtudiant.departement=this.etudiantService.consulterDepartement(this.updatedDepId);
// this.etudiantService.updateEtudiant(this.currentEtudiant);
// this.router.navigate(['etudiants']);
// }

}
