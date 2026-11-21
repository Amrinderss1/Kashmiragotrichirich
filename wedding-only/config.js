/**
 * ========================================================================
 * WEDDING-ONLY CONFIGURATION - KASHMIRA & RICHI MATHUR ("Shubh Vivah")
 * ========================================================================
 * Dedicated invitation for guests invited exclusively to the Wedding Ceremony.
 */

window.WEDDING_CONFIG = {
    // ----------------------------------------------------------------------
    // 1. COUPLE INFORMATION
    // ----------------------------------------------------------------------
    couple: {
        bride: {
            firstName: "Kashmira",
            lastName: "Mathur",
            fullName: "Kashmira Mathur",
            parents: "Daughter of Mrs. Meetu Mathur & Mr. Mohan Mathur",
            fatherPhone: "+91 98104 40009",
            grandparents: "Granddaughter of Late Sh. P.B. Mathur & Late Smt. Sukhdarshan Mathur",
            bio: "Radiant, affectionate, and full of life, taking the most beautiful step toward a lifetime of togetherness."
        },
        groom: {
            firstName: "Richi",
            lastName: "Mathur",
            fullName: "Richi Mathur",
            parents: "Son of Mrs. Sulekha Mathur & Mr. Vijay Mathur",
            bio: "Gentle, charming, and devoted, ready to embark on this sacred journey of love and partnership."
        },
        monogram: "K & R",
        weddingHashtag: "#KashmiraGotRichiRich",
        quote: "Two hearts, two families, united by destiny and blessed by love."
    },

    // ----------------------------------------------------------------------
    // 2. MAIN WEDDING DATE & COUNTDOWN TARGET
    // ----------------------------------------------------------------------
    // Wedding on Saturday, 23rd January 2027 at 7:00 PM
    targetDate: "2027-01-23T19:00:00",
    dateDisplay: "Saturday, 23rd January 2027",
    city: "Sahibabad, Delhi NCR",

    // Auspicious Hindu Invocation
    auspiciousText: "॥ श्री गणेशाय नमः ॥",
    auspiciousSubtext: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
    
    // Homage to revered elders
    eldersBlessings: "Seeking the divine blessings of our beloved elders Late Sh. P.B. Mathur & Late Smt. Sukhdarshan Mathur",

    invitationHosts: "Mr. Mohan Mathur & Mrs. Meetu Mathur, along with the entire Mathur Family, cordially invite you to celebrate the auspicious wedding ceremony of their beloved daughter Kashmira with Richi.",
    cordialMessage: "Your gracious presence and heartfelt blessings will make this joyous occasion truly unforgettable.",

    // ----------------------------------------------------------------------
    // 3. VENUE DETAILS
    // ----------------------------------------------------------------------
    venue: {
        name: "SK KLYDE GRAND (Sapphire Hall)",
        address: "31/7, Pacific Business Park, Sahibabad Industrial Area Site 4, Sahibabad, UP – 201010",
        mapUrl: "https://maps.google.com/?q=SK+KLYDE+GRAND,+31/7,+Pacific+Business+Park,+Sahibabad+Industrial+Area+Site+4,+Sahibabad,+UP+201010",
        directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=SK+KLYDE+GRAND,+31/7,+Pacific+Business+Park,+Sahibabad+Industrial+Area+Site+4,+Sahibabad,+UP+201010",
        mapEmbedUrl: "https://www.google.com/maps?q=SK+KLYDE+GRAND,+31/7,+Pacific+Business+Park,+Sahibabad+Industrial+Area+Site+4,+Sahibabad,+UP+201010&output=embed"
    },

    // ----------------------------------------------------------------------
    // 4. MUSIC PLAYLIST ("Aaj Se Teri" as featured wedding soundtrack)
    // ----------------------------------------------------------------------
    music: {
        autoplayOnOpen: true,
        defaultVolume: 0.65,
        playlist: [
            {
                id: "track-1",
                title: "Aaj Se Teri",
                artist: "Padman • Arijit Singh",
                src: "assets/audio/aaj-se-teri.m4a",
                fallbackSrc: "assets/audio/romantic-wedding.wav",
                badge: "Soulful Romance"
            }
        ]
    },

    // ----------------------------------------------------------------------
    // 5. EVENT ITINERARY (WEDDING CEREMONY ONLY)
    // ----------------------------------------------------------------------
    events: [
        {
            id: "wedding",
            title: "Shubh Vivah (The Wedding Ceremony)",
            tagline: "Varmala, sacred seven vows around holy fire, dinner & Phere in Taaro ki Chao me",
            date: "Saturday, 23rd January 2027",
            time: "7:00 PM onwards",
            hall: "Sapphire Hall",
            venue: "SK KLYDE GRAND",
            address: "31/7, Pacific Business Park, Sahibabad Industrial Area Site 4, Sahibabad, UP – 201010",
            colorAccent: "#991B1B",
            image: "assets/images/ceremony-wedding.jpg?v=3",
            specialHighlight: "✨ “Then Phere in Taaro ki Chao me” ✨",
            scheduleTimeline: [
                { time: "7:00 PM", text: "Guest Welcome & Gathering" },
                { time: "8:00 PM", text: "Grand Arrival of Baraat" },
                { time: "8:30 PM", text: "Varmala Ceremony" },
                { time: "9:00 PM", text: "Royal Wedding Dinner" },
                { time: "10:30 PM", text: "Sacred Vedic Phere & Hastamelap" },
                { time: "Late Night", text: "Phere in Taaro ki Chao me 🌙" }
            ],
            mapUrl: "https://maps.google.com/?q=SK+KLYDE+GRAND,+31/7,+Pacific+Business+Park,+Sahibabad+Industrial+Area+Site+4,+Sahibabad,+UP+201010",
            googleCalendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Kashmira+%26+Richi+-+Wedding+Ceremony+(Shubh+Vivah)&dates=20270123T133000Z/20270123T203000Z&details=Wedding+Ceremony+at+Sapphire+Hall,+SK+KLYDE+GRAND.+Baraat+8PM,+Dinner+9PM,+Phere+in+Taaro+ki+Chao+me&location=SK+KLYDE+GRAND+Sahibabad"
        }
    ],

    // ----------------------------------------------------------------------
    // 6. OUR STORY
    // ----------------------------------------------------------------------
    story: [
        {
            year: "The Beginning",
            title: "A Serendipitous Meeting",
            description: "With the loving guidance of our families, two kindred souls crossed paths. An afternoon conversation blossomed into a deep connection of mutual respect, laughter, and companionship."
        },
        {
            year: "The Bond",
            title: "Growing Together",
            description: "Through countless shared stories, family dinners, and dreams of tomorrow, we realized we had found our lifelong confidant and partner."
        },
        {
            year: "23rd January 2027",
            title: "The Seven Sacred Vows",
            description: "Stepping around the sacred fire, taking the seven eternal steps together, and embracing forever under the star-lit sky."
        }
    ],

    // ----------------------------------------------------------------------
    // 7. RSVP & CONTACT INFORMATION
    // ----------------------------------------------------------------------
    rsvp: {
        contactPerson: "Anmol Mathur (Bride's Brother)",
        whatsappNumber: "919810446009",
        fatherContact: "Mohan Mathur: +91 98104 40009",
        deadlineText: "Please grace us with your RSVP to help us ensure warm and comfortable arrangements for you!"
    }
};
