import { Injectable } from '@angular/core';
import {Etudiant} from '../model/etudiant.model';
import { Departement } from '../model/departement.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  apiURL: string = 'http://localhost:8061/etudiants/api';
  idEtudiant! : number;
  etudiant!:Etudiant;
  // etudiants:Etudiant[];
  // departements: Departement[];
  constructor(private http : HttpClient) { 
    //console.log("Création de service etudiant ! ")
    // this.departements = [{idDepart : 1, nomDepart :"TI",DescriptionDepart:"Technologies de l'informatique"},
    // {idDepart : 2, nomDepart :"GM",DescriptionDepart:"Génie mécanique"}]
    // this.etudiants = [{idEtudiant:1, nom:'Cherine',prenom:'Abdessattare',parcours:'DSI',
    // email:'shirine073@gmail.com',dateInscription: new Date("01/15/2023"), departement :{idDepart : 1, nomDepart :"TI",DescriptionDepart:"Technologies de l'informatique"}},
    // {idEtudiant:2, nom:'Dalel',prenom:'Loussaief',parcours:'DSI',
    // email:'loussaiefdalel@gmail.com',dateInscription: new Date("01/20/2023"),departement :{idDepart : 1, nomDepart :"TI",DescriptionDepart:"Technologies de l'informatique"}},
    // {idEtudiant:3, nom:'Nour',prenom:'Garaali',parcours:'DSI',
    // email:'garaalinour@gmail.com',dateInscription: new Date("01/25/2023"),departement :{idDepart : 1, nomDepart :"TI",DescriptionDepart:"Technologies de l'informatique"}}];
  }

  listeEtudiant(): Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(this.apiURL);
    }

//   listeEtudiants():Etudiant[] {
//     return this.etudiants;
//   }

  ajouterEtudiant( etud: Etudiant)
{
  // this.etudiants.push(etud);
  return this.http.post<Etudiant>(this.apiURL, etud,httpOptions);

}

supprimerEtudiant( id : number){
  const url = `${this.apiURL}/${id}`;
  return this.http.delete(url, httpOptions);

  }
  //ou Bien
  /* this.produits.forEach((cur, index) => {
  if(prod.idProduit === cur.idProduit) {
  this.produits.splice(index, 1);
  }
  }); */

  consulterEtudiant(id: number): Observable<Etudiant> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Etudiant>(url);
    }
    

  updateEtudiant(e:Etudiant)
{
// console.log(e);
this.supprimerEtudiant(e);
this.ajouterEtudiant(e);
this.trierEtudiants();

}

trierEtudiants(){
  this.etudiants = this.etudiants.sort((n1,n2) => 
  {if (n1.idEtudiant > n2.idEtudiant) {
    return 1;
  }
  if (n1.idEtudiant < n2.idEtudiant) {
  return -1;
  }
  return 0;
  });
  }

  listeDepartements():Departement[] {
    return this.departements;
  }
  consulterDepartement(id:number): Departement{ 
    return this.departements.find(dep => dep.idDepart == id)!;
  }

    
  
}
