var Eventos =
    [
        {
            title: 'Operaccion',
            start: '2023-06-20',
            mes: 'Junio',
            year: '2023'
        },
        {
            title: 'Reposo de la operaccion',
            start: '2023-06-20',
            end: '2023-06-28',
            mes: 'Junio',
            year: '2023'
        },

        {
            title: 'ir Al Pueblo',
            start: '2023-07-01',
            mes: 'Julio',
            year: '2023'
        },
        {
            title: 'Llegada al Pueblo',
            start: '2023-07-02',
            mes: 'Julio',
            year: '2023'
        },

        {
            title: 'Cumpleanyos Yaya Lorenza',
            start: '2023-08-01',
            mes: 'Agosto',
            anyo: '2023'
        },
    ];


document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        locale: 'es',
        timeZone: 'Europe/Madrid',
        initialView: 'dayGridMonth',
        events: Eventos
    });

    calendar.render();
});
