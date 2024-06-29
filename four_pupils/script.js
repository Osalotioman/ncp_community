const users = [
    { name: 'Emmanuel', handle: 'OsazuwaEmmanuel', rating: 466, uni: 'uniben', team: '#Terminal'},
    { name: 'Genesis', handle: 'daveshub', rating: 948, uni: 'uniben', team: '#Terminal'},
    { name: 'Minerva', handle: 'Minerva2005', rating: 867, uni: 'uniben', team: '#Terminal'},
    { name: 'Turing_apple', handle: 'Turing_apple', rating: 867 },
    { name: 'Python_tamer', handle: 'python_tamer', rating: 1052},
    { name: 'Cyberdude', handle: 'cyberdude', rating: 742 },
    { name: 'Otutochi', handle: 'Otuz', rating: 620},
    { name: 'Cryptickid91', handle: 'cryptickid91', rating: 884 },
    { name: 'Caleb', handle: 'Caleb_Osasere_Igiewe', rating: 336, uni: 'uniben'},
    { name: 'Deborah', handle: 'Bora_codes', rating: 357, uni: 'uniben'},
    { name: 'AyomideA-S', handle: 'AyomideA-S', rating: 605, uni: 'unilag'},
    { name: 'Elvis', handle: 'anivelvess', rating: 0, uni: 'uniben'},
    { name: 'Justin', handle: 'Lord_Tech', rating: 0, uni: 'uniben'},
    { name: 'Onyebuchi', handle: 'sillycon90', rating: 0, uni: 'uniben'},
    { name: 'John', handle: 'John_osking', rating: 0, uni: 'uniben'},
    { name: 'Sylvia', handle: 'Cee09', rating: 0, uni: 'uniben'},
    { name: 'Kindness', handle: 'nosakharekindness46', rating: 573, uni: "biu"},
    { name: 'Great', handle: 'GreatKenneth', rating: 0, uni: 'uniben'},
    { name: 'Daniel', handle: 'Kimdanzy29', rating: 0, uni: 'uniben'}
    // Hey there, you can add your data here
];
const pts = [
    {name: '<b style="color:#008000;">TechWiz</b>', handle: '0x000022', rating: 1187},
    {name: '<b style="color:#03A89E;">Eti-ini</b>', handle: 'randombernie', rating: 1375},
    {name: '<b style="color:#008000;">Dreadedhippy</b>', handle: 'dreadedhippy', rating:1310},
    {name: '<b style="color:#03A89E;">Ehijoe</b>', handle: 'ehijoe', rating: 1345}
]
async function populateTable() {
const tableBody = document.getElementById('ratingTableBody');
const sortedUsers = users.sort((a, b) => b.rating - a.rating);
let uid = 1;
sortedUsers.forEach(user => {
    const adjustedRating = 1200 - user.rating; // Calculate adjusted rating
    const profileLink = `https://codeforces.com/profile/${user.handle}`; // Codeforces profile link
    const row = `<tr><td>${uid}</td><td>${user.name}</td><td>${user.rating}</td><td>${adjustedRating}</td><td><a href="${profileLink}" target="_blank">Profile</a></td></tr>`;
    tableBody.insertAdjacentHTML('beforeend', row);
    ++uid;
});
const tableBody_pts = document.getElementById('ptsb');
const sortedUsers_pts = pts.sort((a, b) => b.rating - a.rating);
uid = 1;
sortedUsers_pts.forEach(pts => {
    const adjustedRating_pts = 1400 - pts.rating; // Calculate adjusted rating
    const profileLink_pts = `https://codeforces.com/profile/${pts.handle}`; // Codeforces profile link
    const row_pts = `<tr><td>${uid}</td><td>${pts.name}</td><td>${pts.rating}</td><td>${adjustedRating_pts}</td><td><a href="${profileLink_pts}" target="_blank">Profile</a></td></tr>`;
    tableBody_pts.insertAdjacentHTML('beforeend', row_pts);
    ++uid;
});
}
window.onload = populateTable;

const users_archive = [
    [
        { name: 'Emmanuel', handle: 'OsazuwaEmmanuel', rating: 629 },
        { name: 'Genesis', handle: 'daveshub', rating: 783 },
        { name: 'Minerva', handle: 'Minerva2005', rating: 932 },
        { name: 'Turing_apple', handle: 'Turing_apple', rating: 847 },
        { name: 'python_tamer', handle: 'python_tamer', rating: 1107 },
        { name: 'cyberdude', handle: 'cyberdude', rating: 742 },
        { name: 'cryptickid91', handle: 'cryptickid91', rating: 566 },
        {name: 'randombernie', handle: 'randombernie', rating: 1160},
        {name: '0x000022', handle: '0x000022', rating: 1107}
        // Hey there, you can add your data here
    ],
    [//30th April 2024
        { name: 'Emmanuel', handle: 'OsazuwaEmmanuel', rating: 541 },
        { name: 'Genesis', handle: 'daveshub', rating: 783 },
        { name: 'Minerva', handle: 'Minerva2005', rating: 932 },
        { name: 'Turing_apple', handle: 'Turing_apple', rating: 847 },
        { name: 'python_tamer', handle: 'python_tamer', rating: 1107 },
        { name: 'cyberdude', handle: 'cyberdude', rating: 742 },
        { name: 'cryptickid91', handle: 'cryptickid91', rating: 566 },
        {name: 'randombernie', handle: 'randombernie', rating: 1149},
        {name: 'dreadedhippy', handle: 'dreadedhippy', rating:1161},
        {name: '0x000022', handle: '0x000022', rating: 1107}
        // Hey there, you can add your data here
    ]
]
const pts_archive = [
    [
        {name: 'dreadedhippy', handle: 'dreadedhippy', rating:1256},
        {name: 'ehijoe', handle: 'ehijoe', rating: 1305}
    ],
    [//30th April 2024
        {name: 'ehijoe', handle: 'ehijoe', rating: 1332}
    ]
]