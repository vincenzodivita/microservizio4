import { Injectable } from '@nestjs/common';
import { NuovoOrdineOkEvent } from './eventi/nuovoOrdineOk.event';
import { NuovoOrdineNotOkEvent } from './eventi/nuovoOrdineNotOkEvent';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  gestisciOrdineOkEvent(data: NuovoOrdineOkEvent) {
    console.log('Ordine concluso, giacenza pari a 0', data);

    // codice da eseguire ad ogni nuovo evento
  }

  gestisciOrdineNotOkEvent(data: NuovoOrdineNotOkEvent) {
    console.log('Ordine non concluso, giacenza inferiore a 0', data);

    // codice da eseguire ad ogni nuovo evento
  }
}
