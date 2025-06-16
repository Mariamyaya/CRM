import * as moment from 'moment';
import {Moment} from 'moment';

import {NgModule} from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatDateFormats, MatRippleModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarConfig, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions, MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatMomentDateModule, MomentDateAdapter} from '@angular/material-moment-adapter';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {PortalModule} from '@angular/cdk/portal';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkTreeModule} from '@angular/cdk/tree';
import {A11yModule} from '@angular/cdk/a11y';


const MATERIAL_MODULE = [
  BrowserAnimationsModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatMomentDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MatTreeModule,
  FlexLayoutModule,
  MatDividerModule,

  DragDropModule,
  ScrollingModule,
  CdkTreeModule,
  A11yModule,
  PortalModule,
];


/*moment.fn.toJSON = function() {
  return this.format(NAIVE_DATE_FORMAT);
};*/

const DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'L',
  },
  display: {
    dateInput: 'L',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  }
};

const TOOLTIP_DEFAULTS: MatTooltipDefaultOptions = {
  showDelay: 250,
  hideDelay: 100,
  touchendHideDelay: 100,
};

const SNACK_BAR_DEFAULTS: MatSnackBarConfig = {
  duration: 2000,
  horizontalPosition: 'left',
  verticalPosition: 'bottom',
  panelClass: 'st-snackbar'
};

const NAIVE_DATE_FORMAT = 'YYYY-MM-DD';
const LOCAL = "fr-Fr";
@NgModule({
  providers: [
    MatIconRegistry,
    MomentDateAdapter,

    {provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: TOOLTIP_DEFAULTS},
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: SNACK_BAR_DEFAULTS},

    {provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
  ],
  exports: MATERIAL_MODULE
})

export class MaterialModule {
  constructor(
      matIconRegistry: MatIconRegistry, adapter: DateAdapter<Moment>, momentAdapter: MomentDateAdapter
  ) {
    matIconRegistry.registerFontClassAlias('mdi', 'mdi');

    adapter.setLocale(LOCAL);
    momentAdapter.setLocale(LOCAL);
  }
}
