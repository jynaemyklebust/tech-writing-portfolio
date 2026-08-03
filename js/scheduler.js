/* Scheduler dashboard: render order table, wire designer/status filters. */

function schedulerRenderStats() {
  const active = CIMPLY_ORDERS.filter(o => !TERMINAL_STATUSES.includes(o.status));
  const pastDue = CIMPLY_ORDERS.filter(o => cimplyComputeFlags(o).includes("pastdue"));
  const lateStart = CIMPLY_ORDERS.filter(o => cimplyComputeFlags(o).includes("latestart"));
  const review = CIMPLY_ORDERS.filter(o => o.status === "review");

  document.getElementById("stat-active").textContent = active.length;
  document.getElementById("stat-pastdue").textContent = pastDue.length;
  document.getElementById("stat-latestart").textContent = lateStart.length;
  document.getElementById("stat-review").textContent = review.length;
}

function schedulerPopulateFilters() {
  const designerSelect = document.getElementById("filter-designer");
  const designers = Array.from(
    new Set(CIMPLY_ORDERS.map(o => o.designer).filter(Boolean))
  ).sort();
  designers.forEach(d => {
    const opt = document.createElement("option");
    opt.value = d;
    opt.textContent = d;
    designerSelect.appendChild(opt);
  });

  const statusSelect = document.getElementById("filter-status");
  Object.keys(STATUS_META).forEach(key => {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = STATUS_META[key].label;
    statusSelect.appendChild(opt);
  });
}

function schedulerFlagHtml(flags) {
  return flags
    .map(f => {
      if (f === "pastdue") return '<span class="flag flag-pastdue">Past Due</span>';
      if (f === "latestart") return '<span class="flag flag-latestart">Late Start</span>';
      return "";
    })
    .join("");
}

function schedulerRenderTable() {
  const designerFilter = document.getElementById("filter-designer").value;
  const statusFilter = document.getElementById("filter-status").value;

  const rows = CIMPLY_ORDERS.filter(o => {
    if (designerFilter !== "all" && o.designer !== designerFilter) return false;
    if (statusFilter !== "all" && o.status !== statusFilter) return false;
    return true;
  }).sort((a, b) => new Date(a.end) - new Date(b.end));

  const tbody = document.getElementById("order-tbody");
  tbody.innerHTML = "";

  rows.forEach(o => {
    const meta = STATUS_META[o.status];
    const flags = cimplyComputeFlags(o);
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>
        <div class="order-title">${o.title}</div>
        <div class="order-sub">${o.brief}</div>
      </td>
      <td>${o.designer ? o.designer : '<span class="unassigned">Unassigned</span>'}</td>
      <td><span class="status-pill ${meta.cls}">${meta.label}</span></td>
      <td>${cimplyFormatDate(o.end)}</td>
      <td>${schedulerFlagHtml(flags) || "—"}</td>
    `;
    tbody.appendChild(tr);
  });

  document.getElementById("result-count").textContent =
    `Showing ${rows.length} of ${CIMPLY_ORDERS.length} orders`;
}

document.addEventListener("DOMContentLoaded", () => {
  schedulerRenderStats();
  schedulerPopulateFilters();
  schedulerRenderTable();
  document.getElementById("filter-designer").addEventListener("change", schedulerRenderTable);
  document.getElementById("filter-status").addEventListener("change", schedulerRenderTable);
});
