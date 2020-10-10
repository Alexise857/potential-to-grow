import {
  Component,
  Input,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss']
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() {
    console.log('server element constructor called !');
  }
  // ngOnChanges would run firts
  // It would be called after a bound input property changes
  // ngOnchanges is the only hook that recives an argument
  ngOnChanges(change: SimpleChanges) {
    console.log({change});
    console.log('server element ngOnChanges called !');
  }

  ngOnInit(): void {
    // TODO: called once the component is initialized
    console.log('server element ngOnInit called !');
  }
  // this will give us a method which is excecuted on every change detection run
  ngDoCheck(): void {
    console.log('ngDOCheck called');
    // this mehotd is called right at the begining
    // this mehotd would run whener changes detection runs, change datecges
    // hooked on every change angular makes, not if only 1 changes is exhecuted
    // Excecuted when trigerring events
  }

  ngAfterContentInit(): void {
    // TODO: This method will excecute after doCheck, and it's called only once because it doesn't get initialized again
    // Called after the content (projected via ng-content) has been initialized
    // Meaning of content: is the thing we project into this through ng-content
    console.log('ngAfterContentInit Called');
  }

  ngAfterContentChecked(): void {
    // TODO: Called after each change detection cycle
    // Called every time the projected content has been checked
    console.log('ngAfterContentChecked Called');
  }

  ngAfterViewInit(): void {
    // called after the component's view (and child views) has been initialized
    // called once our view has been rendered
    console.log('ngAfterViewInit Called');
  }

  ngAfterViewChecked(): void {
    // called every time the view ( and child view )  have been checked.
    // So once we are sure that either all changes which had to be done were displayed in the view or not changes were detected
    console.log('ngAfterViewChecked Called');
  }

  ngOnDestroy(): void {
    // it is called when an element is removed from the DOM
    // called when the component is destroy
    // for example: if you placed ngIf on it and then this gets to false, and because of that it removes it from the DOM, ngOnDestroy is called
    console.log('ngOnDestroy called');
  }

}
