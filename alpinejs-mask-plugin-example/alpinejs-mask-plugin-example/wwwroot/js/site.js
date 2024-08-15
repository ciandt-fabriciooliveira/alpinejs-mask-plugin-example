// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
function addHttps(input) {
    if (!input.startsWith('https://')) {
        return 'https://' + input;
    }
    return input;
}