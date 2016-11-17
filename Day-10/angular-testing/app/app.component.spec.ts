/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';
import {MessageService} from './MessageService';

import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

var messageServiceStub = {
  getMessage(){
    return "A test message";
  }
}
////////  SPECS  /////////////
describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
   TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
        { provide:MessageService, useValue:messageServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/message/i,
      '<h1> should say something about "message"');
  });

  it('should change the <h1> content when new message is assigned', function(){
      comp.message = "Hello Everyone! How are you!";
      fixture.detectChanges(); 
      const h1 = de.nativeElement;
      expect(h1.innerText).toMatch(/Everyone/i,
        '<h1> should display the latest message');
  })
});
