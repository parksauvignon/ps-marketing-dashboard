/* Спільні налаштування Chart.js для всіх сторінок. Підключати ПІСЛЯ chart.umd.min.js і ДО коду графіків.
   ПС — олива, ринок/конкуренти — нейтральний сірий, акцент — жовтий, другий ряд — графіт. */
(function () {
  if (!window.Chart) return;
  var C = Chart;
  window.PS = {
    olive: '#999F4F', oliveD: '#68702F', oliveT: 'rgba(153,159,79,.16)',
    navy: '#313746', gray: '#767C8D', gray3: '#A9AEBB', grid: 'rgba(49,55,70,.07)',
    yellow: '#F0CF4B', bad: '#B4432F', good: '#5E7A2E', cream: '#F7F5F2',
    // категоріальна палітра: перевірена на розрізненні в світлій темі
    series: ['#999F4F', '#313746', '#F0CF4B', '#767C8D', '#C98B5A', '#6F94A8', '#B7BB8A', '#A9AEBB'],
    fmt: function (v) { return (Math.round(v) || 0).toLocaleString('uk-UA').replace(/ /g, ' '); }
  };
  var d = C.defaults;
  d.font.family = "'Proba Pro', system-ui, -apple-system, 'Segoe UI', sans-serif";
  d.font.size = 12;
  d.color = '#636979';
  d.borderColor = PS.grid;
  d.maintainAspectRatio = false;
  d.animation.duration = 500;
  d.animation.easing = 'easeOutQuart';
  d.layout.padding = { top: 6, right: 6, bottom: 0, left: 0 };
  d.elements.line.tension = 0.32;
  d.elements.line.borderWidth = 2.25;
  d.elements.point.radius = 0;
  d.elements.point.hoverRadius = 5;
  d.elements.point.hitRadius = 12;
  d.elements.bar.borderRadius = 5;
  d.elements.bar.borderSkipped = 'start';
  d.elements.arc.borderWidth = 2;
  d.elements.arc.borderColor = '#fff';
  d.interaction = { mode: 'index', intersect: false };
  var p = d.plugins;
  p.legend.position = 'bottom';
  p.legend.align = 'start';
  p.legend.labels.usePointStyle = true;
  p.legend.labels.pointStyle = 'rectRounded';
  p.legend.labels.boxWidth = 10;
  p.legend.labels.boxHeight = 10;
  p.legend.labels.padding = 14;
  p.legend.labels.color = '#313746';
  p.tooltip.backgroundColor = '#313746';
  p.tooltip.titleColor = '#fff';
  p.tooltip.bodyColor = '#E4E6EB';
  p.tooltip.titleFont = { weight: '600', size: 12.5 };
  p.tooltip.bodyFont = { size: 12.5 };
  p.tooltip.padding = 10;
  p.tooltip.cornerRadius = 8;
  p.tooltip.boxPadding = 4;
  p.tooltip.usePointStyle = true;
  p.tooltip.caretSize = 5;
  if (d.scales && d.scales.linear) {
    ['linear', 'category', 'time', 'logarithmic'].forEach(function (k) {
      var s = d.scales[k]; if (!s) return;
      s.grid = Object.assign({}, s.grid, { color: PS.grid, drawTicks: false });
      s.border = Object.assign({}, s.border, { display: false });
      s.ticks = Object.assign({}, s.ticks, { padding: 8, color: '#767C8D' });
    });
    d.scales.category.grid.display = false;
  }
})();
