import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuoteDetailComponent } from './quote-detail.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('QuoteDetailComponent', () => {
  let component: QuoteDetailComponent;
  let fixture: ComponentFixture<QuoteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuoteDetailComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
