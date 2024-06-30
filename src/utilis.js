export function getImageUrl (path) {
    console.log('Generating URL for path:', path);
return new URL(`/assets${path}`,import.meta.url).href;
}