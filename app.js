
(function(){
  const modal = document.getElementById("previewModal");
  const frame = document.getElementById("previewFrame");
  const title = document.getElementById("previewTitle");
  const challengeEl = document.getElementById("challengeCode");

  const stageHtml = {
    1: `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tahap 1</title>
</head>
<body style="font-family:system-ui,-apple-system,sans-serif;background:#f7f7f7;display:flex;justify-content:center;padding-top:50px;">
  <div style="background:#d1ff95;width:280px;padding:25px;border-radius:15px;text-align:center;">
    <h1 style="font-size:1.2rem;color:#333;margin:0;">HELLO! SAYA SISWA XI</h1>
    <p style="margin:12px 0 0;">Ini adalah website pertama saya.</p>
  </div>
</body>
</html>`,
    2: `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tahap 2</title>
</head>
<body style="font-family:system-ui,-apple-system,sans-serif;background:#f7f7f7;display:flex;justify-content:center;padding-top:50px;">
  <div style="background:#d1ff95;width:280px;padding:25px;border-radius:15px;text-align:center;">
    <h1 style="font-size:1.2rem;color:#333;margin:0;">HELLO! SAYA SISWA XI</h1>
    <img src="https://picsum.photos/200?random=21" width="120" height="120" alt="Foto Profil" style="margin:15px 0;border-radius:50%;border:3px solid #fff;object-fit:cover;">
    <p style="margin:0;">Ini adalah website pertama saya.</p>
  </div>
</body>
</html>`,
    3: `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tahap 3</title>
</head>
<body style="font-family:system-ui,-apple-system,sans-serif;background:#f7f7f7;display:flex;justify-content:center;padding-top:50px;">
  <div style="background:#d1ff95;width:280px;padding:25px;border-radius:15px;text-align:center;">
    <h1 style="font-size:1.2rem;color:#333;margin:0;">HELLO! SAYA SISWA XI</h1>
    <img src="https://picsum.photos/200?random=21" width="120" height="120" alt="Foto Profil" style="margin:15px 0;border-radius:50%;border:3px solid #fff;object-fit:cover;">
    <p style="margin:0;">Ini adalah website pertama saya.</p>
    <hr style="border:0;border-top:1px solid rgba(0,0,0,.12);margin:16px 0;">
    <h3 style="margin:0 0 6px;">Tentang Saya</h3>
    <p style="margin:0;">Siswa kelas XI yang sedang semangat belajar HTML & CSS.</p>
  </div>
</body>
</html>`,
    4: `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tahap 4</title>
</head>
<body style="font-family:system-ui,-apple-system,sans-serif;background:#f7f7f7;display:flex;justify-content:center;padding-top:50px;">
  <div style="background:#d1ff95;width:280px;padding:25px;border-radius:15px;text-align:center;">
    <h1 style="font-size:1.2rem;color:#333;margin:0;">HELLO! SAYA SISWA XI</h1>
    <img src="https://picsum.photos/200?random=21" width="120" height="120" alt="Foto Profil" style="margin:15px 0;border-radius:50%;border:3px solid #fff;object-fit:cover;">
    <p style="margin:0;">Ini adalah website pertama saya.</p>
    <hr style="border:0;border-top:1px solid rgba(0,0,0,.12);margin:16px 0;">
    <h3 style="margin:0 0 6px;">Tentang Saya</h3>
    <p style="margin:0;">Siswa kelas XI yang sedang semangat belajar HTML & CSS.</p>
    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"
      style="display:inline-block;margin-top:15px;padding:10px 20px;background:#333;color:#fff;text-decoration:none;border-radius:8px;">
      Lihat Profil Lengkap
    </a>
  </div>
</body>
</html>`,
    5: `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tahap 5</title>
<style>
  body{background:#f7f7f7;font-family:system-ui,-apple-system,sans-serif;display:flex;justify-content:center;padding-top:50px;}
  .card{background:#d1ff95;width:280px;padding:25px;border-radius:15px;text-align:center;box-shadow:0 8px 15px rgba(0,0,0,.1);}
</style>
</head>
<body>
  <div class="card">
    <h1 style="font-size:1.2rem;color:#333;margin:0;">HELLO! SAYA SISWA XI</h1>
    <img src="https://picsum.photos/200?random=21" width="120" height="120" alt="Foto Profil">
    <p>Ini adalah website pertama saya.</p>
    <hr style="border:0;border-top:1px solid rgba(0,0,0,.12);margin:16px 0;">
    <h3>Tentang Saya</h3>
    <p>Siswa kelas XI yang sedang semangat belajar HTML & CSS.</p>
    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Lihat Profil Lengkap</a>
  </div>
</body>
</html>`,
    6: `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tahap 6</title>
<style>
  body{background:#f7f7f7;font-family:system-ui,-apple-system,sans-serif;display:flex;justify-content:center;padding-top:50px;}
  .card{background:#d1ff95;width:280px;padding:25px;border-radius:15px;text-align:center;box-shadow:0 8px 15px rgba(0,0,0,.1);}
  img{border-radius:50%;border:3px solid #fff;object-fit:cover;margin:15px 0;}
</style>
</head>
<body>
  <div class="card">
    <h1 style="font-size:1.2rem;color:#333;margin:0;">HELLO! SAYA SISWA XI</h1>
    <img src="https://picsum.photos/200?random=21" width="120" height="120" alt="Foto Profil">
    <p>Ini adalah website pertama saya.</p>
    <hr style="border:0;border-top:1px solid rgba(0,0,0,.12);margin:16px 0;">
    <h3>Tentang Saya</h3>
    <p>Siswa kelas XI yang sedang semangat belajar HTML & CSS.</p>
    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Lihat Profil Lengkap</a>
  </div>
</body>
</html>`,
    7: `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tahap 7</title>
<style>
  body{background:#f7f7f7;font-family:system-ui,-apple-system,sans-serif;display:flex;justify-content:center;padding-top:50px;}
  .card{background:#d1ff95;width:280px;padding:25px;border-radius:15px;text-align:center;box-shadow:0 8px 15px rgba(0,0,0,.1);}
  img{border-radius:50%;border:3px solid #fff;object-fit:cover;margin:15px 0;}
  a{display:inline-block;margin-top:15px;padding:10px 20px;background:#333;color:#fff;text-decoration:none;border-radius:8px;transition:.3s;}
  a:hover{background:#555;transform:scale(1.05);}
</style>
</head>
<body>
  <div class="card">
    <h1 style="font-size:1.2rem;color:#333;margin:0;">HELLO! SAYA SISWA XI</h1>
    <img src="https://picsum.photos/200?random=21" width="120" height="120" alt="Foto Profil">
    <p>Ini adalah website pertama saya.</p>
    <hr style="border:0;border-top:1px solid rgba(0,0,0,.12);margin:16px 0;">
    <h3>Tentang Saya</h3>
    <p>Siswa kelas XI yang sedang semangat belajar HTML & CSS.</p>
    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Lihat Profil Lengkap</a>
  </div>
</body>
</html>`,
    8: `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tahap 8</title>
<style>
  body{background:linear-gradient(180deg,#f7f7f7,#eef2ff);font-family:system-ui,-apple-system,sans-serif;display:flex;justify-content:center;padding:50px 12px;}
  .card{background:linear-gradient(135deg,rgba(209,255,149,1),rgba(255,255,255,.9));width:min(320px,calc(100% - 24px));padding:25px;border-radius:15px;text-align:center;box-shadow:0 10px 22px rgba(0,0,0,.10);border:1px solid rgba(0,0,0,.06);}
  img{border-radius:50%;border:3px solid #fff;object-fit:cover;margin:15px 0;}
  h1{font-size:1.15rem;color:#1f2937;margin:0;}
  a{display:inline-block;margin-top:15px;padding:10px 20px;background:#111827;color:#fff;text-decoration:none;border-radius:10px;transition:.3s;font-weight:700;}
  a:hover{background:#334155;transform:scale(1.04);}
  hr{border:0;border-top:1px solid rgba(0,0,0,.12);margin:16px 0;}
</style>
</head>
<body>
  <div class="card">
    <h1>HELLO! SAYA SISWA XI</h1>
    <img src="https://picsum.photos/200?random=21" width="120" height="120" alt="Foto Profil">
    <p>Ini adalah website pertama saya.</p>
    <hr>
    <h3>Tentang Saya</h3>
    <p>Siswa kelas XI yang sedang semangat belajar HTML & CSS.</p>
    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Lihat Profil Lengkap</a>
  </div>
</body>
</html>`
  };
  const stsHtml = {
    sts1: `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Contoh STS 1</title>
<style>
  body{margin:0;min-height:100vh;display:grid;place-items:center;font-family:system-ui,-apple-system,sans-serif;background:linear-gradient(180deg,#f7f7ff,#eef2ff);}
  .card{display:flex;gap:14px;align-items:center;background:#ffffff;border:1px solid rgba(0,0,0,.08);border-radius:18px;padding:18px;box-shadow:0 14px 30px rgba(0,0,0,.10);width:min(520px,calc(100% - 24px));}
  .badge{display:inline-block;padding:6px 10px;border-radius:999px;background:rgba(37,99,235,.10);border:1px solid rgba(37,99,235,.22);font-weight:800;font-size:12px;margin-bottom:8px;}
  img{width:110px;height:110px;border-radius:16px;object-fit:cover;border:3px solid rgba(255,255,255,.9);box-shadow:0 8px 20px rgba(2,6,23,.12);}
  h1{margin:0;font-size:18px;}
  p{margin:6px 0 0;color:rgba(15,23,42,.72);line-height:1.55;}
  a{display:inline-block;margin-top:12px;padding:10px 14px;border-radius:12px;background:#111827;color:#fff;text-decoration:none;font-weight:800;transition:.2s;}
  a:hover{transform:translateY(-1px);background:#334155;}
</style>
</head>
<body>
  <div class="card">
    <img src="https://picsum.photos/240?random=51" alt="Foto profil">
    <div>
      <span class="badge">XI • Tema Teknologi</span>
      <h1>Nama Siswa — Kartu Profil</h1>
      <p>Saya menyukai teknologi dan sedang belajar HTML & CSS untuk membuat tampilan web yang rapi.</p>
      <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Lihat Portofolio</a>
    </div>
  </div>
</body>
</html>`,
    sts2: `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Contoh STS 2</title>
<style>
  body{margin:0;min-height:100vh;display:grid;place-items:center;font-family:system-ui,-apple-system,sans-serif;background:linear-gradient(180deg,#fff7ed,#eff6ff);}
  .card{width:min(380px,calc(100% - 24px));border-radius:18px;overflow:hidden;background:#fff;border:1px solid rgba(0,0,0,.08);box-shadow:0 14px 34px rgba(0,0,0,.12);transition:.2s;}
  .card:hover{transform:translateY(-2px);}
  .strip{padding:14px 16px;background:linear-gradient(135deg,rgba(245,158,11,.35),rgba(37,99,235,.18));font-weight:900;}
  .body{padding:16px;text-align:center;}
  img{width:120px;height:120px;border-radius:999px;object-fit:cover;border:4px solid #fff;margin-top:-46px;box-shadow:0 10px 22px rgba(2,6,23,.14);}
  h1{margin:10px 0 0;font-size:18px;}
  p{margin:8px 0 0;color:rgba(15,23,42,.72);line-height:1.55;}
  a{display:inline-block;margin-top:14px;padding:10px 14px;border-radius:12px;background:#111827;color:#fff;text-decoration:none;font-weight:800;transition:.2s;}
  a:hover{transform:scale(1.03);background:#334155;}
</style>
</head>
<body>
  <div class="card">
    <div class="strip">Tema Musik • Header Strip</div>
    <div class="body">
      <img src="https://picsum.photos/240?random=52" alt="Foto profil">
      <h1>Nama Siswa</h1>
      <p>Saya suka musik dan ingin membuat web profil yang menarik dengan CSS.</p>
      <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Lihat Profil</a>
    </div>
  </div>
</body>
</html>`,
    sts3: `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Contoh STS 3</title>
<style>
  body{margin:0;min-height:100vh;display:grid;place-items:center;font-family:system-ui,-apple-system,sans-serif;background:linear-gradient(180deg,#f0fdf4,#eff6ff);}
  .card{width:min(360px,calc(100% - 24px));background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:18px;padding:16px;text-align:center;box-shadow:0 14px 34px rgba(0,0,0,.12);}
  img{width:120px;height:120px;border-radius:999px;object-fit:cover;border:3px solid #fff;box-shadow:0 10px 22px rgba(2,6,23,.12);}
  h1{margin:10px 0 0;font-size:18px;}
  p{margin:8px 0 0;color:rgba(15,23,42,.72);line-height:1.55;}
  .btns{display:flex;gap:10px;justify-content:center;margin-top:14px;flex-wrap:wrap;}
  a{display:inline-block;padding:10px 14px;border-radius:12px;text-decoration:none;font-weight:800;transition:.2s;}
  .primary{background:#111827;color:#fff;}
  .ghost{background:rgba(37,99,235,.10);border:1px solid rgba(37,99,235,.22);color:rgba(15,23,42,.9);}
  a:hover{transform:translateY(-1px);}
</style>
</head>
<body>
  <div class="card">
    <img src="https://picsum.photos/240?random=53" alt="Foto profil">
    <h1>Nama Siswa</h1>
    <p>Tema Kuliner: Saya suka mencoba makanan baru dan ingin membuat profil web yang rapi.</p>
    <div class="btns">
      <a class="primary" href="https://www.google.com" target="_blank" rel="noopener noreferrer">Profil</a>
      <a class="ghost" href="https://www.google.com" target="_blank" rel="noopener noreferrer">Kontak</a>
    </div>
  </div>
</body>
</html>`,
    sts4: `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Contoh STS 4</title>
<style>
  body{margin:0;min-height:100vh;display:grid;place-items:center;font-family:system-ui,-apple-system,sans-serif;background:linear-gradient(180deg,#eef2ff,#fff7ed);}
  .card{width:min(420px,calc(100% - 24px));background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:18px;padding:16px;box-shadow:0 14px 34px rgba(0,0,0,.12);}
  .top{display:flex;gap:12px;align-items:center;}
  img{width:86px;height:86px;border-radius:16px;object-fit:cover;border:3px solid #fff;box-shadow:0 10px 22px rgba(2,6,23,.12);}
  h1{margin:0;font-size:18px;}
  p{margin:6px 0 0;color:rgba(15,23,42,.72);line-height:1.55;}
  .skills{margin-top:12px;display:grid;gap:10px;}
  .row{display:grid;grid-template-columns: 110px 1fr;gap:10px;align-items:center;}
  .bar{height:10px;border-radius:999px;background:rgba(2,6,23,.08);overflow:hidden;}
  .fill{height:100%;border-radius:999px;background:rgba(16,185,129,.75);}
  .fill.b{width:70%} .fill.c{width:45%} .fill.d{width:85%}
  a{display:inline-block;margin-top:14px;padding:10px 14px;border-radius:12px;background:#111827;color:#fff;text-decoration:none;font-weight:800;transition:.2s;}
  a:hover{transform:scale(1.02);background:#334155;}
</style>
</head>
<body>
  <div class="card">
    <div class="top">
      <img src="https://picsum.photos/240?random=54" alt="Foto profil">
      <div>
        <h1>Nama Siswa</h1>
        <p>Tema Olahraga: Profil singkat + daftar skill dengan progress bar.</p>
      </div>
    </div>

    <div class="skills">
      <div class="row"><strong>Kecepatan</strong><div class="bar"><div class="fill b"></div></div></div>
      <div class="row"><strong>Stamina</strong><div class="bar"><div class="fill c"></div></div></div>
      <div class="row"><strong>Kerja Tim</strong><div class="bar"><div class="fill d"></div></div></div>
    </div>

    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Lihat Profil</a>
  </div>
</body>
</html>`
  };


  function openModal(key, isSts){
    const html = isSts ? stsHtml[key] : stageHtml[key];
    if(!html) return;
    title.textContent = isSts ? `Preview Contoh STS` : `Preview Tahap ${key}`;
    frame.srcdoc = html;
    modal.hidden = false;
    modal.setAttribute("aria-hidden","false");
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }
  function closeModal(){
    modal.hidden = true;
    modal.setAttribute("aria-hidden","true");
    frame.srcdoc = "";
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }

  document.addEventListener("click",(e)=>{
    const p = e.target.closest(".js-preview");
    if(p){ openModal(p.dataset.stage); return; }
    const sp = e.target.closest(".js-sts-preview");
    if(sp){ openModal(sp.dataset.sample, true); return; }
    const act = e.target.closest("[data-action]");
    if(act && act.dataset.action === "gen-challenge"){
      challengeEl.textContent = genCode();
      return;
    }
    if(act && act.dataset.action === "toggle-theme"){
      toggleTheme();
      return;
    }
    if(e.target && e.target.dataset && e.target.dataset.close){ closeModal(); return; }
  });
  document.addEventListener("keydown",(e)=>{
    if(e.key === "Escape" && !modal.hidden) closeModal();
  });

  function genCode(){
    const letters = ["A","B","C","D"];
    const nums = ["1","2","3","4"];
    const bonus = ["X","Y","Z"];
    const L = letters[Math.floor(Math.random()*letters.length)];
    const N = nums[Math.floor(Math.random()*nums.length)];
    const B = bonus[Math.floor(Math.random()*bonus.length)];
    return `${L}${N}${B}`;
  }

  function toggleTheme(){
    const b = document.body;
    const cur = b.getAttribute("data-theme");
    b.setAttribute("data-theme", cur === "dark" ? "light" : "dark");
    try{ localStorage.setItem("pc_theme", b.getAttribute("data-theme") || "light"); }catch(_){}
  }
  (function initTheme(){
    try{
      const saved = localStorage.getItem("pc_theme");
      if(saved){ document.body.setAttribute("data-theme", saved); }
    }catch(_){}
  })();
})();
