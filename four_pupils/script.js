const users = [
    { name: 'Emmanuel', handle: 'OsazuwaEmmanuel', rating: 466, uni: 'uniben', team: '#Terminal'},
    { name: 'Minerva', handle: 'Minerva2005', rating: 867, uni: 'uniben', team: '#Terminal'},
    { name: 'Obinna', handle: 'Turing_apple', rating: 867 },
    { name: 'Anthony', handle: 'python_tamer', rating: 1052},
    { name: 'Cyberdude', handle: 'cyberdude', rating: 742 },
    { name: 'Otutochi', handle: 'Otuz', rating: 620},
    { name: 'Cryptickid91', handle: 'cryptickid91', rating: 884 },
    { name: 'Ola', handle: 'Anubis11111', rating: 0 },
    { name: 'Brainiac Prime', handle: 'iminaboroberts', rating: 0 },
    { name: 'Paul', handle: 'eroblaze', rating: 0 },
    { name: 'BrainiacPrimeChi', handle: 'iminaboroberts', rating: 0}
];

const pts = [
    {name: '<b style="color:#008000;">TechWiz</b>', handle: '0x000022', rating: 1187},
    {name: '<b style="color:#03A89E;">Eti-ini</b>', handle: 'randombernie', rating: 1375},
    {name: '<b style="color:#008000;">Dreadedhippy</b>', handle: 'dreadedhippy', rating: 1310},
    {name: '<b style="color:#03A89E;">Ehijoe</b>', handle: 'ehijoe', rating: 1345},
    { name: '<b style="color:#03A89E;">Genesis</b>', handle: 'daveshub', rating: 948, uni: 'uniben', team: '#Terminal'}
];

async function fetchRatings(handles) {
    const url = `https://codeforces.com/api/user.info?handles=${handles.join(';')}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.result;
}

async function updateUserRatings() {
    const userHandles = users.map(user => user.handle);
    const ptsHandles = pts.map(pt => pt.handle);

    const userRatings = await fetchRatings(userHandles);
    const ptsRatings = await fetchRatings(ptsHandles);

    userRatings.forEach(ratingInfo => {
        const user = users.find(u => u.handle === ratingInfo.handle);
        if (user) user.rating = ratingInfo.rating;
    });

    ptsRatings.forEach(ratingInfo => {
        const pt = pts.find(p => p.handle === ratingInfo.handle);
        if (pt) pt.rating = ratingInfo.rating;
    });
}

function populateTable() {
    const tableBody = document.getElementById('ratingTableBody');
    const sortedUsers = users.sort((a, b) => b.rating - a.rating);
    let uid = 1;
    sortedUsers.forEach(user => {
        const adjustedRating = 1200 - user.rating;
        const profileLink = `https://codeforces.com/profile/${user.handle}`;
        const row = `<tr><td>${uid}</td><td>${user.name}</td><td>${user.rating}</td><td>${adjustedRating}</td><td><a href="${profileLink}" target="_blank">Profile</a></td></tr>`;
        tableBody.insertAdjacentHTML('beforeend', row);
        ++uid;
    });

    const tableBody_pts = document.getElementById('ptsb');
    const sortedUsers_pts = pts.sort((a, b) => b.rating - a.rating);
    uid = 1;
    sortedUsers_pts.forEach(pt => {
        const adjustedRating_pts = 1400 - pt.rating;
        const profileLink_pts = `https://codeforces.com/profile/${pt.handle}`;
        const row_pts = `<tr><td>${uid}</td><td>${pt.name}</td><td>${pt.rating}</td><td>${adjustedRating_pts}</td><td><a href="${profileLink_pts}" target="_blank">Profile</a></td></tr>`;
        tableBody_pts.insertAdjacentHTML('beforeend', row_pts);
        ++uid;
    });
}

async function initialize() {
    await updateUserRatings();
    populateTable();
}

window.onload = initialize;
