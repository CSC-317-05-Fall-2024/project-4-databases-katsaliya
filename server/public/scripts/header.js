/* This file should contain any DOM manipulation
needed to populate the header, nav, and footer elements
*/

const header = document.querySelector('header');
header.innerHTML = `
    <div class = "banner">
        <img src="/images/banner.png" alt = "Thailand banner">
        <p>Thailand</p>
    </div>
`;

const nav = document.querySelector('nav');
nav.innerHTML = `
    <div class = "nav">
        <ul>
            <li><a href="/"><p>Home</p></a></li>
            <li><a href="/attractions"><p>Attractions</p></a></li>
            <li><a href="/restaurants"><p>Restaurants</p></a></li>
            <li><a href="/newrestaurants"><p>New Restaurants</p></a></li>
        </ul>
    </div>
`;

const footer = document.querySelector('footer');
footer.innerHTML = `
    <div class = "footer">
    <p>Sungkamee &copy; 2024</p> 
    </div>   
`;

