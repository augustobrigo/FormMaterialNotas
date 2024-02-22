import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Alumno } from '../alumno';

@Component({
  selector: 'app-f-notas',
  templateUrl: './f-notas.component.html',
  styleUrls: ['./f-notas.component.css']
})
export class FNotasComponent implements OnInit {
dataSource= new MatTableDataSource<Alumno>;
columnas: string[]=['cif','nombre','n1','n2','n3'];

constructor(private fb:FormBuilder){}
  ngOnInit(): void {

  }

EnviarNotas() {

}

miform!: FormGroup;

}
