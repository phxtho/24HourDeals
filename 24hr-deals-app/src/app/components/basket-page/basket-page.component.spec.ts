import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BasketPageComponent } from "./basket-page.component";

describe("BasketComponent", () => {
  let component: BasketPageComponent;
  let fixture: ComponentFixture<BasketPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BasketPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
