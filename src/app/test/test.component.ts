import { Component, OnInit, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { UsService } from '../us.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 // public chart: any

  inputData:any={}
  dataQr:any={}
  myAngularxQrCode:any

  constructor(private elementRef:ElementRef,private userDataService: UsService) {
    Chart.register(...registerables);
    

  }

  ngOnInit(): void {
   
  }

  onClick() {
     this.userDataService.importantData=this.inputData

     const ctx = this.elementRef.nativeElement.querySelector(`#myChart`);
    
const myChart = new Chart(ctx, {
    type: this.inputData.type,
    data: {
        labels: ['30-10-22', '31-10-22', '1-11-22', '2-11-22', '3-11-22', '4-11-22'],
        datasets: [{
            label: '# of buy',
           // data: [12, 19, 3, 5, 2, 3],
           data:this.inputData.buyPrice.split(","),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
        {
          label: '# of sell',
          data:this.inputData.sellPrice.split(","),
          backgroundColor: [
            
             'rgba(54, 162, 235, 0.2)',],
             borderColor: [
              
               'rgba(54, 162, 235, 1)'],
             borderWidth: 1
        }
      ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  })
       }

       onFire(){
        this.myAngularxQrCode= this.dataQr.qrData
       }
    
  }

   

 
   





  