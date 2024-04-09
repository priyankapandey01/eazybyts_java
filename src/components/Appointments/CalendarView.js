import React from 'react';
import styles from './CalendarView.module.css';

const CalendarView = () => {
    return (
        <div className={styles.calendarViewContainer}>
            <h2>Calendar View</h2>
            <div className={styles.calendar}>
                {/* Example calendar grid */}
                <div className={styles.calendarDay}>Monday</div>
                <div className={styles.calendarDay}>Tuesday</div>
                <div className={styles.calendarDay}>Wednesday</div>
                <div className={styles.calendarDay}>Thursday</div>
                <div className={styles.calendarDay}>Friday</div>
                <div className={styles.calendarDay}>Saturday</div>
                <div className={styles.calendarDay}>Sunday</div>
                {/* Example appointments */}
                <div className={styles.calendarEvent}>Appointment 1</div>
                <div className={styles.calendarEvent}>Appointment 2</div>
                <div className={styles.calendarEvent}>Appointment 3</div>
            </div>
        </div>
    );
}

export default CalendarView;
