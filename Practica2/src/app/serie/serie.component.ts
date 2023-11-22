import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  series: Array<Serie> = [];
  average: number = 0;
  selectedSerie!: Serie;
  selected: Boolean = false;


  constructor(private serieService: SerieService) { }

  getSeries(){
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.average = 0;

      series.forEach(serie => {
        this.average += serie.seasons;
      });
      this.average /= series.length
    });
  }
  onSelected(serie: Serie): void {
    this.selected = true;
    this.selectedSerie = serie;
  }

  ngOnInit() {
    this.getSeries();
  }

}
