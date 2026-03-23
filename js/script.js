tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                amber: { 450: '#FFBF00' },
                mc: {
                    gold: '#F2C044',
                    brown: '#2A1505',
                    cream: '#fff8e1',
                    dark: '#0c0500'
                }
            }
        }
    }
}
const MEMBERS_DATA = [
    { name: "Bals", channelId: "UCbZivhNw8gg55CajwyocnQg", icon: "atom", logo: "assets/members_logo/bals_logo.jpg", bio: "You can expect high-energy Tamil Minecraft gameplay, featuring SMP series (like Ratha Boomi), survival challenges, and collaborative videos with other popular creators.", url: "https://www.youtube.com/channel/UCbZivhNw8gg55CajwyocnQg" },
    { name: "CBE Ghoul", channelId: "UC6OWv9q6o_3G0J9tW9I-pKQ", icon: "gamepad-2", logo: "assets/members_logo/CBE_logo.jpg", bio: "This channel focuses on immersive Minecraft content, specifically 100-day hardcore challenges, survival series, and unique modded gameplay like Pixelmon in Tamil.", url: "https://www.youtube.com/channel/UC6OWv9q6o_3G0J9tW9I-pKQ" },
    { name: "jackoverheaven", channelId: "UCkliakuMYSam-X-pSJjxvXQ", icon: "hourglass", logo: "assets/members_logo/Jack_logo.jpg", bio: "Expect a variety of gaming content ranging from Minecraft survival builds to chaotic and funny multiplayer sessions in games like Human Fall Flat.", url: "https://www.youtube.com/channel/UCkliakuMYSam-X-pSJjxvXQ" },
    { name: "MrExpandables Gaming", channelId: "UC1F23cbyMLr9zu8ZRIIx7dg", icon: "skull", logo: "assets/members_logo/Expandables_logo.jpg", svg: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><path d="M8 20v2h8v-2"/><path d="m12.5 17-.5-1-.5 1h1z"/><path d="M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20"/></svg>`, bio: "Known for technical and creative Minecraft series, you can expect long-running \"One Block\" survival playthroughs and detailed exploration of new game updates.", url: "https://www.youtube.com/channel/UC1F23cbyMLr9zu8ZRIIx7dg" },
    { name: "Radical Magic Tamil", channelId: "UCG5S_wTlaj_QJnQ3zp4epNg", icon: "wand", logo: "assets/members_logo/RadicalMagic Tamil_logo.jpg", svg: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20l9-9"/><path d="M3 21l3-3"/><path d="M16 4l1 3 3 1-3 1-1 3-1-3-3-1 3-1z"/><path d="M21 4l.5 1 1 .5-1 .5-.5 1-.5-1-1-.5 1-.5z"/><path d="M10 5l.5 1 1 .5-1 .5-.5 1-.5-1-1-.5 1-.5z"/></svg>`, bio: "Hello Magician's! I am just making a Minecraft video in my channel but in my future i will try more and more games.. now i will play Minecraft only so i give my best in my channel", url: "https://www.youtube.com/channel/UCG5S_wTlaj_QJnQ3zp4epNg" },
    { name: "Spaceman", channelId: "UCWUmk0n4YXswrKiBf4MAyaQ", icon: "circle", logo: "assets/members_logo/Spaceman_logo.jpg", svg: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6c-3 0-6 2.5-6 6s3 6 6 6 6-2.5 6-6-3-6-6-6z" /><path d="M12 9v6" /></svg>`, bio: "A skilled gamer specializing in Minecraft speedrunning and technical tutorials, often sharing impressive gameplay feats he is personally proud of.", url: "https://www.youtube.com/channel/UCWUmk0n4YXswrKiBf4MAyaQ" },
    { name: "SZE tamil gaming", channelId: "UCwb6oIKtJnBZYP60BLjJxHA", icon: "joystick", logo: "assets/members_logo/SZE_logo.jpg", bio: "A hub for Tamil gaming community events, where you can watch epic Minecraft tournaments, collaborative mini-games, and diverse gameplay videos.", url: "https://www.youtube.com/channel/UCwb6oIKtJnBZYP60BLjJxHA" },
    { name: "Vaathiyar", channelId: "UCqh6fSORufPoqk1zTmtpqsw", icon: "sword", logo: "assets/members_logo/Vaathiyar_logo.jpg", bio: "A member of the Tamil gaming circle, you can expect to see him participating in large-scale Minecraft collaborations and competitive gaming tournaments.", url: "https://www.youtube.com/channel/UCqh6fSORufPoqk1zTmtpqsw" }
];
const TRANSLATIONS = {
    en: {
        "nav.home": "HOME",
        "nav.members": "MEMBERS",
        "nav.videos": "VIDEOS",
        "nav.smp": "SMP",
        "nav.store": "STORE",
        "hero.title": "TAMILCRAFT",
        "hero.def": '"A legendary survival alliance where the finest Tamil content creators unite to build, conquer, and create history in the world of Minecraft."',
        "hero.sub": "The Ultimate Tamil Minecraft Survival Experience.",
        "hero.explore": "Explore",
        "hero.build": "Build",
        "hero.survive": "Survive",
        "hero.conquer": "Conquer",
        "about.title": "About the Server",
        "about.p1": "Tamilcraft is a Minecraft SMP that brings together some of the biggest content creators in the Tamil Minecraft community to create scripted content that enhances storytelling.",
        "about.mode": "storytelling",
        "about.modeSub": "What's Unique",
        "about.status": "Checkout",
        "about.season": '"videos page"',
        "smp.title": "TAMILCRAFT COBBLEVERSE",
        "smp.subtitle": "THE ULTIMATE COBBLEMON EXPERIENCE",
        "smp.server_status": "SERVER IP",
        "smp.modpack": "MODPACK",
        "smp.download": "DOWNLOAD MODPACK",
        "smp.rules_title": "SERVER RULES",
        "smp.about_title": "WHAT IS COBBLEVERSE?",
        "smp.about_feat1_t": "Friendly Interactive Members",
        "smp.about_feat1_d": "Join a welcoming community of like-minded players and creators, fostering a friendly and interactive environment for everyone.",
        "smp.about_feat2_t": "Build Your Legacy",
        "smp.about_feat2_d": "Establish your own base, create gyms, or build towns. The world is yours to shape alongside your team.",
        "smp.about_feat3_t": "Competitive Battling",
        "smp.about_feat3_d": "Challenge other players to epic Pokémon battles, participate in tournaments, and become the ultimate champion.",
        "smp.gallery_title": "SERVER SHOWCASE",
        "smp.rule1_t": "No Griefing",
        "smp.rule1_d": "Respect other players' builds and property.",
        "smp.rule2_t": "No Cheating",
        "smp.rule2_d": "Use of hacks, exploits, or x-ray is strictly forbidden.",
        "smp.rule3_t": "Be Respectful",
        "smp.rule3_d": "Maintain a friendly environment for everyone.",
        "smp.rule4_t": "Have Fun!",
        "smp.rule4_d": "Explore, battle, and catch 'em all!",
        "store.title": "OFFICIAL STORE",
        "store.coming": "COMING SOON",
        "store.desc": "Get ready for exclusive Tamilcraft merchandise and in-game cosmetics.",
        "members.title": "THE OGs",
        "members.sub": "The legends behind the SMP.",
        "members.yt": "YOUTUBE",
        "videos.title": "LATEST DROPS",
        "videos.sub": "Catch the latest adventures from the crew."
    },
    ta: {
        "nav.home": "முகப்பு",
        "nav.members": "உறுப்பினர்கள்",
        "nav.videos": "வீடியோக்கள்",
        "nav.smp": "எஸ்.எம்.பி",
        "nav.store": "கடை",
        "hero.title": "தமிழ் கிராஃப்ட்",
        "hero.def": '"மிகச்சிறந்த தமிழ் உள்ளடக்க படைப்பாளர்கள் ஒன்றிணைந்து, மைன்கிராஃப்ட் உலகில் புதிய சரித்திரத்தை உருவாக்கும் ஒரு புகழ்பெற்ற உயிர்வாழும் கூட்டணி."',
        "hero.sub": "இறுதி தமிழ் மைன்கிராஃப்ட் உயிர்வாழும் அனுபவம்.",
        "hero.explore": "ஆராய்",
        "hero.build": "உருவாக்கு",
        "hero.survive": "பிழைத்திரு",
        "hero.conquer": "வெற்றி கொள்",
        "about.title": "சர்வர் பற்றி",
        "about.p1": "தமிழ் கிராஃப்ட் என்பது மைன்கிராஃப்ட் எஸ்.எம்.பி ஆகும், இது தமிழ் மைன்கிராஃப்ட் சமூகத்தின் சில மிகப்பெரிய படைப்பாளர்களை ஒன்றிணைத்து கதை சொல்லுதலை மேம்படுத்தும் ஸ்கிரிப்ட் உள்ளடக்கத்தை உருவாக்குகிறது.",
        "about.mode": "கதைசொல்லல்",
        "about.modeSub": "தனித்துவம்",
        "about.status": "பாருங்கள்",
        "about.season": "வீடியோக்கள் பக்கம்",
        "smp.title": "தமிழ் கிராஃப்ட் காப்லெவர்ஸ்",
        "smp.subtitle": "இறுதி காப்லெமான் அனுபவம்",
        "smp.server_status": "சர்வர் ஐபி",
        "smp.modpack": "மாட்பேக்",
        "smp.download": "மாட்பேக்கை பதிவிறக்கு",
        "smp.rules_title": "சர்வர் விதிகள்",
        "smp.about_title": "காப்லெவர்ஸ் என்றால் என்ன?",
        "smp.about_feat1_t": "நட்பான உறுப்பினர்கள்",
        "smp.about_feat1_d": "ஒத்த கருத்துடைய வீரர்கள் மற்றும் படைப்பாளர்களின் வரவேற்கும் சமூகத்தில் சேருங்கள், அனைவருக்கும் நட்பான சூழலை உருவாக்குங்கள்.",
        "smp.about_feat2_t": "உங்கள் சாம்ராஜ்யத்தை உருவாக்குங்கள்",
        "smp.about_feat2_d": "சொந்தத் தளத்தை அமையுங்கள், ஜிம்களை அல்லது நகரங்களை உருவாக்குங்கள். இந்த உலகம் உங்களுடையது.",
        "smp.about_feat3_t": "போட்டி நிறைந்த போர்கள்",
        "smp.about_feat3_d": "மற்ற வீரர்களுக்கு சவால் விடுங்கள், போட்டிகளில் பங்கேற்று இறுதி சாம்பியனாகி சாதனை புரியுங்கள்.",
        "smp.gallery_title": "சர்வர் காட்சிகள்",
        "smp.rule1_t": "தாக்குதல் வேண்டாம்",
        "smp.rule1_d": "பிற வீரர்களின் கட்டிடங்களை மதியுங்கள்.",
        "smp.rule2_t": "ஏமாற்ற வேண்டாம்",
        "smp.rule2_d": "ஹேக்ஸ் அல்லது எக்ஸ்ரே பயன்படுத்த தடை விதிக்கப்பட்டுள்ளது.",
        "smp.rule3_t": "மரியாதையுடன் இருங்கள்",
        "smp.rule3_d": "அனைவருக்கும் நட்பு ரீதியான சூழலைப் பேணுங்கள்.",
        "smp.rule4_t": "மகிழுங்கள்!",
        "smp.rule4_d": "ஆராயுங்கள், போரிடுங்கள், அனைத்தையும் பிடியுங்கள்!",
        "store.title": "அதிகாரப்பூர்வ கடை",
        "store.coming": "விரைவில்",
        "store.desc": "பிரத்யேக தமிழ் கிராஃப்ட் பொருட்கள் மற்றும் விளையாட்டு அழகுசாதனப் பொருட்களுக்கு தயாராகுங்கள்.",
        "members.title": "நிர்வாகிகள்",
        "members.sub": "எஸ்.எம்.பி-யின் பின்னால் உள்ள ஜாம்பவான்கள்.",
        "members.yt": "யூடியூப்",
        "videos.title": "சமீபத்திய வீடியோக்கள்",
        "videos.sub": "எங்கள் குழுவினரின் சமீபத்திய சாகசங்களைப் பாருங்கள்."
    }
};
const YOUTUBE_API_KEY = "AIzaSyByYi-CHoggzRVV5Bo0D752p00v1t09qNk";
const CREATORS = [
    { name: "Bals", channelId: "UCbZivhNw8gg55CajwyocnQg", langName: { en: "Bals", ta: "பால்ஸ்" } },
    { name: "CBE Ghoul", channelId: "UC6OWv9q6o_3G0J9tW9I-pKQ", langName: { en: "CBE Ghoul", ta: "சிபிஇ கூல்" } },
    { name: "jackoverheaven", channelId: "UCkliakuMYSam-X-pSJjxvXQ", langName: { en: "jackoverheaven", ta: "ஜாக் ஓவர்ஹெவன்" } },
    { name: "MrExpandables Gaming", channelId: "UC1F23cbyMLr9zu8ZRIIx7dg", langName: { en: "MrExpandables Gaming", ta: "மிஸ்டர் எக்ஸ்பாண்டபிள்ஸ்" } },
    { name: "Radical", channelId: "UCG5S_wTlaj_QJnQ3zp4epNg", langName: { en: "Radical", ta: "ரேடிகல்" } },
    { name: "Spaceman", channelId: "UCWUmk0n4YXswrKiBf4MAyaQ", langName: { en: "Spaceman", ta: "ஸ்பேஸ்மேன்" } },
    { name: "SZE tamil gaming", channelId: "UCwb6oIKtJnBZYP60BLjJxHA", langName: { en: "SZE tamil gaming", ta: "SZE தமிழ் கேமிங்" } },
    { name: "Vaathiyar", channelId: "UCqh6fSORufPoqk1zTmtpqsw", langName: { en: "Vaathiyar", ta: "வாத்தியார்" } }
];
const FALLBACK_VIDEOS = [
    { title: "New Legendaries, New Starter, New Region | TamilCraft: Cobblemon Ep 09", author: "Bals", views: "Recent", url: "https://www.youtube.com/watch?v=qX3XvS-Xj9Y", thumb: "https://img.youtube.com/vi/qX3XvS-Xj9Y/maxresdefault.jpg" },
    { title: "Tamilcraft Episode - 9 | Friend or Foe | CBE_Ghoul[Tamil]", author: "CBE Ghoul", views: "Recent", url: "https://www.youtube.com/watch?v=wX-yX-zX-01", thumb: "https://i.ytimg.com/vi/8U-N7fN09o0/maxresdefault.jpg" },
    { title: "The Johto Journeys Begin | Cobblemon Episode 1", author: "jackoverheaven", views: "Recent", url: "https://www.youtube.com/watch?v=pX-yX-zX-02", thumb: "https://i.ytimg.com/vi/pX-yX-zX-02/maxresdefault.jpg" },
    { title: "I Survived 90 Days in Cobblemon 🔥Completed Every Battle | Tamilcraft", author: "MrExpandables Gaming", views: "Recent", url: "https://www.youtube.com/watch?v=Xw-Y-v-00-Z2", thumb: "https://i.ytimg.com/vi/Yw-X-v-00-Z1/maxresdefault.jpg" },
    { title: "This Pokémon God Statue Looks INSANE in Minecraft! 🔥", author: "Radical Magic Tamil", views: "Recent", url: "https://www.youtube.com/watch?v=Zw-Y-v-00-Z3", thumb: "https://i.ytimg.com/vi/Zw-Y-v-00-Z3/maxresdefault.jpg" },
    { title: "How to Speedrun Minecraft: Nether Fortress", author: "Spaceman", views: "Recent", url: "https://www.youtube.com/watch?v=Aw-Y-v-00-Z4", thumb: "https://i.ytimg.com/vi/Aw-Y-v-00-Z4/maxresdefault.jpg" },
    { title: "We Got Chained Together in Minecraft... ANY EVERYTHING WENT WRONG", author: "SZE tamil gaming", views: "Recent", url: "https://www.youtube.com/watch?v=Bw-Y-v-00-Z5", thumb: "https://i.ytimg.com/vi/Bw-Y-v-00-Z5/maxresdefault.jpg" },
    { title: "Mythical Mew Caught !! | Tamilcraft Cobblemon | Epi 3", author: "Vaathiyar", views: "Recent", url: "https://www.youtube.com/watch?v=Cw-Y-v-00-Z6", thumb: "https://i.ytimg.com/vi/Cw-Y-v-00-Z6/maxresdefault.jpg" }
];
let fetchedVideosData = [];
let currentLang = localStorage.getItem('lang') || 'en';
function updateLanguage() {
    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        if (TRANSLATIONS[currentLang][key]) {
            el.textContent = TRANSLATIONS[currentLang][key];
        }
    });
    const langLabel = document.getElementById('lang-label');
    if (langLabel) langLabel.textContent = currentLang.toUpperCase();
    localStorage.setItem('lang', currentLang);
    if (document.getElementById('members-grid')) {
        renderMembers();
    }
    if (document.getElementById('videos-grid')) {
        renderVideos();
    }
}
const cursorDot = document.getElementById('cursor-dot');
const cursorOutline = document.getElementById('cursor-outline');
window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    if (cursorDot) {
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
    }
    if (cursorOutline) {
        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;
    }
});
function updateHoverDetection() {
    document.querySelectorAll('a, button, .interactable').forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('is-hovering'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('is-hovering'));
    });
}
function renderMembers() {
    const membersGrid = document.getElementById('members-grid');
    if (!membersGrid) return;
    membersGrid.innerHTML = '';
    MEMBERS_DATA.forEach(m => {
        const card = document.createElement('div');
        card.className = 'member-row-card glass-card fade-in-section interactable cursor-pointer group relative overflow-hidden';
        card.onclick = () => window.open(m.url, '_blank');
        card.innerHTML = `
            <div class="card-content-wrapper flex items-center h-full w-full px-8">
                <!-- Image Side -->
                <div class="member-img-container transition-all duration-500 ease-in-out flex flex-col items-center">
                    <div class="relative group/logo">
                        <div class="w-28 h-28 md:w-32 md:h-32 rounded-lg overflow-hidden border-2 border-amber-500/20 group-hover:border-amber-400 group-hover:grayscale-0 grayscale transition-all duration-500 bg-black/20">
                            ${m.logo ? `<img src="${m.logo}" class="w-full h-full object-cover" alt="${m.name}">` : `<span class="pixel-font text-2xl text-white absolute inset-0 flex items-center justify-center">${m.name[0]}</span>`}
                        </div>
                        <div class="member-badge">
                            ${m.svg ? m.svg : `<i data-lucide="${m.icon || 'crown'}" class="w-full h-full ${m.icon === 'atom' ? 'stroke-current fill-none' : 'fill-current'}"></i>`}
                        </div>
                    </div>
                    <span class="pixel-font mt-2 text-amber-200/80 tracking-widest text-lg group-hover:opacity-0 transition-opacity duration-300 text-center">${m.name}</span>
                </div>
                <!-- Info Side (Hidden/Revealed) -->
                <div class="member-info-container opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out pl-[130px] md:pl-[140px] flex-1 py-4 w-full h-full flex flex-col justify-center">
                    <div class="flex flex-row items-start justify-between w-full mb-1 lg:mb-2 gap-2">
                        <div class="flex-1 w-full">
                            <h3 class="text-2xl md:text-3xl font-bold pixel-font text-amber-400 leading-tight">${m.name}</h3>
                            <div class="h-px bg-amber-500/20 w-16 mt-1 mb-2"></div>
                        </div>
                        <a href="${m.url}" target="_blank" class="flex-shrink-0 flex flex-col items-center justify-center gap-1 text-red-500 hover:text-white transition-all pixel-font interactable hover:scale-110 p-1 group">
                            <i data-lucide="youtube" class="w-6 h-6 md:w-8 md:h-8 group-hover:drop-shadow-[0_0_8px_rgba(255,0,0,0.8)] transition-all"></i>
                            <span class="text-[10px] md:text-[12px] leading-none tracking-wider" data-t="members.yt">${currentLang === 'ta' ? 'யூடியூப்' : 'YOUTUBE'}</span>
                        </a>
                    </div>
                    <p class="text-xs md:text-sm lg:text-base leading-relaxed text-amber-100/80 italic line-clamp-3 md:line-clamp-4 pr-1 md:pr-4">
                        "${m.bio}"
                    </p>
                </div>
            </div>
        `;
        membersGrid.appendChild(card);
    });
    if (window.lucide) {
        lucide.createIcons();
    }
    if (typeof initScrollAnimations === 'function') initScrollAnimations();
}
function renderVideos(dynamicData = null) {
    const videosGrid = document.getElementById('videos-grid');
    if (!videosGrid) return;
    const dataToRender = dynamicData || fetchedVideosData;
    const finalData = dataToRender.length > 0 ? dataToRender : FALLBACK_VIDEOS;
    videosGrid.innerHTML = '';
    finalData.forEach((v, index) => {
        const card = document.createElement('div');
        card.className = 'glass-card rounded-xl fade-in-section interactable group overflow-hidden cursor-pointer border border-white/5 hover:border-amber-400/50 shadow-2xl';
        card.onclick = () => window.open(v.url, '_blank');
        card.style.transitionDelay = `${index * 50}ms`;
        card.innerHTML = `
            <div class="relative aspect-video w-full overflow-hidden">
                <img src="${v.thumb}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out" alt="${v.title}">
                <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                    <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.5)] transform scale-50 group-hover:scale-100 transition-transform duration-500">
                        <i data-lucide="play" class="fill-white text-white ml-1 w-8 h-8"></i>
                    </div>
                </div>
                <div class="absolute top-2 left-2 bg-black/80 px-2 py-1 rounded text-[10px] pixel-font text-amber-400 border border-amber-500/30">
                    LIVE UPDATE
                </div>
            </div>
            <div class="p-5 bg-gradient-to-b from-transparent to-black/40">
                <h3 class="text-lg font-semibold leading-tight mb-3 group-hover:text-amber-400 transition-colors line-clamp-2 h-14" style="color: var(--text-main)">${v.title}</h3>
                <div class="flex justify-between items-center text-sm" style="color: var(--text-muted)">
                    <span class="flex items-center gap-2 font-medium">
                        <div class="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/30">
                            <i data-lucide="user" class="w-3.5 h-3.5 text-amber-500"></i>
                        </div>
                        ${v.author}
                    </span>
                    <span class="bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 text-[10px] font-bold uppercase tracking-tighter shadow-sm text-amber-400 animate-pulse">
                        NEW DROPS
                    </span>
                </div>
            </div>
        `;
        videosGrid.appendChild(card);
    });
    if (window.lucide) {
        lucide.createIcons();
    }
    if (typeof initScrollAnimations === 'function') initScrollAnimations();
}
async function fetchLatestVideos() {
    console.log("YouTube: Init sync...");
    const videosGrid = document.getElementById('videos-grid');
    if (!videosGrid) return;

    if (!YOUTUBE_API_KEY) {
        console.warn("YouTube: No API key provided. Using fallback videos.");
        renderVideos(FALLBACK_VIDEOS);
        initScrollAnimations();
        return;
    }

    videosGrid.innerHTML = `
        <div class="col-span-full flex flex-col items-center justify-center py-20">
            <div class="w-16 h-16 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin mb-4 shadow-[0_0_20px_rgba(242,192,68,0.2)]"></div>
            <p class="pixel-font text-2xl text-amber-500 animate-pulse">Syncing with YouTube...</p>
        </div>
    `;
    try {
        console.log("YouTube: Fetching from API using key starting with:", YOUTUBE_API_KEY.substring(0, 5));
        const fetchPromises = CREATORS.map(async (creator) => {
            try {
                const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${creator.channelId}&part=snippet,id&order=date&maxResults=1`;
                const res = await fetch(url);
                const data = await res.json();
                if (!res.ok) {
                    console.error(`YouTube: API Error for ${creator.name}:`, data.error?.message || res.statusText);
                    return null;
                }
                if (data.items && data.items.length > 0) {
                    const video = data.items[0];
                    console.log(`YouTube: Found latest video for ${creator.name}:`, video.snippet.title);
                    return {
                        title: video.snippet.title,
                        thumb: video.snippet.thumbnails.high ? video.snippet.thumbnails.high.url : video.snippet.thumbnails.default.url,
                        url: `https://www.youtube.com/watch?v=${video.id.videoId}`,
                        author: currentLang === 'ta' ? creator.langName.ta : creator.langName.en,
                        views: "Recent"
                    };
                }
                console.warn(`YouTube: No videos returned for ${creator.name}`);
                return null;
            } catch (err) {
                console.error(`YouTube: Fetch failed for ${creator.name}:`, err);
                return null;
            }
        });
        const results = await Promise.all(fetchPromises);
        fetchedVideosData = results.filter(v => v !== null);
        console.log(`YouTube: Successfully fetched ${fetchedVideosData.length} videos.`);
        if (fetchedVideosData.length > 0) {
            renderVideos(fetchedVideosData);
        } else {
            console.warn("YouTube: No dynamic videos available. Using fallback.");
            renderVideos(FALLBACK_VIDEOS);
        }
    } catch (error) {
        console.error("YouTube: Global sync error:", error);
        renderVideos(FALLBACK_VIDEOS);
    }
    initScrollAnimations();
}
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    const particleCount = 40;
    for (let i = 0; i < particleCount; i++) {
        const p = document.createElement('div');
        p.classList.add('dust-particle');
        const size = Math.random() * 3 + 1; 
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.left = Math.random() * 100 + '%';
        p.style.top = Math.random() * 100 + '%';
        p.style.animationDuration = (Math.random() * 20 + 10) + 's';
        p.style.animationDelay = (Math.random() * 10) + 's';
        particlesContainer.appendChild(p);
    }
}
function initTheme() {
    const themeBtn = document.getElementById('theme-btn');
    if (!themeBtn) return;
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
        document.querySelector('.dark-icon')?.classList.add('hidden');
        document.querySelector('.light-icon')?.classList.remove('hidden');
    }
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        document.querySelector('.dark-icon')?.classList.toggle('hidden', isLight);
        document.querySelector('.light-icon')?.classList.toggle('hidden', !isLight);
    });
}
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));
}
window.addEventListener('load', () => {
    if (window.lucide) {
        lucide.createIcons();
    }
    const intro = document.getElementById('intro-overlay');
    if (intro) {
        setTimeout(() => {
            const progress = document.getElementById('progress');
            if (progress) progress.style.width = "100%";
            setTimeout(() => {
                intro.style.opacity = '0';
                intro.style.pointerEvents = 'none';
                initPageContent();
            }, 500);
        }, 1000);
    } else {
        initPageContent();
    }
});
function initPageContent() {
    updateLanguage();
    initMobileMenu();

    if (document.getElementById('videos-grid')) {
        fetchLatestVideos();
    }
    updateHoverDetection();
    initParticles();
    initTheme();
    if (document.getElementById('smp-hero')) {
        initSmpSlideshow();
    }
    initScrollAnimations();
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) {
        langBtn.onclick = () => {
            currentLang = currentLang === 'en' ? 'ta' : 'en';
            updateLanguage();
            // grid rendering inside updateLanguage will trigger its own initScrollAnimations
        };
    }
}
function copyIP() {
    const ip = "smp.tamilcraft.in";
    navigator.clipboard.writeText(ip).then(() => {
        const btn = document.querySelector('[onclick="copyIP()"]');
        const icon = btn.querySelector('i');
        const originalIcon = icon.getAttribute('data-lucide');
        icon.setAttribute('data-lucide', 'check');
        icon.classList.add('text-green-500');
        if (window.lucide) lucide.createIcons();
        setTimeout(() => {
            icon.setAttribute('data-lucide', originalIcon);
            icon.classList.remove('text-green-500');
            if (window.lucide) lucide.createIcons();
        }, 2000);
    });
}
function initSmpSlideshow() {
    const container = document.getElementById('slideshow-container');
    if (!container) return;
    const images = [
        'assets/TC/img1.png', 'assets/TC/img2.png', 'assets/TC/img3.png', 'assets/TC/img4.png',
        'assets/TC/img5.png', 'assets/TC/img6.png', 'assets/TC/img7.png', 'assets/TC/img8.png'
    ];
    let shufflePool = [];
    function fillPool() {
        shufflePool = [...images].sort(() => Math.random() - 0.5);
        const lastSrc = container.children[1]?.style.backgroundImage.replace('url("', '').replace('")', '');
        if (lastSrc === shufflePool[0]) {
            shufflePool.push(shufflePool.shift());
        }
    }
    fillPool();
    function createSlide(src) {
        const slide = document.createElement('div');
        slide.style.backgroundImage = `url('${src}')`;
        slide.className = 'absolute inset-0 bg-cover bg-center transition-opacity duration-1000 opacity-0';
        return slide;
    }
    const slide1 = createSlide(shufflePool[0]);
    const slide2 = createSlide(shufflePool[1]);
    container.appendChild(slide1);
    container.appendChild(slide2);
    slide1.style.opacity = '1';
    let currentPoolIndex = 0;
    setInterval(() => {
        currentPoolIndex++;
        if (currentPoolIndex >= shufflePool.length) {
            fillPool();
            currentPoolIndex = 0;
        }
        const nextSrc = shufflePool[currentPoolIndex];
        const currentVisibleSlide = container.children[0];
        const nextPreppedSlide = container.children[1];
        currentVisibleSlide.style.opacity = '0';
        nextPreppedSlide.style.opacity = '1';
        setTimeout(() => {
            container.removeChild(currentVisibleSlide);
            let futureIndex = (currentPoolIndex + 1) % shufflePool.length;
            const newPreppedSlide = createSlide(shufflePool[futureIndex]);
            container.appendChild(newPreppedSlide);
        }, 1000);
    }, 5000);
}

function initMobileMenu() {
    const openBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (!openBtn || !menu) return;

    openBtn.onclick = () => {
        menu.classList.remove('translate-x-full');
    };

    if (closeBtn) {
        closeBtn.onclick = () => {
            menu.classList.add('translate-x-full');
        };
    }

    // Close on link click
    const links = menu.querySelectorAll('a');
    links.forEach(link => {
        link.onclick = () => {
            menu.classList.add('translate-x-full');
        };
    });
}