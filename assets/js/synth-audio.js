/**
 * ==========================================================================
 * VIAH - WEB AUDIO SYNTHESIZER (Tanpura, Flute & Sitar Ambient Engine)
 * ==========================================================================
 * Fallback procedural acoustic generator so music ALWAYS plays gracefully!
 */

window.WeddingSynthEngine = (function () {
    let audioCtx = null;
    let isPlaying = false;
    let activeNodes = [];
    let intervalTimer = null;

    function getAudioContext() {
        if (!audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            audioCtx = new AudioContext();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        return audioCtx;
    }

    // Raag Yaman / Bhupali scale frequencies
    const baseFreq = 220; // A3
    const notes = [
        baseFreq * 1.0,         // Sa
        baseFreq * (9 / 8),     // Re
        baseFreq * (5 / 4),     // Ga
        baseFreq * (3 / 2),     // Pa
        baseFreq * (5 / 3),     // Dha
        baseFreq * 2.0,         // Sa'
        baseFreq * 2.0 * (9/8)  // Re'
    ];

    function playTanpuraDrone(ctx) {
        // Sa and Pa drone with rich chorus
        const droneFreqs = [baseFreq / 2, baseFreq * 3 / 4, baseFreq / 4];
        droneFreqs.forEach(freq => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(freq, ctx.currentTime);

            // Lowpass filter to give warm wooden tanpura resonance
            const filter = ctx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(380, ctx.currentTime);

            gain.gain.setValueAtTime(0.04, ctx.currentTime);

            osc.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);

            osc.start();
            activeNodes.push(osc);
        });
    }

    function playFluteNote(ctx, freq, duration) {
        if (!isPlaying) return;
        const now = ctx.currentTime;

        const osc = ctx.createOscillator();
        const vibrato = ctx.createOscillator();
        const vibratoGain = ctx.createGain();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        // Flute vibrato (5.5 Hz)
        vibrato.frequency.setValueAtTime(5.5, now);
        vibratoGain.gain.setValueAtTime(freq * 0.015, now);
        vibrato.connect(osc.frequency);
        vibrato.start(now);
        vibrato.stop(now + duration + 0.5);

        // Soft filter
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1400, now);

        // Gentle envelope (soft attack, singing sustain, slow release)
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.14, now + 0.3);
        gain.gain.setValueAtTime(0.12, now + duration - 0.2);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + duration + 0.4);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + duration + 0.5);
    }

    function startRagaSequence(ctx) {
        const sequence = [
            { note: 0, dur: 2.2 },
            { note: 2, dur: 2.0 },
            { note: 3, dur: 2.4 },
            { note: 4, dur: 1.8 },
            { note: 3, dur: 1.0 },
            { note: 2, dur: 2.2 },
            { note: 1, dur: 2.0 },
            { note: 0, dur: 3.5 },
            { note: 3, dur: 2.0 },
            { note: 4, dur: 2.0 },
            { note: 5, dur: 2.5 },
            { note: 6, dur: 1.5 },
            { note: 5, dur: 1.0 },
            { note: 4, dur: 2.0 },
            { note: 3, dur: 2.0 },
            { note: 2, dur: 2.2 },
            { note: 0, dur: 3.5 }
        ];

        let index = 0;
        function next() {
            if (!isPlaying) return;
            const step = sequence[index];
            playFluteNote(ctx, notes[step.note], step.dur);
            index = (index + 1) % sequence.length;
            intervalTimer = setTimeout(next, (step.dur + 0.2) * 1000);
        }

        next();
    }

    return {
        start: function () {
            if (isPlaying) return;
            try {
                const ctx = getAudioContext();
                isPlaying = true;
                playTanpuraDrone(ctx);
                startRagaSequence(ctx);
            } catch (err) {
                console.warn('Web Audio Synth failed to start:', err);
            }
        },
        stop: function () {
            isPlaying = false;
            if (intervalTimer) clearTimeout(intervalTimer);
            activeNodes.forEach(node => {
                try { node.stop(); } catch (e) {}
            });
            activeNodes = [];
        },
        toggle: function () {
            if (isPlaying) {
                this.stop();
            } else {
                this.start();
            }
            return isPlaying;
        },
        isPlaying: function () {
            return isPlaying;
        }
    };
})();
