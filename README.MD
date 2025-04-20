# CANS2025 Website

This is the website for the **CANS2025 (Cryptology and Network Security 2025)** conference, built with [Hugo](https://gohugo.io/).


## Website URLs

- **Production Site:**  
  [https://cy2sec.comm.eng.osaka-u.ac.jp/miyaji-lab/event/cans2025/](https://cy2sec.comm.eng.osaka-u.ac.jp/miyaji-lab/event/cans2025/)

- **Test Site (Cloudflare Pages):**  
  Automatically deployed from the `main` branch of this repository  
  [https://cans2025-website.pages.dev/](https://cans2025-website.pages.dev/)  


## Built With

- **Static Site Generator:** [Hugo](https://gohugo.io/) ` v0.145.0-extended`
- **Theme:** [Ananke](https://github.com/theNewDynamic/gohugo-theme-ananke)
- **Deployment:** Cloudflare Pages
- **Version Control:** Git + GitHub


## Local Development

To run the site locally for editing or testing:

```bash
git clone --recurse-submodules https://github.com/mimoex/CANS2025_Website.git
cd CANS2025_Website
hugo server --baseURL="http://localhost:1313"
```


## Content Structure

- `content/`: Markdown files for pages
- `static/images/`: Images and assets
- `themes/ananke/`: Git submodule for theme
- `layouts/`: Custom layout overrides


## Contact

For inquiries or contributions, please contact the organizing committee via email  


## License

### Theme License

This site uses the [Ananke theme](https://github.com/theNewDynamic/gohugo-theme-ananke) for Hugo.

The theme is licensed under the [MIT License](https://opensource.org/licenses/MIT).
