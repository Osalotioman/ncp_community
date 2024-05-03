const users = [
    { name: 'Emmanuel', handle: 'OsazuwaEmmanuel', rating: 758 },
    { name: 'Genesis', handle: 'daveshub', rating: 820 },
    { name: 'Minerva', handle: 'Minerva2005', rating: 932 },
    { name: 'Turing_apple', handle: 'Turing_apple', rating: 922 },
    { name: 'Python_tamer', handle: 'python_tamer', rating: 1060},
    { name: 'Cyberdude', handle: 'cyberdude', rating: 742 },
    { name: 'Otutochi', handle: 'Otuz', rating: 621},
    { name: 'Cryptickid91', handle: 'cryptickid91', rating: 789 }
    // Hey there, you can add your data here
];
const pts = [
    {name: 'TechWiz', handle: '0x000022', rating: 1107},
    {name: 'Eti-ini', handle: 'randombernie', rating: 1216},
    {name: 'Dreadedhippy', handle: 'dreadedhippy', rating:1224},
    {name: 'Ehijoe', handle: 'ehijoe', rating: 1384}
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