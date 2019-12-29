# Nextjs, Contentful blog

## Usage

### If you are deploying to `Now`

1- Install `Now cli`

```npm i -g now``` or ```yarn global add now```

2- Add the secrets to `Now`

```sh
now secrets add contentful_access__token <token>
now secrets add contentful_space_id <space id>
```

3- Create a `.env.build` file and put the secrets in there too for local testing

```sh
CONTENTFUL_SPACE_ID=<space id>
CONTENTFUL_ACCESS_TOKEN=<token>
```

4- Run `now dev`

### If you are NOT deploying to `Now`

1- Update `next.config.js` environment variables with your own `token` and `spaceId` and remove `now.json`

2- Run `yarn dev`
