import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { QuoteSearchComponent } from './quote-search.component';

describe('QuoteSearchComponent', () => {
  let component: QuoteSearchComponent;
  let fixture: ComponentFixture<QuoteSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuoteSearchComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
