/*
  Prime US Rentals listings.
  Add one object per home. Save the file and the site updates itself.

  Fields:
    title    Short name, e.g. "3-bed on Blueberry St"
    city     "Meridian"
    state    "ID", "WA" or "NV"
    beds     3
    baths    2
    sqft     1450          (optional)
    rent     2195          (monthly, number)
    status   "available" | "soon" | "leased"
    available "Oct 1"      (optional text shown with status)
    photo    "photos/blueberry.jpg"  (optional, upload the file to the repo)
    apply    "https://..."           (optional link to TurboTenant or your application form)
    blurb    One sentence about the home (optional)
*/
window.LISTINGS = [
  // Example (delete when you add real homes):
  // { title: "3-bed on Blueberry St", city: "Meridian", state: "ID", beds: 3, baths: 2, sqft: 1450, rent: 2195, status: "available", available: "Now", photo: "", apply: "", blurb: "Corner lot, fenced yard, two-car garage." },
];
