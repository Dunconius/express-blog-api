# express-blog-api

## To start mongo!

run these commands in the terminal:

1. sudo systemctl status mongod
2. sudo systemctl start mongod
3. sudo systemctl status mongod

## Data to track?

### Blog

- Title
- Content
- User (posted by)
- Created Date
- Likes
- Image upload
- Category / tags / keywords
- Audit history
  - user
  - timestamp

### Users

- username
- blog post view history

### Comments

Join table in SQL, but subdocument in Mongoos that lives in Blog Posts

- user id
- comment
- like

### Action Log

- user id
- route visited
- timestampt
- result