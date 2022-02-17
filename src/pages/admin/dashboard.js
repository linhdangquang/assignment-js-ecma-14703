import Chart from 'chart.js/auto';
import NavAdmin from './components/navD';
import HeaderAdmin from './components/headerD';
import FooterAdmin from './components/footerD';

const Dashboard = {
  render() {
    return /* html */ `
        <div class="container-fluid admin-container flex flex-row bg-gray-100 font-fira">
            ${NavAdmin.render()}
            <div class="ml-4 rounded-l-2xl relative bg-white w-full">
                ${HeaderAdmin.render('Dashboard')}
                <div class="px-4 py-5 flex flex-wrap">
                  <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                    <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-700 hover:bg-gray-800 transition-all drop-shadow-lg border border-gray-600">
                      <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
                        <div class="flex flex-wrap items-center">
                          <div class="relative w-full max-w-full flex-grow flex-1">
                            <h6 class="uppercase text-gray-100 mb-1 text-xs font-semibold">
                              Overview
                            </h6>
                            <h2 class="text-white text-xl font-semibold">
                              Sales value
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div class="p-4 flex-auto">
                        <!-- Chart -->
                        <div class="relative h-350-px"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                          <canvas id="line-chart" style="display: block; height: 350px; width: 692px;" width="865" height="437" class="chartjs-render-monitor"></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full xl:w-4/12 px-4">
                    <div class="relative flex flex-col min-w-0 break-words bg-white border-2 border-slate-100 w-full mb-6 shadow-lg rounded">
                      <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
                        <div class="flex flex-wrap items-center">
                          <div class="relative w-full max-w-full flex-grow flex-1">
                            <h6 class="uppercase text-gray-400 mb-1 text-xs font-semibold">
                              Performance
                            </h6>
                            <h2 class="text-gray-700 text-xl font-semibold">
                              Total orders
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div class="p-4 flex-auto">
                        <!-- Chart -->
                        <div class="relative h-350-px"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                          <canvas id="bar-chart" width="392" height="437" style="display: block; height: 350px; width: 314px;" class="chartjs-render-monitor"></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="px-4"><h1>okokok</h1></div>
                </div>
                ${FooterAdmin.render()}
            </div>
        </div>
    `;
  },
  afterRender() {
    /* Chart initialisations */
    /* Line Chart */
    let config = {
      type: 'line',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: '#4c51bf',
            borderColor: '#4c51bf',
            data: [65, 78, 66, 44, 56, 67, 99],
            fill: false,
          },
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: '#fff',
            borderColor: '#fff',
            data: [40, 68, 86, 74, 56, 60, 87],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: 'Sales Charts',
          fontColor: 'white',
        },
        legend: {
          labels: {
            fontColor: 'white',
          },
          align: 'end',
          position: 'bottom',
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true,
        },
      },
    };
    let ctx = document.getElementById('line-chart').getContext('2d');
    window.myLine = new Chart(ctx, config);

    /* Bar Chart */
    config = {
      type: 'bar',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: '#ed64a6',
            borderColor: '#ed64a6',
            data: [30, 78, 56, 34, 100, 45, 13],
            fill: false,
            barThickness: 8,
          },
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: '#4c51bf',
            borderColor: '#4c51bf',
            data: [27, 68, 86, 74, 10, 4, 87],
            barThickness: 8,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: 'Orders Chart',
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: 'rgba(0,0,0,.4)',
          },
          align: 'end',
          position: 'bottom',
        },
      },
    };
    ctx = document.getElementById('bar-chart').getContext('2d');
    window.myBar = new Chart(ctx, config);
  },
};

export default Dashboard;
