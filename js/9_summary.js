console.log('I am from 9_summary js file');

const blogs = document.getElementsByTagName('p');
// console.log(blogs);
for (const blog of blogs) {
    // console.log(blog);
    blog.style.backgroundColor = 'steelblue';
    blog.style.color = 'white';
}

const harum = document.getElementById('special-blog');
// harum.style.backgroundColor = 'lightblue';
// harum.innerText = 'New Harun'
harum.innerHTML = `
<h4>Special inner html</h4>
<div>
    <ul>
        <li>ami pari</li>
        <li>LOL inside li</li>
    </ul>
</div>
`;

const friends = document.getElementById('friends');
// console.log(friends.children);
const fifth = friends.children[4];
console.log(fifth);
friends.removeChild(fifth);
// friends.removeChild(friends.children[3])

// create element
const friend = document.createElement('li');
friend.innerText = 'Friend-11';
friends.appendChild(friend);