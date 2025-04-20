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

## Build Command and Configuration


The build command for Cloudflare Pages includes the following flags:


- `-b $CF_PAGES_URL`: This specifies the base URL for the site, which is automatically populated with the Cloudflare Pages deployment URL. This ensures that the URLs in the built site will be relative to the deployment URL for preview purposes.


### Example Cloudflare Pages Build Command:

```bash

hugo -b $CF_PAGES_URL

```


This command is used during the build process to set the correct base URL for your site. Cloudflare Pages automatically provides the `$CF_PAGES_URL` environment variable, which points to the deployed site’s URL.


## SEO Control (Adding noindex)

This project allows you to control SEO settings and the behavior of the `robots` meta tag during the build process based on the environment. 

### Production (Default)
By default, the `<meta name="robots" content="index, follow">` tag is included in the build output.

### Development Environment (Cloudflare Pages)
When building with `-e development`, the `noindex` tag is automatically added, and the output will be `<meta name="robots" content="noindex, nofollow">`.

#### Setup for Cloudflare Pages
1. In the Cloudflare Pages settings, add `-e development` to the build command.

   Example Cloudflare Pages build command:
   ```bash
   hugo -e development
   ```


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
