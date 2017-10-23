$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '0',
            Detected: 10,
            witness: 10,
            Total: 55
        }, {
            period: '5',
            Detected: 15,
            witness: 35,
            Total: 78
        }, {
            period: '10',
            Detected: 55,
            witness: 78,
            Total: 120
        }, {
            period: '15',
            Detected: 60,
            witness: 85,
            Total: 110
        }, {
            period: '20',
            Detected: 65,
            witness: 75,
            Total: 123
        }, {
            period: '25',
            Detected: 44,
            witness: 43,
            Total: 150
        }, {
            period: '30',
            Detected: 22,
            witness: 60,
            Total: 71
        }, {
            period: '35',
            Detected: 10,
            witness: 25,
            Total: 49
        }, {
            period: '40',
            Detected: 35,
            witness: 46,
            Total: 96
        }, {
            period: '45',
            Detected: 65,
            witness: 90,
            Total: 120
        }],
        xkey: 'period',
        ykeys: ['Detected', 'witness', 'Total'],
        labels: ['Detected', 'witness', 'Total Agents'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Total Agents",
            value: 30
        }, {
            label: "Detection S1",
            value: 12
        }, {
            label: "Detection S2",
            value: 5
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '10',
            a: 100,
            b: 90
        }, {
            y: '20',
            a: 75,
            b: 65
        }, {
            y: '30',
            a: 50,
            b: 40
        }, {
            y: '40',
            a: 75,
            b: 65
        }, {
            y: '50',
            a: 50,
            b: 40
        }, {
            y: '60',
            a: 75,
            b: 65
        }, {
            y: '70',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Sensor S1', 'Sensor S2'],
        hideHover: 'auto',
        resize: true
    });
    
});
