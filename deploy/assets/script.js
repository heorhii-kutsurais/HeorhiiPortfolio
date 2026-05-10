/* ============ DATA ============ */
const GAMES = [
  { id: 'LwkcaLFJxs0', title: 'Wheel Smash 3D',    downloads: '100+', genre: 'Mobile · Hyper-casual', desc: 'Massive monster-truck wheel smashing through stylized streets — physics-driven destruction, satisfying impacts and clean session loops.', tags: ['Unity', 'Mobile', 'Physics'], links: { play: 'https://play.google.com/store/apps/details?id=com.mpvxj.wheel.smash' } },
  { id: '7D6Pda8831w', title: 'Balance 3D - Remake',        genre: 'Arcade · Air Combat', desc: 'A remake of the legendary game Balance 3D, which I used to play a lot as a child. This was my first game created in Unity.', tags: ['Unity', 'C#', 'PC', '3D'] },
  { id: 'M4Nx-OdzxZs', title: 'Blow Enemies 3D',       genre: 'Mobile · FPS',        desc: 'A comedic action platformer where your weapon inflates enemies\u2019 limbs and various objects. Blast your way through each platform, pop your enemies, and reach the finish line.', tags: ['Unity', 'Mobile', 'FPS'] },
  { id: 'A4Ur4_JWY4U', title: 'Find Pair 3D',    genre: 'Mobile · Puzzle',     desc: 'A comedic matchmaking game where you help each character find a partner based on their preferences. The matches can be highly unpredictable, and the goal is to drag both people into bed to complete each pairing.', tags: ['Unity', 'Mobile', 'Physics'] },
  { id: '5jH3wxJA2N4', title: 'Heroes Collect 3D',   genre: 'Mobile · Strategy',   desc: 'Grid-based army builder with escalating duels. Unit composition, multipliers and risk/reward on every board.', tags: ['Unity', 'Mobile', 'Strategy'] },
  { id: 'iDTOBOaAmJo', title: 'One man war 2D', genre: 'PC · Platformer Shooter', desc: '2D pixel-art platform shooter with a shop and progression. Focus on punchy gunplay, lightweight AI and readable combat.', tags: ['Unity', '2D', 'PC'] },
  {
    id: '_yXSk80xyBI',
    title: 'Blast Fusion Puzzle 2D',
    genre: 'Mobile · Puzzle',
    desc: 'Match-and-fuse puzzle with a satisfying explosion loop. Released on iOS and Android.',
    tags: ['Unity', 'Mobile', 'Puzzle', 'Casual'],
    links: {
      play: 'https://play.google.com/store/apps/details?id=com.playcus.Blastfusionpuzzle',
      appstore: 'https://apps.apple.com/pl/app/blast-fusion-puzzle/id6743429912'
    }
  },
  {
    id: 'nkCaA6h1oCo',
    title: 'Idle Cash Breaker 3D',
    downloads: '10K+',
    genre: 'Mobile · Idle',
    desc: 'Idle progression game built around tap-to-break loops, upgrades and offline earnings.',
    tags: ['Unity', 'Mobile', 'Idle'],
    links: {
      appstore: 'https://apps.apple.com/pl/app/idle-cash-breaker/id6462849055'
    }
  },
  {
    title: 'Pixel Age: Color by Number 2D',
    genre: 'Mobile · Puzzle',
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
    title: 'Pixel Quest: Nonogram Puzzle 2D',
    downloads: '10K+',
    genre: 'Mobile · Puzzle',
    desc: 'Pixel-art nonogram puzzler. Solve grids to reveal hidden art. ',
    tags: ['Unity', 'Mobile', 'Puzzle'],
    links: {
      play: 'https://play.google.com/store/apps/details?id=com.Playcus.NonogramPuzzleGame',
      appstore: 'https://apps.apple.com/pl/app/pixel-quest-nonogram-puzzle/id6461420147?l=pl'
    }
  },
  {
    id: 'xMMSBHL6zt8',
    title: 'Idle Mars 3D',
    downloads: '1K+',
    genre: 'Sim · Tycoon',
    desc: 'Space-colony management sim — oxygen, sleep, food loops, progression trees and isometric building.',
    tags: ['Unity', 'Mobile', 'Idle Arcade', 'Strategy'],
    links: {}
  },
  {
    id: 'UIpOPHnSbYY',
    title: 'Crazy Tire: Reach the Moon 3D',
    downloads: '1M+',
    genre: 'Mobile · Arcade',
    desc: 'A fun physics-based game where you launch a wheel from a slingshot and crush everything in its path.',
    tags: ['Unity', 'Mobile', 'Physics'],
    links: {
      appstore: 'https://apps.apple.com/ua/app/crazy-tire-reach-the-moon/id1644737533?l=uk',
      play: 'https://play.google.com/store/apps/details?id=com.ketchapp.crazytire'
    }
  },
  {
    id: 'XAz0h5Qip2M',
    title: 'Block Hit — Puzzle & Blocks 2D',
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
  { id: 'WFvpQd8j0Mw', title: 'UI Lives 2D', genre: 'UI · Meta-systems', desc: 'Lives, refill timers and soft-currency wrapper. Drop-in module for casual mobile titles.', tags: ['Unity', 'UI'] },
  { id: 'ibijh7yGVOw', title: 'Block Breaker 3D',    genre: 'Physics · R&D',    desc: 'Top-down ball-and-paddle prototype exploring physics', tags: ['Unity', 'Physics'] },
  { id: '6IfwUzxgDRU', title: 'Fight IO 3D',  genre: 'Combat · Systems', desc: 'Modular weapon system prototype — damage, spread, multi-shot, reload and debug readout. Designer-driven via ScriptableObjects.', tags: ['Unity', 'Combat', 'Skills'] },
  { id: '_9uXckF7bhU', title: 'Children Word Game 2D',   genre: 'Casual · Puzzle',  desc: 'A simple children’s game focused on finding the correct letter. Designed with charming animations and polished visual effects.', tags: ['Unity', 'Children', 'Mobile'] },
  { id: '5VdhlZ7E--Y', title: 'Fight IO 3D',   genre: 'Hyper-casual',     desc: 'A team-based competitive game where two sides race to collect items, grow in size, and increase their strength. At the end of the match, both teams face off in a final battle to determine the winner.', tags: ['Unity', 'Casual', '3D'] },
  { id: 'USpBJWYHiSE', title: 'Squid Game 3D',   genre: 'Mobile · Runner',  desc: 'A simple stylized runner inspired by a popular survival-game series. Players move along a road toward the finish line, avoiding obstacles and challenges that reference the show’s iconic trials.', tags: ['Unity', 'Mobile', '3D'] },
];

/* ============ RENDER ============ */
function svgPlay() {
  return '<svg viewBox="0 0 10 12" fill="currentColor" aria-hidden="true"><path d="M0 0L10 6L0 12V0Z"/></svg>';
}
function svgYTLogo() {
  return '<svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><path d="M24 16L48 32L24 48Z" fill="#fff"/></svg>';
}
function svgYT() {
  return '<svg viewBox="0 0 14 10" fill="currentColor" aria-hidden="true"><path d="M13.7 1.6C13.5 0.9 13 0.4 12.3 0.2C11 0 7 0 7 0C7 0 3 0 1.7 0.2C1 0.4 0.5 0.9 0.3 1.6C0 3 0 5 0 5C0 5 0 7 0.3 8.4C0.5 9.1 1 9.6 1.7 9.8C3 10 7 10 7 10C7 10 11 10 12.3 9.8C13 9.6 13.5 9.1 13.7 8.4C14 7 14 5 14 5C14 5 14 3 13.7 1.6ZM5.6 7.1V2.9L9.2 5L5.6 7.1Z"/></svg>';
}
/* Use YouTube's own poster (maxres → hq fallback) so cards show the actual video preview.
   YouTube returns a 120×90 grey placeholder (HTTP 200) when maxres is missing, so we
   detect that via naturalWidth and downgrade to hqdefault.jpg, which always exists. */
function ytThumb(id) {
  return `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
}
function ytThumbFallback(id) {
  return `if(this.naturalWidth<=120){this.onerror=null;this.src='https://i.ytimg.com/vi/${id}/hqdefault.jpg'}`;
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
        <img src="${ytThumb(p.id)}" data-yt="${p.id}" alt="${p.title} gameplay preview" loading="lazy" decoding="async"/>
        <iframe data-src="https://www.youtube.com/embed/${p.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen title="${p.title} gameplay video"></iframe>
        <div class="card-idx">${padIdx} / ${total}</div>
        <button class="card-media-link" type="button" aria-label="Play ${p.title} gameplay"></button>
        <button class="play-btn" type="button" tabindex="-1" aria-hidden="true">${svgYTLogo()}</button>
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
        <img src="${ytThumb(p.id)}" data-yt="${p.id}" alt="${p.title} gameplay preview" loading="lazy" decoding="async"/>
        <iframe data-src="https://www.youtube.com/embed/${p.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen title="${p.title} gameplay video"></iframe>
        <button class="card-media-link" type="button" aria-label="Play ${p.title} gameplay"></button>
        <button class="play-btn" type="button" tabindex="-1" aria-hidden="true">${svgYTLogo()}</button>
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

/* ============ THUMB FALLBACK ============
   YouTube returns a 120×90 grey placeholder when maxresdefault is missing.
   Walk the resolution ladder: maxres → hq → mq → 0 (default). */
document.querySelectorAll('img[data-yt]').forEach(img => {
  const id = img.dataset.yt;
  const ladder = [
    `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
    `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    `https://i.ytimg.com/vi/${id}/mqdefault.jpg`,
    `https://i.ytimg.com/vi/${id}/0.jpg`
  ];
  let step = 0;
  const advance = () => {
    step += 1;
    if (step < ladder.length) img.src = ladder[step];
  };
  img.addEventListener('load', () => {
    if (img.naturalWidth <= 120) advance();
  });
  img.addEventListener('error', advance);
});

/* ============ PLAY LOGIC ============ */
document.querySelectorAll('.card, .featured').forEach(card => {
  const iframe = card.querySelector('iframe');
  if (!iframe) return;
  const trigger = (e) => {
    e.stopPropagation();
    e.preventDefault();
    document.querySelectorAll('.playing').forEach(other => {
      if (other !== card) {
        other.classList.remove('playing');
        const otherIframe = other.querySelector('iframe');
        if (otherIframe) otherIframe.src = '';
      }
    });
    if (!iframe.src) iframe.src = iframe.dataset.src;
    card.classList.add('playing');
  };
  card.querySelectorAll('.card-media-link, .play-btn, .play-mini').forEach(el => {
    el.addEventListener('click', trigger);
  });
});
