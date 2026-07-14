const REPO = "dillon-schaffer/FocusPet-Releases";
const FALLBACK_URL = `https://github.com/${REPO}/releases/latest`;
const API_URL = `https://api.github.com/repos/${REPO}/releases/latest`;

interface GitHubReleaseAsset {
  name: string;
  browser_download_url: string;
}

interface GitHubRelease {
  assets: GitHubReleaseAsset[];
}

async function resolveDownloadUrl(): Promise<string> {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) return FALLBACK_URL;

    const release = (await response.json()) as GitHubRelease;
    const exeAsset = release.assets?.find((asset) => asset.name.toLowerCase().endsWith(".exe"));

    return exeAsset?.browser_download_url ?? FALLBACK_URL;
  } catch {
    return FALLBACK_URL;
  }
}

async function initDownloadButtons() {
  const buttons = document.querySelectorAll<HTMLAnchorElement>("[data-download-button]");
  if (buttons.length === 0) return;

  const url = await resolveDownloadUrl();
  buttons.forEach((button) => {
    button.href = url;
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initDownloadButtons);
} else {
  initDownloadButtons();
}
