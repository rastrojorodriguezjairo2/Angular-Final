import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";
import { Medicos } from 'src/app/modelos/medicos';
import { EmpleadosService } from 'src/app/servicios/empleados.service';

@Component({
  selector: 'app-graficas',
  templateUrl: './grafica-medicos.component.html',
  styleUrls: ['./grafica-medicos.component.css']
})


export class GraficaMedicosComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: any ={
    chart: {
      type: 'column'
    },
    title: {
      text:'Salarios por especialidad'
    },
    xAxis:{
      //categories:[]
      title: {
        text: 'Especialidades'
      }
    },
    yAxis:{
      title: {
        text: 'Cantidad en €'
      }
    },
    credits:{
      enabled:false
    },
    series: [{
      name: 'Pediatría',
      data: [900],
      color: "blue"
    },
    {
      name: 'Traumatología',
      data: [950],
      color: "purple"
    },
    {
      name: 'Neurología',
      data: [1000],
      color: "yewllow"
    },
    {
      name: 'Cardiología',
      data: [1050],
      color: "red"
    },
    {
      name: 'Radiología',
      data: [850],
      color: "brown"
    },
    {
      name: 'Ginecología',
      data: [1100],
      color: "pink"
    },
    {
      name: 'Oftalmología',
      data: [975],
      color: "orange"
    },
    {
      name: 'Medicina Interna',
      data: [899],
      color: "grey"
    }]
  }
  trabajador: any = [];
  medicos: Medicos[] = [];
  medi: any;
  constructor(
    private medicosService: EmpleadosService,

  ){}
  ngOnInit(): void {
   //this.gettodos()
  }

  /*
  gettodos(){
    this.medicosService.getMedicos().subscribe((trabajador: any)=>{
      this.medi = trabajador.map((medi: any)=>{
        return new Medicos(medi._id, medi._nombre, medi._apellido, medi._contacto, medi._sueldo, medi._puesto, medi._especialidad)
      })
      const dataSeries = this.medicosService.map((x: Medicos)=> x.diferencia())
      this.chartOptions.series[0]["data"]= this.medicosService.map((x: Medicos)=> x.getpedi())
      this.chartOptions.series[1]["data"]= this.medicosService.map((x: Medicos)=> x.gettrau())
      this.chartOptions.series[2]["data"]= this.medicosService.map((x: Medicos)=> x.getNeur())
      this.chartOptions.series[3]["data"]= this.medicosService.map((x: Medicos)=> x.getcard())
      this.chartOptions.series[4]["data"]= this.medicosService.map((x: Medicos)=> x.getradi())
      this.chartOptions.series[5]["data"]= this.medicosService.map((x: Medicos)=> x.getgine())
      this.chartOptions.series[6]["data"]= this.medicosService.map((x: Medicos)=> x.getofta())
      this.chartOptions.series[7]["data"]= this.medicosService.map((x: Medicos)=> x.getMedi())
      const dataCategories = this.medicosService.map((x: Medicos)=> x._especialidad)
      this.chartOptions.xAxis["categories"]=dataCategories
      Highcharts.chart("grafico", this.chartOptions)
   }) 
  }*/
}

