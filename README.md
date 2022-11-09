# e-library

## how to run
- clone this repo
- npm i
- npm run start

## how to use
- api http://localhost:3200
- /books
-- if get by subject use `?subject=love` in this case i just use 2 subject (love and Religious aspects)`
```
METHOD: GET
URL: http://localhost:3200/books
```
- /books/detail/:subject
-- to get detail subject by title use `?title=Wuthering Heights` for get more title you can read from response by subject
```
method: GET
URL: http://localhost:3200/books/detail/love?title=Wuthering Heights
```
- /bocking
-- to bocking books field the payload using `subject, title, name of bocker` for get more title you can read from response by subject
```
method: post
URL: http://localhost:3200/bocking

payload: {
    "subject": "love",
	"title": "Wuthering Heights",
	"name": "yayat"
}
```