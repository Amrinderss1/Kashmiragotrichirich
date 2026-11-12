/**
 * ========================================================================
 * WEDDING CONFIGURATION - KASHMIRA & RICHI MATHUR ("Shubh Vivah")
 * ========================================================================
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
            brother: "Anmol Mathur (+91 98104 46009)",
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
        weddingHashtag: "#KashmiraWedsRichi",
        quote: "Two hearts, two families, united by destiny and blessed by love."
    },

    // ----------------------------------------------------------------------
    // 2. MAIN WEDDING DATE & COUNTDOWN TARGET
    // ----------------------------------------------------------------------
    // Festivities start 22nd Jan 2027 6:00 PM, Wedding on 23rd Jan 2027 7:00 PM
    targetDate: "2027-01-22T18:00:00",
    weddingDayDate: "2027-01-23T19:00:00",
    dateDisplay: "22nd & 23rd January 2027",
    city: "Sahibabad, Delhi NCR",

    // Auspicious Hindu Invocation
    auspiciousText: "॥ श्री गणेशाय नमः ॥",
    auspiciousSubtext: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
    
    // Homage to revered elders
    eldersBlessings: "Seeking the divine blessings of our beloved elders Late Sh. P.B. Mathur & Late Smt. Sukhdarshan Mathur",

    invitationHosts: "Mr. Mohan Mathur & Mrs. Meetu Mathur, along with the entire Mathur Family, cordially invite you to celebrate the wedding of their beloved daughter Kashmira with Richi.",
    cordialMessage: "Your gracious presence and heartfelt blessings will make this joyous occasion truly unforgettable.",

    // ----------------------------------------------------------------------
    // 3. VENUE DETAILS
    // ----------------------------------------------------------------------
    venue: {
        name: "SK KLYDE GRAND",
        address: "31/7, Pacific Business Park, Sahibabad Industrial Area Site 4, Sahibabad, UP – 201010",
        mapUrl: "https://maps.google.com/?q=SK+KLYDE+GRAND,+31/7,+Pacific+Business+Park,+Sahibabad+Industrial+Area+Site+4,+Sahibabad,+UP+201010",
        directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=SK+KLYDE+GRAND,+31/7,+Pacific+Business+Park,+Sahibabad+Industrial+Area+Site+4,+Sahibabad,+UP+201010",
        mapEmbedUrl: "https://www.google.com/maps?q=SK+KLYDE+GRAND,+31/7,+Pacific+Business+Park,+Sahibabad+Industrial+Area+Site+4,+Sahibabad,+UP+201010&output=embed"
    },

    // ----------------------------------------------------------------------
    // 4. MUSIC PLAYLIST (Din Shagna Da first, then Aaj Se Teri, Punjabi Wedding Song)
    // ----------------------------------------------------------------------
    music: {
        autoplayOnOpen: true,
        defaultVolume: 0.65,
        playlist: [
            {
                id: "track-1",
                title: "Din Shagna Da",
                artist: "Phillauri • Jasleen Royal",
                src: "assets/audio/din-shagna-da.m4a",
                fallbackSrc: "assets/audio/romantic-wedding.wav",
                badge: "Bridal Entry Special"
            },
            {
                id: "track-2",
                title: "Aaj Se Teri",
                artist: "Padman • Arijit Singh",
                src: "assets/audio/aaj-se-teri.m4a",
                fallbackSrc: "assets/audio/romantic-wedding.wav",
                badge: "Soulful Romance"
            },
            {
                id: "track-3",
                title: "Punjabi Wedding Song",
                artist: "Hasee Toh Phasee • Sunidhi Chauhan",
                src: "assets/audio/punjabi-wedding-song.m4a",
                fallbackSrc: "assets/audio/festive-sangeet.wav",
                badge: "Celebration Dance"
            }
        ]
    },

    // ----------------------------------------------------------------------
    // 5. EVENT ITINERARY (FUNCTIONS)
    // ----------------------------------------------------------------------
    events: [
        {
            id: "engagement-mehndi",
            title: "Engagement cum Mehndi Ceremony & Cocktail Party",
            tagline: "An evening of ring ceremony, rich mehendi hues, cocktail sips, music & dance",
            date: "Friday, 22nd January 2027",
            time: "6:00 PM onwards",
            hall: "Florence Hall",
            venue: "SK KLYDE GRAND",
            address: "31/7, Pacific Business Park, Sahibabad Industrial Area Site 4, Sahibabad, UP – 201010",
            dressCode: "Festive Glam / Cocktail Indo-Western",
            colorAccent: "#831843",
            image: "assets/images/mehendi.jpg",
            scheduleTimeline: [
                { time: "6:00 PM", text: "Welcome & High Tea" },
                { time: "7:00 PM", text: "Ring Exchange & Mehndi Adornment" },
                { time: "8:00 PM", text: "Cocktail Party, DJ & Dance" },
                { time: "9:00 PM", text: "Gourmet Dinner" }
            ],
            mapUrl: "https://maps.google.com/?q=SK+KLYDE+GRAND,+31/7,+Pacific+Business+Park,+Sahibabad+Industrial+Area+Site+4,+Sahibabad,+UP+201010",
            googleCalendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Kashmira+%26+Richi+-+Engagement+cum+Mehndi+%26+Cocktail&dates=20270122T123000Z/20270122T183000Z&details=Engagement+cum+Mehndi+Ceremony+and+Cocktail+Party+at+Florence+Hall,+SK+KLYDE+GRAND&location=SK+KLYDE+GRAND+Sahibabad"
        },
        {
            id: "haldi",
            title: "Haldi Ceremony of Kashmira Mathur",
            tagline: "Auspicious turmeric blessings, floral splashes, laughter, and joy",
            date: "Saturday, 23rd January 2027",
            time: "11:30 AM onwards (Followed by Lunch from 1:30 PM)",
            hall: "Coral Hall",
            venue: "SK KLYDE GRAND",
            address: "31/7, Pacific Business Park, Sahibabad Industrial Area Site 4, Sahibabad, UP – 201010",
            dressCode: "Haldi Yellow & Floral Splendor",
            colorAccent: "#D97706",
            image: "assets/images/haldi.jpg",
            scheduleTimeline: [
                { time: "11:30 AM", text: "Haldi Utsav Begins" },
                { time: "12:30 PM", text: "Floral Phoolon Ki Holi & Geet" },
                { time: "1:30 PM", text: "Traditional Festive Lunch" }
            ],
            mapUrl: "https://maps.google.com/?q=SK+KLYDE+GRAND,+31/7,+Pacific+Business+Park,+Sahibabad+Industrial+Area+Site+4,+Sahibabad,+UP+201010",
            googleCalendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Kashmira+Mathur+-+Haldi+Ceremony&dates=20270123T060000Z/20270123T090000Z&details=Haldi+Ceremony+at+Coral+Hall,+SK+KLYDE+GRAND+followed+by+Lunch&location=SK+KLYDE+GRAND+Sahibabad"
        },
        {
            id: "wedding",
            title: "Shubh Vivah (The Wedding Ceremony)",
            tagline: "Varmala, sacred seven vows around holy fire, dinner & Vidai in Taaro ki Chao me",
            date: "Saturday, 23rd January 2027",
            time: "7:00 PM onwards",
            hall: "Sapphire Hall",
            venue: "SK KLYDE GRAND",
            address: "31/7, Pacific Business Park, Sahibabad Industrial Area Site 4, Sahibabad, UP – 201010",
            dressCode: "Traditional Royal Indian Attire",
            colorAccent: "#991B1B",
            image: "assets/images/wedding.jpg",
            specialHighlight: "✨ “Then Vidai in Taaro ki Chao me” ✨",
            scheduleTimeline: [
                { time: "7:00 PM", text: "Guest Welcome & Gathering" },
                { time: "8:00 PM", text: "Grand Arrival of Baraat" },
                { time: "8:30 PM", text: "Varmala Ceremony" },
                { time: "9:00 PM", text: "Royal Wedding Dinner" },
                { time: "10:30 PM", text: "Sacred Vedic Phere & Hastamelap" },
                { time: "Late Night", text: "Vidai in Taaro ki Chao me 🌙" }
            ],
            mapUrl: "https://maps.google.com/?q=SK+KLYDE+GRAND,+31/7,+Pacific+Business+Park,+Sahibabad+Industrial+Area+Site+4,+Sahibabad,+UP+201010",
            googleCalendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Kashmira+%26+Richi+-+Wedding+Ceremony+(Shubh+Vivah)&dates=20270123T133000Z/20270123T203000Z&details=Wedding+Ceremony+at+Sapphire+Hall,+SK+KLYDE+GRAND.+Baraat+8PM,+Dinner+9PM,+Vidai+in+Taaro+ki+Chao+me&location=SK+KLYDE+GRAND+Sahibabad"
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
            year: "22nd January 2027",
            title: "The Ring & Mehndi",
            description: "Exchanging rings and celebrating with our dearest ones as henna weaves its deep crimson promise on Kashmira's hands."
        },
        {
            year: "23rd January 2027",
            title: "The Seven Sacred Vows",
            description: "Stepping around the sacred fire, taking the seven eternal steps together, and embracing forever under the star-lit sky."
        }
    ],

    // ----------------------------------------------------------------------
    // 7. PHOTO GALLERY
    // ----------------------------------------------------------------------
    gallery: [
        { src: "assets/images/couple-portrait.jpg", caption: "Kashmira & Richi" },
        { src: "assets/images/rings.jpg", caption: "The Promise of Rings" },
        { src: "assets/images/mehendi.jpg", caption: "Mehndi & Henna Hues" },
        { src: "assets/images/haldi.jpg", caption: "Golden Haldi Moments" },
        { src: "assets/images/wedding.jpg", caption: "Sacred Wedding Vows" },
        { src: "assets/images/story-proposal.jpg", caption: "Moments of Love" }
    ],

    // ----------------------------------------------------------------------
    // 8. RSVP & CONTACT INFORMATION
    // ----------------------------------------------------------------------
    rsvp: {
        contactPerson: "Anmol Mathur (Bride's Brother)",
        whatsappNumber: "919810446009",
        fatherContact: "Mohan Mathur: +91 98104 40009",
        deadlineText: "Please grace us with your RSVP to help us ensure warm and comfortable arrangements for you!"
    }
};
