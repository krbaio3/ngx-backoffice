/* Angular Modules */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

/* Angular Components */
import { BenchmarkComponent } from './benchmark.component';

describe('DocumentationComponent', () => {
  let component: BenchmarkComponent;
  let fixture: ComponentFixture<BenchmarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [BenchmarkComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(BenchmarkComponent);
    component = fixture.componentInstance;
  });

  test('can load instance', () => {
    expect(component).toBeTruthy();
  });

  test('should render the component with title "Name not found" is not has url', async () => {
    // Arrange
    // Act
    // Assert
    expect(component.currentRoute).toEqual('Name not found');
    expect(component.group).toEqual('');
  });
});
