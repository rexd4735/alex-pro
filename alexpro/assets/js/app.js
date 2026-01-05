let obligations = [];
let savedRecords = JSON.parse(localStorage.getItem('alex_v11_db') || '[]');

const fmt = (v) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(v);

const formatDate = (date) => {
  const d = new Date(date);
  return `${String(d.getDate()).padStart(2,'0')}-${String(d.getMonth()+1).padStart(2,'0')}-${d.getFullYear()}`;
};

function addOb() {
  obligations.push(0);
  renderObs();
}

function renderObs() {
  const container = document.getElementById('obList');
  container.innerHTML = obligations.map((val, i) => `
    <div class="flex gap-2 items-center">
      <input type="number" value="${val || ''}"
        oninput="obligations[${i}] = parseFloat(this.value) || 0; calculateAll();"
        class="flex-1 bg-slate-800 border border-slate-700 p-3 rounded-xl text-sky-400 font-bold"
        placeholder="EMI Amount">
      <button onclick="obligations.splice(${i},1); renderObs(); calculateAll();"
        class="text-red-500 bg-red-500/10 p-3 rounded-xl">×</button>
    </div>
  `).join('');
}

/* 🔽 KEEP ALL YOUR FUNCTIONS:
   calculateAll()
   saveRecord()
   renderSaved()
   loadRecord()
   deleteRecord()
   exportHDImage()
*/

renderSaved();
