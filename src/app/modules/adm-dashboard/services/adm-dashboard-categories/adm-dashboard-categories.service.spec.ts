import {TestBed, inject} from '@angular/core/testing';

import {AdmDashboardCategoriesService} from './adm-dashboard-categories.service';

describe('AdmDashboardCategoriesService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AdmDashboardCategoriesService]
        });
    });

    it('should be created', inject([AdmDashboardCategoriesService], (service: AdmDashboardCategoriesService) => {
        expect(service).toBeTruthy();
    }));
});
