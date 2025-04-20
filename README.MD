# CANS2025 Website

This is the website for the **CANS2025 (Cryptology and Network Security 2025)** conference, built with [Hugo](https://gohugo.io/).


## Website URLs

- **Production Site:**  
  [https://cy2sec.comm.eng.osaka-u.ac.jp/miyaji-lab/event/cans2025/](https://cy2sec.comm.eng.osaka-u.ac.jp/miyaji-lab/event/cans2025/)

- **Test Site (Cloudflare Pages):**  
  Automatically deployed from the `main` branch of this repository  
  [https://cans2025-website.pages.dev/](https://cans2025-website.pages.dev/)

  
## Content Structure

- `content/`: Markdown files for pages
- `static/images/`: Images and assets
- `themes/ananke/`: Git submodule for theme
- `layouts/`: Custom layout overrides


## Built With

- **Static Site Generator:** [Hugo](https://gohugo.io/) ` v0.145.0-extended`
- **Theme:** [Ananke](https://github.com/theNewDynamic/gohugo-theme-ananke)
- **Deployment:** Cloudflare Pages
- **Version Control:** Git + GitHub

### Prevent Search Engine Indexing for Preview Deployments

To avoid indexing of preview (test) deployments on Cloudflare Pages by search engines, we use a conditional `noindex` meta tag.

#### Configuration

In `hugo.toml`, we define a parameter based on the environment variable `NOINDEX`:

```toml
[params]
noindex = {{ getenv "NOINDEX" | default "false" }}
```

Then, in the site’s layout (e.g., `layouts/partials/head.html`), we include the following snippet:

```html
{{ if eq .Site.Params.noindex "true" }}
  <meta name="robots" content="noindex, nofollow">
{{ else }}
  <meta name="robots" content="index, follow">
{{ end }}
```

This ensures that:

- 🔹 When running `hugo` locally or for production, the `noindex` tag is **not** included.
- 🔹 On Cloudflare Pages **preview deployments**, we can enable `noindex` by setting an environment variable:

#### Cloudflare Pages Environment Variable

In your **Cloudflare Pages project settings**, under **Build Settings > Environment Variables**, add:

```
Key:    NOINDEX
Value:  true
```

This will inject `<meta name="robots" content="noindex, nofollow">` into the `<head>` section of all pages in the preview deployment.

✅ This helps prevent test builds from being indexed by search engines while keeping the production site fully indexable.




## Local Development

To run the site locally for editing or testing:

```bash
git clone --recurse-submodules https://github.com/mimoex/CANS2025_Website.git
cd CANS2025_Website
hugo server --baseURL="http://localhost:1313"
```


## Contact

For inquiries or contributions, please contact the organizing committee via email  


## License

### Theme License

This site uses the [Ananke theme](https://github.com/theNewDynamic/gohugo-theme-ananke) for Hugo.

The theme is licensed under the [MIT License](https://opensource.org/licenses/MIT).
