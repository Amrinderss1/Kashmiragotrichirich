/**
 * ==========================================================================
 * VIAH - MAIN CONTROLLER SCRIPT (Kashmira & Richi Mathur Wedding)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    const config = window.WEDDING_CONFIG || {};

    // 1. Populate Dynamic Config Content
    populateWeddingData(config);

    // 2. Audio Player Controller
    const audioController = initAudioController(config.music);

    // 3. Envelope / Wax Seal Opening
    initEnvelopeExperience(audioController);

    // 4. Countdown Timer
    initCountdown(config.targetDate);

    // 5. RSVP & WhatsApp Generator
    initRSVP(config);

    // 6. Digital Guestbook / Wishes Wall
    initGuestbook();

    // 7. Share & Copy Features
    initShareFeatures(config);
});

/**
 * Injects data from config.js into the DOM
 */
function populateWeddingData(config) {
    if (!config.couple) return;

    // Couple Names & Monograms
    document.querySelectorAll('.data-bride-name').forEach(el => el.textContent = config.couple.bride.firstName);
    document.querySelectorAll('.data-groom-name').forEach(el => el.textContent = config.couple.groom.firstName);
    document.querySelectorAll('.data-couple-names').forEach(el => el.textContent = `${config.couple.bride.firstName} & ${config.couple.groom.firstName}`);
    document.querySelectorAll('.data-couple-full-names').forEach(el => el.textContent = `${config.couple.bride.fullName} & ${config.couple.groom.fullName}`);
    document.querySelectorAll('.data-monogram').forEach(el => el.textContent = config.couple.monogram);
    document.querySelectorAll('.data-hashtag').forEach(el => el.textContent = config.couple.weddingHashtag);
    
    // Parents & Homage to Grandparents
    const brideParents = document.getElementById('data-bride-parents');
    if (brideParents) brideParents.textContent = config.couple.bride.parents;
    const groomParents = document.getElementById('data-groom-parents');
    if (groomParents) groomParents.textContent = config.couple.groom.parents;

    const brideGrandparents = document.getElementById('data-bride-grandparents');
    if (brideGrandparents) brideGrandparents.textContent = config.couple.bride.grandparents;

    const brideBio = document.getElementById('data-bride-bio');
    if (brideBio) brideBio.textContent = config.couple.bride.bio;
    const groomBio = document.getElementById('data-groom-bio');
    if (groomBio) groomBio.textContent = config.couple.groom.bio;

    const hostsInv = document.getElementById('data-invitation-hosts');
    if (hostsInv && config.invitationHosts) hostsInv.textContent = config.invitationHosts;

    const cordialMsg = document.getElementById('data-cordial-message');
    if (cordialMsg && config.cordialMessage) cordialMsg.textContent = config.cordialMessage;

    const eldersBless = document.getElementById('data-elders-blessing');
    if (eldersBless && config.eldersBlessings) eldersBless.textContent = config.eldersBlessings;

    // Dates & City
    document.querySelectorAll('.data-wedding-date').forEach(el => el.textContent = config.dateDisplay);
    document.querySelectorAll('.data-city').forEach(el => el.textContent = config.city);
    document.querySelectorAll('.data-auspicious').forEach(el => el.textContent = config.auspiciousText);
    document.querySelectorAll('.data-auspicious-sub').forEach(el => el.textContent = config.auspiciousSubtext);

    // Render Events Schedule
    renderEvents(config.events);

    // Render Our Story
    renderStory(config.story);

    // Render Photo Gallery
    renderGallery(config.gallery);
}

/**
 * Renders the Event Itinerary Cards with Hall info, Baraat/Dinner timings & Highlights
 */
function renderEvents(events) {
    const container = document.getElementById('events-container');
    if (!container || !events) return;

    container.innerHTML = events.map((ev, index) => {
        // Timeline badges if available
        let timelineHtml = '';
        if (ev.scheduleTimeline && ev.scheduleTimeline.length > 0) {
            timelineHtml = `
                <div class="mt-4 mb-2 p-3 bg-amber-50/80 rounded-2xl border border-amber-200/80">
                    <p class="text-[11px] font-bold text-amber-900 uppercase tracking-wider mb-2">Program Flow:</p>
                    <div class="grid grid-cols-2 gap-2 text-xs">
                        ${ev.scheduleTimeline.map(item => `
                            <div class="flex items-center gap-1.5 text-stone-700">
                                <span class="font-bold text-amber-800 shrink-0">• ${item.time}:</span>
                                <span class="truncate">${item.text}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        let highlightHtml = '';
        if (ev.specialHighlight) {
            highlightHtml = `
                <div class="my-3 py-2 px-3 bg-gradient-to-r from-amber-100 via-rose-100 to-amber-100 border border-amber-300 rounded-xl text-center">
                    <span class="font-serif font-bold text-sm text-stone-900">${ev.specialHighlight}</span>
                </div>
            `;
        }

        return `
            <div class="event-card relative flex flex-col md:flex-row items-stretch bg-white rounded-3xl overflow-hidden border border-amber-200/70 shadow-lg">
                <!-- Event Image Banner -->
                <div class="md:w-5/12 relative h-60 md:h-auto min-h-[260px] overflow-hidden">
                    <img src="${ev.image}" alt="${ev.title}" class="w-full h-full object-cover transition-transform duration-700 hover:scale-105" onerror="this.src='assets/images/wedding.jpg'" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden"></div>
                    <div class="absolute top-4 left-4 bg-amber-900/90 text-amber-200 text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-amber-400/40 backdrop-blur-md">
                        Event ${index + 1}
                    </div>
                    ${ev.hall ? `
                        <div class="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md text-amber-200 text-xs font-semibold px-3 py-1.5 rounded-xl border border-white/20 text-center">
                            🏛️ Venue Hall: <span class="text-white font-bold">${ev.hall}</span>
                        </div>
                    ` : ''}
                </div>

                <!-- Event Details -->
                <div class="md:w-7/12 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                        <div class="flex items-center gap-2 mb-1">
                            <span class="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                                ${ev.hall}
                            </span>
                        </div>
                        <h3 class="font-serif text-2xl md:text-3xl text-amber-950 font-bold mb-1.5">${ev.title}</h3>
                        <p class="text-sm text-stone-600 italic mb-3">${ev.tagline}</p>

                        ${highlightHtml}

                        <div class="space-y-2 text-sm text-stone-700 mb-3">
                            <div class="flex items-center gap-3">
                                <span class="w-7 h-7 rounded-full bg-amber-50 flex items-center justify-center text-amber-800 border border-amber-200 shrink-0">📅</span>
                                <span class="font-semibold text-stone-900">${ev.date}</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <span class="w-7 h-7 rounded-full bg-amber-50 flex items-center justify-center text-amber-800 border border-amber-200 shrink-0">⏰</span>
                                <span class="font-semibold text-stone-900">${ev.time}</span>
                            </div>
                            <div class="flex items-start gap-3">
                                <span class="w-7 h-7 rounded-full bg-amber-50 flex items-center justify-center text-amber-800 border border-amber-200 shrink-0 mt-0.5">📍</span>
                                <div>
                                    <p class="font-bold text-stone-900">${ev.venue} (${ev.hall})</p>
                                    <p class="text-xs text-stone-500">${ev.address}</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3">
                                <span class="w-7 h-7 rounded-full bg-amber-50 flex items-center justify-center text-amber-800 border border-amber-200 shrink-0">👗</span>
                                <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                                    Dress Code: ${ev.dressCode}
                                </span>
                            </div>
                        </div>

                        ${timelineHtml}
                    </div>

                    <!-- Action Buttons: Google Maps & Add to Calendar -->
                    <div class="flex flex-wrap items-center gap-3 pt-3 border-t border-amber-100 mt-2">
                        <a href="${ev.mapUrl}" target="_blank" rel="noopener noreferrer" 
                           class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-amber-50 text-xs font-semibold tracking-wide transition shadow-sm hover:shadow">
                            <span>🗺️</span> Open Google Maps
                        </a>
                        <a href="${ev.googleCalendarUrl}" target="_blank" rel="noopener noreferrer" 
                           class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 text-xs font-semibold tracking-wide transition">
                            <span>🗓️</span> Add to Calendar
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

/**
 * Renders the Couple Story Timeline
 */
function renderStory(story) {
    const container = document.getElementById('story-container');
    if (!container || !story) return;

    container.innerHTML = story.map((item, idx) => {
        const isEven = idx % 2 === 0;
        return `
            <div class="relative flex flex-col md:flex-row items-center my-8 ${isEven ? 'md:flex-row-reverse' : ''}">
                <div class="md:w-1/2 p-4 text-center ${isEven ? 'md:text-left md:pl-12' : 'md:text-right md:pr-12'}">
                    <span class="inline-block text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full mb-2 tracking-wider uppercase border border-amber-200">
                        ${item.year}
                    </span>
                    <h4 class="font-serif text-xl font-bold text-stone-900 mb-2">${item.title}</h4>
                    <p class="text-stone-600 text-sm leading-relaxed">${item.description}</p>
                </div>
                <!-- Timeline Center Dot -->
                <div class="w-10 h-10 rounded-full bg-amber-500 border-4 border-amber-100 text-white flex items-center justify-center font-bold text-xs shadow-md z-10 my-2 md:my-0">
                    ${idx + 1}
                </div>
                <div class="md:w-1/2"></div>
            </div>
        `;
    }).join('');
}

/**
 * Renders the Photo Gallery
 */
function renderGallery(gallery) {
    const container = document.getElementById('gallery-container');
    if (!container || !gallery) return;

    container.innerHTML = gallery.map((item) => `
        <div class="gallery-img-wrapper group aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer">
            <img src="${item.src}" alt="${item.caption}" class="w-full h-full object-cover" onerror="this.src='assets/images/wedding.jpg'" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p class="text-amber-100 font-serif text-sm tracking-wide font-medium">${item.caption}</p>
            </div>
        </div>
    `).join('');
}

/**
 * Audio Controller with playlist support, next/prev, drawer and fallbacks
 */
function initAudioController(musicConfig) {
    const audioEl = new Audio();
    audioEl.preload = 'auto';
    audioEl.volume = musicConfig?.defaultVolume || 0.65;
    audioEl.loop = false;

    let playlist = musicConfig?.playlist || [];
    let currentIndex = 0;
    let isPlaying = false;

    const widget = document.getElementById('music-widget');
    const toggleBtn = document.getElementById('music-toggle-btn');
    const trackTitleEl = document.getElementById('widget-track-title');
    const trackArtistEl = document.getElementById('widget-track-artist');
    const playlistDrawer = document.getElementById('playlist-drawer');
    const playlistBtn = document.getElementById('playlist-btn');
    const playlistItemsEl = document.getElementById('playlist-items');

    function loadTrack(index) {
        if (!playlist.length) return;
        currentIndex = (index + playlist.length) % playlist.length;
        const track = playlist[currentIndex];

        if (trackTitleEl) trackTitleEl.textContent = track.title;
        if (trackArtistEl) trackArtistEl.textContent = track.artist;

        audioEl.src = track.src;
        audioEl.onerror = () => {
            console.warn(`Could not load track ${track.src}. Switching to fallback...`);
            if (track.fallbackSrc && audioEl.src !== track.fallbackSrc) {
                audioEl.src = track.fallbackSrc;
                if (isPlaying) audioEl.play().catch(e => console.log(e));
            } else if (window.WeddingSynthEngine) {
                window.WeddingSynthEngine.start();
            }
        };

        renderPlaylistDrawer();
    }

    function play() {
        if (window.WeddingSynthEngine && window.WeddingSynthEngine.isPlaying()) {
            window.WeddingSynthEngine.stop();
        }
        isPlaying = true;
        if (widget) widget.classList.add('playing');
        audioEl.play().catch(err => {
            console.warn('Playback error, falling back:', err);
            const track = playlist[currentIndex];
            if (track && track.fallbackSrc) {
                audioEl.src = track.fallbackSrc;
                audioEl.play().catch(() => {
                    if (window.WeddingSynthEngine) window.WeddingSynthEngine.start();
                });
            } else if (window.WeddingSynthEngine) {
                window.WeddingSynthEngine.start();
            }
        });
    }

    function pause() {
        isPlaying = false;
        if (widget) widget.classList.remove('playing');
        audioEl.pause();
        if (window.WeddingSynthEngine) window.WeddingSynthEngine.stop();
    }

    function toggle() {
        if (isPlaying) pause();
        else play();
    }

    function next() {
        loadTrack(currentIndex + 1);
        if (isPlaying) play();
    }

    function prev() {
        loadTrack(currentIndex - 1);
        if (isPlaying) play();
    }

    audioEl.addEventListener('ended', () => {
        next();
    });

    function renderPlaylistDrawer() {
        if (!playlistItemsEl) return;
        playlistItemsEl.innerHTML = playlist.map((t, idx) => `
            <button class="w-full text-left p-2.5 rounded-xl text-xs transition flex items-center justify-between ${idx === currentIndex ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40' : 'text-stone-300 hover:bg-white/10'}" data-index="${idx}">
                <div class="truncate mr-2">
                    <p class="truncate">${t.title}</p>
                    <p class="text-[10px] text-stone-400 truncate">${t.artist}</p>
                </div>
                <span class="text-[10px] px-2 py-0.5 rounded bg-amber-900/60 text-amber-200 border border-amber-500/30 shrink-0">
                    ${t.badge || 'Track'}
                </span>
            </button>
        `).join('');

        playlistItemsEl.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.getAttribute('data-index'), 10);
                loadTrack(idx);
                play();
                if (playlistDrawer) playlistDrawer.classList.remove('open');
            });
        });
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggle();
        });
    }

    const nextBtn = document.getElementById('music-next-btn');
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            next();
        });
    }

    if (playlistBtn && playlistDrawer) {
        playlistBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            playlistDrawer.classList.toggle('open');
        });

        document.addEventListener('click', (e) => {
            if (!playlistDrawer.contains(e.target) && e.target !== playlistBtn) {
                playlistDrawer.classList.remove('open');
            }
        });
    }

    loadTrack(0);

    return { play, pause, toggle, next, prev, isPlaying: () => isPlaying };
}

/**
 * Envelope Wax-seal opening animation with confetti and music start
 */
function initEnvelopeExperience(audioController) {
    const envelopeScreen = document.getElementById('envelope-screen');
    const envelopeWrapper = document.getElementById('envelope-wrapper');
    const waxSeal = document.getElementById('wax-seal-btn');
    const replayBtn = document.getElementById('replay-envelope-btn');

    if (!envelopeScreen || !waxSeal) return;

    function openEnvelope() {
        envelopeWrapper.classList.add('opening');

        if (typeof confetti === 'function') {
            confetti({
                particleCount: 90,
                spread: 75,
                origin: { y: 0.6 },
                colors: ['#D4AF37', '#FFD700', '#B91C1C', '#F43F5E', '#FFFFFF']
            });
        }

        if (audioController) {
            audioController.play();
        }

        setTimeout(() => {
            envelopeScreen.classList.add('opened');
            sessionStorage.setItem('viah_envelope_opened', 'true');
        }, 1100);
    }

    waxSeal.addEventListener('click', openEnvelope);
    envelopeWrapper.addEventListener('click', () => {
        if (!envelopeWrapper.classList.contains('opening')) {
            openEnvelope();
        }
    });

    if (replayBtn) {
        replayBtn.addEventListener('click', () => {
            envelopeWrapper.classList.remove('opening');
            envelopeScreen.classList.remove('opened');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

/**
 * Real-time Countdown Timer
 */
function initCountdown(targetDateStr) {
    const daysEl = document.getElementById('timer-days');
    const hoursEl = document.getElementById('timer-hours');
    const minsEl = document.getElementById('timer-minutes');
    const secsEl = document.getElementById('timer-seconds');
    const bannerEl = document.getElementById('wedding-banner-status');

    if (!targetDateStr || !daysEl) return;

    const targetTime = new Date(targetDateStr).getTime();

    function update() {
        const now = new Date().getTime();
        const diff = targetTime - now;

        if (diff <= 0) {
            daysEl.textContent = '00';
            hoursEl.textContent = '00';
            minsEl.textContent = '00';
            secsEl.textContent = '00';
            if (bannerEl) bannerEl.textContent = '🎉 Shubh Vivah! Festivities are underway! 🎉';
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);

        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minsEl.textContent = String(mins).padStart(2, '0');
        secsEl.textContent = String(secs).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
}

/**
 * WhatsApp RSVP Form Handler (Routes to Anmol Mathur)
 */
function initRSVP(config) {
    const form = document.getElementById('rsvp-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('rsvp-name')?.value || '';
        const attendance = document.querySelector('input[name="attendance"]:checked')?.value || 'Joyfully Attending';
        const guests = document.getElementById('rsvp-guests')?.value || '1';
        
        const checkedEvents = [];
        form.querySelectorAll('input[name="event_attending"]:checked').forEach(cb => {
            checkedEvents.push(cb.value);
        });

        const message = document.getElementById('rsvp-message')?.value || '';

        // Compose WhatsApp message for Mathur family
        let text = `🌸 *Wedding RSVP for ${config.couple.bride.fullName} & ${config.couple.groom.fullName}* 🌸\n\n`;
        text += `👤 *Guest Name:* ${name}\n`;
        text += `✨ *Response:* ${attendance}\n`;
        text += `👥 *Number of Guests:* ${guests}\n`;
        if (checkedEvents.length > 0) {
            text += `🎉 *Events Attending:* ${checkedEvents.join(', ')}\n`;
        }
        if (message.trim()) {
            text += `💌 *Blessings/Wishes:* "${message.trim()}"\n`;
        }
        text += `\n*Venue:* SK KLYDE GRAND, Sahibabad\nSent via Kashmira & Richi Wedding Website ✨`;

        const waNumber = config.rsvp?.whatsappNumber || '919810446009'; // Anmol Mathur
        const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;

        if (typeof confetti === 'function') {
            confetti({
                particleCount: 100,
                spread: 80,
                origin: { y: 0.6 }
            });
        }

        window.open(url, '_blank');
    });
}

/**
 * Digital Guestbook / Wishes Wall
 */
function initGuestbook() {
    const wishesContainer = document.getElementById('guestbook-wishes');
    const wishForm = document.getElementById('guestbook-form');
    if (!wishesContainer || !wishForm) return;

    const saved = localStorage.getItem('kashmira_richi_wishes');
    let wishes = saved ? JSON.parse(saved) : [
        {
            name: "Anmol Mathur",
            relation: "Bride's Brother",
            text: "Dearest Kashmira & Richi jiju, wishing you a lifetime of immense joy, laughter, and togetherness! Super excited for 22nd & 23rd Jan!",
            date: "Today"
        },
        {
            name: "The Mathur Family",
            relation: "Family",
            text: "May Lord Ganesha bless the couple with abundant happiness, prosperity, and health. Heartiest congratulations to both families!",
            date: "Yesterday"
        },
        {
            name: "Pooja & Rohan",
            relation: "Friends",
            text: "Counting days for the Cocktail & Mehndi night at Florence Hall! Congratulations Kashmira and Richi!",
            date: "2 days ago"
        }
    ];

    function renderWishes() {
        wishesContainer.innerHTML = wishes.map(w => `
            <div class="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 shadow-sm relative overflow-hidden">
                <div class="flex items-center gap-3 mb-2">
                    <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-600 to-rose-600 text-white font-serif font-bold flex items-center justify-center text-xs shadow">
                        ${w.name.charAt(0)}
                    </div>
                    <div>
                        <h5 class="font-semibold text-stone-900 text-sm">${w.name}</h5>
                        <p class="text-[11px] text-amber-800 font-medium">${w.relation || 'Well-wisher'} • ${w.date}</p>
                    </div>
                </div>
                <p class="text-stone-700 text-xs italic font-serif leading-relaxed">"${w.text}"</p>
            </div>
        `).join('');
    }

    renderWishes();

    wishForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameInput = document.getElementById('wish-name');
        const relationInput = document.getElementById('wish-relation');
        const textInput = document.getElementById('wish-text');

        if (!nameInput.value || !textInput.value) return;

        const newWish = {
            name: nameInput.value.trim(),
            relation: relationInput.value.trim() || 'Well-wisher',
            text: textInput.value.trim(),
            date: 'Just now'
        };

        wishes.unshift(newWish);
        localStorage.setItem('kashmira_richi_wishes', JSON.stringify(wishes));
        renderWishes();

        nameInput.value = '';
        relationInput.value = '';
        textInput.value = '';

        if (typeof confetti === 'function') {
            confetti({
                particleCount: 75,
                spread: 60,
                origin: { y: 0.7 }
            });
        }
    });
}

/**
 * Share & Copy Features
 */
function initShareFeatures(config) {
    const shareWhatsAppBtn = document.getElementById('share-whatsapp-btn');
    const copyLinkBtn = document.getElementById('copy-link-btn');
    const petalToggleBtn = document.getElementById('toggle-petals-btn');

    if (shareWhatsAppBtn) {
        shareWhatsAppBtn.addEventListener('click', () => {
            const inviteMsg = `🌸 *Wedding Invitation: Kashmira Mathur & Richi Mathur* 🌸\n\nMr. Mohan Mathur & Mrs. Meetu Mathur warmly invite you to celebrate the wedding ceremonies of their daughter Kashmira with Richi on 22nd & 23rd January 2027 at SK KLYDE GRAND, Sahibabad.\n\n✨ View Wedding E-Card, Events Schedule, Countdown & Maps:\n${window.location.href}`;
            const url = `https://wa.me/?text=${encodeURIComponent(inviteMsg)}`;
            window.open(url, '_blank');
        });
    }

    if (copyLinkBtn) {
        copyLinkBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(window.location.href).then(() => {
                const original = copyLinkBtn.innerHTML;
                copyLinkBtn.innerHTML = '<span>✅</span> Link Copied!';
                setTimeout(() => {
                    copyLinkBtn.innerHTML = original;
                }, 2000);
            }).catch(() => {
                prompt('Copy this link:', window.location.href);
            });
        });
    }

    const copyAddressBtn = document.getElementById('copy-address-btn');
    if (copyAddressBtn) {
        copyAddressBtn.addEventListener('click', () => {
            const addressText = config.venue?.address ? `${config.venue.name}, ${config.venue.address}` : "SK KLYDE GRAND, 31/7, Pacific Business Park, Sahibabad Industrial Area Site 4, Sahibabad, UP – 201010";
            navigator.clipboard.writeText(addressText).then(() => {
                const original = copyAddressBtn.innerHTML;
                copyAddressBtn.innerHTML = '<span>✅</span> Address Copied!';
                setTimeout(() => {
                    copyAddressBtn.innerHTML = original;
                }, 2000);
            }).catch(() => {
                prompt('Copy venue address:', addressText);
            });
        });
    }

    if (petalToggleBtn) {
        petalToggleBtn.addEventListener('click', () => {
            if (window.PetalEffect) {
                const active = window.PetalEffect.toggle();
                petalToggleBtn.textContent = active ? '🌸 Petals: ON' : '🌸 Petals: OFF';
            }
        });
    }
}
