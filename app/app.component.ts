import { Component, OnInit } from '@angular/core';
import { ChartsModule, BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  public SystemName: string = "MF1";
  firstCopy = false;
  colors : any = [];

  ngOnInit() {
    for(let i = 0; i < this.lineChartData.length; i++){
      let colorCode = this.lineChartData[i] < 0 ? 'rgba(255, 0, 0, 0.7)' : "rgba(255,99,132,0.6)";
      this.colors.push(colorCode);
      this.labelMFL[0].backgroundColor.push(colorCode);
    }
  }

  // data
  public lineChartData: Array<number> = [ 1,8,49,50,-10,-20];
 
  public labelMFL: Array<any> = [
      { data: this.lineChartData,
        label: this.SystemName,
        backgroundColor : []
      }
  ];
  // labels
  public lineChartLabels: Array<any> = ["7.00", "8.00", "9.00", "10.00", "11.00","12.00" ];

  public lineChartOptions: any = {
    responsive: true
  };

   _lineChartColors:Array<any> = [{
       backgroundColor: 'red',
        borderColor: 'red',
        pointBackgroundColor: 'red',
        pointBorderColor: 'red',
        pointHoverBackgroundColor: 'red',
        pointHoverBorderColor: 'red' 
      }];

  public lineChartType = 'bar';

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
