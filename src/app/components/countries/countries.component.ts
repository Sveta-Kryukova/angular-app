import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  loading: boolean = false;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.loading = true;
    this.countriesService.getAllCountries().subscribe(
      (countries: any) => {
        console.log(countries);
        this.loading = false;
      },
      (error: any) => {
        console.error('Error fetching countries:', error);
      }
    );
  }
}
