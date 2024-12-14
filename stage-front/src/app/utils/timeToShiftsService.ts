import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // This makes the service available application-wide
})
export class TimeToShiftsService {

  generateShiftTimes(startTime: string): string[] {
    const shifts = [];
    const [startHour, startMinute] = startTime.split(':').map(Number);

    const formatTime = (hour: number, minute: number) => {
      return `${hour.toString().padStart(2, '0')}h${minute.toString().padStart(2, '0')}`;
    };

    const firstShiftEndHour = (startHour + 8) % 24;
    shifts.push(`${formatTime(startHour, startMinute)} à ${formatTime(firstShiftEndHour, startMinute)}`);

    const secondShiftEndHour = (firstShiftEndHour + 8) % 24;
    shifts.push(`${formatTime(firstShiftEndHour, startMinute)} à ${formatTime(secondShiftEndHour, startMinute)}`);

    const thirdShiftEndHour = (secondShiftEndHour + 8) % 24;
    shifts.push(`${formatTime(secondShiftEndHour, startMinute)} à ${formatTime(thirdShiftEndHour, startMinute)}`);

    return shifts;
  }

  // Other utility methods can go here...
}
