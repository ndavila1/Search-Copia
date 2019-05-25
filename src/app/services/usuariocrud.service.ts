import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariocrudService {
  private objetos: AngularFirestoreCollection<any>;
  private orders: Observable<any[]>;
  constructor(private afs: AngularFirestore) { 
    this.objetos = this.afs.collection<any>('usuario');
    this.orders = this.objetos.snapshotChanges().pipe(map(
      actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return {id, ...data};
      })
    ));
  }
  public create(objeto: any): Promise<any> {
    return this.objetos.add(objeto);
  }
}
