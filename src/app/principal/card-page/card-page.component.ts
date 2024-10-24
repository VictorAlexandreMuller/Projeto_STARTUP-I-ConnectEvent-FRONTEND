import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Importar para acessar os parâmetros da URL
import { EventosService } from '../../../services/eventos.service'; // Importa o serviço

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss'],
})
export class CardPageComponent implements OnInit {
  evento: any;
  tipo!: string;

  constructor(
    private route: ActivatedRoute, // Necessário para capturar o parâmetro da URL
    private eventosService: EventosService // Serviço para buscar o evento
  ) {}

  ngOnInit(): void {
    // Captura o ID da rota e carrega o evento correto
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getEventoById(+id); // Converte o ID para number e busca o evento
    }
  }

  getEventoById(id: number): void {
    this.eventosService.getEventoById(id).subscribe(
      (response) => {
        this.evento = response; // Armazena os dados do evento
        this.tipo = response.tipo;
      },
      (error) => {
        console.error('Erro ao buscar evento:', error);
      }
    );

    console.log(this.tipo);

    let cor;

    switch (this.tipo) {
      case 'Artístico':
        break;
      case 'Balada':
        break;
      case 'Cultural':
        break;
      case 'Educacional':
        break;
      case 'Esportivo':
        break;
      case 'Gastronômico':
        break;
      case 'Jogo':
        break;
      case 'Oficial':
        break;
      case 'Profissional':
        break;
      case 'Religioso':
        break;
      case 'Show':
        break;
      case 'Social':
        break;
      case 'Stand-Up':
        break;
      case 'Técnico-Científico':
        break;
    }
  }
}
