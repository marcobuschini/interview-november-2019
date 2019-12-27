import { TestBed, ComponentFixture, fakeAsync, flush } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { WidgetComponent, Feature, Vendor, ParkingSlot, WidgetModule } from 'widget';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  const dummyVendor: Vendor = {
    name: 'Test Vendor',
    description: 'This is a test vendor',
    features: [
      { name: 'Feature 1' } as Feature,
      { name: 'Feature 2' } as Feature,
      { name: 'Feature 3' } as Feature
    ] as Feature[]
  };

  const dummySlots: ParkingSlot[] = [
    {
      id: 0,
      name: 'Slot 1',
      features: [
        'Feature 1',
        'Feature 2'
      ]
    }
  ];

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        MatCardModule,
        MatDividerModule,
        MatListModule,
        HttpClientTestingModule,
        WidgetModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.widget = TestBed.createComponent(WidgetComponent).componentInstance;

    const vendorSpy = jest.spyOn(fixture.componentInstance.widget.service, 'getVendorFeatures')
      .mockReturnValue(of(dummyVendor.features));
    const slotsSpy = jest.spyOn(fixture.componentInstance.widget.service, 'getParkingSlots')
      .mockReturnValue(of(dummySlots));

    component = fixture.componentInstance;
    component.widget.ngOnInit();
    fixture.detectChanges();
  });

  afterEach(() => {
    component.widget.ngOnDestroy();
  });

  it('should create', fakeAsync(() => {
    expect(component).toBeTruthy();

    flush();

    expect(fixture).toMatchSnapshot();
  }));
});
