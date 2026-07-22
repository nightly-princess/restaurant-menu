# restaurant-menu
Just a simple restaurant menu.

**Features that I need to add:**
- [x] Dark mode option to enable and disable.
- [x] Better support for screen readers and accesibility features.
- [x] Options for multiple languages.

- [ ] A dashboard so non-technical users can change the prices and details of the menu.
  - [ ] **Phase 1 — Local editing tool (no backend)**
    - [ ] Build `admin/index.html` — a separate page, not linked from the public menu
    - [ ] Load the current `menu.json` into an editable form (one section per dish: name, description, price, image URL, per-language fields)
    - [ ] "Download updated menu.json" button — exports the edited data as a file the person then manually replaces in `data/` and commits
    - [ ] Basic validation (price must be a number, required fields can't be empty) so a non-technical user can't accidentally corrupt the JSON structure
  - [ ] **Phase 2 — Personalization controls**
    - [ ] Accent color picker, font selector — writes directly into `config.css` values (or applies live via `style.setProperty` for preview, then exports)
    - [ ] Favicon upload/replace
    - [ ] Restaurant name + social links editing
  - [ ] **Phase 3 — Onboarding**
    - [ ] A first-run welcome screen explaining what the dashboard does and how to use it, in plain language
    - [ ] Maybe a short guided tour (which section does what) rather than a wall of text
  - [ ] **Phase 4 — Accessibility settings exposed to the user**
    - [ ] Let the restaurant owner choose default theme, whether images show by default, maybe font size scaling
  - [ ] **Phase 5 — Real backend (only if Phase 1-4 aren't enough)**
    - [ ] Node/Express server + small database (SQLite) so changes save live, no manual file download/commit needed
    - [ ] Basic login so only the restaurant owner can edit
       
**This project is a work-in-progress restaurant/café menu built to learn vanilla JavaScript.**
