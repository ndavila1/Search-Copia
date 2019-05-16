import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private objetos: AngularFirestoreCollection<any>;
  private orders: Observable<any[]>;

  constructor(private readonly afs: AngularFirestore){}

  public iniciarServicio(tabla: string, estadoCambios?: boolean){
    this.objetos = this.afs.collection<any>(tabla);
    if (estadoCambios) {
      this.orders = this.objetos.stateChanges().pipe(map(
        actions => actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          return {id, ...data};
        })
      ));
    }else{
      this.orders = this.objetos.snapshotChanges().pipe(map(
        actions => actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          return {id, ...data};
        })
      ));
    }
    this.orders.subscribe();
  }
  
  public listar(): Observable<any[]> {
    return this.orders;
  }

  public buscar(id: string): Observable<any> {
    return this.objetos.doc(id).snapshotChanges();
  }

  public update(id: string, objeto: any): Promise<any> {
    return this.objetos.doc(id).update(objeto);
  }

  public delete(id: string): Promise<any> {
    return this.objetos.doc(id).delete();
  }

  public create(objeto: any): Promise<any> {
    return this.objetos.add(objeto);
  }
}
