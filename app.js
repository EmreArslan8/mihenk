const iconPaths = {
  chart:'<path d="M3 3v18h18"/><path d="M8 17v-3"/><path d="M13 17V5"/><path d="M18 17V9"/>',
  layout:'<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
  cart:'<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h7.78a2 2 0 0 0 1.95-1.57L20 7H5.12"/>',
  package:'<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
  'trending-up':'<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
  plug:'<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a6 6 0 0 1-12 0V8Z"/>',
  'file-chart':'<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5Z"/><polyline points="14 2 14 8 20 8"/><path d="M8 18v-2"/><path d="M12 18v-4"/><path d="M16 18v-6"/>',
  settings:'<path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V21h-4v-.09A1.7 1.7 0 0 0 9 19.36a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.63 15 1.7 1.7 0 0 0 3.08 14H3v-4h.09A1.7 1.7 0 0 0 4.64 9a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.63h.01A1.7 1.7 0 0 0 10 3.08V3h4v.09A1.7 1.7 0 0 0 15 4.64a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.37 9v.01A1.7 1.7 0 0 0 20.92 10H21v4h-.09A1.7 1.7 0 0 0 19.4 15Z"/>',
  more:'<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
  menu:'<line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>',
  search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  bell:'<path d="M10.27 21a2 2 0 0 0 3.46 0"/><path d="M3.26 15.33A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.67C19.41 13.96 18 12.5 18 8A6 6 0 0 0 6 8c0 4.5-1.41 5.96-2.74 7.33"/>',
  refresh:'<path d="M20 11a8.1 8.1 0 0 0-15.5-2M4 4v5h5"/><path d="M4 13a8.1 8.1 0 0 0 15.5 2M20 20v-5h-5"/>',
  calendar:'<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
  wallet:'<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5"/><path d="M16 13h4"/>',
  'shopping-bag':'<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
  alert:'<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  'package-x':'<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l3-1.71"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/><path d="m17 13 5 5"/><path d="m22 13-5 5"/>',
  clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  'arrow-right':'<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'
};
function renderIcons(root=document){root.querySelectorAll('[data-icon]').forEach(el=>{const p=iconPaths[el.dataset.icon];if(p)el.innerHTML=`<svg class="lucide" viewBox="0 0 24 24" aria-hidden="true">${p}</svg>`})}

const orders = [
  { id: '#TY-18492', sub: 'Bugün, 14:42', channel: 'Trendyol', logo: 'T', cls: 'ty', customer: 'Selin Yılmaz', city: 'İstanbul', product: 'Airfryer XXL', sku: 'AF-XL-001', total: '₺4.899,00', status: 'Yeni', statusClass: 'new' },
  { id: '#HB-72918', sub: 'Bugün, 14:36', channel: 'Hepsiburada', logo: 'H', cls: 'hb', customer: 'Mehmet Kaya', city: 'Ankara', product: 'Kablosuz Süpürge', sku: 'KS-PRO-04', total: '₺6.249,90', status: 'Hazırlanıyor', statusClass: 'ready' },
  { id: '#WC-04127', sub: 'Bugün, 14:21', channel: 'Web sitesi', logo: 'woo', cls: 'wc', customer: 'Ezgi Demir', city: 'İzmir', product: 'Filtre Kahve Makinesi', sku: 'KM-120-B', total: '₺2.189,00', status: 'Kargoda', statusClass: 'shipped' },
  { id: '#TY-18491', sub: 'Bugün, 14:08', channel: 'Trendyol', logo: 'T', cls: 'ty', customer: 'Can Aydın', city: 'Bursa', product: 'Akıllı Tartı', sku: 'AT-WIFI-2', total: '₺1.349,90', status: 'Yeni', statusClass: 'new' }
];

const periodData = {
  today:{label:'Bugün',sales:'₺84.260',orders:'342',profit:'₺21.486',margin:'%25,5 marj',salesDelta:'↑ %18,4',orderDelta:'↑ %12,8',profitDelta:'↑ %6,2',summary:['₺84.260','₺246,38','%2,4'],bars:[48,35,25,58,42,31,52,48,34,70,51,42,66,62,43,91,70,56,26,17,12]},
  week:{label:'Son 7 gün',sales:'₺408.720',orders:'1.659',profit:'₺106.756',margin:'%26,1 marj',salesDelta:'↑ %14,6',orderDelta:'↑ %10,2',profitDelta:'↑ %8,8',summary:['₺408.720','₺246,36','%2,6'],bars:[42,30,19,55,40,28,61,45,32,67,52,38,78,60,44,86,68,52,74,57,41]},
  month:{label:'Son 30 gün',sales:'₺1.742.860',orders:'7.084',profit:'₺438.945',margin:'%25,2 marj',salesDelta:'↑ %11,9',orderDelta:'↑ %9,4',profitDelta:'↑ %7,1',summary:['₺1.742.860','₺246,02','%2,8'],bars:[36,28,20,49,35,25,58,43,30,66,50,37,72,57,42,82,65,49,93,73,56]},
  january:{label:'Ocak 2026',sales:'₺1.286.430',orders:'5.321',profit:'₺296.118',margin:'%23,0 marj',salesDelta:'↑ %8,2',orderDelta:'↑ %6,7',profitDelta:'↑ %4,9',summary:['₺1.286.430','₺241,77','%3,1'],bars:[31,26,18,42,33,24,54,40,29,48,37,27,69,53,40,75,58,45,84,67,51]},
  august:{label:'Ağustos 2026',sales:'₺1.598.240',orders:'6.442',profit:'₺397.962',margin:'%24,9 marj',salesDelta:'↑ %13,5',orderDelta:'↑ %11,1',profitDelta:'↑ %9,3',summary:['₺1.598.240','₺248,09','%2,7'],bars:[38,29,20,52,39,28,59,45,33,71,54,41,76,59,45,88,69,52,81,63,48]},
  september:{label:'Eylül 2026',sales:'₺1.471.980',orders:'5.982',profit:'₺374.526',margin:'%25,4 marj',salesDelta:'↑ %12,7',orderDelta:'↑ %10,5',profitDelta:'↑ %8,1',summary:['₺1.471.980','₺246,07','%2,5'],bars:[41,31,22,50,38,27,62,47,35,68,52,39,80,62,47,90,71,54,86,67,50]}
};

const periodOrders = {
  today:orders,
  week:[orders[1],orders[0],orders[3],orders[2]],
  month:[orders[2],orders[3],orders[0],orders[1]],
  january:[{...orders[0],id:'#TY-15204',sub:'31 Ocak, 16:18',total:'₺3.749,00'},{...orders[2],id:'#WC-03128',sub:'31 Ocak, 15:42',total:'₺1.986,50'},{...orders[1],id:'#HB-68411',sub:'31 Ocak, 14:27',total:'₺5.820,00'}],
  august:[{...orders[1],id:'#HB-71382',sub:'31 Ağustos, 17:02',total:'₺7.149,90'},{...orders[3],id:'#TY-17832',sub:'31 Ağustos, 16:44',total:'₺1.159,90'},{...orders[2],id:'#WC-03981',sub:'31 Ağustos, 16:20',total:'₺2.349,00'}],
  september:orders
};
let currentPeriod='today';
let currentPage='overview';

const pageMeta = {
  overview: ['İşler nasıl gidiyor?', 'Tüm satış kanallarınızın bugünkü özeti.'],
  orders: ['Sipariş merkezi', 'Tüm kanallardan gelen siparişleri tek akışta yönetin.'],
  inventory: ['Ürün & stok', 'Kanal stoklarını ana SKU kataloğunuzla birlikte izleyin.'],
  profit: ['Kârlılık', 'Kazancı komisyon, kargo ve ürün maliyetine kadar görün.'],
  integrations: ['Entegrasyonlar', 'Satış kanallarınızı ve veri akışını yönetin.'],
  reports: ['Raporlar', 'Operasyon ve finans verilerinizi dışa aktarın.'],
  settings: ['Ayarlar', 'Şirket, kullanıcı ve bildirim tercihlerini yönetin.']
};

const orderRows = document.querySelector('#orderRows');
function renderOrders(list = orders) {
  orderRows.innerHTML = list.map(o => `<tr><td><strong>${o.id}</strong><small>${o.sub}</small></td><td><div class="channel-badge"><span class="channel-logo ${o.cls}">${o.logo}</span>${o.channel}</div></td><td><strong>${o.customer}</strong><small>${o.city}</small></td><td><strong>${o.product}</strong><small>${o.sku}</small></td><td><strong>${o.total}</strong></td><td><span class="status ${o.statusClass}">${o.status}</span></td><td><button class="more" aria-label="İşlemler"><span data-icon="more"></span></button></td></tr>`).join('');
  renderIcons(orderRows);
}
renderOrders();
renderIcons();

const genericTemplates = {
  orders: () => `<div class="generic-grid"><article class="info-card"><span class="card-label">BUGÜN</span><h3>342 sipariş</h3><p>24 yeni sipariş henüz işleme alınmadı.</p><div class="progress"><i style="--w:82%"></i></div></article><article class="info-card"><span class="card-label">HAZIRLANACAK</span><h3>68 paket</h3><p>9 siparişin kargo teslim süresi yaklaşıyor.</p><div class="progress"><i style="--w:58%"></i></div></article><article class="info-card"><span class="card-label">İADELER</span><h3>%2,4 oran</h3><p>Son 30 gün ortalamasının 0,3 puan altında.</p><div class="progress"><i style="--w:24%"></i></div></article><div class="full-panel"><div class="panel-head"><div><p>CANLI AKIŞ</p><h2>Tüm siparişler</h2></div></div><div class="table-wrap"><table><thead><tr><th>SİPARİŞ</th><th>KANAL</th><th>MÜŞTERİ</th><th>ÜRÜN</th><th>TUTAR</th><th>DURUM</th><th></th></tr></thead><tbody>${orders.map(o => `<tr><td><strong>${o.id}</strong><small>${o.sub}</small></td><td>${o.channel}</td><td>${o.customer}</td><td>${o.product}</td><td><strong>${o.total}</strong></td><td><span class="status ${o.statusClass}">${o.status}</span></td><td><button class="more" aria-label="İşlemler"><span data-icon="more"></span></button></td></tr>`).join('')}</tbody></table></div></div></div>`,
  inventory: () => `<div class="generic-grid"><article class="info-card"><span class="card-label">TOPLAM SKU</span><h3>1.248 ürün</h3><p>1.196 ürün tüm kanallarla eşleştirildi.</p><div class="progress"><i style="--w:96%"></i></div></article><article class="info-card"><span class="card-label">KRİTİK STOK</span><h3>8 ürün</h3><p>3 ürünün bugünkü satış hızında tükenmesi bekleniyor.</p><div class="progress"><i style="--w:35%;background:#e97841"></i></div></article><article class="info-card"><span class="card-label">STOK DEĞERİ</span><h3>₺1.284.650</h3><p>Son 30 günde stok devir hızı 3,8.</p><div class="progress"><i style="--w:72%"></i></div></article><div class="full-panel"><div class="panel-head"><div><p>ÖNCELİKLİ</p><h2>Stok durumu</h2></div></div>${[['Airfryer XXL','AF-XL-001','12','8','4','Kritik','low'],['Kablosuz Süpürge','KS-PRO-04','86','14','72','Sağlıklı',''],['Filtre Kahve Makinesi','KM-120-B','34','7','27','Sağlıklı',''],['Akıllı Tartı','AT-WIFI-2','9','5','4','Kritik','low']].map(p=>`<div class="product-row"><div><strong>${p[0]}</strong><small>${p[1]}</small></div><div><strong>${p[2]}</strong><small>Fiziksel</small></div><div><strong>${p[3]}</strong><small>Ayrılmış</small></div><div><strong>${p[4]}</strong><small>Satılabilir</small></div><span class="stock-pill ${p[6]}">${p[5]}</span></div>`).join('')}</div></div>`,
  profit: () => `<div class="generic-grid"><article class="info-card"><span class="card-label">NET SATIŞ</span><h3>₺408.720</h3><p>Son 7 gün · önceki döneme göre %14,6 artış.</p><div class="progress"><i style="--w:84%"></i></div></article><article class="info-card"><span class="card-label">TOPLAM GİDER</span><h3>₺301.964</h3><p>Komisyon ₺53.430 · kargo ₺21.806 · maliyet ₺226.728</p><div class="progress"><i style="--w:74%;background:#e97841"></i></div></article><article class="info-card"><span class="card-label">NET KÂR</span><h3>₺106.756</h3><p>%26,1 ortalama net marj.</p><div class="progress"><i style="--w:61%;background:#3a976c"></i></div></article><div class="full-panel"><div class="panel-head"><div><p>KANAL KARŞILAŞTIRMASI</p><h2>Kârın kaynağı</h2></div></div>${[['Web sitesi','₺112.480','%34,8','₺39.143'],['Trendyol','₺184.320','%23,4','₺43.130'],['Hepsiburada','₺111.920','%21,9','₺24.507']].map(p=>`<div class="product-row"><div><strong>${p[0]}</strong><small>Satış kanalı</small></div><div><strong>${p[1]}</strong><small>Net satış</small></div><div><strong>${p[2]}</strong><small>Marj</small></div><div><strong>${p[3]}</strong><small>Net kâr</small></div><span class="stock-pill">Pozitif</span></div>`).join('')}</div></div>`,
  integrations: () => `<div class="generic-grid"><article class="info-card"><span class="card-label">BAĞLI KANAL</span><h3>3 aktif</h3><p>Sipariş, ürün ve stok akışları çalışıyor.</p><div class="progress"><i style="--w:100%"></i></div></article><article class="info-card"><span class="card-label">SON SENKRON</span><h3>2 dk önce</h3><p>342 sipariş ve 1.248 SKU kontrol edildi.</p><div class="progress"><i style="--w:92%"></i></div></article><article class="info-card"><span class="card-label">BAŞARI ORANI</span><h3>%99,8</h3><p>Son 24 saatte yalnızca 2 işlem yeniden denendi.</p><div class="progress"><i style="--w:99%"></i></div></article><div class="full-panel"><div class="panel-head"><div><p>BAĞLANTILAR</p><h2>Satış kanalları</h2></div></div>${[['T','ty','Trendyol','2 dk önce','Sipariş · Stok · Fiyat'],['H','hb','Hepsiburada','4 dk önce','Sipariş · Stok · Fiyat'],['woo','wc','WooCommerce','1 dk önce','Sipariş · Stok · Ürün']].map(p=>`<div class="integration-row"><div class="integration-brand"><span class="channel-logo ${p[1]}">${p[0]}</span><div><strong>${p[2]}</strong><small>Bağlantı sağlıklı</small></div></div><div><strong>${p[3]}</strong><small>Son senkron</small></div><div><strong>${p[4]}</strong><small>Aktif akışlar</small></div><button class="toggle on" aria-label="Entegrasyonu aç/kapat"></button></div>`).join('')}</div></div>`,
  reports: () => `<div class="generic-grid"><article class="info-card"><span class="card-label">EYLÜL 2026</span><h3>₺1.471.980</h3><p>5.982 sipariş · %25,4 net kâr marjı</p><button class="outline-btn report-download" data-report="Eylül 2026">CSV indir</button></article><article class="info-card"><span class="card-label">AĞUSTOS 2026</span><h3>₺1.598.240</h3><p>6.442 sipariş · %24,9 net kâr marjı</p><button class="outline-btn report-download" data-report="Ağustos 2026">CSV indir</button></article><article class="info-card"><span class="card-label">OCAK 2026</span><h3>₺1.286.430</h3><p>5.321 sipariş · %23,0 net kâr marjı</p><button class="outline-btn report-download" data-report="Ocak 2026">CSV indir</button></article><div class="full-panel"><div class="panel-head"><div><p>HAZIR RAPORLAR</p><h2>Finans ve operasyon çıktıları</h2></div></div>${[['Satış özeti','Kanal, gün ve ürün kırılımı'],['Kârlılık raporu','Komisyon, kargo ve maliyetler'],['Stok hareketleri','Giriş, çıkış ve kritik stok'],['Sipariş performansı','Hazırlama ve kargo süreleri']].map(r=>`<div class="product-row"><div><strong>${r[0]}</strong><small>${r[1]}</small></div><div><strong>26 Eylül 2026</strong><small>Son güncelleme</small></div><div><strong>CSV / Excel</strong><small>Dosya türü</small></div><div><strong>Hazır</strong><small>Durum</small></div><button class="outline-btn report-download" data-report="${r[0]}">İndir</button></div>`).join('')}</div></div>`,
  settings: () => `<div class="empty-state"><strong>Çalışma alanı ayarları</strong><p>Kullanıcı rolleri, maliyet yöntemleri, stok tamponları ve bildirim tercihlerini buradan yapılandırın.</p><button class="primary-btn" data-toast="Ayarlar kaydedildi">Değişiklikleri kaydet</button></div>`
};

function goToPage(page) {
  currentPage = page;
  document.querySelectorAll('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.page === page));
  document.querySelector('#overviewPage').classList.toggle('active-page', page === 'overview');
  document.querySelector('#genericPage').classList.toggle('active-page', page !== 'overview');
  document.querySelector('#pageTitle').textContent = pageMeta[page][0];
  document.querySelector('#pageSubtitle').textContent = pageMeta[page][1];
  if (page !== 'overview') {
    const tabs = page === 'orders' ? ['Tümü','Yeni','Hazırlanıyor','Kargoda','İade'] : page === 'inventory' ? ['Tüm ürünler','Kritik stok','Eşleşmeyen','Stok hareketleri'] : page === 'profit' ? ['Genel','Kanallar','Ürünler','Giderler'] : page === 'reports' ? ['Tüm raporlar','Satış','Kârlılık','Stok'] : ['Genel görünüm','Son 7 gün'];
    document.querySelector('#filterTabs').innerHTML = tabs.map((t,i)=>`<button class="${i===0?'active':''}">${t}</button>`).join('');
    document.querySelector('#genericContent').innerHTML = genericTemplates[page]();
    document.querySelector('#pageAction').textContent = page === 'orders' ? 'Manuel sipariş' : page === 'inventory' ? 'Ürün ekle' : page === 'profit' ? 'Raporu dışa aktar' : page === 'integrations' ? 'Kanal bağla' : page === 'reports' ? 'Tümünü dışa aktar' : 'Ayarları düzenle';
    bindDynamic();
    renderIcons(document.querySelector('#genericContent'));
  }
  document.querySelector('.sidebar').classList.remove('open');
}

document.querySelectorAll('[data-page], [data-page-jump]').forEach(btn => btn.addEventListener('click', () => goToPage(btn.dataset.page || btn.dataset.pageJump)));
function applyPeriod(key){
  const data=periodData[key]; if(!data)return; currentPeriod=key;
  const values=document.querySelectorAll('.metrics-grid .metric-card>strong');
  [data.sales,data.orders,data.profit].forEach((v,i)=>values[i].textContent=v);
  const deltas=document.querySelectorAll('.metrics-grid .up');
  [data.salesDelta,data.orderDelta,data.profitDelta].forEach((v,i)=>deltas[i].textContent=v);
  document.querySelector('.metrics-grid .metric-card:nth-child(3) .metric-foot small').textContent=data.margin;
  document.querySelectorAll('.bar-group b').forEach((bar,i)=>bar.style.setProperty('--h',`${data.bars[i]}%`));
  document.querySelectorAll('.channel-summary strong').forEach((el,i)=>el.textContent=data.summary[i]);
  renderOrders(periodOrders[key]||orders);
  if(currentPage==='overview') document.querySelector('#pageSubtitle').textContent=`${data.label} için tüm satış kanallarınızın özeti.`;
  document.querySelectorAll('.date-filter button').forEach(x=>x.classList.remove('active'));
  const direct={today:0,week:1,month:2}[key]; if(direct!==undefined)document.querySelectorAll('.date-filter button')[direct].classList.add('active');
  closePeriodMenu(); showToast('Dönem güncellendi',`${data.label} mock verileri yüklendi.`);
}
document.querySelectorAll('.date-filter button:not(.calendar-btn)').forEach((btn,i)=>btn.addEventListener('click',()=>applyPeriod(['today','week','month'][i])));

const periodMenu=document.querySelector('#periodMenu');
function closePeriodMenu(){periodMenu.classList.remove('open');periodMenu.setAttribute('aria-hidden','true')}
document.querySelector('.calendar-btn').addEventListener('click',e=>{e.stopPropagation();const r=e.currentTarget.getBoundingClientRect();periodMenu.style.top=`${r.bottom+8}px`;periodMenu.style.left=`${Math.max(12,r.right-230)}px`;periodMenu.classList.toggle('open');periodMenu.setAttribute('aria-hidden',String(!periodMenu.classList.contains('open')))});
periodMenu.querySelectorAll('[data-period]').forEach(btn=>btn.addEventListener('click',()=>applyPeriod(btn.dataset.period)));
document.addEventListener('click',e=>{if(!periodMenu.contains(e.target)&&!e.target.closest('.calendar-btn'))closePeriodMenu()});

const drawer = document.querySelector('#notificationDrawer');
const backdrop = document.querySelector('#drawerBackdrop');
function toggleDrawer(open) { drawer.classList.toggle('open', open); backdrop.classList.toggle('open', open); drawer.setAttribute('aria-hidden', String(!open)); }
document.querySelector('#notificationBtn').addEventListener('click',()=>toggleDrawer(true));
document.querySelector('#allNotifications').addEventListener('click',()=>toggleDrawer(true));
document.querySelector('#closeDrawer').addEventListener('click',()=>toggleDrawer(false));
backdrop.addEventListener('click',()=>toggleDrawer(false));

let toastTimer;
function showToast(title='Senkronizasyon başladı', text='Veriler arka planda güncelleniyor.') { const t=document.querySelector('#toast');t.querySelector('strong').textContent=title;t.querySelector('small').textContent=text;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2800); }
document.querySelectorAll('#syncTop,#syncSide').forEach(b=>b.addEventListener('click',()=>showToast()));
document.querySelector('.mobile-menu').addEventListener('click',()=>document.querySelector('.sidebar').classList.toggle('open'));
document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();document.querySelector('#globalSearch').focus()}});
document.querySelector('#globalSearch').addEventListener('input',e=>{const q=e.target.value.toLocaleLowerCase('tr');renderOrders(orders.filter(o=>Object.values(o).join(' ').toLocaleLowerCase('tr').includes(q)))});

function downloadMockReport(name='E-ticaret raporu'){
  const rows=[['Dönem','Kanal','Sipariş','Net Satış','Net Kâr'],[periodData[currentPeriod].label,'Trendyol','2841','736420','172380'],[periodData[currentPeriod].label,'Hepsiburada','1964','441860','98720'],[periodData[currentPeriod].label,'WooCommerce','1277','293700','103426']];
  const csv='\ufeff'+rows.map(r=>r.join(';')).join('\n');
  const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));
  const a=document.createElement('a');a.href=url;a.download=`${name.toLocaleLowerCase('tr').replaceAll(' ','-')}.csv`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),500);
  showToast('Rapor indirildi',`${name} mock verilerle oluşturuldu.`);
}

const modal=document.querySelector('#actionModal');
const modalBackdrop=document.querySelector('#modalBackdrop');
const modalTemplates={
  orders:['Manuel sipariş ekle','<div class="field"><label>Sipariş numarası</label><input value="MAN-2026-001"></div><div class="field"><label>Müşteri</label><input value="Demo Müşteri"></div>'],
  inventory:['Yeni ürün ekle','<div class="field"><label>Ürün adı</label><input value="Yeni Demo Ürün"></div><div class="field"><label>SKU</label><input value="DEMO-SKU-001"></div>'],
  integrations:['Satış kanalı bağla','<div class="field"><label>Kanal</label><select><option>Trendyol</option><option>Hepsiburada</option><option>WooCommerce</option></select></div><div class="field"><label>Mağaza adı</label><input value="Demo Mağaza"></div>'],
  settings:['Ayarları güncelle','<div class="field"><label>Kritik stok eşiği</label><input type="number" value="10"></div><div class="field"><label>Varsayılan stok tamponu</label><input type="number" value="3"></div>']
};
function openModal(page){const [title,body]=modalTemplates[page]||modalTemplates.orders;document.querySelector('#modalTitle').textContent=title;document.querySelector('#modalBody').innerHTML=body;modal.classList.add('open');modalBackdrop.classList.add('open');modal.setAttribute('aria-hidden','false')}
function closeModal(){modal.classList.remove('open');modalBackdrop.classList.remove('open');modal.setAttribute('aria-hidden','true')}
document.querySelectorAll('#closeModal,#cancelModal').forEach(b=>b.addEventListener('click',closeModal));
modalBackdrop.addEventListener('click',closeModal);
document.querySelector('#confirmModal').addEventListener('click',()=>{closeModal();showToast('Mock kayıt oluşturuldu','İşlem demo verisine başarıyla eklendi.')});
document.querySelector('#pageAction').addEventListener('click',()=>{if(currentPage==='profit'||currentPage==='reports')downloadMockReport(currentPage==='profit'?'Kârlılık raporu':'Tüm raporlar');else openModal(currentPage)});

function bindDynamic(){
  document.querySelectorAll('.filter-tabs button').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter-tabs button').forEach(x=>x.classList.remove('active'));btn.classList.add('active');
    const label=btn.textContent.trim();
    if(currentPage==='orders')document.querySelectorAll('#genericContent tbody tr').forEach(row=>row.hidden=label!=='Tümü'&&!row.textContent.includes(label));
    if(currentPage==='inventory')document.querySelectorAll('#genericContent .product-row').forEach(row=>row.hidden=label==='Kritik stok'&&!row.textContent.includes('Kritik'));
    const heading=document.querySelector('#genericContent .full-panel h2');if(heading&&currentPage!=='orders')heading.textContent=label;
    showToast('Filtre uygulandı',`${label} görünümü gösteriliyor.`);
  }));
  document.querySelectorAll('.toggle').forEach(btn=>btn.addEventListener('click',()=>{btn.classList.toggle('on');const row=btn.closest('.integration-row');const status=row.querySelector('.integration-brand small');status.textContent=btn.classList.contains('on')?'Bağlantı sağlıklı':'Bağlantı durduruldu';showToast(btn.classList.contains('on')?'Entegrasyon açıldı':'Entegrasyon durduruldu',row.querySelector('.integration-brand strong').textContent)}));
  document.querySelectorAll('.report-download').forEach(btn=>btn.addEventListener('click',()=>downloadMockReport(btn.dataset.report)));
  document.querySelectorAll('[data-toast]').forEach(btn=>btn.addEventListener('click',()=>showToast(btn.dataset.toast,'İşlem başarıyla tamamlandı.')));
}
