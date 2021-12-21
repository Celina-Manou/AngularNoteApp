import { Component } from '@angular/core';
import { QuoteService } from 'src/app/todos/services/quote.service';
import { Quote } from 'src/app/todos/models/quote.class';


@Component ({
    selector: 'quote-box',
    templateUrl: './quote-box.component.html',
    styleUrls: ['./quote-box.component.scss']
})
export class QuoteBoxComponent{

    public quote = new Quote('', '');
    constructor(public quoteService: QuoteService) {
        this.getQuote();
    }

    public getQuote() {
        this.quoteService.getRandomQuote().subscribe((data: Quote) => {
            this.quote = new Quote(data.content, data.author);
           console.log(this.quote);
            
        });
    }
}