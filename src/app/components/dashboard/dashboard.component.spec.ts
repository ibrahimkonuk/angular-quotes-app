import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DashboardComponent } from './dashboard.component';
import { Quote } from 'src/app/interfaces/quote';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let quote: Quote;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    quote = { id: 1, content: 'content', author: 'author' };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create variables', () => {
    expect(component.quotes).toBeDefined();
    expect(component.selectedQuote).toBeDefined;
    expect(component.messageService).toBeDefined;
  });

  it('should render title', () => {
    const dom = fixture.debugElement.nativeElement;
    expect(dom.querySelector('h3').textContent).toBe('Top Quotes');
  });

  it('should set selected quote', () => {
    component.onSelect(quote);
    expect(component.selectedQuote?.content).toBe('content');
    expect(component.selectedQuote?.author).toBe('author');
  });
});
