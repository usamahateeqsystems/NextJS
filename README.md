git clone https://github.com/usamahateeqsystems/NextJS.git

cd NextJS

git checkout NextJS-Assignment-2

npm install

create a ".env"

copy paste the following database url

DATABASE_URL="postgresql://postgres:ffNUwsvdgWkPgQEU@db.fcjztjggxmyqhjbwwamx.supabase.co:5432/postgres"

npm run dev

open http://localhost:3000/

Assignment Items: 
1 Basic React
    Three pages members, Issued, books all sharing menu
2 Styling and Layout
    TailwindCSS being used. 
    Members/ Issued/ Books all have individual layouts
3 App routing and navigation
    Basic routing with About 
    Dynamic Routing with books/[id] .. Go to books from table click on View. it will
    take to book detail page
4 Fetching Data from Server
    Issued / books pages use prisma to load data from supabase.
    Members API also using prisma to load data from supabase 
5 Build API Routes
    Members page calls the members API loading from prisma on supabase
6 Deployment on vercel
    https://next-js-training-22087-e155qa816-usamah-ateeqs-projects.vercel.app/