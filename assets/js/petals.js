/**
 * ==========================================================================
 * VIAH - ROMANTIC FALLING PETALS CANVAS (Rose & Marigold / Genda Phool)
 * ==========================================================================
 */

(function () {
    const canvas = document.getElementById('petals-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let isRunning = true;
    let petals = [];
    const MAX_PETALS = window.innerWidth < 768 ? 22 : 42; // Mobile optimized

    // Petal color palettes: Rose Red/Pink & Auspicious Golden Marigold
    const petalColors = [
        { r: 218, g: 41, b: 72, a: 0.85 },   // Deep Rose Red
        { r: 244, g: 63, b: 94, a: 0.8 },    // Bright Pink Rose
        { r: 251, g: 113, b: 133, a: 0.75 }, // Soft Blush Petal
        { r: 245, g: 158, b: 11, a: 0.85 },  // Marigold Orange
        { r: 251, g: 191, b: 36, a: 0.85 },  // Golden Genda Petal
        { r: 254, g: 240, b: 138, a: 0.7 }   // Saffron Yellow Glow
    ];

    class Petal {
        constructor() {
            this.reset(true);
        }

        reset(initial = false) {
            this.x = Math.random() * width;
            this.y = initial ? Math.random() * height : -20;
            this.size = Math.random() * 12 + 10; // 10px to 22px
            this.speedY = Math.random() * 1.2 + 0.8;
            this.speedX = Math.random() * 1.5 - 0.75;
            this.rotation = Math.random() * Math.PI * 2;
            this.rotationSpeed = (Math.random() - 0.5) * 0.03;
            this.flip = Math.random() * Math.PI;
            this.flipSpeed = Math.random() * 0.03 + 0.01;
            this.color = petalColors[Math.floor(Math.random() * petalColors.length)];
            this.sway = Math.random() * 2 + 1;
            this.swaySpeed = Math.random() * 0.02 + 0.01;
            this.swayOffset = Math.random() * Math.PI * 2;
        }

        update() {
            this.y += this.speedY;
            this.x += Math.sin(this.swayOffset) * this.sway + this.speedX * 0.4;
            this.swayOffset += this.swaySpeed;
            this.rotation += this.rotationSpeed;
            this.flip += this.flipSpeed;

            if (this.y > height + 20 || this.x < -30 || this.x > width + 30) {
                this.reset();
            }
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
            ctx.scale(1, Math.cos(this.flip));

            // Draw organic curved petal shape
            ctx.beginPath();
            ctx.moveTo(0, -this.size / 2);
            ctx.bezierCurveTo(
                this.size / 2, -this.size / 2,
                this.size / 2, this.size / 2,
                0, this.size / 2
            );
            ctx.bezierCurveTo(
                -this.size / 2, this.size / 2,
                -this.size / 2, -this.size / 2,
                0, -this.size / 2
            );

            // Subtle gradient on each petal for 3D depth
            const grad = ctx.createRadialGradient(0, 0, 1, 0, 0, this.size / 2);
            grad.addColorStop(0, `rgba(${this.color.r + 20}, ${this.color.g + 20}, ${this.color.b + 20}, ${this.color.a})`);
            grad.addColorStop(1, `rgba(${this.color.r - 20}, ${this.color.g - 20}, ${this.color.b - 20}, ${this.color.a * 0.7})`);
            ctx.fillStyle = grad;
            ctx.fill();

            // Delicate center vein
            ctx.beginPath();
            ctx.moveTo(0, -this.size / 2.5);
            ctx.lineTo(0, this.size / 2.5);
            ctx.strokeStyle = `rgba(255, 255, 255, 0.25)`;
            ctx.lineWidth = 0.8;
            ctx.stroke();

            ctx.restore();
        }
    }

    // Initialize petals
    for (let i = 0; i < MAX_PETALS; i++) {
        petals.push(new Petal());
    }

    function animate() {
        if (!isRunning) return;
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < petals.length; i++) {
            petals[i].update();
            petals[i].draw();
        }

        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    // Start loop
    animate();

    // Petal controller API for user
    window.PetalEffect = {
        toggle: function () {
            isRunning = !isRunning;
            if (isRunning) animate();
            return isRunning;
        },
        isActive: function () {
            return isRunning;
        }
    };
})();
