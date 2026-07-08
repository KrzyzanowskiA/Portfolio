/* ============================================================
   GIS PORTFOLIO TEMPLATE — CONFIG
   ============================================================

   This is the ONE file you need to edit to make the site yours.
   Every page on the site reads from here. Change something
   here, and it updates on the homepage, the projects page,
   the about page, and the contact page all at once.

   Rules of thumb:
   - Keep the quote marks around each value
   - Keep the commas at the end of each line
   - Don't delete the curly braces { } or square brackets [ ]

   ============================================================ */


const CONFIG = {

  // =========================================================
  // BASICS — name, contact, headshot
  // =========================================================

  name: "Anna Krzyzanowski",
  tagline: "Sophomore at the University of Richmond",
  location: "Yorktown, Virginia",

  email:    "anna.krzyzanowski@richmond.edu",
  github:   "https://github.com/KrzyzanowskiA",
  linkedin: "https://linkedin.com/in/anna-krzyzanowski",
  website:  "",   // leave as "" to hide

  headshot: "images/headshot.svg",


  // =========================================================
  // SHORT BIO — used on the homepage
  // 1-2 sentences. Keep it punchy.
  // =========================================================

  shortBio: `Sophomore at the University of Richmond studying Geography, Data Science, and Biology interested in ecology and using spatial
  and data to work on projects that actually matter.`,


  // =========================================================
  // LONG BIO — used on the About page
  // 3-6 paragraphs. Write like a human, not a resume.
  // To split into paragraphs, use \n\n between them.
  // =========================================================

  longBio: `I am a sophomore at the University of Richmond studying Geography, Data Science, and Biology. My goal is to use spatial data and analysis to answer the questions communities are asking.

In 2026, I was a Summer Research Fellow in the University of Richmond’s Spatial Analysis Lab, where I worked on a web application showcasing the changes along Second Street in Jackson Ward, Richmond, Virginia. The app will be featured at the Black History Museum & Culture Center of Virginia. Alongside this, we’re studying how land change use along the street has changed over time, tracking how parcel use changed over time, which we’re presenting as a poster at upcoming conferences. 


Outside of GIS, I dabble in photography (I have an unreasonable number of photos of the campus squirrels), watercolor, and writing short stories.

For the summer of 2027 I am looking for an internship in spatial analysis, cartography, or  planning.
`,


  // =========================================================
  // EDUCATION — used on the About page
  // Add or remove entries as needed.
  // =========================================================

  education: [
    {
      school: "University of Richmond",
      degree: "B.A., Geography",
      year:   "Expected May 2029",
   
    },
    // Add high school, study abroad, certificate programs, etc. here
    // {
    //   school: "...",
    //   degree: "...",
    //   year:   "...",
    //   note:   ""
    // },
  ],


  // =========================================================
  // EXPERIENCE — used on the About page
  // =========================================================

  experience: [
    {
      role:    "Undergraduate Research Fellow",
      org:     "Spatial Analysis Lab, University of Richmond",
      years:   "Summer 2026",
      blurb:   "Worked on change along Second Street Jackson Ward."
    },
    {
      role:    "Mosquito Control Intern",
      org:     "York County, Mosquito Control",
      years:   "Summer 2025",
      blurb:   "Trapped, tested, and identified 32 species of mosquito while also working on community outreach."
    },
  ],


  // =========================================================
  // SKILLS — used on the About page
  // Grouped by category. Be honest about what you actually know.
  // =========================================================

  skillGroups: [
    {
      label: "Desktop GIS",
      skills: ["ESRI Ecosystem ((ArcGIS Pro, AGOL, Instant Apps, Storymaps, Dashboards, Field Maps)", "Open Street Map"]
    },
    {
      label: "Office Suites",
      skills: ["Microsoft", "Google Suite"]
    },
    {
      /*label: "Web mapping",
      skills: ["Leaflet", "MapLibre GL JS", "Mapbox Studio"] */
    },
    {
      label: "Media Editing",
      skills: ["Adobe Suite"]
    },
  ],


  // =========================================================
  // PROJECTS — the most important section
  // =========================================================
  //
  // Each project has a "slug" (a short id used for the URL)
  // and a "detailPage" (the file that holds the case study).
  //
  // To add a project: copy a whole { ... } block, paste it
  // below, and edit the values.
  //
  // The "featured: true" flag means it shows on the homepage.
  // Mark 3 as featured. The rest show on the projects page only.
  //
  // =========================================================

  projects: [

    {
      slug:        "tree-equity",
      title:       "Second Street Through Time",
      year:        "2026",
      type:        "Community Mapping",
      thumbnail:   "JacksonWard-2.jpg",
      blurb:       `A web application showcasing the changing streetscape of Second Street within the Jackson Ward neighborhood,
      created with the Historic Jackson Ward Association.`,
     /* tags:        ["ArcGIS Pro", "Python", "MapLibre", "Community-Engaged"],*/
      detailPage:  "project-tree-equity.html",
      featured:    true,
    },

    {
      slug:        "acs-uncertainty",
      title:       "Hidden Uncertainty in ACS Health Data",
      year:        "2025",
      type:        "Spatial Statistics",
      thumbnail:   "images/projects/acs-uncertainty-thumb.svg",
      blurb:       `A simulation study showing how margins of error in
                    American Community Survey estimates propagate through
                    public-health risk models.`,
      tags:        ["R", "GLM", "Monte Carlo", "Research"],
      detailPage:  "project-acs-uncertainty.html",
      featured:    true,
    },

    {
      slug:        "kde-traffic",
      title:       "Where the Crashes Cluster",
      year:        "2024",
      type:        "Spatial Analysis",
      thumbnail:   "images/projects/kde-traffic-thumb.svg",
      blurb:       `A kernel density analysis of three years of
                    traffic-accident data in Gainesville, Florida, with
                    an interactive bandwidth control.`,
      tags:        ["QGIS", "Python", "Leaflet", "KDE"],
      detailPage:  "project-kde-traffic.html",
      featured:    true,
    },

    // Example of a non-featured project (will appear on /projects only):
    {
      slug:        "sanborn-mosaic",
      title:       "Stitching the Sanborn Atlases of Richmond",
      year:        "2023",
      type:        "Historical GIS",
      thumbnail:   "images/projects/sanborn-mosaic-thumb.svg",
      blurb:       `Georeferenced and mosaicked a set of 1905 Sanborn fire
                    insurance maps into a single cloud-optimized GeoTIFF
                    for use in archival research.`,
      tags:        ["ArcGIS Pro", "GDAL", "COG", "Archives"],
      detailPage:  "project-sanborn-mosaic.html",
      featured:    false,
    },

  ],


  // =========================================================
  // CONTACT PAGE — what to say on the contact page
  // =========================================================

  contactLead: `I am open to conversations about GIS, cartography,
                community-engaged research, and full-time roles
                starting summer 2026.`,


  // =========================================================
  // SITE — small details
  // =========================================================

  // Used in browser tab and site footer
  siteTitle: "Portfolio",

  // Year on the footer copyright; "auto" uses the current year
  footerYear: "auto",

};
