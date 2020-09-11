# A portfolio made with blaze fast technologies such as GatsbyJS, Strapi & GraphQL

## First stack : GatsbyJS
Unlike the SPAs that make API requests as you run the app, Gatsby does all the data fetching, including data sourcing from local files, during build time. All this data is then used to generate static HTML, JavaScript, and CSS files. This static rendering is what makes things work faster.
With that, we don't need to require a complex server setup with databases, maintenance, and don’t have any scaling issues.
Our data is fully secure. 
Gatsby only takes the required data to display from the source and the private or secured data is not even present in the final build. Which is the safest it can possibly get.
Rather than relying on servers to generate pages dynamically, pre-render all of them on build and use CDNs for a blazing fast and smooth experience for users all around the globe.
Gatsby does static rendering. Which makes content available as HTML, and search engine optimized, no long initial load time.

## Second stack : Strapi
Basically, it's called a headless CMS, to create as fast as possible an API.
Speaks SQL (MongoDB / NoSQL DBs are great with the right configuration, but out of the box Postgres is my all time favourite).
Set up in a minute, and allow to manage the content easily.

## Third : GraphQL
A query language like GraphQL on the server-side and client-side lets the client decide which data it needs by making a single request to the server. As example, network usage was reduced dramatically for Facebook's mobile applications as a result, because GraphQL made it more efficient with data transfers.
In my opinion, it's really faster and less consuming than a classic REST API.

And all based on ReactJS, used with ESLint, Prettier, WebPack...

## Portfolio
Features :
- Home page
- Project page
- Contact page (with formspree.io)
- Blog (auto-generated with MDX from Srapi)
- 404

All datas are from Strapi API & made by GraphQL requests.
Images are hosted on Cloudinary automatically.

