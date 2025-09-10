import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'timeDiff',
    standalone: true
})
export class TimeDiffPipe implements PipeTransform {
    transform(start: Date | string, end: Date | string) {
        const startDate = new Date(start);
        const endDate = new Date(end);

        // Calculate difference in milliseconds
        const diffMs = endDate.getTime() - startDate.getTime();

        if (diffMs < 0) {
            return '0 hrs - 0 mins';
        }

        // Convert to total minutes
        const totalMinutes = Math.floor(diffMs / (1000 * 60));
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;

        return `${hours} hrs ${minutes} mins`;
    }

}