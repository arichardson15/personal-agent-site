// app/utils/detectMobile.js
export const isMobile = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
};
