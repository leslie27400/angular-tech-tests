import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import { LoginPage } from "./login.page";
import { provideMockStore } from "@ngrx/store/testing";
import { initialRootState } from "src/app/store";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe("LoginPage", () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LoginPage],
        imports: [IonicModule],
        providers: [provideMockStore({ initialState: initialRootState })],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      }).compileComponents();

      fixture = TestBed.createComponent(LoginPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }),
  );

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
