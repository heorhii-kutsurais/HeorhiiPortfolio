/* ============ DATA ============ */
const GAMES = [
  { id: 'LwkcaLFJxs0', title: 'Wheel Smash',    downloads: '100+', genre: 'Mobile · Hyper-casual', desc: 'Massive monster-truck wheel smashing through stylized streets — physics-driven destruction, satisfying impacts and clean session loops.', tags: ['Unity', 'Mobile', 'Physics'], links: { play: 'https://play.google.com/store/apps/details?id=com.mpvxj.wheel.smash' } },
  { id: '7D6Pda8831w', title: 'Sky Ace',        genre: 'Arcade · Air Combat', desc: 'Third-person dogfight arcade with score, lives and progressive waves. Built around snappy aircraft controls and camera feel.', tags: ['Unity', 'C#', 'PC', '3D'] },
  { id: 'M4Nx-OdzxZs', title: 'UFO Down',       genre: 'Mobile · FPS',        desc: 'First-person mobile shooter with level progression and upgradable weapons. Tuned for short, satisfying mobile sessions.', tags: ['Unity', 'Mobile', 'FPS'] },
  { id: 'A4Ur4_JWY4U', title: 'Cube Sorter',    genre: 'Mobile · Puzzle',     desc: 'Satisfying physics-driven color sorter. Simple input, complex simulation — built for mobile performance.', tags: ['Unity', 'Mobile', 'Physics'] },
  { id: '5jH3wxJA2N4', title: 'Legion Clash',   genre: 'Mobile · Strategy',   desc: 'Grid-based army builder with escalating duels. Unit composition, multipliers and risk/reward on every board.', tags: ['Unity', 'Mobile', 'Strategy'] },
  { id: 'iDTOBOaAmJo', title: 'Pixel Skirmish', genre: 'PC · Platformer Shooter', desc: '2D pixel-art platform shooter with a shop and progression. Focus on punchy gunplay, lightweight AI and readable combat.', tags: ['Unity', '2D', 'PC'] },
  { id: 'xMMSBHL6zt8', title: 'Orbit Outpost',  genre: 'Sim · Tycoon',        desc: 'Space-colony management sim — oxygen, sleep, food loops, progression trees and isometric building.', tags: ['Unity', 'Simulation', 'Mobile'] },
  {
    id: '_yXSk80xyBI',
    title: 'Blast Fusion Puzzle',
    genre: 'Mobile · Puzzle',
    desc: 'Match-and-fuse puzzle with a satisfying explosion loop. Released on iOS and Android.',
    tags: ['Unity', 'Mobile', 'Puzzle'],
    links: {
      play: 'https://play.google.com/store/apps/details?id=com.playcus.Blastfusionpuzzle',
      appstore: 'https://apps.apple.com/pl/app/blast-fusion-puzzle/id6743429912'
    }
  },
  {
    id: 'nkCaA6h1oCo',
    title: 'Idle Cash Breaker',
    downloads: '10K+',
    genre: 'Mobile · Idle',
    desc: 'Idle progression game built around tap-to-break loops, upgrades and offline earnings.',
    tags: ['Unity', 'Mobile', 'Idle'],
    links: {
      appstore: 'https://apps.apple.com/pl/app/idle-cash-breaker/id6462849055'
    }
  },
  {
    title: 'Pixel Age: Color by Number',
    genre: 'Mobile · Casual',
    desc: 'Calm color-by-number coloring app with pixel-art content packs and gentle progression.',
    tags: ['Unity', 'Mobile', 'Casual'],
    noVideo: true,
    links: {
      appstore: 'https://apps.apple.com/pl/app/pixel-age-color-by-number/id1409024946'
    }
  }
];

const HIGHLIGHTS = [
  {
    id: 'FJ6DbzCeuvk',
    title: 'Pixel Quest: Nonogram Puzzle',
    downloads: '10K+',
    genre: 'Mobile · Puzzle',
    desc: 'Pixel-art nonogram puzzler — solve grids to reveal hidden art. Released on iOS and Android.',
    tags: ['Unity', 'Mobile', 'Puzzle'],
    links: {
      play: 'https://play.google.com/store/apps/details?id=com.Playcus.NonogramPuzzleGame',
      appstore: 'https://apps.apple.com/pl/app/pixel-quest-nonogram-puzzle/id6461420147?l=pl'
    }
  },
  {
    id: 'UIpOPHnSbYY',
    title: 'Crazy Tire: Reach the Moon',
    downloads: '1M+',
    genre: 'Mobile · Arcade',
    desc: 'Physics-driven tire-launching arcade with upgrade loop — go further, smash more, reach the moon.',
    tags: ['Unity', 'Mobile', 'Physics'],
    links: {
      appstore: 'https://apps.apple.com/ua/app/crazy-tire-reach-the-moon/id1644737533?l=uk',
      play: 'https://play.google.com/store/apps/details?id=com.ketchapp.crazytire'
    }
  },
  {
    title: 'Armada.io',
    downloads: '1K+',
    genre: 'Mobile · .io Action',
    desc: 'Top-down naval .io game — pick a ship, dominate the seas, climb the leaderboard.',
    tags: ['Unity', 'Mobile', 'Multiplayer'],
    links: {
      appstore: 'https://apps.apple.com/us/app/armada-io/id1539406999'
    }
  },
  {
    id: 'XAz0h5Qip2M',
    title: 'Block Hit — Puzzle & Blocks',
    downloads: '1M+',
    genre: 'Mobile · Puzzle',
    desc: 'Classic block-fitting puzzle with daily challenges and themed boards. Polished, calm, replayable.',
    tags: ['Unity', 'Mobile', 'Puzzle'],
    links: {
      appstore: 'https://apps.apple.com/us/app/block-hit-puzzle-game/id1449594408',
      play: 'https://play.google.com/store/apps/details?id=com.roasup.blockhitpuzzlegame'
    }
  }
];

const PROTOS = [
  { id: 'WFvpQd8j0Mw', title: 'Lives System', genre: 'UI · Meta-systems', desc: 'Lives, refill timers and soft-currency wrapper — drop-in module for casual mobile titles.', tags: ['Unity', 'UI', 'Systems'] },
  { id: 'ibijh7yGVOw', title: 'Bounce Lab',    genre: 'Physics · R&D',    desc: 'Top-down ball-and-paddle prototype exploring physics, camera feel and level generation.', tags: ['Unity', 'Physics'] },
  { id: '6IfwUzxgDRU', title: 'Weapon Forge',  genre: 'Combat · Systems', desc: 'Modular weapon system prototype — damage, spread, multi-shot, reload and debug readout. Designer-driven via ScriptableObjects.', tags: ['Unity', 'Combat', 'Tools'] },
  { id: '_9uXckF7bhU', title: 'Letter Hunt',   genre: 'Casual · Puzzle',  desc: 'Relaxing find-the-letter puzzle over themed backgrounds. Content-pipeline friendly — new levels ship as data, not code.', tags: ['Unity', 'Casual', 'Mobile'] },
  { id: '5VdhlZ7E--Y', title: 'Odd One Out',   genre: 'Hyper-casual',     desc: 'Spot-the-odd-bunny speed game. Procedurally placed crowds, scaling difficulty, tight timer pressure.', tags: ['Unity', 'Casual', '3D'] },
  { id: 'USpBJWYHiSE', title: 'Rune Runner',   genre: 'Mobile · Runner',  desc: 'Stylized endless runner with multipliers and collectibles. Low-poly world with strong silhouette and colour identity.', tags: ['Unity', 'Mobile', '3D'] },
];

/* ============ RENDER ============ */
function svgPlay() {
  return '<svg viewBox="0 0 10 12" fill="currentColor" aria-hidden="true"><path d="M0 0L10 6L0 12V0Z"/></svg>';
}
function svgYT() {
  return '<svg viewBox="0 0 14 10" fill="currentColor" aria-hidden="true"><path d="M13.7 1.6C13.5 0.9 13 0.4 12.3 0.2C11 0 7 0 7 0C7 0 3 0 1.7 0.2C1 0.4 0.5 0.9 0.3 1.6C0 3 0 5 0 5C0 5 0 7 0.3 8.4C0.5 9.1 1 9.6 1.7 9.8C3 10 7 10 7 10C7 10 11 10 12.3 9.8C13 9.6 13.5 9.1 13.7 8.4C14 7 14 5 14 5C14 5 14 3 13.7 1.6ZM5.6 7.1V2.9L9.2 5L5.6 7.1Z"/></svg>';
}
function svgExternal() {
  return '<svg viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 8L8 2M8 2H4M8 2V6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>';
}

function renderCard(p, idx, opts = {}) {
  const padIdx = String(idx + 1).padStart(2, '0');
  const total = String(opts.total).padStart(2, '0');
  const tagsHtml = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
  const linkParts = [];
  if (p.links) {
    if (p.links.play)    linkParts.push(`<a class="lk" href="${p.links.play}" target="_blank" rel="noopener" aria-label="${p.title} on Google Play"><span class="lk-k">Google Play</span><span class="lk-v">LINK ${svgExternal()}</span></a>`);
    if (p.links.appstore) linkParts.push(`<a class="lk" href="${p.links.appstore}" target="_blank" rel="noopener" aria-label="${p.title} on the App Store"><span class="lk-k">App Store</span><span class="lk-v">LINK ${svgExternal()}</span></a>`);
    if (p.links.steam)    linkParts.push(`<a class="lk" href="${p.links.steam}" target="_blank" rel="noopener" aria-label="${p.title} on Steam"><span class="lk-k">Steam</span><span class="lk-v">LINK ${svgExternal()}</span></a>`);
    if (p.links.itch)     linkParts.push(`<a class="lk" href="${p.links.itch}" target="_blank" rel="noopener" aria-label="${p.title} on itch.io"><span class="lk-k">itch.io</span><span class="lk-v">LINK ${svgExternal()}</span></a>`);
    if (p.links.web)      linkParts.push(`<a class="lk" href="${p.links.web}" target="_blank" rel="noopener" aria-label="${p.title} website"><span class="lk-k">Web</span><span class="lk-v">LINK ${svgExternal()}</span></a>`);
  }
  const linksHtml = linkParts.length ? `<div class="card-links">${linkParts.join('')}</div>` : '';

  if (p.noVideo) {
    return `
    <article class="card no-video">
      <div class="card-media">
        <div class="hl-media" style="position:absolute;inset:0">
          <span class="ph-label">No video yet</span>
          <span class="ph-title">${p.title}</span>
        </div>
        <div class="card-idx">${padIdx} / ${total}</div>
      </div>
      <div class="card-body">
        <div class="card-head">
          <h3 class="card-title">${p.title}</h3>
          ${p.downloads ? `<span class="card-dl">${p.downloads} downloads</span>` : ''}
        </div>
        <p class="card-desc">${p.desc}</p>
        ${linksHtml}
        <div class="card-tags">
          <span class="tag" style="color:var(--fg-3)">${p.genre}</span>
          ${tagsHtml}
        </div>
      </div>
    </article>`;
  }

  return `
    <article class="card" data-video="${p.id}">
      <div class="card-media">
        <img src="./assets/images/thumbs/${p.id}.jpg" alt="${p.title} gameplay preview" loading="lazy" decoding="async"/>
        <iframe data-src="https://www.youtube.com/embed/${p.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen title="${p.title} gameplay video"></iframe>
        <div class="card-idx">${padIdx} / ${total}</div>
        <a class="card-yt" href="https://youtu.be/${p.id}" target="_blank" rel="noopener" aria-label="Watch ${p.title} on YouTube" title="Open on YouTube">${svgYT()}</a>
        <button class="play-btn" aria-label="Play ${p.title} gameplay">${svgPlay()}</button>
      </div>
      <div class="card-body">
        <div class="card-head">
          <h3 class="card-title">${p.title}</h3>
          ${p.downloads ? `<span class="card-dl">${p.downloads} downloads</span>` : ''}
        </div>
        <p class="card-desc">${p.desc}</p>
        ${linksHtml}
        <div class="card-tags">
          <span class="tag" style="color:var(--fg-3)">${p.genre}</span>
          ${tagsHtml}
        </div>
      </div>
    </article>`;
}

function renderHighlight(p) {
  const tagsHtml = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
  const linkParts = [];
  if (p.links.play)     linkParts.push(`<a class="lk" href="${p.links.play}" target="_blank" rel="noopener" aria-label="${p.title} on Google Play"><span class="lk-k">Google Play</span><span class="lk-v">LINK ${svgExternal()}</span></a>`);
  if (p.links.appstore) linkParts.push(`<a class="lk" href="${p.links.appstore}" target="_blank" rel="noopener" aria-label="${p.title} on the App Store"><span class="lk-k">App Store</span><span class="lk-v">LINK ${svgExternal()}</span></a>`);

  if (p.id) {
    return `
    <article class="hl-card card" data-video="${p.id}">
      <div class="card-media" style="aspect-ratio:16/9">
        <img src="./assets/images/thumbs/${p.id}.jpg" alt="${p.title} gameplay preview" loading="lazy" decoding="async"/>
        <iframe data-src="https://www.youtube.com/embed/${p.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen title="${p.title} gameplay video"></iframe>
        <a class="card-yt" href="https://youtu.be/${p.id}" target="_blank" rel="noopener" aria-label="Watch ${p.title} on YouTube" title="Open on YouTube">${svgYT()}</a>
        <button class="play-btn" aria-label="Play ${p.title} gameplay">${svgPlay()}</button>
      </div>
      <div class="hl-body">
        <div class="hl-head">
          <h3 class="hl-title">${p.title}</h3>
          ${p.downloads ? `<span class="hl-dl">${p.downloads} downloads</span>` : ''}
        </div>
        <p class="hl-desc">${p.desc}</p>
        <div class="card-links">${linkParts.join('')}</div>
        <div class="card-tags">
          <span class="tag" style="color:var(--fg-3)">${p.genre}</span>
          ${tagsHtml}
        </div>
      </div>
    </article>`;
  }

  return `
    <article class="hl-card">
      <div class="hl-media" role="img" aria-label="${p.title} placeholder artwork">
        <span class="ph-label">No video yet</span>
        <span class="ph-title">${p.title}</span>
      </div>
      <div class="hl-body">
        <div class="hl-head">
          <h3 class="hl-title">${p.title}</h3>
          ${p.downloads ? `<span class="hl-dl">${p.downloads} downloads</span>` : ''}
        </div>
        <p class="hl-desc">${p.desc}</p>
        <div class="card-links">${linkParts.join('')}</div>
        <div class="card-tags">
          <span class="tag" style="color:var(--fg-3)">${p.genre}</span>
          ${tagsHtml}
        </div>
      </div>
    </article>`;
}

document.getElementById('games-grid').innerHTML =
  GAMES.map((p, i) => renderCard(p, i, { total: GAMES.length })).join('');
document.getElementById('protos-grid').innerHTML =
  PROTOS.map((p, i) => renderCard(p, i, { total: PROTOS.length })).join('');
document.getElementById('highlights-grid').innerHTML =
  HIGHLIGHTS.map(p => renderHighlight(p)).join('');

/* ============ PLAY LOGIC ============ */
document.querySelectorAll('.card, .featured').forEach(card => {
  const btn = card.querySelector('.play-btn');
  const iframe = card.querySelector('iframe');
  if (!btn || !iframe) return;
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    document.querySelectorAll('.playing').forEach(other => {
      if (other !== card) {
        other.classList.remove('playing');
        const otherIframe = other.querySelector('iframe');
        if (otherIframe) otherIframe.src = '';
      }
    });
    if (!iframe.src) iframe.src = iframe.dataset.src;
    card.classList.add('playing');
  });
});
