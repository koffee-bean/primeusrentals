# Prime US Rentals

The website for Prime US Rentals, a small portfolio of single-family rental homes in
Washington, Idaho and Nevada.

Live at **[primeusrentals.com](https://primeusrentals.com)**.

Plain HTML, CSS and one JavaScript data file. No framework, no build step, no
dependencies to install. What is in this repository is exactly what the browser gets.

## How it is published

GitHub Pages serves this repository from the `main` branch, root folder. Any commit
that lands on `main` rebuilds the site, usually within a minute. There is nothing to
run and nothing to deploy.

`CNAME` tells GitHub which domain to serve. Leave it alone unless the domain changes.

If a change does not appear after a minute, the browser is holding the old copy of
`styles.css`. A hard refresh clears it.

## Files

| File | What it is |
|---|---|
| `index.html` | Home: hero, stats, open homes, how it works, why residents stay, where we are, FAQ |
| `listings.html` | Every home, filterable by state. Falls back to a waitlist prompt when empty |
| `about.html` | How the homes are managed, and the four promises |
| `contact.html` | Tour time picker, waitlist form, question form |
| `404.html` | Wrong-door page for bad URLs |
| `listings.js` | The homes themselves. The only file to touch when homes come and go |
| `styles.css` | All styling. Brand colors and fonts are the `:root` block at the top |
| `CNAME` | The custom domain |
| `robots.txt`, `sitemap.xml` | Search engine basics |
| `logo-mark.png`, `logo-mark-160.png` | Logo. The favicon is embedded in each page |
| `photos/` | Hero photos, and where photos of individual homes belong |

Every page carries its own copy of the header and footer, so a navigation change means
editing all five.

## Adding or removing a home

Open `listings.js` and edit the `window.LISTINGS` array. One object per home:

```js
window.LISTINGS = [
  { title: "3-bed on Blueberry St", city: "Meridian", state: "ID", beds: 3, baths: 2,
    sqft: 1450, rent: 2195, status: "available", available: "Now",
    photo: "photos/blueberry.jpg", apply: "https://...",
    blurb: "Corner lot, fenced yard, two-car garage." },
];
```

| Field | Required | Notes |
|---|---|---|
| `title` | yes | Short name, shown as the card heading |
| `city`, `state` | yes | State must be `WA`, `ID` or `NV`, which drives the filters |
| `beds`, `baths`, `rent` | yes | Numbers, not text. Rent is monthly |
| `sqft` | no | Left out, the card simply omits it |
| `status` | yes | `available`, `soon` or `leased`. Leased homes are hidden |
| `available` | no | Free text next to the status, such as `Now` or `Oct 1` |
| `photo` | no | Path to an image in this repository. Without one the card shows a house outline |
| `apply` | no | An application link. When set, an Apply button appears on the card |
| `blurb` | no | One sentence about the home |

The home page shows the first three homes, the Homes page shows all of them.
`listings.html#ID` opens pre-filtered to a state. An empty array is fine: both pages
then invite visitors to join the waitlist.

## Making other changes

- **Copy**: edit the relevant `.html` file directly.
- **Photos**: every image lives in this repository, so nothing depends on an outside
  host. The four hero photos are `photos/hero-home.jpg`, `hero-about.jpg`,
  `hero-contact.jpg` and `hero-homes.jpg`, each 1600px wide. To change one, replace
  the file, keeping the name, and update the `alt` text on that page to describe the
  new picture. Home photos go in the same folder and are referenced from `listings.js`.
- **Brand colors and spacing**: the `:root` block at the top of `styles.css`.
- **Rolling back**: every change is a commit. Open the file on GitHub, click History,
  and pick an earlier version.

## What the site talks to

| Service | What it does | Where it is configured |
|---|---|---|
| Cal.com | Tour times and booking | The event schedule in Cal.com, read live by `contact.html` |
| Formspree | Waitlist and question forms | The form endpoint in `contact.html` |
| Google Fonts | Sansita and Nunito Sans | A stylesheet link in each page |

The contact page asks Cal.com for open times, shows them as a scrolling row of
buttons, and opens the booking form in a popup when one is picked. Changing the
schedule in Cal.com changes what the site offers, with no edit here. If that request
fails, the page falls back to the standard embedded calendar.

Both forms post to the same Formspree endpoint and are told apart by a hidden `form`
field.

## Previewing locally

Open any `.html` file in a browser, or serve the folder so that paths behave exactly
as they do in production:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.
